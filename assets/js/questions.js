/**
 * LERNKARTEN-DATENBANK (ANKI-STYLE)
 * 
 * Struktur: topicId -> Array von Cards
 * Jedes Card-Objekt: { id, q, a }
 */

window.ANKI_QUESTIONS = {
  // --- MODUL 1: PLANEN ---

  // Topic 1.1: Vorgehensmodelle & Analyse (50 Karten)
  '1.1': [
    // --- Unterpunkt 1: Scrum (10 Karten) ---
    { id: '1.1_1', q: 'Nenne die drei Rollen in einem Scrum-Team.', a: '1. Product Owner (PO), 2. Scrum Master (SM), 3. Developer (Entwickler-Team).' },
    { id: '1.1_2', q: 'Welche 5 Events (Ereignisse) gibt es in Scrum?', a: '1. Der Sprint, 2. Sprint Planning, 3. Daily Scrum, 4. Sprint Review, 5. Sprint Retrospektive.' },
    { id: '1.1_3', q: 'Was sind die drei Artefakte in Scrum?', a: '1. Product Backlog, 2. Sprint Backlog, 3. Inkrement (Produkt-Zuwachs).' },
    { id: '1.1_4', q: 'Was versteht man unter der "Definition of Done" (DoD)?', a: 'Eine formale Checkliste von Qualitätskriterien, die ein Inkrement erfüllen muss, um als fertig und auslieferbar zu gelten.' },
    { id: '1.1_5', q: 'Was ist das Ziel des "Sprint Review" am Ende des Sprints?', a: 'Überprüfung des Inkrements (Was wurde geschafft?) und Einholen von Feedback der Stakeholder zur Anpassung des Backlogs.' },
    { id: '1.1_6', q: 'Was ist der Hauptzweck der "Sprint Retrospektive"?', a: 'Analyse der Zusammenarbeit im Team (Prozesse, Tools, Menschen) und Planung von Verbesserungen für den nächsten Sprint.' },
    { id: '1.1_7', q: 'Wer ist in Scrum für die Maximierung des Produktwerts verantwortlich?', a: 'Der Product Owner (PO).' },
    { id: '1.1_8', q: 'Nenne die 3 Säulen von Scrum (empirische Prozesssteuerung).', a: '1. Transparenz (Transparency), 2. Überprüfung (Inspection), 3. Anpassung (Adaptation).' },
    { id: '1.1_9', q: 'Nenne die 5 Scrum-Werte.', a: 'Mut (Courage), Fokus, Commitment, Respekt, Offenheit (Openness).' },
    { id: '1.1_10', q: 'Was ist das Sprint-Ziel (Sprint Goal) und wer legt es fest?', a: 'Es beschreibt den Zweck des Sprints und wird im Planning gemeinsam vom Team festgelegt.' },

    // --- Unterpunkt 2: Klassische Modelle (10 Karten) ---
    { id: '1.1_11', q: 'Was ist das Hauptmerkmal des Wasserfallmodells?', a: 'Linearer, sequenzieller Ablauf in festen Phasen. Eine Phase muss beendet sein, bevor die nächste beginnt.' },
    { id: '1.1_12', q: 'Wofür stehen die beiden Schenkel des V-Modells?', a: 'Links: Spezifikation (Entwurf), Rechts: Verifikation (Teststufen), Mitte: Realisierung.' },
    { id: '1.1_13', q: 'Was ist der Fokus des Spiralmodells nach Boehm?', a: 'Risikomanagement. Das Projekt wird in Zyklen durchlaufen, wobei nach jedem Schritt die Risiken bewertet werden.' },
    { id: '1.1_14', q: 'Nenne einen Vorteil und einen Nachteil des Wasserfallmodells.', a: 'Vorteil: Gute Planung und Dokumentation. Nachteil: Sehr unflexibel bei Änderungen während der Entwicklung.' },
    { id: '1.1_15', q: 'Was ist der Unterschied zwischen Verifikation und Validierung?', a: 'Verifikation: "Bauen wir das Produkt richtig?" (Code-Prüfung). Validierung: "Bauen wir das richtige Produkt?" (Erfüllt es den Kundennutzen?).' },
    { id: '1.1_16', q: 'Was versteht man unter inkrementeller Entwicklung?', a: 'Das Produkt wird in kleinen, funktionsfähigen Teilen nacheinander aufgebaut und erweitert.' },
    { id: '1.1_17', q: 'Was ist die Meilenstein-Trendanalyse (MTA)?', a: 'Ein Tool zur Terminüberwachung. Meilenstein-Termine werden regelmäßig geschätzt und in einer Grafik auf Zeitverzögerungen geprüft.' },
    { id: '1.1_18', q: 'Was ist der "Kritische Pfad" in einem Netzplan?', a: 'Die Kette von Vorgängen, bei denen es keinen Puffer gibt. Verzögert sich ein Vorgang hier, verzögert sich das gesamte Projekt.' },
    { id: '1.1_19', q: 'Was beschreibt das "Magische Dreieck" des Projektmanagements?', a: 'Die Zielgrößen Zeit, Kosten und Qualität/Leistung, die in gegenseitiger Abhängigkeit stehen.' },
    { id: '1.1_20', q: 'Was ist der Unterschied zwischen einem Arbeitspaket und einem Meilenstein?', a: 'Arbeitspaket: Tätigkeit mit Zeitaufwand und Ergebnis. Meilenstein: Ein Zeitpunkt oder Ereignis von besonderer Bedeutung (Dauer = 0).' },

    // --- Unterpunkt 3: Anforderungsmanagement (10 Karten) ---
    { id: '1.1_21', q: 'Unterschied Lastenheft vs. Pflichtenheft.', a: 'Lastenheft (vom Auftraggeber): "Was" soll gemacht werden? Pflichtenheft (vom Auftragnehmer): "Wie" wird es umgesetzt?' },
    { id: '1.1_22', q: 'Was sind Funktionale Anforderungen?', a: 'Sie beschreiben konkrete Funktionen des Systems (z.B. "Nutzer kann Passwort zurücksetzen").' },
    { id: '1.1_23', q: 'Was sind Nicht-funktionale Anforderungen (NFA)?', a: 'Sie beschreiben Rahmenbedingungen wie Performance, Sicherheit, Usability oder Verfügbarkeit.' },
    { id: '1.1_24', q: 'Wofür steht INVEST bei User Stories?', a: 'Independent, Negotiable, Valuable, Estimable, Small, Testable.' },
    { id: '1.1_25', q: 'Was beschreibt ein Use Case (Anwendungsfall)?', a: 'Die Interaktion zwischen einem Akteur und dem System zur Erreichung eines fachlichen Ziels.' },
    { id: '1.1_26', q: 'Was ist die MoSCoW-Methode zur Priorisierung?', a: 'Must have, Should have, Could have, Won\'t have (this time).' },
    { id: '1.1_27', q: 'Nenne drei Methoden zur Anforderungserhebung.', a: 'Interview, Fragebogen, Workshop, Beobachtung, Berichtsanalyse.' },
    { id: '1.1_28', q: 'Was ist ein "Change Request"?', a: 'Ein formaler Antrag auf Änderung einer bereits abgestimmten Anforderung während der Projektlaufzeit.' },
    { id: '1.1_29', q: 'Was versteht man unter "Scope Creep"?', a: 'Die schleichende, unkontrollierte Ausweitung des Projektumfangs ohne Anpassung von Zeit oder Budget.' },
    { id: '1.1_30', q: 'Nenne die 3 C\'s einer User Story.', a: 'Card (Kurze Beschreibung), Conversation (Dialog über Details), Confirmation (Akzeptanzkriterien).' },

    // --- Unterpunkt 4: Wirtschaftlichkeit (10 Karten) ---
    { id: '1.1_31', q: 'Was ist das Ziel einer Nutzwertanalyse (NWA)?', a: 'Die rationale Entscheidung zwischen Alternativen anhand gewichteter, nicht-monetärer Kriterien.' },
    { id: '1.1_32', q: 'Wie berechnet man die Amortisationsdauer?', a: 'Investitionskosten / Jährlicher Rückfluss (Gewinn + Abschreibung).' },
    { id: '1.1_33', q: 'Was bedeutet TCO (Total Cost of Ownership)?', a: 'Gesamtkosten eines Produkts über den gesamten Lebenszyklus (Anschaffung + Betrieb + Wartung + Entsorgung).' },
    { id: '1.1_34', q: 'Was ist der Return on Investment (ROI)?', a: 'Das Verhältnis von Gewinn zu eingesetztem Kapital. Zeigt die Rentabilität an.' },
    { id: '1.1_35', q: 'Unterschied Fixe vs. Variable Kosten.', a: 'Fixkosten: Unabhängig von der Produktionsmenge (z.B. Miete). Variable Kosten: Abhängig von der Menge (z.B. Rohstoffe, Lizenzen).' },
    { id: '1.1_36', q: 'Was ist der Break-Even-Point?', a: 'Die Gewinnschwelle. Der Punkt, an dem Erlöse und Gesamtkosten gleich hoch sind.' },
    { id: '1.1_37', q: 'Was prüft eine Machbarkeitsstudie?', a: 'Ob ein Projekt technisch, wirtschaftlich, zeitlich, rechtlich und organisatorisch umsetzbar ist.' },
    { id: '1.1_38', q: 'Was ist eine Make-or-Buy Entscheidung?', a: 'Die Abwägung, ob eine Software/Komponente selbst entwickelt oder fertig gekauft werden soll.' },
    { id: '1.1_39', q: 'Was ist der Unterschied zwischen Abschreibung (AfA) und Investition?', a: 'Investition: Einmalige Auszahlung für ein Gut. Abschreibung: Verteilung dieser Kosten über die Jahre der Nutzung als Aufwand.' },
    { id: '1.1_40', q: 'Was beschreibt der "Deckungsbeitrag"?', a: 'Der Erlös abzüglich der variablen Kosten. Er dient dazu, die Fixkosten des Unternehmens zu decken.' },

    // --- Unterpunkt 5: Stakeholder & Umfeld (10 Karten) ---
    { id: '1.1_41', q: 'Wer ist ein Stakeholder?', a: 'Alle Personen oder Gruppen, die ein berechtigtes Interesse am Projekt haben oder davon betroffen sind.' },
    { id: '1.1_42', q: 'Wie klassifiziert man Stakeholder in einer Matrix?', a: 'Nach "Einfluss/Macht" und "Interesse" am Projekt.' },
    { id: '1.1_43', q: 'Wofür steht die PESTEL-Analyse beim Projektumfeld?', a: 'Political, Economic, Social, Technological, Environmental, Legal.' },
    { id: '1.1_44', q: 'Was ist eine SWOT-Analyse?', a: 'Analyse von Stärken (Strengths), Schwächen (Weaknesses), Chancen (Opportunities) und Risiken (Threats).' },
    { id: '1.1_45', q: 'Nenne drei Strategien im Stakeholder-Management.', a: 'Partizipativ (Einbeziehen), Diskursiv (Dialog), Restriktiv (Nur Info).' },
    { id: '1.1_46', q: 'Was wird in einer Risikomatrix bewertet?', a: 'Eintrittswahrscheinlichkeit und Schadensausmaß eines Risikos.' },
    { id: '1.1_47', q: 'Was ist eine Matrix-Projektorganisation?', a: 'Mitarbeiter bleiben in ihren Fachabteilungen, arbeiten aber für das Projekt. Es gibt zwei Vorgesetzte.' },
    { id: '1.1_48', q: 'Nenne drei Bestandteile eines Projektauftrags.', a: 'Projektziel, Budget, Zeitrahmen, Meilensteine, Verantwortlichkeiten.' },
    { id: '1.1_49', q: 'Was ist der Unterschied zwischen internen und externen Stakeholdern?', a: 'Intern: Aus dem eigenen Unternehmen (Mitarbeiter, Manager). Extern: Von außerhalb (Kunden, Lieferanten, Behörden).' },
    { id: '1.1_50', q: 'Was ist die Akzeptanzanalyse?', a: 'Die Untersuchung, wie positiv oder negativ Stakeholder der geplanten Veränderung gegenüberstehen.' }
  ],

  // Topic 1.2: Objektorientierung & Design Patterns (50 Karten)
  '1.2': [
    // --- Unterpunkt 1: OO-Prinzipien (10 Karten) ---
    { id: '1.2_1', q: 'Was beschreibt das Prinzip der "Abstraktion"?', a: 'Die Reduktion komplexer Realitäten auf die für das System wesentlichen Merkmale.' },
    { id: '1.2_2', q: 'Was ist "Kapselung" (Encapsulation)?', a: 'Das Verbergen von Daten vor direktem Zugriff. Kommunikation erfolgt nur über Methoden (Getter/Setter).' },
    { id: '1.2_3', q: 'Erkläre den Begriff "Polymorphie" (Vielgestaltigkeit).', a: 'Verschiedene Klassen können die gleiche Methode unterschiedlich implementieren. Ein Aufrufer muss den genauen Typ nicht kennen.' },
    { id: '1.2_4', q: 'Was ist der Unterschied zwischen Überschreiben (Override) und Überladen (Overload)?', a: 'Überschreiben: Gleiche Signatur in Subklasse. Überladen: Gleicher Name, aber unterschiedliche Parameter in der gleichen Klasse.' },
    { id: '1.2_5', q: 'Was ist eine abstrakte Klasse?', a: 'Eine Klasse, von der keine Instanz erzeugt werden kann. Sie dient als Bauplan für Subklassen.' },
    { id: '1.2_6', q: 'Was ist ein Interface (Schnittstelle)?', a: 'Ein reiner Vertrag, der Methodenköpfe ohne Implementierung vorgibt. Eine Klasse kann mehrere Interfaces implementieren.' },
    { id: '1.2_7', q: 'Was bedeutet Vererbung (Inheritance)?', a: 'Eine Klasse übernimmt Attribute und Methoden einer Basisklasse (Ist-ein-Beziehung).' },
    { id: '1.2_8', q: 'Was ist ein Konstruktor?', a: 'Eine spezielle Methode, die beim Erzeugen eines Objekts aufgerufen wird, um es zu initialisieren.' },
    { id: '1.2_9', q: 'Was bedeutet Sichtbarkeit "protected"?', a: 'Zugriff ist nur innerhalb der eigenen Klasse und deren Subklassen möglich.' },
    { id: '1.2_10', q: 'Was ist der Unterschied zwischen Klasse und Objekt?', a: 'Die Klasse ist der Bauplan (statisch), das Objekt ist die konkrete Instanz während der Laufzeit (dynamisch).' },

    // --- Unterpunkt 2: SOLID-Prinzipien (10 Karten) ---
    { id: '1.2_11', q: 'Wofür steht das "S" in SOLID?', a: 'Single Responsibility Principle (SRP): Eine Klasse sollte nur genau einen Grund zur Änderung haben.' },
    { id: '1.2_12', q: 'Wofür steht das "O" in SOLID?', a: 'Open/Closed Principle: Software-Einheiten sollten offen für Erweiterungen, aber geschlossen für Modifikationen sein.' },
    { id: '1.2_13', q: 'Wofür steht das "L" in SOLID?', a: 'Liskov Substitution Principle: Subtypen müssen sich so verhalten wie ihre Basistypen (austauschbar sein).' },
    { id: '1.2_14', q: 'Wofür steht das "I" in SOLID?', a: 'Interface Segregation Principle: Clients sollten nicht gezwungen werden, von Interfaces abzuhängen, die sie nicht nutzen.' },
    { id: '1.2_15', q: 'Wofür steht das "D" in SOLID?', a: 'Dependency Inversion Principle: Hänge von Abstraktionen ab, nicht von konkreten Implementierungen.' },
    { id: '1.2_16', q: 'Was ist der Hauptvorteil von SOLID?', a: 'Erhöhte Wartbarkeit, Testbarkeit und Flexibilität des Codes.' },
    { id: '1.2_17', q: 'Was passiert, wenn man das SRP verletzt?', a: 'Es entstehen "Gott-Objekte", die zu komplex sind und bei jeder kleinen Änderung Fehler an anderen Stellen verursachen.' },
    { id: '1.2_18', q: 'Welches Prinzip wird durch "Dependency Injection" oft umgesetzt?', a: 'Das Dependency Inversion Principle (DIP).' },
    { id: '1.2_19', q: 'Warum ist das Open/Closed Principle wichtig?', a: 'Damit man neue Funktionen hinzufügen kann, ohne bestehenden (und getesteten) Code ändern zu müssen.' },
    { id: '1.2_20', q: 'Was ist das Ziel des Interface Segregation Principle?', a: 'Vermeidung von "fetten" Interfaces. Lieber viele kleine, spezifische Schnittstellen.' },

    // --- Unterpunkt 3: Erzeugungsmuster / Creational (10 Karten) ---
    { id: '1.2_21', q: 'Was ist der Zweck des Singleton-Patterns?', a: 'Sicherstellen, dass von einer Klasse nur genau eine Instanz existiert.' },
    { id: '1.2_22', q: 'Wie verhindert man beim Singleton das Erzeugen neuer Instanzen?', a: 'Indem man den Konstruktor auf "private" setzt.' },
    { id: '1.2_23', q: 'Was macht die "Factory Method"?', a: 'Sie definiert ein Interface zur Erstellung eines Objekts, lässt aber die Subklassen entscheiden, welche Klasse instanziiert wird.' },
    { id: '1.2_24', q: 'Wann nutzt man das Builder-Pattern?', a: 'Wenn die Erzeugung eines komplexen Objekts aus vielen Teilen besteht oder viele optionale Parameter hat.' },
    { id: '1.2_25', q: 'Was ist die "Abstract Factory"?', a: 'Ein Muster zur Bereitstellung einer Schnittstelle für die Erzeugung ganzer Familien von Objekten (z.B. verschiedene UI-Themes).' },
    { id: '1.2_26', q: 'Was ist das Prototype-Pattern?', a: 'Erzeugung neuer Objekte durch Kopieren (Klonen) eines vorhandenen Objekts.' },
    { id: '1.2_27', q: 'Nenne ein Problem des Singleton-Patterns.', a: 'Erschwert das Unit-Testing (globaler Zustand) und verletzt oft das Single Responsibility Principle.' },
    { id: '1.2_28', q: 'Unterschied Factory vs. Builder.', a: 'Factory erzeugt ein Objekt in einem Schritt. Builder baut es Schritt für Schritt zusammen.' },
    { id: '1.2_29', q: 'Was bedeutet "Lazy Initialization" beim Singleton?', a: 'Die Instanz wird erst in dem Moment erzeugt, in dem sie zum ersten Mal angefordert wird.' },
    { id: '1.2_30', q: 'Wann ist das Prototype-Pattern sinnvoll?', a: 'Wenn die Instanziierung einer Klasse sehr teuer oder komplex ist (z.B. Datenbank-Abfragen nötig).' },

    // --- Unterpunkt 4: Strukturmuster / Structural (10 Karten) ---
    { id: '1.2_31', q: 'Was macht ein Adapter-Pattern?', a: 'Es passt die Schnittstelle einer Klasse an eine andere Schnittstelle an, die der Client erwartet.' },
    { id: '1.2_32', q: 'Was ist der Zweck des Facade-Patterns?', a: 'Bereitstellung einer vereinfachten Schnittstelle zu einer komplexen Menge von Klassen (Subsystem).' },
    { id: '1.2_33', q: 'Was macht ein Decorator?', a: 'Er fügt einem Objekt dynamisch neue Funktionalitäten hinzu, ohne dessen Klasse zu ändern.' },
    { id: '1.2_34', q: 'Was ist ein Proxy-Pattern?', a: 'Ein Stellvertreter für ein anderes Objekt, um den Zugriff zu kontrollieren oder zu optimieren (z.B. Remote Proxy, Cache Proxy).' },
    { id: '1.2_35', q: 'Unterschied Decorator vs. Vererbung.', a: 'Vererbung erweitert statisch zur Kompilierzeit. Decorator erweitert dynamisch zur Laufzeit.' },
    { id: '1.2_36', q: 'Was ist das Composite-Pattern?', a: 'Es erlaubt, Gruppen von Objekten genauso zu behandeln wie Einzelobjekte (Baumstruktur).' },
    { id: '1.2_37', q: 'Was ist der Sinn des Bridge-Patterns?', a: 'Entkopplung einer Abstraktion von ihrer Implementierung, sodass beide unabhängig voneinander variieren können.' },
    { id: '1.2_38', q: 'Wann nutzt man das Facade-Pattern?', a: 'Um die Kopplung zwischen einem Client und einem komplexen Subsystem zu minimieren.' },
    { id: '1.2_39', q: 'Was ist ein typisches Beispiel für den Decorator?', a: 'Java I/O Streams (z.B. BufferedInputStream(FileInputStream)).' },
    { id: '1.2_40', q: 'Was macht das Flyweight-Pattern?', a: 'Es teilt Objekte, um Speicherplatz zu sparen, wenn viele ähnliche Objekte benötigt werden.' },

    // --- Unterpunkt 5: Verhaltensmuster / Behavioral (10 Karten) ---
    { id: '1.2_41', q: 'Was ist das Observer-Pattern?', a: 'Eine 1-zu-n-Abhängigkeit. Wenn sich ein Objekt ändert, werden alle abhängigen Objekte (Beobachter) benachrichtigt.' },
    { id: '1.2_42', q: 'Was macht das Strategy-Pattern?', a: 'Es definiert eine Familie von Algorithmen, kapselt sie und macht sie austauschbar.' },
    { id: '1.2_43', q: 'Was ist das Ziel des MVC-Musters?', a: 'Trennung von Daten (Model), Darstellung (View) und Steuerung (Controller).' },
    { id: '1.2_44', q: 'Was macht das State-Pattern?', a: 'Es erlaubt einem Objekt, sein Verhalten zu ändern, wenn sein interner Zustand sich ändert.' },
    { id: '1.2_45', q: 'Was macht das Command-Pattern?', a: 'Es kapselt einen Befehl als Objekt. Dies erlaubt Undo-Operationen und Warteschlangen.' },
    { id: '1.2_46', q: 'Was ist das Template-Method-Pattern?', a: 'Es legt das Skelett eines Algorithmus fest und überlässt die Details den Subklassen.' },
    { id: '1.2_47', q: 'Was macht ein Iterator?', a: 'Er erlaubt den sequenziellen Zugriff auf Elemente einer Sammlung, ohne deren Struktur offenzulegen.' },
    { id: '1.2_48', q: 'Unterschied Strategy vs. State.', a: 'Strategy wird meist vom Client gewählt. State ändert sich oft automatisch durch Aktionen des Objekts.' },
    { id: '1.2_49', q: 'Wofür ist der Controller im MVC verantwortlich?', a: 'Er nimmt Benutzereingaben entgegen, verarbeitet sie und aktualisiert Model oder View.' },
    { id: '1.2_50', q: 'Was macht die Chain of Responsibility?', a: 'Sie gibt eine Anfrage entlang einer Kette von Empfängern weiter, bis einer sie bearbeitet.' }
  ],

  // Topic 1.3: UML-Modellierung (10 Karten)
  '1.3': [
    { id: '1.3_1', q: 'Was ist der Unterschied zwischen Aggregation und Komposition im Klassendiagramm?', a: 'Aggregation (leere Raute): Das Teil kann unabhängig vom Ganzen existieren. Komposition (gefüllte Raute): Das Teil existiert nicht ohne das Ganze (Existenzabhängigkeit).' },
    { id: '1.3_2', q: 'Wofür steht die Abkürzung UML?', a: 'Unified Modeling Language.' },
    { id: '1.3_3', q: 'Nenne die drei Hauptkategorien von UML-Diagrammen.', a: 'Strukturdiagramme, Verhaltensdiagramme, Interaktionsdiagramme.' },
    { id: '1.3_4', q: 'Was zeigt ein Klassendiagramm?', a: 'Die statische Struktur eines Systems: Klassen, Attribute, Methoden und deren Beziehungen.' },
    { id: '1.3_5', q: 'Was ist der Zweck eines Use-Case-Diagramms?', a: 'Die Darstellung der funktionalen Anforderungen aus Sicht der Akteure.' },
    { id: '1.3_6', q: 'Was zeigt ein Sequenzdiagramm?', a: 'Den zeitlichen Ablauf der Interaktion zwischen Objekten.' },
    { id: '1.3_7', q: 'Was beschreibt ein Zustandsdiagramm?', a: 'Die verschiedenen Zustände eines Objekts und die Ereignisse, die zu Zustandswechseln führen.' },
    { id: '1.3_8', q: 'Was ist eine Generalisierung in UML?', a: 'Eine "Ist-ein"-Beziehung (Vererbung). Eine spezialisierte Klasse übernimmt Merkmale einer allgemeinen Klasse.' },
    { id: '1.3_9', q: 'Was bedeutet die Multiplizität 1..*?', a: 'Mindestens eins, nach oben offen (beliebig viele).' },
    { id: '1.3_10', q: 'Was stellt ein Aktivitätsdiagramm dar?', a: 'Den logischen Ablauf eines Prozesses oder Algorithmus (ähnlich einem Flussdiagramm).' }
  ]
};
