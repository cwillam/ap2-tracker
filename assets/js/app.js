// ----------------------------------------------------------------------
// DATEI: assets/js/app.js
// INHALT: App Logik, Timer, Rendering für AP2 FIAE
// ----------------------------------------------------------------------

// 1. Daten holen (aus data.js)
const AP2_DATA = window.AP2_DATA || [];

if (AP2_DATA.length === 0) {
  console.error('FEHLER: data.js wurde nicht vor app.js geladen oder ist leer!');
}

// 2. App Logik
const app = {
  state: {},
  openTopics: new Set(),
  filter: 'all',
  recId: null,
  timer: null,
  timerRunning: false,
  timeLeft: 1500,
  searchQuery: '',
  cardMap: {},
  catMap: {},
  searchOpenedTopics: new Set(),
  _statsRAF: null,
  _searchTimer: null,
  _streakCells: null,
  _quotaWarningShown: false,
  _saveError: null,

  // --- ANKI / FLASHCARDS ---
  anki: {
    currentTopicId: null,
    cards: [],
    currentIndex: 0,
    mode: 'manual', // 'manual' oder 'spaced'

    open(topicId) {
      // Debug-Log für Fehlersuche (Browser-Kompatibilität)
      console.log('[AP2] 🎴 Opening Anki for topic:', topicId);
      console.log('[AP2] 📚 Cards available:', window.ANKI_QUESTIONS?.[topicId]?.length || 0);
      
      const allQuestions = window.ANKI_QUESTIONS || {};
      this.cards = allQuestions[topicId] || [];
      if (this.cards.length === 0) {
        console.warn('[AP2] ⚠️ No cards found for topic:', topicId);
        return;
      }

      this.currentTopicId = topicId;
      
      const topic = app.findTopic(topicId);
      document.getElementById('ankiTopicTitle').textContent = topic ? topic.title : 'Lernkarten';
      
      // Statistiken laden
      if (!app.state.ankiStats) app.state.ankiStats = {};
      const stats = app.state.ankiStats[topicId] || { total: 0, correct: 0, sessions: 0 };
      
      const statsContainer = document.getElementById('ankiTopicStats');
      if (statsContainer) {
        if (stats.total > 0) {
          const accuracy = Math.round((stats.correct / stats.total) * 100);
          statsContainer.innerHTML = `
            <div class="flex items-center justify-center gap-6 mt-4 p-3 bg-dark-bg/50 rounded-xl border border-dark-border/50">
              <div class="text-center">
                <span class="block text-[10px] text-dark-muted uppercase font-bold">Gelernt</span>
                <span class="text-sm font-bold text-white">${stats.total} Karten</span>
              </div>
              <div class="w-px h-6 bg-dark-border"></div>
              <div class="text-center">
                <span class="block text-[10px] text-dark-muted uppercase font-bold">Quote</span>
                <span class="text-sm font-bold text-dark-success">${accuracy}%</span>
              </div>
              <div class="w-px h-6 bg-dark-border"></div>
              <div class="text-center">
                <span class="block text-[10px] text-dark-muted uppercase font-bold">Sessions</span>
                <span class="text-sm font-bold text-dark-accent">${stats.sessions}x</span>
              </div>
            </div>
          `;
          statsContainer.classList.remove('hidden');
        } else {
          statsContainer.classList.add('hidden');
        }
      }

      // Reset Views
      document.getElementById('ankiModeView').classList.remove('hidden');
      document.getElementById('ankiQuestionView').classList.add('hidden');
      document.getElementById('ankiAnswerView').classList.add('hidden');
      document.getElementById('ankiFinishView').classList.add('hidden');
      document.getElementById('ankiModeBadge').classList.add('hidden');
      document.getElementById('ankiProgress').style.width = '0%';

      const modal = document.getElementById('ankiModal');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    },

    start(mode) {
      this.mode = mode;
      this.currentIndex = 0;
      
      // Global Stats tracken (Session zählt ab Start)
      if (!app.state.ankiStats) app.state.ankiStats = {};
      if (!app.state.ankiStats[this.currentTopicId]) {
        app.state.ankiStats[this.currentTopicId] = { total: 0, correct: 0, sessions: 0 };
      }
      app.state.ankiStats[this.currentTopicId].sessions++;
      app.save();
      app.updateStats(); // UI sofort aktualisieren

      // Karten für diese Session mischen (Fisher-Yates Shuffle)
      const shuffled = [...this.cards];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      this.cards = shuffled;
      
      const badge = document.getElementById('ankiModeBadge');
      badge.classList.remove('hidden');
      if (mode === 'spaced') {
        badge.innerHTML = '<i data-lucide="brain" class="w-3.5 h-3.5 mr-1 text-dark-accent"></i> <span class="text-[9px] font-bold uppercase tracking-widest text-dark-accent">Strategie-Modus</span>';
      } else {
        badge.innerHTML = '<i data-lucide="dumbbell" class="w-3.5 h-3.5 mr-1 text-dark-warning"></i> <span class="text-[9px] font-bold uppercase tracking-widest text-dark-warning">Freies Training</span>';
      }
      app.refreshIcons();

      document.getElementById('ankiModeView').classList.add('hidden');
      document.getElementById('ankiQuestionView').classList.remove('hidden');
      this.showCard();
    },

    showCard() {
      const card = this.cards[this.currentIndex];
      const progress = (this.currentIndex / this.cards.length) * 100;
      
      document.getElementById('ankiProgress').style.width = `${progress}%`;
      document.getElementById('ankiCardCounter').textContent = `Karte ${this.currentIndex + 1} von ${this.cards.length}`;
      document.getElementById('ankiQuestionText').textContent = card.q;
      document.getElementById('ankiAnswerText').textContent = card.a;

      document.getElementById('ankiQuestionView').classList.remove('hidden');
      document.getElementById('ankiAnswerView').classList.add('hidden');
    },

    showAnswer() {
      document.getElementById('ankiQuestionView').classList.add('hidden');
      document.getElementById('ankiAnswerView').classList.remove('hidden');
    },

    next(isCorrect) {
      // Global Stats tracken
      if (!app.state.ankiStats) app.state.ankiStats = {};
      if (!app.state.ankiStats[this.currentTopicId]) {
        app.state.ankiStats[this.currentTopicId] = { total: 0, correct: 0, sessions: 0 };
      }
      const gStats = app.state.ankiStats[this.currentTopicId];
      gStats.total++;
      if (isCorrect) gStats.correct++;

      // Im freien Training markieren wir neue Karten als gelernt (Stufe 1)
      if (isCorrect && this.mode !== 'spaced') {
        if (!app.state.anki) app.state.anki = {};
        const cardId = this.cards[this.currentIndex].id;
        if (!app.state.anki[cardId]) {
          app.state.anki[cardId] = { level: 1, nextReview: Date.now() + 86400000 };
        }
      }

      if (this.mode === 'spaced') {
        this.updateCardLevel(this.cards[this.currentIndex].id, isCorrect);
      }

      this.currentIndex++;
      if (this.currentIndex < this.cards.length) {
        this.showCard();
      } else {
        this.showFinish();
      }
      app.save();
    },

    updateCardLevel(cardId, isCorrect) {
      if (!app.state.anki) app.state.anki = {};
      if (!app.state.anki[cardId]) {
        app.state.anki[cardId] = { level: 0, nextReview: 0 };
      }

      const cardData = app.state.anki[cardId];
      if (isCorrect) {
        cardData.level = Math.min(cardData.level + 1, 5);
      } else {
        cardData.level = 1; // Zurück auf Stufe 1 bei Fehler
      }

      // Intervalle in Tagen: 1, 3, 7, 14, 30
      const intervals = [0, 1, 3, 7, 14, 30];
      const daysToAdd = intervals[cardData.level] || 1;
      
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + daysToAdd);
      cardData.nextReview = nextDate.getTime();
      
      app.save();
    },

    showFinish() {
      document.getElementById('ankiProgress').style.width = '100%';
      document.getElementById('ankiAnswerView').classList.add('hidden');
      document.getElementById('ankiFinishView').classList.remove('hidden');
      
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8b5cf6', '#10b981']
        });
      }
    },

    close() {
      const modal = document.getElementById('ankiModal');
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  },

  quotes: [
    '„Jede Zeile Code ist ein Schritt zur Meisterschaft.“',
    '„Erfolg hat drei Buchstaben: TUN.“ - Goethe',
    '„Der beste Weg, die Zukunft vorherzusagen, ist, sie zu erfinden.“ - Alan Kay',
    '„Auch ein Wolkenkratzer fängt mal im Keller an.“',
    '„Debugging ist wie ein Krimi, in dem du Täter und Detektiv zugleich bist.“',
    '„IT ist 10% Technik und 90% Google.“',
    '„Ein Experte ist jemand, der in einem begrenzten Feld alle möglichen Fehler gemacht hat.“',
    '„Schmerz vergeht, der GitHub Commit bleibt.“',
  ],

  ranks: [
    { min: 0, name: 'Hello World', color: '#94a3b8' },
    { min: 50, name: 'Junior Dev', color: '#a855f7' },
    { min: 150, name: 'Bug Hunter', color: '#8b5cf6' },
    { min: 300, name: 'Logic Master', color: '#6366f1' },
    { min: 500, name: 'Code Architect', color: '#10b981' },
    { min: 700, name: 'SQL Wizard', color: '#f59e0b' },
    { min: 900, name: 'Fullstack Legend', color: '#ef4444' },
    { min: 1050, name: 'System Overlord', color: '#FF00FF' },
    { min: 1120, name: 'Deployment King', color: '#00FFFF' },
    { min: 1140, name: 'IT-Gott (FIAE Edition)', color: '#FFDD00' },
  ],

  // --- INIT ---
  init() {
    const msgs = ['Lade AP2-Datenbank...', 'Initialisiere Module...', 'Berechne Lernpfad...'];
    let msgIdx = 0;
    const loadInt = setInterval(() => {
      const el = document.getElementById('loadingText');
      if (el) el.textContent = msgs[msgIdx++ % msgs.length];
    }, 150);

    const hideLoader = () => {
      clearInterval(loadInt);
      const el = document.getElementById('loadingOverlay');
      if (el) {
        el.classList.add('force-hide');
        setTimeout(() => (el.style.display = 'none'), 600);
      }
    };

    try {
      const s = localStorage.getItem('ap2_tracker_state_v1');
      if (s) {
        try {
          this.state = JSON.parse(s);
          console.log('[AP2] State geladen:', this._getStateSummary());
        } catch (parseErr) {
          console.error('[AP2] Corrupt LocalStorage data:', parseErr);
          // Bei korrupten Daten: User warnen und neu starten
          const corruptData = s.substring(0, 100);
          console.error('[AP2] Corrupt data preview:', corruptData);

          if (confirm(
            'Deine gespeicherten Daten sind beschädigt. \n\n' +
            'Möchtest du einen Neustart machen? (Dabei gehen alte Daten verloren.)\n\n' +
            'Klicke "Abbrechen" um die Seite im Debug-Modus zu öffnen.'
          )) {
            localStorage.removeItem('ap2_tracker_state_v1');
            location.reload();
          } else {
            // Debug-Modus: leeren State verwenden
            this.state = {};
            this.showNotification(
              'Daten korrupt',
              'Bitte Export machen und Support kontaktieren.',
              'error',
              0
            );
          }
        }
      }

      if (localStorage.getItem('ap2_infobox_dismissed')) {
        const infoBox = document.getElementById('infoBox');
        if (infoBox) infoBox.classList.add('hidden');
      }

      if (!localStorage.getItem('ap2_welcome_dismissed_v2')) {
        setTimeout(() => {
          const welcomeModal = document.getElementById('welcomeModal');
          if (welcomeModal) {
            welcomeModal.classList.remove('hidden');
            welcomeModal.style.display = 'flex';
          }
        }, 800);
      }

      // --- UPDATE NOTIFICATION ---
      this.checkForUpdate();

      const quoteEl = document.getElementById('motivationQuote');
      if (quoteEl)
        quoteEl.textContent = this.quotes[Math.floor(Math.random() * this.quotes.length)];

      this.renderActivityGraph();
      this.updateCountdown();
      setInterval(() => this.updateCountdown(), 60000);
      // Keyboard Shortcuts für Lernkarten (Anki)
      window.addEventListener('keydown', (e) => {
        const modal = document.getElementById('ankiModal');
        if (modal && !modal.classList.contains('hidden')) {
          const modeView = document.getElementById('ankiModeView');
          const questionView = document.getElementById('ankiQuestionView');
          const answerView = document.getElementById('ankiAnswerView');
          const finishView = document.getElementById('ankiFinishView');

          if (e.key === 'Escape') {
            e.preventDefault();
            this.anki.close();
            return;
          }

          if (modeView && !modeView.classList.contains('hidden')) {
            if (e.key === '1') {
              e.preventDefault();
              this.anki.start('manual');
            } else if (e.key === '2') {
              e.preventDefault();
              this.anki.start('spaced');
            }
          } else if (questionView && !questionView.classList.contains('hidden')) {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              this.anki.showAnswer();
            }
          } else if (answerView && !answerView.classList.contains('hidden')) {
            if (e.key === '1' || e.key === 'ArrowLeft') {
              e.preventDefault();
              this.anki.next(false);
            } else if (e.key === '2' || e.key === 'ArrowRight') {
              e.preventDefault();
              this.anki.next(true);
            }
          } else if (finishView && !finishView.classList.contains('hidden')) {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              this.anki.close();
            }
          }
        }
      });

      this.buildDOM();
      this.applyFilter();
      this.refreshIcons();
    } catch (err) {
      console.error('[AP2] Critical Init Error:', err);
      // Fallback: Leeren State verwenden und weitermachen
      this.state = {};
      this.showNotification(
        'Initialisierungsfehler',
        'Bitte Seite neu laden. Wenn das Problem bleibt: Support kontaktieren.',
        'error',
        0
      );
    } finally {
      setTimeout(hideLoader, 600);
    }
  },

  /**
   * Gibt eine Zusammenfassung des States für Debug-Zwecke zurück
   */
  _getStateSummary() {
    const summary = { keys: Object.keys(this.state).length };
    if (this.state.activity) summary.activityDays = Object.keys(this.state.activity).length;
    if (this.state.ankiStats) summary.ankiTopics = Object.keys(this.state.ankiStats).length;
    return summary;
  },

  // Lucide Icons nach dynamischen DOM-Updates neu initialisieren
  refreshIcons() {
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }
  },

  // --- SAVE & STATE ---
  save(silent = false) {
    try {
      const serialized = JSON.stringify(this.state);
      const size = new Blob([serialized]).size;
      
      // Warnung bei >80% Auslastung (ca. 4 MB von 5 MB Limit)
      if (size > 4 * 1024 * 1024 && !this._quotaWarningShown) {
        this._quotaWarningShown = true;
        console.warn('[AP2] LocalStorage bei 80% - bitte Export machen!');
        if (!silent) {
          this.showNotification(
            'Speicher fast voll',
            'Bitte mach einen Export, um deine Daten zu sichern.',
            'warning'
          );
        }
      }
      
      localStorage.setItem('ap2_tracker_state_v1', serialized);
      this._saveError = null;
    } catch (e) {
      this._saveError = e;
      console.error('[AP2] Save failed:', e.name, e.message);
      
      if (e.name === 'QuotaExceededError') {
        if (!silent) {
          this.showNotification(
            'Speicher voll!',
            'Bitte Export machen und alte Daten löschen.',
            'error',
            0 // Kein Auto-Close
          );
        }
      }
    }
    this.scheduleStatsUpdate();
  },

  showNotification(title, message, type = 'info', duration = 5000) {
    const colors = {
      info: 'bg-dark-accent',
      success: 'bg-dark-success',
      warning: 'bg-dark-warning',
      error: 'bg-dark-danger'
    };
    const icons = {
      info: 'info',
      success: 'check-circle-2',
      warning: 'alert-triangle',
      error: 'x-circle'
    };

    const existing = document.getElementById('appNotification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.id = 'appNotification';
    notification.className = `fixed top-20 right-4 z-[100] ${colors[type]} text-white px-6 py-4 rounded-xl shadow-2xl max-w-sm animate-in fade-in slide-in-from-top-2`;
    notification.innerHTML = `
      <div class="flex items-start gap-3">
        <i data-lucide="${icons[type]}" class="text-lg mt-0.5"></i>
        <div class="flex-1">
          <p class="font-bold text-sm">${title}</p>
          <p class="text-xs opacity-90 mt-1">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="opacity-70 hover:opacity-100">
          <i data-lucide="x"></i>
        </button>
      </div>
    `;

    document.body.appendChild(notification);
    this.refreshIcons();

    if (duration > 0) {
      setTimeout(() => notification.remove(), duration);
    }
  },

  // --- UPDATE NOTIFICATION ---
  checkForUpdate() {
    // Modal wird JEDEM angezeigt (beim Seitenladen)
    // Prüfe nur ob User "Nie wieder anzeigen" gewählt hat
    if (!localStorage.getItem('ap2_update_never_again_v210')) {
      const update = {
        title: '🚀 AP2 Tracker Update v2.1.0',
        message: 'Wir haben den Tracker auf ressourcenschonende Lucide-Icons umgestellt, das Design modernisiert und Fehler behoben!',
        icon: 'zap'
      };
      
      this.showUpdateModal(update.title, update.message, update.icon);
    }
  },

  showUpdateModal(title, message, iconClass) {
    const modal = document.createElement('div');
    modal.id = 'updateNotificationModal';
    modal.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto';
    modal.innerHTML = `
      <div class="bg-dark-card border border-dark-success/50 rounded-2xl p-5 sm:p-6 md:p-8 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in duration-300 my-auto">
        <div class="absolute top-0 right-0 w-32 h-32 bg-dark-success/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
        
        <!-- HEADER -->
        <div class="flex items-center gap-3 sm:gap-4 mb-5 shrink-0">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-dark-success/20 border-2 border-dark-success flex items-center justify-center shrink-0">
            <i data-lucide="${iconClass}" class="text-dark-success text-xl sm:text-2xl"></i>
          </div>
          <div class="min-w-0 flex-1">
            <h3 class="text-lg sm:text-xl font-bold text-white truncate">Neues Update!</h3>
            <p class="text-[10px] sm:text-xs text-dark-muted">Verbesserungen für dein Lernen</p>
          </div>
        </div>
        
        <!-- TITLE & MESSAGE -->
        <div class="mb-5 shrink-0">
          <h4 class="font-bold text-white mb-2 text-sm sm:text-base">${title}</h4>
          <p class="text-xs sm:text-sm text-dark-muted leading-relaxed">${message}</p>
        </div>
        
        <!-- PROBLEME HINWEIS -->
        <div class="bg-dark-warning/10 border border-dark-warning/30 rounded-xl p-2.5 sm:p-3 mb-5 shrink-0">
          <p class="text-[10px] sm:text-xs text-dark-warning flex items-start gap-2">
            <i data-lucide="alert-triangle" class="mt-0.5 shrink-0"></i>
            <span><b>Probleme?</b> Drücke <kbd class="bg-dark-warning/20 px-1 py-0.5 rounded text-[9px] sm:text-[10px]">Strg</kbd> + <kbd class="bg-dark-warning/20 px-1 py-0.5 rounded text-[9px] sm:text-[10px]">F5</kbd> für Cache-Refresh.</span>
          </p>
        </div>
        
        <!-- NEU IN DIESER VERSION -->
        <div class="bg-dark-bg/50 rounded-xl p-4 sm:p-5 mb-5 border border-dark-border shrink-0 overflow-hidden">
          <p class="text-[10px] sm:text-xs text-dark-muted mb-3 font-bold uppercase flex items-center gap-2">
            <i data-lucide="sparkles" class="text-dark-accent"></i>
            Neu in dieser Version:
          </p>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-300">
            <li class="flex items-start gap-2">
              <i data-lucide="zap" class="text-dark-accent mt-0.5 text-[10px] sm:text-xs shrink-0"></i>
              <span><strong>Lucide-Icons & Header:</strong> Umstellung auf ressourcenschonende Vektorgrafiken, neues Header-Kacheldesign (Violet-Theme) und Code-Logo.</span>
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="play-circle" class="text-dark-accent mt-0.5 text-[10px] sm:text-xs shrink-0"></i>
              <span><strong>Fokus-Timer:</strong> Play/Pause-Steuerung und Widget-Zentrierung korrigiert.</span>
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="bell" class="text-dark-accent mt-0.5 text-[10px] sm:text-xs shrink-0"></i>
              <span><strong>Notification-Dot:</strong> Zentrierte Positionierung des Update-Indikators an der Glocke.</span>
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="layers" class="text-dark-accent mt-0.5 text-[10px] sm:text-xs shrink-0"></i>
              <span><strong>Lernkarten-Upgrade (v2.0.2):</strong> 67 neue Karten, SQL-Beispiele, Pseudocode & verkleinerte Antwortaufdeckung (vorheriges Update).</span>
            </li>
          </ul>
        </div>
        
        <!-- WERBUNG FÜR ANDERE TRACKER -->
        <div class="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-xl p-3 sm:p-4 mb-5 shrink-0">
          <p class="text-[10px] sm:text-xs text-indigo-300 mb-2.5 sm:mb-3 font-bold uppercase flex items-center gap-1.5 sm:gap-2">
            <i data-lucide="star" class="text-[10px] sm:text-xs"></i>
            Mehr Tracker
          </p>
          <div class="space-y-2">
            <a href="https://ap2-fisi.cwillam.de/" target="_blank" class="group flex items-center gap-3 bg-dark-card/60 hover:bg-indigo-900/25 border border-dark-border/50 hover:border-indigo-500/40 rounded-lg p-2.5 sm:p-3 no-underline">
              <div class="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <i data-lucide="server" class="text-indigo-400 text-xs group-hover:text-indigo-300 transition-colors"></i>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">AP2 FISI</p>
                <p class="text-[10px] text-dark-muted truncate">Fachinformatiker für Systemintegration</p>
              </div>
              <i data-lucide="external-link" class="text-dark-muted group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs shrink-0"></i>
            </a>
            <a href="https://ap1.cwillam.de/" target="_blank" class="group flex items-center gap-3 bg-dark-card/60 hover:bg-purple-900/25 border border-dark-border/50 hover:border-purple-500/40 rounded-lg p-2.5 sm:p-3 no-underline">
              <div class="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <i data-lucide="graduation-cap" class="text-purple-400 text-xs group-hover:text-purple-300 transition-colors"></i>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors truncate">AP1 Tracker</p>
                <p class="text-[10px] text-dark-muted truncate">Alle Fachrichtungen</p>
              </div>
              <i data-lucide="external-link" class="text-dark-muted group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs shrink-0"></i>
            </a>
          </div>
        </div>
        
        <!-- BUTTONS -->
        <div class="flex gap-2 sm:gap-3 shrink-0">
          <button onclick="document.getElementById('updateNotificationModal').remove()" 
                  class="flex-1 bg-dark-success hover:bg-dark-success/90 text-white font-bold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all text-xs sm:text-sm whitespace-nowrap">
            ✓ Verstanden
          </button>
          <a href="updates.html" target="_blank" 
             onclick="document.getElementById('updateNotificationModal').remove()"
             class="flex-1 bg-dark-card hover:bg-dark-border border border-dark-border text-white font-bold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all text-center text-xs sm:text-sm whitespace-nowrap no-underline flex items-center justify-center gap-2">
            <span>Änderungen</span>
            <i data-lucide="external-link" class="text-[10px] sm:text-xs"></i>
          </a>
        </div>
        
        <!-- NIE WIEDER ANZEIGEN OPTION -->
        <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-dark-border shrink-0">
          <label class="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" id="neverShowAgain" class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-dark-border bg-dark-bg text-dark-accent focus:ring-dark-accent focus:ring-2" onchange="localStorage.setItem('ap2_update_never_again_v210', this.checked ? 'true' : '')">
            <span class="text-[10px] sm:text-xs text-dark-muted group-hover:text-white transition-colors">Nicht wieder anzeigen</span>
          </label>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Schließen bei Klick außerhalb
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  },

  hideInfoBox() {
    const el = document.getElementById('infoBox');
    if (el) el.remove();
    localStorage.setItem('ap2_infobox_dismissed', 'true');
  },

  getState(id) {
    if (!this.state[id])
      this.state[id] = {
        done: false,
        subDone: [],
        stars: 0,
        reps: [false, false, false],
        last: null,
      };
    return this.state[id];
  },

  trackActivity() {
    if (!this.state.activity) this.state.activity = {};
    const today = new Date().toISOString().split('T')[0];
    this.state.activity[today] = (this.state.activity[today] || 0) + 1;
    this.save();
    this.renderActivityGraph();
  },

  renderActivityGraph() {
    const container = document.getElementById('streakGraph');
    if (!container) return;

    const days = 80;
    const now = new Date();

    if (!this._streakCells) {
      this._streakCells = [];
      container.innerHTML = '';
      for (let i = days; i >= 0; i--) {
        const el = document.createElement('div');
        el.className =
          'w-3 h-3 sm:w-4 sm:h-4 rounded-sm bg-dark-border streak-cell cursor-default';
        container.appendChild(el);
        this._streakCells.push(el);
      }
    }

    for (let i = days; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const count = this.state.activity ? this.state.activity[dateStr] || 0 : 0;

      let colorClass = 'bg-dark-border';
      if (count > 0) colorClass = 'bg-dark-accent/40';
      if (count > 4) colorClass = 'bg-dark-accent/70';
      if (count > 8) colorClass = 'bg-dark-accent';

      const cellIdx = days - i;
      const el = this._streakCells[cellIdx];
      if (el) {
        el.className =
          `w-3 h-3 sm:w-4 sm:h-4 rounded-sm ${colorClass} streak-cell cursor-default`;
        el.title = `${dateStr}: ${count} Aktionen`;
      }
    }
  },

  // --- TIMER ---
  updateCountdown() {
    // Ziel: Herbstprüfung 2026 (25. November)
    const target = new Date('2026-11-25T08:00:00');
    const now = new Date();
    const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
    const el = document.getElementById('headerCountdown');
    if (el) el.textContent = diff > 0 ? diff : '0';
  },

  setPomoTime(min) {
    if (this.timerRunning) {
      if (!confirm('Timer läuft. Wirklich abbrechen?')) return;
      clearInterval(this.timer);
      this.timerRunning = false;
      document.getElementById('pomoBtn').innerHTML =
        '<i class="fa-solid fa-play text-lg ml-1"></i>';
    }
    this.timeLeft = min * 60;
    this.updateTimerDisplay();
  },

  updateTimerDisplay() {
    const m = Math.floor(this.timeLeft / 60)
      .toString()
      .padStart(2, '0');
    const s = (this.timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('pomoTimer').textContent = `${m}:${s}`;
    document.title = this.timerRunning ? `${m}:${s} - Focus` : 'AP2 Tracker';
  },

  togglePomodoro() {
    const btn = document.getElementById('pomoBtn');
    if (this.timerRunning) {
      clearInterval(this.timer);
      this.timerRunning = false;
      btn.innerHTML = '<i data-lucide="play" class="w-5 h-5 ml-0.5"></i>';
      btn.classList.remove('bg-dark-accent', 'text-white', 'scale-105');
      btn.classList.add('bg-dark-border', 'text-dark-muted');
      app.refreshIcons();
    } else {
      this.timerRunning = true;
      btn.innerHTML = '<i data-lucide="pause" class="w-5 h-5"></i>';
      btn.classList.add('bg-dark-accent', 'text-white', 'scale-105');
      btn.classList.remove('bg-dark-border', 'text-dark-muted');
      app.refreshIcons();
      this.timer = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft <= 0) {
          clearInterval(this.timer);
          this.timerRunning = false;
          this.timeLeft = 1500;

          app.showNotification('Pomodoro beendet!', 'Gönn dir eine Pause.', 'info');
          btn.innerHTML = '<i data-lucide="play" class="w-5 h-5 ml-0.5"></i>';
          btn.classList.remove('bg-dark-accent', 'text-white', 'scale-105');
          btn.classList.add('bg-dark-border', 'text-dark-muted');
          app.refreshIcons();
        }
        this.updateTimerDisplay();
      }, 1000);
    }
  },

  // --- IMPORT / EXPORT ---
  exportData() {
    const dataStr = JSON.stringify(this.state);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute(
      'download',
      'ap2_fiae_backup_' + new Date().toISOString().slice(0, 10) + '.json'
    );
    linkElement.click();
    this.showNotification('Export erfolgreich', 'Deine Daten wurden heruntergeladen.', 'success');
  },

  /**
   * Validiert die Struktur eines importierten State-Objekts
   * @param {any} data - Das zu validierende Datenobjekt
   * @returns {{valid: boolean, error?: string, needsMigration?: boolean}}
   */
  validateImport(data) {
    // 1. Typ-Check
    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
      return { valid: false, error: 'Ungültiges Format: Erwartet wird ein JSON-Objekt.' };
    }
    
    // 2. Minimale Struktur-Checks (existierende Keys prüfen)
    const requiredKeys = ['activity']; // activity ist immer vorhanden nach erstem Use
    for (const key of requiredKeys) {
      if (!(key in data)) {
        return { valid: false, error: `Fehlendes Feld: "${key}". Datei ist korrupt oder inkompatibel.` };
      }
    }
    
    // 3. Größen-Check (max 5 MB = LocalStorage Limit)
    const size = new Blob([JSON.stringify(data)]).size;
    if (size > 5 * 1024 * 1024) {
      return { valid: false, error: `Datei zu groß: ${(size / 1024 / 1024).toFixed(2)} MB (Max. 5 MB)` };
    }
    
    // 4. Versions-Erkennung für zukünftige Migrationen
    const version = data._version || 'v1';
    const supportedVersions = ['v1', 'v2'];
    
    if (!supportedVersions.includes(version)) {
      return { 
        valid: false, 
        error: `Unbekannte Version: "${version}". Bitte Tracker aktualisieren.`,
        needsMigration: true
      };
    }
    
    // 5. Plausibilitäts-Check für bekannte Felder
    if (data.activity && typeof data.activity !== 'object') {
      return { valid: false, error: 'Feld "activity" muss ein Objekt sein.' };
    }
    
    if (data.ankiStats && typeof data.ankiStats !== 'object') {
      return { valid: false, error: 'Feld "ankiStats" muss ein Objekt sein.' };
    }
    
    return { valid: true, version };
  },

  /**
   * Führt Migrationen zwischen verschiedenen State-Versionen durch
   * @param {object} data - Das zu migrierende Datenobjekt
   * @returns {object} Das migrierte Datenobjekt
   */
  migrateState(data) {
    const currentVersion = data._version || 'v1';
    let migrated = { ...data };
    
    // Beispiel für zukünftige Migrationen:
    // if (currentVersion === 'v1') {
    //   migrated = { ...migrated, newField: defaultValue };
    //   migrated._version = 'v2';
    // }
    
    // Immer aktuelle Version setzen, falls noch nicht vorhanden
    if (!migrated._version) {
      migrated._version = 'v1';
    }
    
    console.log(`[AP2] Migration: ${currentVersion} -> ${migrated._version}`);
    return migrated;
  },

  importData(input) {
    const file = input.files[0];
    if (!file) return;
    
    // Reset input damit gleiche Datei erneut gewählt werden kann
    input.value = '';
    
    // Größen-Check vor dem Lesen (max 10 MB Raw-Datei)
    if (file.size > 10 * 1024 * 1024) {
      this.showNotification(
        'Datei zu groß',
        `Maximale Größe: 10 MB. Deine Datei: ${(file.size / 1024 / 1024).toFixed(2)} MB`,
        'error'
      );
      return;
    }
    
    const reader = new FileReader();
    
    reader.onerror = () => {
      console.error('[AP2] File read error:', reader.error);
      this.showNotification('Lesefehler', 'Die Datei konnte nicht gelesen werden.', 'error');
    };
    
    reader.onload = (e) => {
      const content = e.target.result;
      
      // 1. JSON parsen
      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch (err) {
        console.error('[AP2] JSON parse error:', err);
        this.showNotification(
          'Ungültiges JSON',
          'Die Datei ist kein gültiges JSON-Format.',
          'error'
        );
        return;
      }
      
      // 2. Struktur validieren
      const validation = this.validateImport(parsed);
      if (!validation.valid) {
        console.error('[AP2] Validation failed:', validation.error);
        this.showNotification('Import fehlgeschlagen', validation.error, 'error', 0);
        return;
      }
      
      // 3. Migration durchführen (falls nötig)
      const migrated = this.migrateState(parsed);
      
      // 4. State ersetzen und speichern
      const oldState = this.state;
      this.state = migrated;
      
      try {
        this.save();
        
        // 5. Erfolg melden
        const stats = this.getImportStats(migrated);
        this.showNotification(
          'Import erfolgreich',
          `Lade Fortschritt: ${stats.topics} Themen, ${stats.cards} Karten${stats.days ? `, ${stats.days} Tage Aktivität` : ''}`,
          'success'
        );
        
        // 6. Reload nach kurzer Verzögerung
        setTimeout(() => location.reload(), 1500);
      } catch (err) {
        console.error('[AP2] Import save failed:', err);
        // Rollback bei Save-Fehler
        this.state = oldState;
        this.showNotification(
          'Speicherfehler',
          'Import erfolgreich validiert, aber Speicher voll. Bitte erst Export machen.',
          'error',
          0
        );
      }
    };
    
    reader.readAsText(file);
  },

  /**
   * Extrahiert Statistik-Infos aus importiertem State für User-Feedback
   */
  getImportStats(state) {
    const stats = { topics: 0, cards: 0, days: 0 };
    
    // Gezählte Topics
    if (state) {
      Object.keys(state).forEach(key => {
        if (/^\d+\.\d+$/.test(key)) { // Topic-ID Pattern (z.B. "1.1", "2.3")
          stats.topics++;
          if (state[key].done) stats.cards++;
        }
      });
    }
    
    // Anki-Karten
    if (state.ankiStats) {
      Object.values(state.ankiStats).forEach(s => {
        stats.cards += (s.correct || 0);
      });
    }
    
    // Aktivitätstage
    if (state.activity) {
      stats.days = Object.keys(state.activity).filter(d => state.activity[d] > 0).length;
    }
    
    return stats;
  },

  resetData() {
    if (confirm('Wirklich ALLE Daten unwiderruflich löschen?')) {
      localStorage.removeItem('ap2_tracker_state_v1');
      localStorage.removeItem('ap2_infobox_dismissed');
      location.reload();
    }
  },

  // --- INTERACTION ---
  search() {
    clearTimeout(this._searchTimer);
    this._searchTimer = setTimeout(() => {
      this.searchQuery = document.getElementById('searchInput').value.toLowerCase();
      this.applyFilter();
    }, 200);
  },

  toggleTopic(id, checked, element) {
    const s = this.getState(id);
    const t = this.findTopic(id);
    s.done = checked;
    s.last = Date.now();

    if (t && t.sub) {
      s.subDone = new Array(t.sub.length).fill(checked);
      const card = element.closest('.topic-card');
      const subs = card.querySelectorAll('.subtask-list input');
      const texts = card.querySelectorAll('.subtask-list span');
      subs.forEach((input) => (input.checked = checked));
      texts.forEach((span) => {
        if (checked) {
          span.classList.add('line-through', 'opacity-50');
          span.classList.remove('group-hover/item:text-white');
        } else {
          span.classList.remove('line-through', 'opacity-50');
          span.classList.add('group-hover/item:text-white');
        }
      });
    }

    const card = element.closest('.topic-card');
    if (checked) card.classList.add('border-dark-accent/30');
    else card.classList.remove('border-dark-accent/30');

    this.trackActivity();
    this.save();

    if (checked) {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#10b981'],
        });
      }
    }
  },

  toggleSub(id, idx, checked, element) {
    const s = this.getState(id);
    const t = this.findTopic(id);
    if (!s.subDone) s.subDone = [];
    s.subDone[idx] = checked;

    const doneCount = s.subDone.filter(Boolean).length;
    const allDone = doneCount === t.sub.length && t.sub.length > 0;

    if (s.done !== allDone) {
      s.done = allDone;
      const card = element.closest('.topic-card');
      const mainCheck = card.querySelector('.topic-check');
      if (mainCheck) {
        mainCheck.checked = allDone;
        if (allDone) {
          card.classList.add('border-dark-accent/30');
          if (typeof confetti === 'function') {
            confetti({
              particleCount: 40,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#a855f7', '#10b981'],
            });
          }
        } else card.classList.remove('border-dark-accent/30');
      }
    }

    const span = element.parentElement.nextElementSibling;
    if (checked) {
      span.classList.add('line-through', 'opacity-50');
      span.classList.remove('group-hover/item:text-white');
    } else {
      span.classList.remove('line-through', 'opacity-50');
      span.classList.add('group-hover/item:text-white');
    }

    s.last = Date.now();
    this.trackActivity();
    this.save();
  },

  randomTopic() {
    const open = [];
    AP2_DATA.forEach((cat) => {
      cat.topics.forEach((t) => {
        if (!this.getState(t.id).done) open.push(t.id);
      });
    });

    if (open.length === 0) {
      alert('Wow! Alles erledigt! Du bist bereit für die AP2.');
      return;
    }
    const randId = open[Math.floor(Math.random() * open.length)];
    this.recId = randId;
    this.scrollToRec();
  },

  toggleAccordion(header) {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    const topicId = header.closest('.topic-card').dataset.id;

    if (body.classList.contains('open')) {
      body.classList.remove('open');
      icon.style.transform = 'rotate(0deg)';
      icon.classList.remove('bg-dark-accent', 'text-white');
      icon.classList.add('bg-dark-bg/50', 'text-dark-muted');
      this.openTopics.delete(topicId);
    } else {
      body.classList.add('open');
      icon.style.transform = 'rotate(180deg)';
      icon.classList.add('bg-dark-accent', 'text-white');
      icon.classList.remove('bg-dark-bg/50', 'text-dark-muted');
      this.openTopics.add(topicId);
    }
  },

  setRep(id, level, element) {
    const s = this.getState(id);
    let newState = [false, false, false];
    let currentMax = -1;
    if (s.reps[2]) currentMax = 2;
    else if (s.reps[1]) currentMax = 1;
    else if (s.reps[0]) currentMax = 0;

    if (currentMax === level) {
      if (level === 0) newState = [false, false, false];
      else {
        for (let i = 0; i < level; i++) newState[i] = true;
      }
    } else {
      for (let i = 0; i <= level; i++) newState[i] = true;
    }

    s.reps = newState;
    this.save();
    const card = element.closest('.topic-card');
    const checkboxes = card.querySelectorAll('.rep-check');
    checkboxes.forEach((cb, idx) => {
      cb.checked = s.reps[idx];
    });
    this.updateRepHeader(card, s.reps);
  },

  updateRepHeader(card, reps) {
    const count = reps.filter(Boolean).length;
    const badge = card.querySelector('.rep-indicator');
    if (count > 0) {
      badge.textContent = count + 'x Wiederholt';
      badge.classList.remove('hidden');
      if (count === 3)
        badge.classList.add('bg-dark-success/20', 'text-dark-success', 'border-dark-success/30');
      else
        badge.classList.remove('bg-dark-success/20', 'text-dark-success', 'border-dark-success/30');
    } else {
      badge.classList.add('hidden');
    }
  },

  setFilter(f) {
    this.filter = f;
    document.querySelectorAll('.filter-btn').forEach((b) => {
      if (b.dataset.filter === f) {
        b.classList.add('bg-dark-card', 'text-white', 'border-dark-border');
        b.classList.remove('text-dark-muted', 'border-transparent');
      } else {
        b.classList.remove('bg-dark-card', 'text-white', 'border-dark-border');
        b.classList.add('text-dark-muted', 'border-transparent');
      }
    });
    this.applyFilter();
  },

  findTopic(id) {
    for (const c of AP2_DATA) {
      const f = c.topics.find((t) => t.id === id);
      if (f) return f;
    }
    return null;
  },

  scrollToRec() {
    if (!this.recId) return;
    if (this.filter !== 'all') this.setFilter('all');
    setTimeout(() => {
      const el = document.querySelector(`.topic-card[data-id="${this.recId}"]`);
      if (el) {
        const body = el.querySelector('.topic-body');
        const header = el.querySelector('.header-area');
        if (!body.classList.contains('open')) {
          this.toggleAccordion(header);
        }
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-dark-accent', 'shadow-glow');
        setTimeout(() => el.classList.remove('ring-2', 'ring-dark-accent', 'shadow-glow'), 2000);
      }
    }, 100);
  },

  resetCategory(catId) {
    if (!confirm('Wirklich den Fortschritt dieser Kategorie zurücksetzen?')) return;
    const cat = AP2_DATA.find((c) => c.id === catId);
    if (!cat) return;

    cat.topics.forEach((t) => {
      if (this.state[t.id]) {
        this.state[t.id].done = false;
        this.state[t.id].subDone = [];
        this.state[t.id].reps = [false, false, false];
      }

      const card = this.cardMap[t.id];
      if (!card) return;

      const mainCheck = card.querySelector('.topic-check');
      if (mainCheck) mainCheck.checked = false;
      card.classList.remove('border-dark-accent/30');

      card.querySelectorAll('.subtask-list input').forEach((cb) => (cb.checked = false));
      card.querySelectorAll('.subtask-list span').forEach((span) => {
        span.classList.remove('line-through', 'opacity-50');
        span.classList.add('group-hover/item:text-white');
      });

      card.querySelectorAll('.rep-check').forEach((cb) => (cb.checked = false));
      this.updateRepHeader(card, [false, false, false]);
    });

    this.save();
    this.applyFilter();
  },

  // --- LEGAL / MODALS ---
  openLegal(type) {
    const modal = document.getElementById('legalModal');
    const content = document.getElementById('legalContent');
    modal.classList.remove('hidden');

    if (type === 'impressum') {
      content.innerHTML = `
              <h1 class="text-2xl font-bold text-dark-accent mb-6">Impressum</h1>
              <div class="space-y-4 text-dark-text">
                <p><strong>Angaben gemäß § 5 TMG</strong></p>
                <p>
                  Christoph Willam<br />
                  Tocklergasse 14<br />
                  96129 Strullendorf
                </p>
                <h2 class="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
                <p>E-Mail: <a href="mailto:info@cwillam.de" class="text-dark-accent hover:underline">info@cwillam.de</a></p>
                <h2 class="text-xl font-semibold mt-6 mb-2">Berufsbezeichnung</h2>
                <p>Fachinformatiker für Anwendungsentwicklung</p>
                <p class="text-xs text-dark-muted mt-8">Quelle: <a href="https://www.e-recht24.de" target="_blank" class="hover:underline">e-recht24.de</a></p>
              </div>
            `;
    } else {
      content.innerHTML = `
                <h1 class="text-2xl font-bold text-dark-accent mb-6">Datenschutz</h1>
                <div class="space-y-4 text-dark-text text-sm">

                  <h2 class="text-lg font-bold text-white">1. Grundlegendes</h2>
                  <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unseres Online-Angebotes auf.</p>

                  <h2 class="text-lg font-bold text-white mt-4">2. Hosting & Server-Logfiles (IONOS)</h2>
                  <p>Wir hosten diese Website bei <strong>IONOS SE</strong> (Elgendorfer Str. 57, 56410 Montabaur). <br>
                  Der Provider erhebt und speichert automatisch Informationen in so genannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                  <ul class="list-disc pl-5 text-dark-muted">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Logfiles erfasst werden. Die Daten werden nach 7 Tagen automatisch gelöscht.</p>

                  <h2 class="text-lg font-bold text-white mt-4">3. Lokale Speicherung (LocalStorage)</h2>
                  <p>Diese Anwendung speichert Ihren Lernfortschritt (Status der Checkboxen, Timer-Einstellungen) ausschließlich lokal in Ihrem Browser ("LocalStorage").</p>
                  <p><strong>Rechtsgrundlage:</strong> Die Speicherung ist für die Funktion der Website (Lern-Tracker) <strong>unbedingt erforderlich</strong> (gemäß § 25 Abs. 2 Nr. 2 TTDSG). Ohne diese Speicherung kann der Dienst "Fortschrittskontrolle" nicht erbracht werden. Es findet <strong>kein Tracking</strong>, keine Analyse und keine Weitergabe an Dritte statt. Die Daten verlassen Ihr Endgerät nicht.</p>

                  <h2 class="text-lg font-bold text-white mt-4">4. Externe Dienste</h2>
                  <p>Diese Website arbeitet <strong>autark</strong>. Es werden keine externen CDNs (Content Delivery Networks), keine Google Fonts und keine externen Analysetools (wie Google Analytics) eingesetzt. Alle Skripte und Ressourcen werden vom eigenen Server geladen.</p>

                  <h2 class="text-lg font-bold text-white mt-4">5. Ihre Rechte</h2>
                  <p>Bezüglich der Server-Logs haben Sie das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung. Da die Lerndaten nur auf Ihrem Gerät liegen, haben wir auf diese keinen Zugriff – Sie können diese Daten jederzeit selbst löschen, indem Sie den Browser-Cache leeren oder den "Reset"-Button in der App nutzen.</p>
                </div>
            `;
    }
  },

  closeLegal() {
    document.getElementById('legalModal').classList.add('hidden');
  },

  closeWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
      modal.classList.add('hidden');
      // Zusätzliche Sicherheit: Pointer Events deaktivieren
      modal.style.display = 'none';
    }
  },

  dismissWelcomeModal() {
    this.closeWelcomeModal();
    localStorage.setItem('ap2_welcome_dismissed_v2', 'true');
  },

  // --- RENDER ---
  updateStats() {
    const allTopics = AP2_DATA.flatMap((c) => c.topics || []);
    
    // Punkte-Logik: 10 Punkte pro Unterthema (Sub-Task)
    let doneSubTasks = 0;
    let totalSubTasks = 0;
    allTopics.forEach(t => {
      const s = this.getState(t.id);
      if (s.subDone) {
        doneSubTasks += s.subDone.filter(Boolean).length;
      } else if (s.done) {
        // Fallback falls subDone nicht existiert aber Thema erledigt ist
        doneSubTasks += (t.sub ? t.sub.length : 1);
      }
      totalSubTasks += (t.sub ? t.sub.length : 1);
    });
    const topicPoints = doneSubTasks * 10;

    // Anki-Punkte: 1 Punkt pro gelernte Karte (level >= 1)
    const learnedCards = this.state.anki ? Object.values(this.state.anki).filter(c => c.level >= 1).length : 0;
    const cardPoints = learnedCards;

    // Max Points dynamisch berechnen
    const allAnkiCards = window.ANKI_QUESTIONS ? Object.values(window.ANKI_QUESTIONS).flat().length : 0;
    const maxPoints = (totalSubTasks * 10) + allAnkiCards;

    const currentPoints = topicPoints + cardPoints;
    const totalPct = Math.min(100, Math.round((currentPoints / maxPoints) * 100));

    const totalTopEl = document.getElementById('totalPercentTop');
    if (totalTopEl) totalTopEl.textContent = totalPct + '%';

    const mainProgress = document.getElementById('mainProgressBar');
    if (mainProgress) mainProgress.style.width = totalPct + '%';

    const doneCountEl = document.getElementById('doneCount');
    if (doneCountEl) doneCountEl.textContent = learnedCards; // Zeigt nun Karten-Anzahl

    let currentRank = this.ranks[0];
    let nextRank = null;
    let rankPct = 0;

    for (let i = 0; i < this.ranks.length; i++) {
      if (currentPoints >= this.ranks[i].min) {
        currentRank = this.ranks[i];
        nextRank = this.ranks[i + 1] || null;
      }
    }

    const rankNameEl = document.getElementById('levelName');
    if (rankNameEl) {
      rankNameEl.textContent = currentRank.name;
      rankNameEl.style.color = currentRank.color;
    }

    if (nextRank) {
      const range = nextRank.min - currentRank.min;
      const currentInRank = currentPoints - currentRank.min;
      rankPct = Math.min(100, (currentInRank / range) * 100);
    } else {
      rankPct = 100;
    }

    const rankBar = document.getElementById('levelProgress');
    if (rankBar) {
      rankBar.style.width = rankPct + '%';
      rankBar.style.backgroundColor = currentRank.color;
    }

    let best = null,
      maxScore = -1;
    
    // Smart Focus: Berechnet das nächste beste Thema basierend auf:
    // 1. Gewichtung (weight) - höhere Priorität = wichtiger
    // 2. Fortschritt (subDone) - weniger erledigt = dringender
    // 3. Wiederholungen (reps) - weniger wiederholt = dringender
    // 4. Leichter Zufall (für Varianz bei gleichen Scores)
    
    allTopics.forEach((t) => {
      const s = this.getState(t.id);
      if (!s.done) {
        // Basis-Score aus Gewichtung (max 50 Punkte bei weight=5)
        const weightScore = t.weight * 10;
        
        // Fortschritts-Score: Wie viele SubTasks sind NOCH offen? (max 20 Punkte)
        const totalSub = t.sub ? t.sub.length : 1;
        const doneSub = s.subDone ? s.subDone.filter(Boolean).length : (s.done ? totalSub : 0);
        const progressScore = ((totalSub - doneSub) / totalSub) * 20;
        
        // Wiederholungs-Score: Wie viele Reps sind NOCH offen? (max 15 Punkte)
        const totalReps = 3;
        const doneReps = s.reps ? s.reps.filter(Boolean).length : 0;
        const repScore = ((totalReps - doneReps) / totalReps) * 15;
        
        // Leichter Zufall für Varianz (max 5 Punkte)
        const randomScore = Math.random() * 5;
        
        // Gesamt-Score
        const score = weightScore + progressScore + repScore + randomScore;
        
        if (score > maxScore) {
          maxScore = score;
          best = t;
        }
      }
    });
    
    const recShort = document.getElementById('recShort');
    if (recShort) {
      if (best) {
        this.recId = best.id;
        recShort.textContent = `${best.title}`;
        console.log('[AP2] 🎯 Smart Focus:', best.title, `(Score: ${maxScore.toFixed(1)})`);
      } else {
        this.recId = null;
        recShort.textContent = 'Bereit für die AP2!';
        console.log('[AP2] ✅ Alle Themen erledigt!');
      }
    }
  },

  scheduleStatsUpdate() {
    if (this._statsRAF) return;
    this._statsRAF = requestAnimationFrame(() => {
      this._statsRAF = null;
      this.updateStats();
    });
  },

  applyFilter() {
    let hasVisible = false;

    AP2_DATA.forEach((cat) => {
      let visibleInCat = 0;

      cat.topics.forEach((t) => {
        const card = this.cardMap[t.id];
        if (!card) return;

        const s = this.getState(t.id);
        let matchesSearch = true;
        let subMatch = false;
        if (this.searchQuery) {
          subMatch = t.sub && t.sub.some((sub) => sub.toLowerCase().includes(this.searchQuery));
          matchesSearch =
            t.title.toLowerCase().includes(this.searchQuery) || subMatch;
        }

        let matchesFilter = true;
        if (this.filter === 'open' && s.done) matchesFilter = false;
        if (this.filter === 'high' && t.weight < 4) matchesFilter = false;

        if (matchesSearch && matchesFilter) {
          card.classList.remove('hidden');
          visibleInCat++;

          if (subMatch) {
            const body = card.querySelector('.topic-body');
            if (!body.classList.contains('open') && !this.openTopics.has(t.id)) {
              this.toggleAccordion(card.querySelector('.header-area'));
              this.searchOpenedTopics.add(t.id);
            }
          }
        } else {
          card.classList.add('hidden');
        }
      });

      const catEl = this.catMap[cat.id];
      if (catEl) {
        if (visibleInCat === 0) {
          catEl.classList.add('hidden');
        } else {
          catEl.classList.remove('hidden');
          hasVisible = true;
        }

        // Fortschritt berechnen (nur fertige Themen im Verhältnis zu allen Themen dieser Kategorie)
        const doneTopics = cat.topics.filter((t) => this.getState(t.id).done).length;
        const totalTopics = cat.topics.length;
        const pct = totalTopics === 0 ? 0 : Math.round((doneTopics / totalTopics) * 100);

        // SVG Ring steuern
        const progressRing = catEl.querySelector('.cat-progress-ring');
        if (progressRing) {
          progressRing.setAttribute('stroke-dasharray', `${pct} 100`);
          if (pct === 100) {
            progressRing.classList.remove('text-dark-accent');
            progressRing.classList.add('text-dark-success');
          } else {
            progressRing.classList.add('text-dark-accent');
            progressRing.classList.remove('text-dark-success');
          }
        }

        // Prozent-Badge steuern
        const pctEl = catEl.querySelector('.cat-pct');
        if (pctEl) {
          pctEl.textContent = `${pct}%`;
          if (pct === 100) {
            pctEl.classList.remove('text-dark-accent', 'bg-dark-accent/10', 'border-dark-accent/20');
            pctEl.classList.add('text-dark-success', 'bg-dark-success/10', 'border-dark-success/20');
          } else {
            pctEl.classList.add('text-dark-accent', 'bg-dark-accent/10', 'border-dark-accent/20');
            pctEl.classList.remove('text-dark-success', 'bg-dark-success/10', 'border-dark-success/20');
          }
        }
      }
    });

    if (!this.searchQuery) {
      this.searchOpenedTopics.forEach((id) => {
        const card = this.cardMap[id];
        if (card) {
          const body = card.querySelector('.topic-body');
          if (body.classList.contains('open')) {
            this.toggleAccordion(card.querySelector('.header-area'));
          }
        }
      });
      this.searchOpenedTopics.clear();
    }

    const emptyState = document.getElementById('emptyState');
    if (emptyState) emptyState.classList.toggle('hidden', hasVisible);
  },

  buildDOM() {
    const list = document.getElementById('contentList');
    if (!list) return;
    list.innerHTML = '';
    this.cardMap = {};
    this.catMap = {};

    const activityDates = Object.keys(this.state.activity || {});
    if (activityDates.length > 0) {
      const badge = document.getElementById('streakBadge');
      if (badge) badge.classList.remove('hidden');
      const streakCount = document.getElementById('streakCount');
      if (streakCount) streakCount.textContent = activityDates.length;
    }

    AP2_DATA.forEach((cat) => {
      const visibleTopics = cat.topics;

      const catNode = document.getElementById('tpl-category').content.cloneNode(true);
      catNode.querySelector('.cat-title').textContent = cat.name;
      const descEl = catNode.querySelector('.cat-desc');
      if (descEl) descEl.textContent = cat.desc;
      catNode.querySelector('.cat-reset').onclick = () => this.resetCategory(cat.id);

      // Icon setzen
      const iconContainer = catNode.querySelector('.cat-icon');
      if (iconContainer && cat.icon) {
        iconContainer.innerHTML = `<i data-lucide="${cat.icon}"></i>`;
      }

      // Fortschritt berechnen (nur fertige Themen im Verhältnis zu allen Themen dieser Kategorie)
      const doneTopics = cat.topics.filter((t) => this.getState(t.id).done).length;
      const totalTopics = cat.topics.length;
      const pct = totalTopics === 0 ? 0 : Math.round((doneTopics / totalTopics) * 100);

      // SVG Ring steuern
      const progressRing = catNode.querySelector('.cat-progress-ring');
      if (progressRing) {
        progressRing.setAttribute('stroke-dasharray', `${pct} 100`);
        if (pct === 100) {
          progressRing.classList.remove('text-dark-accent');
          progressRing.classList.add('text-dark-success');
        } else {
          progressRing.classList.add('text-dark-accent');
          progressRing.classList.remove('text-dark-success');
        }
      }

      // Prozent-Badge steuern
      const pctEl = catNode.querySelector('.cat-pct');
      if (pctEl) {
        pctEl.textContent = `${pct}%`;
        if (pct === 100) {
          pctEl.classList.remove('text-dark-accent', 'bg-dark-accent/10', 'border-dark-accent/20');
          pctEl.classList.add('text-dark-success', 'bg-dark-success/10', 'border-dark-success/20');
        } else {
          pctEl.classList.add('text-dark-accent', 'bg-dark-accent/10', 'border-dark-accent/20');
          pctEl.classList.remove('text-dark-success', 'bg-dark-success/10', 'border-dark-success/20');
        }
      }

      const container = catNode.querySelector('.cat-topics');

      visibleTopics.forEach((t) => {
        const s = this.getState(t.id);
        const node = document.getElementById('tpl-topic').content.cloneNode(true);
        const card = node.querySelector('.topic-card');
        card.dataset.id = t.id;
        this.cardMap[t.id] = card;

        if (this.openTopics.has(t.id)) {
          node.querySelector('.topic-body').classList.add('open');
          const icon = node.querySelector('.accordion-icon');
          icon.style.transform = 'rotate(180deg)';
          icon.classList.add('bg-dark-accent', 'text-white');
          icon.classList.remove('bg-dark-bg/50', 'text-dark-muted');
        }

        node.querySelector('.topic-title').textContent = t.title;

        const repIndicator = node.querySelector('.rep-indicator');
        const repCount = s.reps.filter(Boolean).length;
        if (repCount > 0) {
          repIndicator.textContent = repCount + 'x Wiederholt';
          repIndicator.classList.remove('hidden');
          if (repCount === 3)
            repIndicator.classList.add(
              'bg-dark-success/20',
              'text-dark-success',
              'border-dark-success/30'
            );
        }

        // ANKI Button Logik
        const ankiBtn = node.querySelector('.anki-btn');
        const ankiBadge = node.querySelector('.anki-badge');
        const hasQuestions = window.ANKI_QUESTIONS && window.ANKI_QUESTIONS[t.id];

        if (ankiBtn && hasQuestions) {
          ankiBtn.classList.remove('hidden');
          ankiBtn.classList.add('flex');

          const hasSessions = this.state.ankiStats && this.state.ankiStats[t.id] && this.state.ankiStats[t.id].sessions > 0;

          if (ankiBadge) {
            ankiBadge.classList.remove('hidden');
            ankiBadge.textContent = "NEU";
            ankiBadge.classList.add('border-dark-accent/30', 'text-dark-accent');
            ankiBadge.title = "Neu verfügbar";
          }

          // FIX: addEventListener mit capture:true für Firefox-Kompatibilität
          // Verhindert dass Parent-Element (Accordion) den Klick abfängt
          ankiBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('[AP2] 🎴 Anki Button clicked for topic:', t.id);
            this.anki.open(t.id);
          }, { once: false, capture: true });
        }

        const googleLinks = node.querySelectorAll('.google-link, .google-link-mobile');
        googleLinks.forEach((gl) => {
          gl.href = `https://www.google.com/search?q=Fachinformatiker+AP2+FIAE+${encodeURIComponent(
            t.title
          )}`;
        });
        const duckduckgoLink = node.querySelectorAll(
          '.duckduckgo-link, .duckduckgo-link-mobile'
        );
        duckduckgoLink.forEach((dl) => {
          dl.href = `https://www.duckduckgo.com/?q=Fachinformatiker+AP2+FIAE+${encodeURIComponent(
              t.title
          )}`;
        });

        const wb = node.querySelector('.weight-badge');
        if (t.weight >= 5) {
          wb.textContent = 'KRITISCH';
          wb.classList.add('text-dark-danger', 'border-dark-danger/30', 'bg-dark-danger/10');
        } else if (t.weight === 4) {
          wb.textContent = 'SEHR HOCH';
          wb.classList.add(
            'text-dark-warning', 'border-dark-warning/30', 'bg-dark-warning/10'
          );
        } else if (t.weight === 3) {
          wb.textContent = 'HOCH';
          wb.classList.add('text-dark-accent', 'border-dark-accent/30', 'bg-dark-accent/10');
        } else {
          wb.textContent = 'MITTEL';
          wb.classList.add('text-dark-muted', 'border-dark-border', 'bg-dark-bg');
        }

        const cb = node.querySelector('.topic-check');
        cb.checked = s.done;
        cb.onchange = (e) => this.toggleTopic(t.id, e.target.checked, e.target);

        if (s.done) card.classList.add('border-dark-accent/30');
        node.querySelector('.header-area').onclick =
          (e) => this.toggleAccordion(e.currentTarget);

        const ul = node.querySelector('.subtask-list');
        t.sub.forEach((sub, idx) => {
          const isDone = s.subDone && s.subDone[idx];
          const li = document.createElement('li');
          li.className =
            'flex items-start gap-3 text-xs text-dark-muted group/item transition-all';
          li.innerHTML = `
                  <div class="shrink-0 flex items-center justify-center w-5 h-5 relative">
                      <input type="checkbox" class="peer appearance-none w-4 h-4 rounded border border-dark-border bg-dark-bg checked:bg-dark-accent checked:border-dark-accent cursor-pointer transition-colors" ${
                        isDone ? 'checked' : ''
                      }>
                      <i data-lucide="check" class="text-[10px] text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"></i>
                  </div>
                  <span class="transition-colors cursor-pointer pt-0.5 ${
                    isDone ? 'line-through opacity-50' : 'group-hover/item:text-white'
                  }">${sub}</span>
                `;
          const subCb = li.querySelector('input');
          subCb.onclick = (e) => e.stopPropagation();
          subCb.onchange = (e) => this.toggleSub(t.id, idx, e.target.checked, e.target);
          li.querySelector('span').onclick = (e) => {
            e.stopPropagation();
            subCb.click();
          };
          ul.appendChild(li);
        });

        const reps = node.querySelectorAll('.rep-check');
        reps.forEach((r, i) => {
          r.checked = s.reps[i];
          r.onchange = (e) => this.setRep(t.id, i, e.target);
        });

        container.appendChild(node);
      });
      const catEl = catNode.querySelector('.category-block');
      this.catMap[cat.id] = catEl;
      list.appendChild(catNode);
    });

    this.scheduleStatsUpdate();
    this.refreshIcons();
  },
};

document.addEventListener('DOMContentLoaded', () => app.init());