# AP2 Tracker FIAE - Dein Lernbegleiter (v2.2.0 Update)

[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://github.com/cwillam/ap2-tracker) [![License](https://img.shields.io/badge/License-AGPLv3-blue?style=for-the-badge)](LICENSE) [![Hosting](https://img.shields.io/badge/Hosted_on-IONOS-003D51?style=for-the-badge&logo=ionos)](https://ap2.cwillam.de) [![Privacy](https://img.shields.io/badge/Privacy-100%25_Local-8b5cf6?style=for-the-badge)](https://ap2.cwillam.de)

> **Ein moderner, lokaler Fortschritts-Tracker speziell für Fachinformatiker Anwendungsentwicklung (FIAE) zur Vorbereitung auf die Abschlussprüfung Teil 2.**
> Keine Anmeldung. Kein Tracking. Deine Daten gehören dir.

---

## Live-Demo

Das Projekt ist einsatzbereit gehostet:

### 👉 [https://ap2.cwillam.de](https://ap2.cwillam.de)

---

## Über das Projekt

Der **AP2 Tracker FIAE** wurde entwickelt, um Anwendungsentwicklern eine strukturierte und detaillierte Übersicht über die komplexen Lerninhalte der Abschlussprüfung Teil 2 zu geben.

Im Gegensatz zur AP1 liegt hier der Fokus auf tiefergehenden Themen wie Software-Architektur, fortgeschrittenen SQL-Konzepten, UML-Modellierung und fachspezifischer Wirtschaftslehre.

### Highlights v2.2.0 (Fortschrittskreise & Shortcuts)

- **Modul-Fortschrittskreise:** Zirkuläre SVG-Verlaufsringe visualisieren den Lernfortschritt pro Modul und leuchten grün bei 100%.
- **Tastatur-Shortcuts:** Lernkarten-Steuerung über Leertaste, Eingabe, Pfeiltasten und Esc (ausführliche Erklärung in der Hilfe).
- **Aktivitäts-Graph:** Erhöhung des Aktivitätszeitfensters von 40 auf 80 Tage für einen besseren Lernüberblick.
- **Hilfe-System:** Integration einer ausführlichen Hilfeseite (`help.html`) mit praktischen Tipps zu Caching, Backups und Fehlerberichten.

### Highlights v2.1.0 (Lucide Icon Migration & UI-Upgrade)

- **Modernes Lucide-Header-Design:** Komplette Umstellung von FontAwesome auf ressourcenschonende, lokale Lucide-Vektorsymbole mit reaktionsschnellem Kachellayout (Violet-Theme) und neuem Code-Logo.
- **Fehlerbehebungen:** Play/Pause-Steuerung des Fokus-Timers & Widget-Zentrierung korrigiert, und der Update-Notification-Dot an der Glocke wurde präzise positioniert.

### Highlights v2.0.2 (Content Update)

- **Massiver Lernkarten-Ausbau:** Erhöhung auf 317 praxisnahe Lernkarten (+67 neue) mit Pseudocode-Beispielen (OOP, Algorithmen) und fortgeschrittenen SQL-Abfragen.
- **Optimiertes Anki-System:** Detail- und verkleinerte Antwortaufdeckung für eine bessere Fokussierung sowie aufgeteilte Listenfragen.

### Highlights v2.0 (The Content Overhaul)

- **Massiver Content-Ausbau:** Über **790 FIAE-spezifische Lernkarten** (Anki-Style) für alle Lernbereiche integriert.
- **Strategie-Modus:** Intelligentes Training mittels **Spaced Repetition** – lerne Themen basierend auf deinem Wissenstand in gewohnten Intervallen.
- **Performance Engine:** Komplett neues Rendering-System (Map-basiert) für blitzschnelle Filterung und Suche ohne UI-Verzögerung.
- **Mobile First:** Optimiertes Design für Smartphones mit fixierter Suche, verbesserten Touch-Bereichen und intuitiverer Navigation.

### Core Features

- **Themen-Fokus:** Basierend auf dem aktuellen IHK-Prüfungskatalog (2024/25) und Analysen vergangener Prüfungen.
- **Gewichtung:** Themen sind nach Relevanz markiert (Kritisch, Sehr Hoch, Hoch, Mittel).
- **Persistent Storage:** Speicherung des Lernfortschritts via `LocalStorage` (bleibt nach Neustart erhalten).
- **Smart Focus:** Der Tracker empfiehlt dir automatisch das nächste wichtigste Thema.
- **Focus Timer:** Integrierter Pomodoro-Timer für effektive Lernphasen.
- **Import/Export:** JSON-basierte Backup-Funktion deiner Daten.

---

## Tech Stack & Workflow

Dieses Projekt setzt auf maximale Performance durch "Vanilla Web Technologies".

| Bereich                 | Technologie                                                                     |
| :---------------------- | :------------------------------------------------------------------------------ |
| **Frontend**            | HTML5, Vanilla JavaScript (ES6+)                                                |
| **Styling**             | Tailwind CSS (Lokal eingebunden)                                                |
| **Icons**               | Lucide Icons (Lokal eingebunden)                                                |
| **Animation**           | Canvas Confetti                                                                 |
| **IDE**                 | VS Code                                                                         |
| **AI Pair Programming** | **Gemini + Perplexity + MiniMaxM3 API** (AI Pair Programming Unterstützung)    |

---

## Privacy by Design

Datenschutz ist hier kein Werbeslogan, sondern Architektur:

1. **Keine Cookies:** Es werden keine Tracking-Cookies gesetzt.
2. **Keine externen Requests:** Alle Bibliotheken liegen lokal auf dem Server. Es fließen keine Daten an externe CDNs.
3. **Local Data:** Alle User-Eingaben bleiben ausschließlich auf dem Endgerät des Nutzers.
4. **Storage-Security:** Proaktive Überwachung verhindert Datenverlust bei vollem Speicher.

---

## Updates & Changelog

Alle Änderungen sind im Detail im [Changelog](updates.html) dokumentiert.

**Aktuelle Version:** v2.2.0 (23. Juni 2026)

- Modul-Fortschrittskreise: Zirkuläre SVG-Fortschrittsanzeigen pro Lernfeld
- Tastatur-Shortcuts für Lernkarten (Leertaste, Pfeiltasten, Esc)
- Erhöhung des Aktivitätsverlaufs von 40 auf 80 Tage
- Hilfe-System (help.html) mit Fehlerberichts-Links und FAQ

### v2.1.0 (23. Juni 2026)

- Lucide-Icons & Header-Redesign im Violet-Theme mit Code-Logo
- Fokus-Timer Play/Pause & Widget-Zentrierung korrigiert
- Notification-Dot Glocken-Ausrichtung optimiert

---

## Roadmap

- [ ] **Prüfungs-Simulator:** Zufällige Fragenkombinationen zur Simulation der echten Abschlussprüfung.
- [ ] **Detaillierte Lernzettel:** Download-Bereich für komprimierte Zusammenfassungen (Cheat Sheets).
- [ ] **PWA Support:** Installation als App auf dem Homescreen.

---

## Disclaimer

_Alle Lerninhalte wurden nach bestem Wissen und Gewissen auf Basis der aktuellen IHK-Prüfungskataloge zusammengestellt. Ich übernehme jedoch keine Gewähr für die Vollständigkeit oder Richtigkeit der prüfungsrelevanten Themen._

---

## Support

Gefällt dir das Projekt? Unterstütze meine Arbeit gerne mit einem Kaffee!

<a href="https://www.buymeacoffee.com/cwillam" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

---

## Lizenz

Dieses Projekt ist unter der **GNU Affero General Public License v3.0 (AGPLv3)** lizenziert.
