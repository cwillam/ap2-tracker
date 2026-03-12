# Dokumentation: Anki-Lernkarten System (AP2-Tracker v2.0)

## 🎯 Zielsetzung
Integration eines lokalen, datenschutzfreundlichen Lernkartensystems zur gezielten Vorbereitung auf die Abschlussprüfung Teil 2 (FIAE). Das System ermöglicht effizientes Lernen durch wissenschaftlich fundierte Methoden direkt im Browser.

## 🛠 Technische Umsetzung
- **Architektur:** Modulare Trennung von Daten (`questions.js`), Logik (`app.js`) und UI (`index.html`).
- **Storage:** Vollständige Integration in den bestehenden `app.state`. Alle Lernstände und Statistiken werden im `localStorage` gespeichert und sind über die globale Import/Export-Funktion sicherbar.
- **UI/UX (v2.0 Updates):**
    - **Zentriertes Design:** Vollständige vertikale und horizontale Zentrierung aller Lerninhalte (Fragen, Antworten, Abschluss-View) für maximale Fokussierung.
    - **Mobil-Optimierung:** Angepasster Modal-Header, der Titeln mehr Raum gibt und Bedienelemente (X-Button) sauber trennt.
    - **Adaptive Steuerung:** Buttons zur Bewertung ("Sicher gewusst" / "Nicht gewusst") sind jetzt fest in die Antwortansicht integriert, um Fehlbedienungen zu vermeiden.
    - **Zufalls-Logik:** Automatischer Shuffle der Karten bei jedem Sitzungsstart.

## 🚀 Lernmodi
1. **Strategie-Modus (Spaced Repetition):**
    - Implementierung eines intelligenten Intervall-Systems (5 Stufen).
    - Berechnet automatische Wiederholungs-Intervalle.
    - **Logik:** Richtige Antworten steigern das Level der Karte, falsche Antworten setzen sie konsequent auf Stufe 1 zurück, um Wissenslücken sofort zu schließen.
2. **Freies Training:**
    - Modus zum klassischen "Reinpauken" ohne Beeinflussung der Spaced-Repetition-Level.
    - Ideal für die kurzfristige Wiederholung unmittelbar vor der Prüfung.

## 📊 Statistik & Session-Tracking
- **Sitzungs-Logik (v2.0):** Eine Session wird jetzt **sofort beim Start** eines Modus gezählt (`sessions++`). Dies stellt sicher, dass auch angebrochene Lernphasen in der Statistik erfasst werden.
- **Themen-Statistik:** Detailanzeige pro Modul im Lern-Modal:
    - Anzahl der durchgeführten Sitzungen.
    - Gesamtzahl der absolvierten Kartenabfragen.
    - Durchschnittliche Erfolgsquote (Richtig/Falsch Verhältnis).

## 📝 Inhaltskatalog (Stand: v2.0 - 12. März 2026)
Das System umfasst aktuell **790 spezialisierte Lernkarten**, aufgeteilt in exakt 10 Karten pro Unterthema:

- **Modul 1: Planung & Projektmanagement**
    - 1.1 Vorgehensmodelle (Scrum, Klassik, Analyse, Wirtschaft, Stakeholder) - 50 Karten
    - 1.2 OO & Design Patterns (SOLID, Erzeugung, Struktur, Verhalten) - 50 Karten
    - 1.3 UML-Modellierung (Struktur-, Verhaltens-, Interaktionsdiagramme) - 10 Karten (Basis)
    - 1.4 Software-Architektur (Schichten, REST, Datenaustausch, Webservices, Messaging) - 50 Karten
    - 1.5 UI/UX & Ergonomie (Usability, Barrierefreiheit, Design-Prozess, Farblehre) - 40 Karten

- **Modul 2: Algorithmen & Datenbanken**
    - 2.1 Algorithmen (Struktogramme, Rekursion, Sortierung, O-Notation, Exceptions) - 70 Karten
    - 2.2 DB-Design (ERM, Keys, Normalisierung 1-3, Integrität, NoSQL) - 50 Karten
    - 2.3 Fortgeschrittenes SQL (JOINs, Aggregation, DML, DDL, Performance, ACID, Trigger) - 80 Karten

- **Modul 3: Netzwerk & Sicherheit**
    - 3.1 Netzwerktechnik (OSI, Dienste, IPv6, Virtualisierung, Cloud) - 50 Karten
    - 3.2 IT-Sicherheit (Schutzziele, Kryptografie, PKI, Bedrohungen, Abwehr) - 50 Karten
    - 3.3 Qualitätssicherung (Teststufen, Methoden, Coverage, TDD, Git, CI/CD) - 60 Karten
    - 3.4 Datenschutz & Recht (DSGVO, TOMs, AVV, Urheberrecht, Lizenzen) - 50 Karten

- **Modul 4: Wirtschafts- & Sozialkunde (WISO)**
    - 4.1 Arbeits- & Tarifrecht (BBiG, Gesetze, Streik, Mitbestimmung, Sozialversicherung) - 50 Karten
    - 4.2 Betrieb & Markt (Rechtsformen, Marktformen, Ziele, Marketing, UWG) - 50 Karten
    - 4.3 Finanzierung & Buchführung (Netto-Berechnung, KLR, Break-Even, USt) - 40 Karten
    - 4.4 Nachhaltigkeit & Gesellschaft (Umwelt, Globalisierung, Fortbildung, Ethik) - 40 Karten

---
*Dokumentation aktualisiert für Release v2.0 (Branch: anki-cards)*
