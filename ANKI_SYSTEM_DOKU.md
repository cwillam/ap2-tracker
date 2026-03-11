# Dokumentation: Anki-Lernkarten System (AP2-Tracker)

## 🎯 Zielsetzung
Integration eines lokalen, datenschutzfreundlichen Lernkartensystems zur gezielten Vorbereitung auf die Abschlussprüfung Teil 2 (FIAE).

## 🛠 Technische Umsetzung
- **Architektur:** Modulare Trennung von Daten (`questions.js`), Logik (`app.js`) und UI (`index.html`).
- **Storage:** Vollständige Integration in den bestehenden `app.state`. Alle Lernstände und Statistiken werden im `localStorage` gespeichert und sind über die Import/Export-Funktion sicherbar.
- **UI/UX:**
    - Full-Screen Modal für ablenkungsfreies Lernen.
    - Mobil-optimiertes Design mit großen Touch-Zielen.
    - Dynamische Badges (`NEU` / `Checkmark`) zur Fortschrittsanzeige im Hauptmenü.
    - Zufällige Kartenreihenfolge (Fisher-Yates Shuffle) bei jedem Start.

## 🚀 Lernmodi
1. **Strategie-Modus (Spaced Repetition):**
    - Basiert auf dem Leitner-System (5 Stufen).
    - Berechnet automatische Wiederholungs-Intervalle (1, 3, 7, 14, 30 Tage).
    - Richtige Antworten steigern das Level, falsche setzen auf Stufe 1 zurück.
2. **Freies Training:**
    - Übungsmodus ohne Speicherung des Levels.
    - Ideal zum schnellen Wiederholen ("Reinpauken") aller Karten eines Themas.

## 📊 Statistik-System
- Erfassung von globalen Statistiken pro Thema:
    - Gesamtzahl der gelernten Karten.
    - Erfolgsquote in Prozent.
    - Anzahl der abgeschlossenen Sessions.

## 📝 Aktueller Inhaltsstand (Stand: 11. März 2026)
- **Thema 1.1 (Vorgehensmodelle):** 50 Karten (Scrum, Klassik, Anforderungen, Wirtschaftlichkeit, Stakeholder).
- **Thema 1.2 (OO & Patterns):** 50 Karten (Prinzipien, SOLID, Creational, Structural, Behavioral Patterns).
- **Thema 1.3 (UML):** Erste 10 Basiskarten integriert.

---
*Status: In Entwicklung (Branch: anki-cards)*
