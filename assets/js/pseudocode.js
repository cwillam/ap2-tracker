/**
 * Pseudocode & Algorithmen-Labor – AP2 (FIAE) Tracker
 * 100% Client-Side, Offline-first, kein Tracking, kein Login.
 */

(() => {
  // ============================================================
  // 1. STATE & STORAGE
  // ============================================================
  const STORAGE_KEY = "ap2_pseudocode_state";

  function loadState() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn("Konnte AP2 Pseudocode-State nicht laden:", e);
    }
    return {
      solvedExercises: [],
      currentTab: "guide",
      streak: 0,
    };
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Konnte AP2 Pseudocode-State nicht speichern:", e);
    }
  }

  const appState = loadState();

  // ============================================================
  // 2. TAB CONTROLLER
  // ============================================================
  window.switchTab = function (tabId) {
    const tabs = ["guide", "visualizer", "exercises"];
    tabs.forEach((id) => {
      const content = document.getElementById(`tabContent-${id}`);
      const btn = document.getElementById(`tabBtn-${id}`);
      if (!content || !btn) return;

      const iconBox = btn.querySelector(".tab-icon");
      const icon = btn.querySelector(".tab-icon i, .tab-icon svg");
      const title = btn.querySelector(".tab-title");
      const sub = btn.querySelector(".tab-sub");

      if (id === tabId) {
        content.classList.remove("hidden");
        btn.className = "tab-btn active flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2.5 p-2 sm:px-4 sm:py-2.5 rounded-xl text-center sm:text-left transition-all bg-dark-accent text-white shadow-md shadow-purple-500/20 border border-purple-400/40";
        if (iconBox) iconBox.className = "tab-icon w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0 transition-colors";
        if (icon) icon.className = "w-4 h-4 text-white";
        if (title) title.className = "tab-title text-[11px] sm:text-xs font-bold leading-tight truncate text-white";
        if (sub) sub.className = "tab-sub text-[9px] sm:text-[10px] text-purple-100 hidden sm:block truncate opacity-95";
      } else {
        content.classList.add("hidden");
        btn.className = "tab-btn flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2.5 p-2 sm:px-4 sm:py-2.5 rounded-xl text-center sm:text-left transition-all bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-slate-600";
        if (iconBox) iconBox.className = "tab-icon w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800/80 flex items-center justify-center shrink-0 transition-colors";
        if (icon) icon.className = "w-4 h-4 text-slate-400";
        if (title) title.className = "tab-title text-[11px] sm:text-xs font-bold leading-tight truncate text-slate-300";
        if (sub) sub.className = "tab-sub text-[9px] sm:text-[10px] text-slate-500 hidden sm:block truncate";
      }
    });

    appState.currentTab = tabId;
    saveState(appState);

    if (tabId === "visualizer") {
      if (algoEngine.steps.length === 0) {
        algoEngine.init();
      } else {
        algoEngine.render();
      }
    } else if (tabId === "exercises") {
      exerciseEngine.init();
    }

    if (window.lucide) lucide.createIcons();
  };

  // ============================================================
  // 3. FIAE ALGORITHMEN-CODES
  // ============================================================
  const ALGORITHM_CODES = {
    binary_search: [
      { line: 1, text: "FUNKTION binaereSuche(arr, ziel) // arr muss sortiert sein" },
      { line: 2, text: "  links = 0, rechts = LÄNGE(arr) - 1" },
      { line: 3, text: "  SOLANGE links <= rechts TUE" },
      { line: 4, text: "    mitte = GANZZAHL((links + rechts) / 2)" },
      { line: 5, text: "    WENN arr[mitte] == ziel DANN RÜCKGABE mitte" },
      { line: 6, text: "    WENN arr[mitte] < ziel DANN links = mitte + 1" },
      { line: 7, text: "    SONST rechts = mitte - 1" },
      { line: 8, text: "  ENDE SOLANGE" },
      { line: 9, text: "  RÜCKGABE -1 // Nicht gefunden" },
      { line: 10, text: "ENDE FUNKTION" },
    ],
    linear_search: [
      { line: 1, text: "FUNKTION lineareSuche(arr, ziel)" },
      { line: 2, text: "  FÜR i = 0 BIS LÄNGE(arr) - 1" },
      { line: 3, text: "    WENN arr[i] == ziel DANN RÜCKGABE i" },
      { line: 4, text: "  ENDE FÜR" },
      { line: 5, text: "  RÜCKGABE -1" },
      { line: 6, text: "ENDE FUNKTION" },
    ],
    bubble_sort: [
      { line: 1, text: "FUNKTION bubbleSort(arr)" },
      { line: 2, text: "  FÜR i = 0 BIS LÄNGE(arr) - 2" },
      { line: 3, text: "    FÜR j = 0 BIS LÄNGE(arr) - 2 - i" },
      { line: 4, text: "      WENN arr[j] > arr[j + 1] DANN" },
      { line: 5, text: "        TAUSCHE arr[j], arr[j + 1]" },
      { line: 6, text: "      ENDE WENN" },
      { line: 7, text: "    ENDE FÜR" },
      { line: 8, text: "  ENDE FÜR" },
      { line: 9, text: "ENDE FUNKTION" },
    ],
    selection_sort: [
      { line: 1, text: "FUNKTION selectionSort(arr)" },
      { line: 2, text: "  FÜR i = 0 BIS LÄNGE(arr) - 2" },
      { line: 3, text: "    minIdx = i" },
      { line: 4, text: "    FÜR j = i + 1 BIS LÄNGE(arr) - 1" },
      { line: 5, text: "      WENN arr[j] < arr[minIdx] DANN minIdx = j" },
      { line: 6, text: "    ENDE FÜR" },
      { line: 7, text: "    WENN minIdx != i DANN TAUSCHE arr[i], arr[minIdx]" },
      { line: 8, text: "  ENDE FÜR" },
      { line: 9, text: "ENDE FUNKTION" },
    ],
    insertion_sort: [
      { line: 1, text: "FUNKTION insertionSort(arr)" },
      { line: 2, text: "  FÜR i = 1 BIS LÄNGE(arr) - 1" },
      { line: 3, text: "    aktuell = arr[i], j = i - 1" },
      { line: 4, text: "    SOLANGE j >= 0 UND arr[j] > aktuell TUE" },
      { line: 5, text: "      arr[j + 1] = arr[j]" },
      { line: 6, text: "      j = j - 1" },
      { line: 7, text: "    ENDE SOLANGE" },
      { line: 8, text: "    arr[j + 1] = aktuell" },
      { line: 9, text: "  ENDE FÜR" },
      { line: 10, text: "ENDE FUNKTION" },
    ],
    quick_sort: [
      { line: 1, text: "FUNKTION partition(arr, links, rechts)" },
      { line: 2, text: "  pivot = arr[rechts], i = links - 1" },
      { line: 3, text: "  FÜR j = links BIS rechts - 1" },
      { line: 4, text: "    WENN arr[j] < pivot DANN i++, TAUSCHE arr[i], arr[j]" },
      { line: 5, text: "  ENDE FÜR" },
      { line: 6, text: "  TAUSCHE arr[i + 1], arr[rechts]" },
      { line: 7, text: "  RÜCKGABE i + 1" },
      { line: 8, text: "ENDE FUNKTION" },
    ],
  };

  class AlgoEngine {
    constructor() {
      this.arraySize = 7;
      this.currentArray = [8, 14, 23, 35, 42, 60, 78];
      this.currentAlgo = "binary_search";
      this.targetValue = 42;
      this.steps = [];
      this.currentStepIdx = 0;
      this.isPlaying = false;
      this.timer = null;
      this.speed = 600;
      this.comparisonsCount = 0;
    }

    init() {
      const badge = document.getElementById("binarySearchBadge");
      if (badge) {
        badge.classList.toggle("hidden", this.currentAlgo !== "binary_search");
      }
      this.buildSteps();
      this.render();
    }

    setAlgorithm(algo) {
      this.pause();
      this.currentAlgo = algo;

      const targetWrapper = document.getElementById("targetValueWrapper");
      if (targetWrapper) {
        targetWrapper.style.display = algo.includes("search") ? "flex" : "none";
      }

      const badge = document.getElementById("binarySearchBadge");
      if (badge) {
        badge.classList.toggle("hidden", algo !== "binary_search");
      }

      // If switching to binary search, array must be sorted!
      if (algo === "binary_search") {
        this.currentArray.sort((a, b) => a - b);
      }

      if (algo.includes("search") && !this.currentArray.includes(this.targetValue)) {
        this.setTargetValue(this.currentArray[Math.floor(this.currentArray.length / 2)]);
      }

      this.buildSteps();
      this.render();
    }

    setArray(newArr) {
      this.pause();
      this.arraySize = newArr.length;
      const sizeSlider = document.getElementById("sizeSlider");
      const sizeLabel = document.getElementById("sizeLabel");
      if (sizeSlider) sizeSlider.value = newArr.length;
      if (sizeLabel) sizeLabel.textContent = newArr.length;

      if (this.currentAlgo === "binary_search") {
        this.currentArray = [...newArr].sort((a, b) => a - b);
      } else {
        this.currentArray = [...newArr];
      }

      if (this.currentAlgo.includes("search") && !this.currentArray.includes(this.targetValue)) {
        this.targetValue = this.currentArray[Math.floor(this.currentArray.length / 2)];
        const inputEl = document.getElementById("targetSearchInput");
        if (inputEl) inputEl.value = this.targetValue;
      }

      this.buildSteps();
      this.render();
    }

    setTargetValue(val) {
      this.targetValue = parseInt(val, 10) || 0;
      const inputEl = document.getElementById("targetSearchInput");
      if (inputEl && inputEl.value != this.targetValue) {
        inputEl.value = this.targetValue;
      }
      if (this.currentAlgo.includes("search")) {
        this.pause();
        this.buildSteps();
        this.render();
      }
    }

    buildSteps() {
      this.steps = [];
      this.comparisonsCount = 0;
      const arr = [...this.currentArray];

      switch (this.currentAlgo) {
        case "binary_search":
          this.generateBinarySearchSteps(arr, this.targetValue);
          break;
        case "linear_search":
          this.generateLinearSearchSteps(arr, this.targetValue);
          break;
        case "bubble_sort":
          this.generateBubbleSortSteps(arr);
          break;
        case "selection_sort":
          this.generateSelectionSortSteps(arr);
          break;
        case "insertion_sort":
          this.generateInsertionSortSteps(arr);
          break;
        case "quick_sort":
          this.generateQuickSortSteps(arr);
          break;
      }

      this.currentStepIdx = 0;
    }

    // 1. Binary Search (mit Visual-Dimming außerhalb des aktiven Suchbereichs)
    generateBinarySearchSteps(arr, target) {
      let links = 0;
      let rechts = arr.length - 1;
      let found = false;

      this.steps.push({
        line: 2,
        arrayState: [...arr],
        highlights: {},
        pointers: { links: 0, rechts: arr.length - 1 },
        vars: { links: 0, rechts: arr.length - 1, ziel: target },
        explanation: `Initialisiere Binäre Suche: links = 0, rechts = ${arr.length - 1}. Das Array ist vorsortiert.`,
        status: "Start",
        searchRange: [0, arr.length - 1],
      });

      while (links <= rechts) {
        this.comparisonsCount++;
        const mitte = Math.floor((links + rechts) / 2);

        this.steps.push({
          line: 4,
          arrayState: [...arr],
          highlights: { [mitte]: "compare" },
          pointers: { links, rechts, mitte },
          vars: { links, rechts, mitte, "arr[mitte]": arr[mitte], ziel: target },
          explanation: `Berechne Mitte: (${links} + ${rechts}) / 2 = Index ${mitte} (Wert: ${arr[mitte]}).`,
          status: "Mitte berechnen",
          searchRange: [links, rechts],
        });

        if (arr[mitte] === target) {
          this.steps.push({
            line: 5,
            arrayState: [...arr],
            highlights: { [mitte]: "found" },
            pointers: { mitte },
            vars: { ergebnis: mitte, vergleiche: this.comparisonsCount },
            explanation: `Treffer! arr[${mitte}] == ${target}. Zielwert in nur ${this.comparisonsCount} Schritten gefunden (O(log n)).`,
            status: "Gefunden",
            searchRange: [mitte, mitte],
          });
          found = true;
          break;
        }

        if (arr[mitte] < target) {
          this.steps.push({
            line: 6,
            arrayState: [...arr],
            highlights: { [mitte]: "compare" },
            pointers: { links, rechts, mitte },
            vars: { "arr[mitte]": arr[mitte], ziel: target, neueGrenze: `links = ${mitte + 1}` },
            explanation: `${arr[mitte]} < ${target}: Da das Array sortiert ist, kann der Wert nur rechts von Index ${mitte} liegen.`,
            status: "Suchraum halbieren",
            searchRange: [links, rechts],
          });
          links = mitte + 1;
        } else {
          this.steps.push({
            line: 7,
            arrayState: [...arr],
            highlights: { [mitte]: "compare" },
            pointers: { links, rechts, mitte },
            vars: { "arr[mitte]": arr[mitte], ziel: target, neueGrenze: `rechts = ${mitte - 1}` },
            explanation: `${arr[mitte]} > ${target}: Der gesuchte Wert kann nur links von Index ${mitte} liegen.`,
            status: "Suchraum halbieren",
            searchRange: [links, rechts],
          });
          rechts = mitte - 1;
        }
      }

      if (!found) {
        this.steps.push({
          line: 9,
          arrayState: [...arr],
          highlights: {},
          pointers: {},
          vars: { ergebnis: -1, vergleiche: this.comparisonsCount },
          explanation: `Suchraum erschöpft (links > rechts). Der Wert ${target} existiert nicht im Array. RÜCKGABE -1.`,
          status: "Nicht gefunden",
          searchRange: [-1, -1],
        });
      }
    }

    // 2. Linear Search
    generateLinearSearchSteps(arr, target) {
      for (let i = 0; i < arr.length; i++) {
        this.comparisonsCount++;
        this.steps.push({
          line: 3,
          arrayState: [...arr],
          highlights: { [i]: "compare" },
          pointers: { i },
          vars: { i, "arr[i]": arr[i], ziel: target },
          explanation: `Prüfe Index ${i}: Ist arr[${i}] (${arr[i]}) == ${target}?`,
          status: "Vergleich",
        });

        if (arr[i] === target) {
          this.steps.push({
            line: 3,
            arrayState: [...arr],
            highlights: { [i]: "found" },
            pointers: { i },
            vars: { ergebnis: i, schritte: this.comparisonsCount },
            explanation: `Treffer an Index ${i} nach ${this.comparisonsCount} Schritten!`,
            status: "Gefunden",
          });
          return;
        }
      }

      this.steps.push({
        line: 5,
        arrayState: [...arr],
        highlights: {},
        pointers: {},
        vars: { ergebnis: -1, vergleiche: arr.length },
        explanation: `Nicht gefunden nach ${arr.length} Vergleichen (Worst-Case O(n)).`,
        status: "Nicht gefunden",
      });
    }

    // 3. Bubble Sort (mit Früherkennung / Early-Exit)
    generateBubbleSortSteps(arr) {
      const n = arr.length;
      const sorted = {};

      for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
          this.comparisonsCount++;
          this.steps.push({
            line: 4,
            arrayState: [...arr],
            highlights: { ...sorted, [j]: "compare", [j + 1]: "compare" },
            pointers: { i, j, "j+1": j + 1 },
            vars: { i, j, "arr[j]": arr[j], "arr[j+1]": arr[j + 1] },
            explanation: `Vergleiche Index ${j} (${arr[j]}) mit Index ${j + 1} (${arr[j + 1]}).`,
            status: "Vergleich",
          });

          if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;

            this.steps.push({
              line: 5,
              arrayState: [...arr],
              highlights: { ...sorted, [j]: "swap", [j + 1]: "swap" },
              pointers: { j, "j+1": j + 1 },
              vars: { getauscht: `${temp} ↔ ${arr[j]}`, "arr[j]": arr[j], "arr[j+1]": arr[j + 1] },
              explanation: `${temp} > ${arr[j]}: Tausche Werte an Position ${j} und ${j + 1}.`,
              status: "Tausch",
            });
          }
        }

        sorted[n - 1 - i] = "found";

        // Early exit if no swaps
        if (!swapped) {
          for (let k = 0; k < n; k++) sorted[k] = "found";
          this.steps.push({
            line: 9,
            arrayState: [...arr],
            highlights: { ...sorted },
            pointers: {},
            vars: { status: "Vorzeitiger Abbruch", runden: i + 1 },
            explanation: `Keine Tausche in Durchlauf ${i + 1} nötig: Array ist bereits vollständig sortiert (Best-Case O(n))!`,
            status: "Fertig (Früher Abbruch)",
          });
          return;
        }
      }

      for (let k = 0; k < n; k++) sorted[k] = "found";
      this.steps.push({
        line: 9,
        arrayState: [...arr],
        highlights: { ...sorted },
        pointers: {},
        vars: { status: "fertig", vergleiche: this.comparisonsCount },
        explanation: "Bubble Sort beendet. Alle Elemente vollständig sortiert.",
        status: "Fertig",
      });
    }

    // 4. Selection Sort (mit lückenloser minIdx-Visualisierung & Kein-Tausch-Erklärung)
    generateSelectionSortSteps(arr) {
      const n = arr.length;
      const sorted = {};

      for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        this.steps.push({
          line: 3,
          arrayState: [...arr],
          highlights: { ...sorted, [i]: "compare" },
          pointers: { i, minIdx: i },
          vars: { i, minIdx: i, "arr[minIdx]": arr[i] },
          explanation: `Runde i = ${i}: Setze vorläufiges Minimum minIdx = ${i} (Wert ${arr[i]}).`,
          status: "Start Runde",
        });

        for (let j = i + 1; j < n; j++) {
          this.comparisonsCount++;
          this.steps.push({
            line: 5,
            arrayState: [...arr],
            highlights: { ...sorted, [minIdx]: "compare", [j]: "swap" },
            pointers: { i, minIdx, j },
            vars: { i, minIdx, j, "arr[j]": arr[j], "arr[minIdx]": arr[minIdx] },
            explanation: `Vergleiche arr[${j}] (${arr[j]}) mit bisherigem Minimum arr[${minIdx}] (${arr[minIdx]}).`,
            status: "Minimum suchen",
          });

          if (arr[j] < arr[minIdx]) {
            minIdx = j;
            this.steps.push({
              line: 5,
              arrayState: [...arr],
              highlights: { ...sorted, [minIdx]: "found" },
              pointers: { i, minIdx },
              vars: { minIdx, "arr[minIdx]": arr[minIdx] },
              explanation: `Neues Minimum gefunden an Index ${minIdx} (Wert ${arr[minIdx]}).`,
              status: "Neues Minimum",
            });
          }
        }

        if (minIdx !== i) {
          const temp = arr[i];
          arr[i] = arr[minIdx];
          arr[minIdx] = temp;

          this.steps.push({
            line: 7,
            arrayState: [...arr],
            highlights: { ...sorted, [i]: "found", [minIdx]: "swap" },
            pointers: { i, minIdx },
            vars: { i, minIdx, "getauscht mit": arr[minIdx] },
            explanation: `Tausche kleinstes Element (${arr[i]}) an Position ${i}.`,
            status: "Tausch an Position i",
          });
        } else {
          this.steps.push({
            line: 7,
            arrayState: [...arr],
            highlights: { ...sorted, [i]: "found" },
            pointers: { i },
            vars: { i, minIdx: i, status: "Bereits am Platz" },
            explanation: `minIdx == i: arr[${i}] (${arr[i]}) ist bereits das kleinste Element. Kein Tausch nötig!`,
            status: "Kein Tausch nötig",
          });
        }
        sorted[i] = "found";
      }

      for (let k = 0; k < n; k++) sorted[k] = "found";
      this.steps.push({
        line: 9,
        arrayState: [...arr],
        highlights: { ...sorted },
        pointers: {},
        vars: { status: "fertig", vergleiche: this.comparisonsCount },
        explanation: "Selection Sort abgeschlossen. Maximale Tauschanzahl ist O(n).",
        status: "Fertig",
      });
    }

    // 5. Insertion Sort (Kartenspieler-Methode)
    generateInsertionSortSteps(arr) {
      const n = arr.length;
      const sorted = { 0: "found" };

      for (let i = 1; i < n; i++) {
        const aktuell = arr[i];
        let j = i - 1;

        this.steps.push({
          line: 3,
          arrayState: [...arr],
          highlights: { ...sorted, [i]: "compare" },
          pointers: { i, j },
          vars: { i, aktuell, j, "arr[j]": arr[j] },
          explanation: `Nehme arr[${i}] = ${aktuell} heraus. Finde die richtige Position im sortierten Bereich links.`,
          status: "Element entnehmen",
        });

        while (j >= 0 && arr[j] > aktuell) {
          this.comparisonsCount++;
          arr[j + 1] = arr[j];

          this.steps.push({
            line: 5,
            arrayState: [...arr],
            highlights: { ...sorted, [j]: "swap", [j + 1]: "swap" },
            pointers: { j, "j+1": j + 1 },
            vars: { aktuell, verschiebe: arr[j], nach: j + 1 },
            explanation: `Da ${arr[j]} > ${aktuell}: Verschiebe ${arr[j]} nach rechts an Index ${j + 1}.`,
            status: "Rechtsverschiebung",
          });
          j--;
        }

        arr[j + 1] = aktuell;
        sorted[i] = "found";

        this.steps.push({
          line: 8,
          arrayState: [...arr],
          highlights: { ...sorted, [j + 1]: "found" },
          pointers: { eingefügtAn: j + 1 },
          vars: { aktuell, eingefügtBei: j + 1 },
          explanation: `Füge ${aktuell} an Index ${j + 1} ein. Der Bereich von 0 bis ${i} ist nun sortiert.`,
          status: "Eingefügt",
        });
      }

      for (let k = 0; k < n; k++) sorted[k] = "found";
      this.steps.push({
        line: 10,
        arrayState: [...arr],
        highlights: { ...sorted },
        pointers: {},
        vars: { status: "fertig", vergleiche: this.comparisonsCount },
        explanation: "Insertion Sort abgeschlossen! Ideal für fast sortierte Daten (O(n) Best Case).",
        status: "Fertig",
      });
    }

    // 6. QuickSort (Echtes rekursives Partitionieren mit Teilbereichs-Fokus)
    generateQuickSortSteps(arr) {
      const sortedIndices = {};
      const items = [...arr];

      const partition = (low, high) => {
        const pivot = items[high];
        this.steps.push({
          line: 2,
          arrayState: [...items],
          highlights: { ...sortedIndices, [high]: "compare" },
          pointers: { low, high, pivot: high },
          vars: { bereich: `[${low}..${high}]`, pivot, "arr[high]": pivot },
          explanation: `Partitioniere Bereich [${low}..${high}]: Wähle Pivot arr[${high}] = ${pivot}.`,
          status: "Pivot wählen",
          searchRange: [low, high],
        });

        let i = low - 1;
        for (let j = low; j < high; j++) {
          this.comparisonsCount++;
          this.steps.push({
            line: 4,
            arrayState: [...items],
            highlights: { ...sortedIndices, [high]: "compare", [j]: "swap" },
            pointers: { low, high, pivot: high, j, ...(i >= low ? { i } : {}) },
            vars: { j, "arr[j]": items[j], pivot, i: i >= low ? i : "-" },
            explanation: `Prüfe arr[${j}] (${items[j]}): Ist ${items[j]} < Pivot (${pivot})?`,
            status: "Vergleich mit Pivot",
            searchRange: [low, high],
          });

          if (items[j] < pivot) {
            i++;
            if (i !== j) {
              const temp = items[i];
              items[i] = items[j];
              items[j] = temp;
              this.steps.push({
                line: 4,
                arrayState: [...items],
                highlights: { ...sortedIndices, [i]: "found", [j]: "swap", [high]: "compare" },
                pointers: { i, j, pivot: high },
                vars: { i, j, getauscht: `${items[i]} ↔ ${items[j]}` },
                explanation: `${items[i]} < ${pivot}: Erhöhe i auf ${i} und tausche arr[${i}] (${items[i]}) mit arr[${j}] (${items[j]}).`,
                status: "Tausch nach links",
                searchRange: [low, high],
              });
            }
          }
        }

        // Tausche Pivot an finale Position i + 1
        const pIdx = i + 1;
        const temp = items[pIdx];
        items[pIdx] = items[high];
        items[high] = temp;
        sortedIndices[pIdx] = "found";

        this.steps.push({
          line: 6,
          arrayState: [...items],
          highlights: { ...sortedIndices, [pIdx]: "found" },
          pointers: { finalePos: pIdx },
          vars: { pivotIndex: pIdx, pivotWert: items[pIdx] },
          explanation: `Setze Pivot ${items[pIdx]} an finale Position ${pIdx}. Alle Werte links sind kleiner, alle rechts größer!`,
          status: "Pivot fixiert",
          searchRange: [low, high],
        });

        return pIdx;
      };

      const quickSortRec = (low, high) => {
        if (low < high) {
          const pIdx = partition(low, high);
          quickSortRec(low, pIdx - 1);
          quickSortRec(pIdx + 1, high);
        } else if (low === high) {
          sortedIndices[low] = "found";
        }
      };

      quickSortRec(0, items.length - 1);

      for (let k = 0; k < items.length; k++) sortedIndices[k] = "found";
      this.steps.push({
        line: 8,
        arrayState: [...items],
        highlights: { ...sortedIndices },
        pointers: {},
        vars: { status: "fertig", vergleiche: this.comparisonsCount },
        explanation: "QuickSort-Verfahren erfolgreich abgeschlossen! Divide & Conquer (O(n log n)).",
        status: "Sortiert",
        searchRange: [0, items.length - 1],
      });
    }

    render() {
      if (this.steps.length === 0) return;
      const step = this.steps[this.currentStepIdx] || this.steps[0];

      // 1. Code Box
      const codeContainer = document.getElementById("codeContainer");
      if (codeContainer) {
        const lines = ALGORITHM_CODES[this.currentAlgo] || [];
        codeContainer.innerHTML = lines
          .map((l) => {
            const isActive = l.line === step.line;
            return `
              <div class="code-line ${isActive ? "active font-bold bg-purple-500/20 text-purple-200 border-l-2 border-purple-400 pl-1.5" : "text-slate-400"} flex items-center px-2 py-0.5 rounded text-xs font-mono transition-colors">
                <span class="w-6 text-slate-600 select-none text-[10px] shrink-0 text-right pr-2">${l.line}</span>
                <span class="whitespace-pre">${escapeHtml(l.text)}</span>
              </div>
            `;
          })
          .join("");
      }

      // 2. Bars
      const barContainer = document.getElementById("barContainer");
      if (barContainer) {
        const arr = step.arrayState;
        const maxVal = Math.max(...arr, 1);
        const isSearch = this.currentAlgo.includes("search");

        barContainer.innerHTML = arr
          .map((val, idx) => {
            const heightPercent = Math.max(16, Math.round((val / maxVal) * 82));
            const highlightType = step.highlights[idx];

            let bgClass = "bg-purple-600/80 border-purple-400 text-purple-100";
            let glow = "";
            if (highlightType === "compare") {
              bgClass = "bg-amber-400 border-amber-300 text-slate-950 font-black";
              glow = "box-shadow: 0 0 16px rgba(251, 191, 36, 0.6);";
            } else if (highlightType === "swap") {
              bgClass = "bg-rose-500 border-rose-400 text-white font-black";
              glow = "box-shadow: 0 0 16px rgba(244, 63, 94, 0.7);";
            } else if (highlightType === "found") {
              bgClass = "bg-emerald-500 border-emerald-400 text-slate-950 font-black";
              glow = "box-shadow: 0 0 16px rgba(16, 185, 129, 0.6);";
            }

            // Visual dimming if outside active search window
            let dimStyle = "";
            if (step.searchRange) {
              const [minR, maxR] = step.searchRange;
              if (idx < minR || idx > maxR) {
                dimStyle = "opacity: 0.25; filter: grayscale(90%);";
              }
            }

            const activePointers = [];
            if (step.pointers) {
              for (const [key, pIdx] of Object.entries(step.pointers)) {
                if (pIdx === idx) activePointers.push(key);
              }
            }

            const clickableAttr = isSearch
              ? `onclick="window.selectBarAsTarget(${val})" title="Klicke, um ${val} als Zielwert zu wählen" class="algo-bar w-full rounded-t-md border flex items-center justify-center text-xs font-mono select-none cursor-pointer hover:ring-2 hover:ring-white transition-all ${bgClass}"`
              : `class="algo-bar w-full rounded-t-md border flex items-center justify-center text-xs font-mono select-none ${bgClass}"`;

            return `
              <div class="flex-1 flex flex-col items-center justify-end h-full max-w-[56px] min-w-[22px] sm:min-w-[30px]" style="${dimStyle}">
                <div
                  ${clickableAttr}
                  style="height: ${heightPercent}%; ${glow}"
                >
                  <span class="drop-shadow-sm font-bold">${val}</span>
                </div>
                <div class="mt-1 text-center font-mono">
                  <div class="text-[10px] text-slate-400">[${idx}]</div>
                  <div class="h-4 text-[10px] font-bold text-amber-400 tracking-tighter truncate max-w-[48px]">
                    ${activePointers.length > 0 ? `▲ ${activePointers.join(",")}` : ""}
                  </div>
                </div>
              </div>
            `;
          })
          .join("");
      }

      // 3. Variables
      const varInspector = document.getElementById("variableInspector");
      if (varInspector) {
        const vars = step.vars || {};
        const entries = Object.entries(vars);
        if (entries.length === 0) {
          varInspector.innerHTML = `<div class="text-slate-500 text-xs font-mono italic">Keine aktiven Variablen</div>`;
        } else {
          varInspector.innerHTML = `
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              ${entries
                .map(
                  ([k, v]) => `
                <div class="bg-dark-bg border border-dark-border rounded-lg p-2 font-mono">
                  <div class="text-[10px] text-slate-400 uppercase tracking-wider">${escapeHtml(k)}</div>
                  <div class="text-sm font-bold text-purple-400 truncate mt-0.5">${escapeHtml(String(v))}</div>
                </div>
              `,
                )
                .join("")}
            </div>
          `;
        }
      }

      // 4. Texts
      const stepExplanation = document.getElementById("stepExplanation");
      if (stepExplanation) stepExplanation.textContent = step.explanation;

      const currentStepNum = document.getElementById("currentStepNumber");
      if (currentStepNum) currentStepNum.textContent = this.currentStepIdx + 1;

      const totalStepsNum = document.getElementById("totalStepsNumber");
      if (totalStepsNum) totalStepsNum.textContent = this.steps.length;

      const statusText = document.getElementById("algoStatusText");
      if (statusText) statusText.textContent = step.status || "In Ausführung";

      const opCounter = document.getElementById("operationCounter");
      if (opCounter) opCounter.textContent = `Vergleiche: ${this.comparisonsCount}`;
    }

    stepForward() {
      if (this.currentStepIdx < this.steps.length - 1) {
        this.currentStepIdx++;
        this.render();
      } else {
        this.pause();
      }
    }

    stepBackward() {
      if (this.currentStepIdx > 0) {
        this.currentStepIdx--;
        this.render();
      }
    }

    play() {
      if (this.isPlaying) return;
      if (this.currentStepIdx >= this.steps.length - 1) {
        this.currentStepIdx = 0;
      }
      this.isPlaying = true;
      this.updatePlayBtn();

      this.timer = setInterval(() => {
        if (this.currentStepIdx < this.steps.length - 1) {
          this.stepForward();
        } else {
          this.pause();
        }
      }, this.speed);
    }

    pause() {
      this.isPlaying = false;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.updatePlayBtn();
    }

    toggle() {
      if (this.isPlaying) this.pause();
      else this.play();
    }

    reset() {
      this.pause();
      this.currentStepIdx = 0;
      this.render();
    }

    updatePlayBtn() {
      const btnText = document.getElementById("playBtnText");
      const icon = document.getElementById("playIcon");
      if (btnText) btnText.textContent = this.isPlaying ? "Pause" : "Start";
      if (icon) {
        icon.setAttribute("data-lucide", this.isPlaying ? "pause" : "play");
        if (window.lucide) lucide.createIcons();
      }
    }
  }

  const algoEngine = new AlgoEngine();
  window.algoEngine = algoEngine;

  // Window Callbacks for HTML Controls
  window.onAlgorithmChange = function () {
    const sel = document.getElementById("algoSelect");
    if (sel) algoEngine.setAlgorithm(sel.value);
  };

  window.generateNewArray = function () {
    const size = algoEngine.arraySize;
    const pool = new Set();
    while (pool.size < size) {
      pool.add(Math.floor(Math.random() * 85) + 8);
    }
    const newArr = Array.from(pool);
    if (algoEngine.currentAlgo.includes("search")) {
      algoEngine.targetValue = newArr[Math.floor(newArr.length / 2)];
      const inputEl = document.getElementById("targetSearchInput");
      if (inputEl) inputEl.value = algoEngine.targetValue;
    }
    algoEngine.setArray(newArr);
  };

  window.applyArrayPreset = function (preset) {
    const size = algoEngine.arraySize;
    let arr = [];
    if (preset === "nearly_sorted") {
      arr = Array.from({ length: size }, (_, i) => (i + 1) * 12);
      if (size > 3) {
        // Tausche 2 benachbarte Werte
        const tmp = arr[2];
        arr[2] = arr[3];
        arr[3] = tmp;
      }
    } else if (preset === "reverse") {
      arr = Array.from({ length: size }, (_, i) => (size - i) * 12);
    } else if (preset === "small_numbers") {
      arr = Array.from({ length: size }, (_, i) => Math.floor(Math.random() * 18) + 2);
    } else if (preset === "duplicates") {
      arr = [8, 16, 16, 32, 45, 45, 64, 80, 80, 96].slice(0, size);
    } else {
      const pool = new Set();
      while (pool.size < size) {
        pool.add(Math.floor(Math.random() * 85) + 8);
      }
      arr = Array.from(pool);
    }
    if (algoEngine.currentAlgo.includes("search")) {
      algoEngine.targetValue = arr[Math.floor(arr.length / 2)];
      const inputEl = document.getElementById("targetSearchInput");
      if (inputEl) inputEl.value = algoEngine.targetValue;
    }
    algoEngine.setArray(arr);
  };

  window.updateArraySize = function (size) {
    const s = parseInt(size, 10);
    algoEngine.arraySize = s;
    const label = document.getElementById("sizeLabel");
    if (label) label.textContent = s;
    window.generateNewArray();
  };

  window.selectBarAsTarget = function (val) {
    algoEngine.setTargetValue(val);
  };

  window.togglePlayPause = function () {
    algoEngine.toggle();
  };

  window.stepForward = function () {
    algoEngine.pause();
    algoEngine.stepForward();
  };

  window.stepBackward = function () {
    algoEngine.pause();
    algoEngine.stepBackward();
  };

  window.resetAlgorithm = function () {
    algoEngine.reset();
  };

  window.updateSpeed = function (val) {
    const inverted = 1300 - parseInt(val, 10);
    algoEngine.speed = inverted;
    const label = document.getElementById("speedLabel");
    if (label) {
      if (inverted > 800) label.textContent = "Langsam";
      else if (inverted < 350) label.textContent = "Schnell";
      else label.textContent = "Normal";
    }
    if (algoEngine.isPlaying) {
      algoEngine.pause();
      algoEngine.play();
    }
  };

  window.updateSearchTarget = function (val) {
    algoEngine.setTargetValue(val);
  };

  // ============================================================
  // 4. FIAE SCHREIBTISCHTEST & ÜBUNGEN (GROSSES PRÜFUNGSSET)
  // ============================================================
  const EXERCISES_TRACE = [
    {
      id: "trace_fiae_1",
      title: "1. Binäre Suche – Gefundener Treffer (Standard AP2)",
      difficulty: "AP2 Pflichtstoff",
      code: [
        "arr = [4, 9, 15, 28, 42, 60, 77, 85]",
        "ziel = 42",
        "links = 0, rechts = 7",
        "SOLANGE links <= rechts TUE",
        "  mitte = GANZZAHL((links + rechts) / 2)",
        "  WENN arr[mitte] == ziel DANN RÜCKGABE mitte",
        "  WENN arr[mitte] < ziel DANN links = mitte + 1",
        "  SONST rechts = mitte - 1",
        "ENDE SOLANGE",
      ],
      explanation: "Führe die Binäre Suche nach dem Wert 42 schrittweise aus:",
      headers: ["Schritt", "links", "rechts", "mitte", "arr[mitte]", "Aktion"],
      rows: [
        { step: "Start", values: ["0", "7", "-", "-", "Init"], locked: [true, true, true, true, true] },
        { step: "1", values: ["0", "7", "3", "28", "28 < 42 -> links=4"], locked: [false, false, false, false, false] },
        { step: "2", values: ["4", "7", "5", "60", "60 > 42 -> rechts=4"], locked: [false, false, false, false, false] },
        { step: "3", values: ["4", "4", "4", "42", "Treffer bei Index 4"], locked: [false, false, false, false, false] },
      ],
    },
    {
      id: "trace_fiae_2",
      title: "2. Binäre Suche – Nicht vorhanden (Suchraum erschöpft)",
      difficulty: "AP2 Pflichtstoff",
      code: [
        "arr = [5, 12, 20, 35, 50, 68, 80]",
        "ziel = 33",
        "links = 0, rechts = 6",
        "SOLANGE links <= rechts TUE",
        "  mitte = GANZZAHL((links + rechts) / 2)",
        "  WENN arr[mitte] == ziel DANN RÜCKGABE mitte",
        "  WENN arr[mitte] < ziel DANN links = mitte + 1",
        "  SONST rechts = mitte - 1",
        "ENDE SOLANGE",
        "RÜCKGABE -1",
      ],
      explanation: "Was passiert, wenn der Wert 33 nicht im Array existiert? Wann bricht die Schleife ab?",
      headers: ["Schritt", "links", "rechts", "mitte", "arr[mitte]", "Entscheidung"],
      rows: [
        { step: "Start", values: ["0", "6", "-", "-", "Init"], locked: [true, true, true, true, true] },
        { step: "1", values: ["0", "6", "3", "35", "35 > 33 -> rechts=2"], locked: [false, false, false, false, false] },
        { step: "2", values: ["0", "2", "1", "12", "12 < 33 -> links=2"], locked: [false, false, false, false, false] },
        { step: "3", values: ["2", "2", "2", "20", "20 < 33 -> links=3"], locked: [false, false, false, false, false] },
        { step: "Ende", values: ["3", "2", "-", "-", "links > rechts -> Nicht gefunden (-1)"], locked: [false, false, false, false, false] },
      ],
    },
    {
      id: "trace_fiae_3",
      title: "3. Selection Sort – Rundenbasierte Array-Zustände",
      difficulty: "AP2 Fortgeschritten",
      code: [
        "// Gegeben: arr = [29, 10, 14, 37, 13]",
        "FÜR i = 0 BIS LÄNGE(arr) - 2",
        "  minIdx = i",
        "  FÜR j = i + 1 BIS LÄNGE(arr) - 1",
        "    WENN arr[j] < arr[minIdx] DANN minIdx = j",
        "  ENDE FÜR",
        "  WENN minIdx != i DANN TAUSCHE arr[i], arr[minIdx]",
        "ENDE FÜR",
      ],
      explanation: "Welches Element ist das gefundene Minimum und wie sieht das Array nach jeder Runde i aus?",
      headers: ["Runde i", "minIdx", "Kleinstes Element", "Array nach Tausch (arr[0] bis arr[4])"],
      rows: [
        { step: "Start", values: ["-", "-", "[29, 10, 14, 37, 13]"], locked: [true, true, true] },
        { step: "i = 0", values: ["1", "10", "[10, 29, 14, 37, 13]"], locked: [false, false, false] },
        { step: "i = 1", values: ["4", "13", "[10, 13, 14, 37, 29]"], locked: [false, false, false] },
        { step: "i = 2", values: ["2", "14", "[10, 13, 14, 37, 29]"], locked: [false, false, false] },
        { step: "i = 3", values: ["4", "29", "[10, 13, 14, 29, 37]"], locked: [false, false, false] },
      ],
    },
    {
      id: "trace_fiae_4",
      title: "4. Insertion Sort – Verschieben & Einfügen",
      difficulty: "AP2 Fortgeschritten",
      code: [
        "// Gegeben: arr = [12, 5, 8, 3]",
        "FÜR i = 1 BIS LÄNGE(arr) - 1",
        "  aktuell = arr[i], j = i - 1",
        "  SOLANGE j >= 0 UND arr[j] > aktuell TUE",
        "    arr[j + 1] = arr[j]",
        "    j = j - 1",
        "  ENDE SOLANGE",
        "  arr[j + 1] = aktuell",
        "ENDE FÜR",
      ],
      explanation: "Protokolliere das 'Einfügen' wie beim Kartenspiel für jeden Durchlauf i:",
      headers: ["Runde i", "aktuell", "Verschobene Werte", "Array nach Runde"],
      rows: [
        { step: "Start", values: ["-", "-", "[12, 5, 8, 3]"], locked: [true, true, true] },
        { step: "i = 1", values: ["5", "12", "[5, 12, 8, 3]"], locked: [false, false, false] },
        { step: "i = 2", values: ["8", "12", "[5, 8, 12, 3]"], locked: [false, false, false] },
        { step: "i = 3", values: ["3", "12, 8, 5", "[3, 5, 8, 12]"], locked: [false, false, false] },
      ],
    },
    {
      id: "trace_fiae_5",
      title: "5. Bubble Sort mit getauscht-Flag (Early Exit)",
      difficulty: "AP2 Klassiker",
      code: [
        "// arr = [3, 1, 4, 6, 8]",
        "FÜR i = 0 BIS 3",
        "  getauscht = FALSCH",
        "  FÜR j = 0 BIS 3 - i",
        "    WENN arr[j] > arr[j + 1] DANN",
        "      TAUSCHE arr[j], arr[j + 1]",
        "      getauscht = WAHR",
        "    ENDE WENN",
        "  ENDE FÜR",
        "  WENN NICHT getauscht DANN VERLASSEN",
        "ENDE FÜR",
      ],
      explanation: "Wie verhält sich das optimierte BubbleSort mit getauscht-Flag bei fast sortierten Daten?",
      headers: ["Durchlauf i", "Vergleiche (j)", "Tausch durchgeführt?", "getauscht-Flag", "Vorzeitiger Abbruch?"],
      rows: [
        { step: "i = 0", values: ["4", "JA (3 mit 1)", "WAHR", "NEIN"], locked: [false, false, false, false] },
        { step: "i = 1", values: ["3", "NEIN", "FALSCH", "JA"], locked: [false, false, false, false] },
      ],
    },
    {
      id: "trace_fiae_6",
      title: "6. Rekursion & Call-Stack (Fakultät fak(4))",
      difficulty: "AP2 Standard",
      code: [
        "FUNKTION fak(n)",
        "  WENN n <= 1 DANN RÜCKGABE 1",
        "  RÜCKGABE n * fak(n - 1)",
        "ENDE FUNKTION",
        "// Aufruf: ergebnis = fak(4)",
      ],
      explanation: "Protokolliere den rekursiven Abstieg und die Rückgabewerte (Call-Stack):",
      headers: ["Aufruf / Ebene", "Parameter n", "Basisfall erreicht? (JA/NEIN)", "Berechnung", "Rückgabewert"],
      rows: [
        { step: "Ebene 1", values: ["4", "NEIN", "4 * fak(3)", "24"], locked: [false, false, false, false] },
        { step: "Ebene 2", values: ["3", "NEIN", "3 * fak(2)", "6"], locked: [false, false, false, false] },
        { step: "Ebene 3", values: ["2", "NEIN", "2 * fak(1)", "2"], locked: [false, false, false, false] },
        { step: "Ebene 4", values: ["1", "JA", "1 (Basisfall)", "1"], locked: [false, false, false, false] },
      ],
    },
    {
      id: "trace_fiae_7",
      title: "7. Rekursive Fibonacci-Folge (fib(4))",
      difficulty: "AP2 Fortgeschritten",
      code: [
        "FUNKTION fib(n)",
        "  WENN n <= 0 DANN RÜCKGABE 0",
        "  WENN n == 1 DANN RÜCKGABE 1",
        "  RÜCKGABE fib(n - 1) + fib(n - 2)",
        "ENDE FUNKTION",
      ],
      explanation: "Berechne die Funktionswerte der Fibonacci-Folge für die ersten n:",
      headers: ["Aufruf", "Parameter n", "Basisfall? (JA/NEIN)", "Rückgabewert"],
      rows: [
        { step: "fib(1)", values: ["1", "JA", "1"], locked: [false, false, false] },
        { step: "fib(2)", values: ["2", "NEIN", "1"], locked: [false, false, false] },
        { step: "fib(3)", values: ["3", "NEIN", "2"], locked: [false, false, false] },
        { step: "fib(4)", values: ["4", "NEIN", "3"], locked: [false, false, false] },
      ],
    },
    {
      id: "trace_fiae_8",
      title: "8. Zwei-Zeiger-Algorithmus (Array Invertieren / In-Place)",
      difficulty: "AP2 Praxis",
      code: [
        "// Gegeben: arr = [10, 20, 30, 40, 50]",
        "links = 0, rechts = 4",
        "SOLANGE links < rechts TUE",
        "  TAUSCHE arr[links], arr[rechts]",
        "  links = links + 1",
        "  rechts = rechts - 1",
        "ENDE SOLANGE",
      ],
      explanation: "Der Two-Pointer-Ansatz ist ein hocheffizientes O(n) Muster für Fachinformatiker:",
      headers: ["Schritt", "links", "rechts", "Getauchte Elemente", "Array-Zustand"],
      rows: [
        { step: "Start", values: ["0", "4", "-", "[10, 20, 30, 40, 50]"], locked: [true, true, true, true] },
        { step: "1", values: ["0", "4", "10 mit 50", "[50, 20, 30, 40, 10]"], locked: [false, false, false, false] },
        { step: "2", values: ["1", "3", "20 mit 40", "[50, 40, 30, 20, 10]"], locked: [false, false, false, false] },
        { step: "Ende", values: ["2", "2", "Kein Tausch (links >= rechts)", "[50, 40, 30, 20, 10]"], locked: [false, false, false, false] },
      ],
    },
    {
      id: "trace_fiae_9",
      title: "9. QuickSort Lomuto-Partitionierung (Schritt für Schritt)",
      difficulty: "AP2 Prüfungsstandard",
      code: [
        "// Bereich [0..3], arr = [6, 2, 8, 4], Pivot ist arr[3] = 4",
        "i = -1",
        "FÜR j = 0 BIS 2",
        "  WENN arr[j] < 4 DANN",
        "    i = i + 1",
        "    TAUSCHE arr[i], arr[j]",
        "  ENDE WENN",
        "ENDE FÜR",
        "TAUSCHE arr[i + 1], arr[3] // Pivot an endgültige Position",
      ],
      explanation: "Verfolge Zeiger i, j und den Array-Zustand während der Lomuto-Partitionierung:",
      headers: ["Schritt j", "arr[j]", "arr[j] < 4?", "Zeiger i", "Array-Zustand"],
      rows: [
        { step: "Start", values: ["-", "-", "-", "-1", "[6, 2, 8, 4]"], locked: [true, true, true, true, true] },
        { step: "j = 0", values: ["0", "6", "NEIN", "-1", "[6, 2, 8, 4]"], locked: [false, false, false, false, false] },
        { step: "j = 1", values: ["1", "2", "JA", "0", "[2, 6, 8, 4]"], locked: [false, false, false, false, false] },
        { step: "j = 2", values: ["2", "8", "NEIN", "0", "[2, 6, 8, 4]"], locked: [false, false, false, false, false] },
        { step: "Pivot-Tausch", values: ["-", "4 (Pivot)", "-", "1", "[2, 4, 8, 6]"], locked: [false, false, false, false, false] },
      ],
    },
    {
      id: "trace_fiae_10",
      title: "10. Keller-Speicher (Stack: PUSH, POP, PEEK)",
      difficulty: "AP2 Datenstrukturen",
      code: [
        "stack = NEUER_STACK()",
        "stack.push(10)",
        "stack.push(20)",
        "top1 = stack.peek()",
        "stack.push(30)",
        "val = stack.pop()",
        "stack.push(40)",
      ],
      explanation: "Verfolge den Inhalt des Stacks (LIFO-Prinzip: Last-In, First-Out):",
      headers: ["Schritt", "Befehl", "Rückgabe / Gelesen", "Stack-Inhalt (unten -> oben)"],
      rows: [
        { step: "1", values: ["push(10)", "-", "[10]"], locked: [false, false, false] },
        { step: "2", values: ["push(20)", "-", "[10, 20]"], locked: [false, false, false] },
        { step: "3", values: ["peek()", "20", "[10, 20]"], locked: [false, false, false] },
        { step: "4", values: ["push(30)", "-", "[10, 20, 30]"], locked: [false, false, false] },
        { step: "5", values: ["pop()", "30", "[10, 20]"], locked: [false, false, false] },
        { step: "6", values: ["push(40)", "-", "[10, 20, 40]"], locked: [false, false, false] },
      ],
    },
  ];

  const EXERCISES_PUZZLE = [
    {
      id: "puzzle_fiae_1",
      title: "1. Binäre Suche (Iterativ)",
      difficulty: "AP2 Standard",
      description: "Ordne die Zeilen für die iterative Binäre Suche in der richtigen logischen Reihenfolge:",
      lines: [
        { id: 1, text: "links = 0, rechts = LÄNGE(arr) - 1" },
        { id: 2, text: "SOLANGE links <= rechts TUE" },
        { id: 3, text: "  mitte = GANZZAHL((links + rechts) / 2)" },
        { id: 4, text: "  WENN arr[mitte] == ziel DANN RÜCKGABE mitte" },
        { id: 5, text: "  WENN arr[mitte] < ziel DANN links = mitte + 1" },
        { id: 6, text: "  SONST rechts = mitte - 1" },
        { id: 7, text: "ENDE SOLANGE" },
        { id: 8, text: "RÜCKGABE -1" },
      ],
    },
    {
      id: "puzzle_fiae_2",
      title: "2. Selection Sort (Minimum-Suche & Tausch)",
      difficulty: "AP2 Fortgeschritten",
      description: "Bringe die Schleifen und Tausch-Operationen von SelectionSort in Reihenfolge:",
      lines: [
        { id: 1, text: "FÜR i = 0 BIS LÄNGE(arr) - 2" },
        { id: 2, text: "  minIdx = i" },
        { id: 3, text: "  FÜR j = i + 1 BIS LÄNGE(arr) - 1" },
        { id: 4, text: "    WENN arr[j] < arr[minIdx] DANN minIdx = j" },
        { id: 5, text: "  ENDE FÜR" },
        { id: 6, text: "  WENN minIdx != i DANN TAUSCHE arr[i], arr[minIdx]" },
        { id: 7, text: "ENDE FÜR" },
      ],
    },
    {
      id: "puzzle_fiae_3",
      title: "3. Insertion Sort (Kartenspieler-Sortierung)",
      difficulty: "AP2 Fortgeschritten",
      description: "Ordne die Schritte für das Einfügen und Verschieben bei InsertionSort:",
      lines: [
        { id: 1, text: "FÜR i = 1 BIS LÄNGE(arr) - 1" },
        { id: 2, text: "  aktuell = arr[i], j = i - 1" },
        { id: 3, text: "  SOLANGE j >= 0 UND arr[j] > aktuell TUE" },
        { id: 4, text: "    arr[j + 1] = arr[j]" },
        { id: 5, text: "    j = j - 1" },
        { id: 6, text: "  ENDE SOLANGE" },
        { id: 7, text: "  arr[j + 1] = aktuell" },
        { id: 8, text: "ENDE FÜR" },
      ],
    },
    {
      id: "puzzle_fiae_4",
      title: "4. Bubble Sort (Mit Optimierungs-Flag)",
      difficulty: "AP2 Standard",
      description: "Setze das optimierte BubbleSort mit vorzeitigem Abbruch zusammen:",
      lines: [
        { id: 1, text: "FÜR i = 0 BIS LÄNGE(arr) - 2" },
        { id: 2, text: "  getauscht = FALSCH" },
        { id: 3, text: "  FÜR j = 0 BIS LÄNGE(arr) - 2 - i" },
        { id: 4, text: "    WENN arr[j] > arr[j + 1] DANN TAUSCHE arr[j], arr[j+1], getauscht = WAHR" },
        { id: 5, text: "  ENDE FÜR" },
        { id: 6, text: "  WENN NICHT getauscht DANN VERLASSEN // Best-Case O(n)" },
        { id: 7, text: "ENDE FÜR" },
      ],
    },
    {
      id: "puzzle_fiae_5",
      title: "5. Rekursive Fakultät (Mit Basisfall)",
      difficulty: "AP2 Standard",
      description: "Rekursive Funktionen benötigen immer zuerst den Basisfall zur Vermeidung von Stack Overflows:",
      lines: [
        { id: 1, text: "FUNKTION fakultaet(n)" },
        { id: 2, text: "  WENN n <= 1 DANN" },
        { id: 3, text: "    RÜCKGABE 1 // Basisfall" },
        { id: 4, text: "  ENDE WENN" },
        { id: 5, text: "  RÜCKGABE n * fakultaet(n - 1)" },
        { id: 6, text: "ENDE FUNKTION" },
      ],
    },
    {
      id: "puzzle_fiae_6",
      title: "6. QuickSort Partitionierung (Lomuto)",
      difficulty: "AP2 Profi",
      description: "Ordne die Partitionierungs-Logik von QuickSort für den Teilschritt [links..rechts]:",
      lines: [
        { id: 1, text: "pivot = arr[rechts], i = links - 1" },
        { id: 2, text: "FÜR j = links BIS rechts - 1" },
        { id: 3, text: "  WENN arr[j] < pivot DANN" },
        { id: 4, text: "    i = i + 1, TAUSCHE arr[i], arr[j]" },
        { id: 5, text: "  ENDE WENN" },
        { id: 6, text: "ENDE FÜR" },
        { id: 7, text: "TAUSCHE arr[i + 1], arr[rechts] // Pivot platzieren" },
        { id: 8, text: "RÜCKGABE i + 1" },
      ],
    },
    {
      id: "puzzle_fiae_7",
      title: "7. Suchstrategie-Auswahl (Entscheidungsbaum)",
      difficulty: "AP2 Praxis",
      description: "Implementiere eine optimierte Suchstrategie abhängig vom Sortierstatus:",
      lines: [
        { id: 1, text: "FUNKTION optimierteSuche(daten, ziel, istSortiert)" },
        { id: 2, text: "  WENN istSortiert == WAHR DANN" },
        { id: 3, text: "    ergebnis = binaereSuche(daten, ziel) // O(log n)" },
        { id: 4, text: "    RÜCKGABE ergebnis" },
        { id: 5, text: "  SONST" },
        { id: 6, text: "    ergebnis = lineareSuche(daten, ziel) // O(n)" },
        { id: 7, text: "    RÜCKGABE ergebnis" },
        { id: 8, text: "  ENDE WENN" },
        { id: 9, text: "ENDE FUNKTION" },
      ],
    },
    {
      id: "puzzle_fiae_8",
      title: "8. Rekursive Array-Summe (Divide & Conquer)",
      difficulty: "AP2 Fortgeschritten",
      description: "Ordne die Zeilen für die rekursive Summenberechnung eines Arrays:",
      lines: [
        { id: 1, text: "FUNKTION arraySumme(arr, n)" },
        { id: 2, text: "  WENN n <= 0 DANN" },
        { id: 3, text: "    RÜCKGABE 0 // Basisfall" },
        { id: 4, text: "  ENDE WENN" },
        { id: 5, text: "  letztes = arr[n - 1]" },
        { id: 6, text: "  restSumme = arraySumme(arr, n - 1)" },
        { id: 7, text: "  RÜCKGABE letztes + restSumme" },
        { id: 8, text: "ENDE FUNKTION" },
      ],
    },
  ];

  class ExerciseEngine {
    constructor() {
      this.subMode = "trace";
      this.currentExId = "trace_fiae_1";
      this.puzzleState = [];
    }

    init() {
      this.updateStreakBadge();
      this.renderDropdown();
      this.renderCurrentExercise();
    }

    setSubMode(mode) {
      this.subMode = mode;
      const btnTrace = document.getElementById("btnSubMode-trace");
      const btnPuzzle = document.getElementById("btnSubMode-puzzle");

      if (mode === "trace") {
        if (btnTrace) btnTrace.className = "px-3.5 py-2 rounded-lg font-semibold transition-all bg-dark-accent text-white shadow-sm";
        if (btnPuzzle) btnPuzzle.className = "px-3.5 py-2 rounded-lg font-semibold transition-all text-slate-400 hover:text-white";
        this.currentExId = EXERCISES_TRACE[0].id;
      } else {
        if (btnPuzzle) btnPuzzle.className = "px-3.5 py-2 rounded-lg font-semibold transition-all bg-dark-accent text-white shadow-sm";
        if (btnTrace) btnTrace.className = "px-3.5 py-2 rounded-lg font-semibold transition-all text-slate-400 hover:text-white";
        this.currentExId = EXERCISES_PUZZLE[0].id;
      }

      this.renderDropdown();
      this.renderCurrentExercise();
    }

    renderDropdown() {
      const select = document.getElementById("exerciseSelect");
      if (!select) return;

      const list = this.subMode === "trace" ? EXERCISES_TRACE : EXERCISES_PUZZLE;
      select.innerHTML = list
        .map((ex) => {
          const isSolved = appState.solvedExercises.includes(ex.id);
          return `<option value="${ex.id}">${isSolved ? "✓ " : ""}${escapeHtml(ex.title)}</option>`;
        })
        .join("");

      select.value = this.currentExId;
    }

    renderCurrentExercise() {
      const stage = document.getElementById("exerciseStage");
      if (!stage) return;

      if (this.subMode === "trace") {
        this.renderTraceExercise(stage);
      } else {
        this.renderPuzzleExercise(stage);
      }

      if (window.lucide) lucide.createIcons();
    }

    renderTraceExercise(stage) {
      const ex = EXERCISES_TRACE.find((e) => e.id === this.currentExId) || EXERCISES_TRACE[0];
      const isSolved = appState.solvedExercises.includes(ex.id);

      stage.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-dark-border">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
                ${escapeHtml(ex.difficulty)}
              </span>
              ${isSolved ? '<span class="text-xs font-mono text-emerald-400 flex items-center gap-1">✓ Gelöst</span>' : ""}
            </div>
            <h2 class="text-base sm:text-lg font-bold text-white mt-1">${escapeHtml(ex.title)}</h2>
          </div>
          <div class="text-xs text-slate-400">
            Fülle alle freien Felder aus und klicke auf <strong>Prüfen</strong>.
          </div>
        </div>

        <div class="bg-dark-bg border border-dark-border rounded-lg p-3.5 font-mono text-xs text-slate-200 leading-relaxed custom-scroll overflow-x-auto">
          ${ex.code.map((line, i) => `<div><span class="text-slate-600 select-none pr-3 text-[10px]">${i + 1}</span>${escapeHtml(line)}</div>`).join("")}
        </div>

        <p class="text-xs text-slate-300 font-medium">${escapeHtml(ex.explanation)}</p>

        <div class="custom-scroll overflow-x-auto rounded-lg border border-dark-border">
          <table class="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr class="bg-slate-900 text-slate-300 border-b border-dark-border">
                ${ex.headers.map((h) => `<th class="p-2.5 font-bold border-r border-dark-border last:border-r-0 whitespace-nowrap">${escapeHtml(h)}</th>`).join("")}
              </tr>
            </thead>
            <tbody class="divide-y divide-dark-border/70 bg-dark-bg">
              ${ex.rows
                .map((row, rIdx) => {
                  return `
                  <tr class="hover:bg-slate-900/40 transition-colors">
                    <td class="p-2.5 font-bold text-slate-400 bg-slate-900/30 border-r border-dark-border whitespace-nowrap">${escapeHtml(row.step)}</td>
                    ${row.values
                      .map((val, cIdx) => {
                        const isLocked = row.locked[cIdx];
                        if (isLocked) {
                          return `<td class="p-2.5 text-slate-400 border-r border-dark-border last:border-r-0 text-center bg-slate-900/20">${escapeHtml(val)}</td>`;
                        }
                        return `
                          <td class="p-1 border-r border-dark-border last:border-r-0 text-center">
                            <input
                              type="text"
                              id="trace_${rIdx}_${cIdx}"
                              data-correct="${escapeHtml(val.toUpperCase())}"
                              class="trace-input w-full min-w-[75px] bg-slate-950 border border-dark-border rounded px-2 py-1.5 text-center text-xs text-white font-mono focus:border-dark-accent focus:outline-none"
                              placeholder="?"
                            />
                          </td>
                        `;
                      })
                      .join("")}
                  </tr>
                `;
                })
                .join("")}
            </tbody>
          </table>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div class="flex items-center gap-2">
            <button
              type="button"
              onclick="exerciseEngine.checkTraceTable()"
              class="px-5 py-2 bg-dark-accent hover:bg-dark-accent-hover text-white rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-purple-500/10 transition-all"
            >
              <i data-lucide="check" class="w-4 h-4"></i>
              <span>Ergebnis prüfen</span>
            </button>
            <button
              type="button"
              onclick="exerciseEngine.revealTraceHint()"
              class="px-3.5 py-2 bg-dark-bg border border-dark-border hover:border-slate-600 text-slate-300 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <i data-lucide="help-circle" class="w-3.5 h-3.5 text-amber-400"></i>
              <span>Tipp / Hilfe</span>
            </button>
          </div>

          <div id="exerciseFeedback" class="text-xs font-medium"></div>
        </div>
      `;
    }

    checkTraceTable() {
      const ex = EXERCISES_TRACE.find((e) => e.id === this.currentExId);
      if (!ex) return;

      const inputs = document.querySelectorAll(".trace-input");
      let allCorrect = true;
      let emptyCount = 0;

      inputs.forEach((input) => {
        const expected = input.getAttribute("data-correct").trim().replace(/\s+/g, "");
        const actual = input.value.trim().toUpperCase().replace(/\s+/g, "");

        input.classList.remove("correct", "wrong");

        if (!actual) {
          emptyCount++;
          allCorrect = false;
        } else if (
          actual === expected ||
          actual.includes(expected) ||
          expected.includes(actual) ||
          (expected === "JA" && actual === "WAHR") ||
          (expected === "NEIN" && actual === "FALSCH")
        ) {
          input.classList.add("correct");
        } else {
          input.classList.add("wrong");
          allCorrect = false;
        }
      });

      const feedback = document.getElementById("exerciseFeedback");
      if (allCorrect) {
        feedback.innerHTML = `<span class="text-emerald-400 flex items-center gap-1 font-bold">✓ Perfekt! Alle Tabellenwerte sind 100% korrekt gelöst.</span>`;
        this.markSolved(ex.id);
        if (window.confetti) confetti();
      } else if (emptyCount > 0) {
        feedback.innerHTML = `<span class="text-amber-400">Bitte fülle noch alle leeren Zellen mit Fragezeichen aus.</span>`;
      } else {
        feedback.innerHTML = `<span class="text-rose-400">Einige Werte stimmen noch nicht (rot markiert). Prüfe den Algorithmus noch einmal!</span>`;
      }
    }

    revealTraceHint() {
      const inputs = Array.from(document.querySelectorAll(".trace-input"));
      const firstWrongOrEmpty = inputs.find(
        (inp) => !inp.classList.contains("correct") || !inp.value.trim(),
      );

      if (firstWrongOrEmpty) {
        const expected = firstWrongOrEmpty.getAttribute("data-correct");
        firstWrongOrEmpty.value = expected;
        firstWrongOrEmpty.classList.remove("wrong");
        firstWrongOrEmpty.classList.add("correct");

        const feedback = document.getElementById("exerciseFeedback");
        if (feedback) {
          feedback.innerHTML = `<span class="text-amber-300 text-xs">Ein Feld aufgedeckt: Wert ist <strong>${escapeHtml(expected)}</strong>.</span>`;
        }
      }
    }

    renderPuzzleExercise(stage) {
      const ex = EXERCISES_PUZZLE.find((e) => e.id === this.currentExId) || EXERCISES_PUZZLE[0];
      const isSolved = appState.solvedExercises.includes(ex.id);

      if (this.puzzleState.length === 0 || this.puzzleStateExId !== ex.id) {
        this.puzzleState = [...ex.lines].sort(() => Math.random() - 0.5);
        this.puzzleStateExId = ex.id;
      }

      stage.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-dark-border">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
                ${escapeHtml(ex.difficulty)}
              </span>
              ${isSolved ? '<span class="text-xs font-mono text-emerald-400 flex items-center gap-1">✓ Gelöst</span>' : ""}
            </div>
            <h2 class="text-base sm:text-lg font-bold text-white mt-1">${escapeHtml(ex.title)}</h2>
          </div>
          <p class="text-xs text-slate-400">${escapeHtml(ex.description)}</p>
        </div>

        <p class="text-xs text-slate-300">
          Verschiebe die Code-Zeilen mit den Pfeilen <span class="font-bold text-purple-400">▲ / ▼</span> in die richtige Reihenfolge:
        </p>

        <div id="puzzleList" class="space-y-2">
          ${this.puzzleState
            .map((item, idx) => {
              return `
              <div class="puzzle-line flex items-center justify-between gap-2 sm:gap-3 bg-dark-bg border border-dark-border hover:border-slate-600 rounded-xl p-2.5 sm:p-3.5 transition-all overflow-hidden">
                <div class="flex items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs md:text-sm text-slate-200 min-w-0 flex-1 overflow-x-auto custom-scroll py-0.5">
                  <span class="text-slate-500 select-none text-[10px] w-4 text-right shrink-0">${idx + 1}</span>
                  <span class="whitespace-nowrap font-mono">${escapeHtml(item.text)}</span>
                </div>
                <div class="flex items-center gap-1 shrink-0 ml-1">
                  <button
                    type="button"
                    onclick="exerciseEngine.movePuzzleLine(${idx}, -1)"
                    ${idx === 0 ? "disabled" : ""}
                    class="p-1.5 sm:p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors active:scale-95"
                    title="Nach oben"
                    aria-label="Nach oben"
                  >
                    <i data-lucide="chevron-up" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
                  </button>
                  <button
                    type="button"
                    onclick="exerciseEngine.movePuzzleLine(${idx}, 1)"
                    ${idx === this.puzzleState.length - 1 ? "disabled" : ""}
                    class="p-1.5 sm:p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors active:scale-95"
                    title="Nach unten"
                    aria-label="Nach unten"
                  >
                    <i data-lucide="chevron-down" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
                  </button>
                </div>
              </div>
            `;
            })
            .join("")}
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onclick="exerciseEngine.checkPuzzleOrder()"
            class="px-5 py-2 bg-dark-accent hover:bg-dark-accent-hover text-white rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-purple-500/10 transition-all"
          >
            <i data-lucide="check" class="w-4 h-4"></i>
            <span>Reihenfolge prüfen</span>
          </button>
          <div id="exerciseFeedback" class="text-xs font-medium"></div>
        </div>
      `;
    }

    movePuzzleLine(index, direction) {
      const targetIdx = index + direction;
      if (targetIdx < 0 || targetIdx >= this.puzzleState.length) return;

      const temp = this.puzzleState[index];
      this.puzzleState[index] = this.puzzleState[targetIdx];
      this.puzzleState[targetIdx] = temp;

      this.renderCurrentExercise();
    }

    checkPuzzleOrder() {
      const ex = EXERCISES_PUZZLE.find((e) => e.id === this.currentExId);
      if (!ex) return;

      const isCorrect = this.puzzleState.every((item, idx) => item.id === ex.lines[idx].id);
      const feedback = document.getElementById("exerciseFeedback");

      if (isCorrect) {
        feedback.innerHTML = `<span class="text-emerald-400 flex items-center gap-1 font-bold">✓ Hervorragend! Die logische Reihenfolge ist 100% korrekt.</span>`;
        this.markSolved(ex.id);
        if (window.confetti) confetti();
      } else {
        feedback.innerHTML = `<span class="text-rose-400">Die Reihenfolge stimmt noch nicht ganz. Achte auf Initialisierung und Schleifenbedingungen!</span>`;
      }
    }

    markSolved(exId) {
      if (!appState.solvedExercises.includes(exId)) {
        appState.solvedExercises.push(exId);
        appState.streak = appState.solvedExercises.length;
        saveState(appState);
        this.updateStreakBadge();
        this.renderDropdown();
      }
    }

    updateStreakBadge() {
      const countEl = document.getElementById("streakCount");
      if (countEl) countEl.textContent = appState.solvedExercises.length;
    }
  }

  const exerciseEngine = new ExerciseEngine();
  window.exerciseEngine = exerciseEngine;

  window.setExerciseSubMode = function (mode) {
    exerciseEngine.setSubMode(mode);
  };

  window.onExerciseChange = function () {
    const sel = document.getElementById("exerciseSelect");
    if (sel) {
      exerciseEngine.currentExId = sel.value;
      exerciseEngine.renderCurrentExercise();
    }
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  window.addEventListener("DOMContentLoaded", () => {
    const initialTab = appState.currentTab || "guide";
    switchTab(initialTab);
    exerciseEngine.updateStreakBadge();
  });
})();
