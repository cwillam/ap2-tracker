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

  // Topic 1.3: UML-Modellierung (50 Karten)
  '1.3': [
    { id: '1.3_1', q: 'Was ist der Unterschied zwischen Aggregation und Komposition in UML?', a: 'Aggregation (leere Raute): Das Teil kann unabhängig vom Ganzen existieren. Komposition (gefüllte Raute): Das Teil existiert nicht ohne das Ganze.' },
    { id: '1.3_2', q: 'Wofür steht die Abkürzung UML?', a: 'Unified Modeling Language.' },
    { id: '1.3_3', q: 'Nenne die drei Hauptkategorien von UML-Diagrammen.', a: 'Strukturdiagramme, Verhaltensdiagramme, Interaktionsdiagramme.' },
    { id: '1.3_4', q: 'Was zeigt ein Klassendiagramm?', a: 'Die statische Struktur eines Systems: Klassen, Attribute, Methoden und deren Beziehungen.' },
    { id: '1.3_5', q: 'Was ist der Zweck eines Use-Case-Diagramms?', a: 'Die Darstellung der funktionalen Anforderungen aus Sicht der Akteure.' },
    { id: '1.3_6', q: 'Was zeigt ein Sequenzdiagramm?', a: 'Den zeitlichen Ablauf der Interaktion zwischen Objekten.' },
    { id: '1.3_7', q: 'Was beschreibt ein Zustandsdiagramm?', a: 'Die verschiedenen Zustände eines Objekts und die Ereignisse, die zu Zustandswechseln führen.' },
    { id: '1.3_8', q: 'Was ist eine Generalisierung in UML?', a: 'Eine "Ist-ein"-Beziehung (Vererbung). Eine spezialisierte Klasse übernimmt Merkmale einer allgemeinen Klasse.' },
    { id: '1.3_9', q: 'Was bedeutet die Multiplizität 1..*?', a: 'Mindestens eins, nach oben offen (beliebig viele).' },
    { id: '1.3_10', q: 'Was stellt ein Aktivitätsdiagramm dar?', a: 'Den logischen Ablauf eines Prozesses oder Algorithmus (ähnlich einem Flussdiagramm).' },
    { id: '1.3_11', q: 'Was zeigt ein Objektdiagramm?', a: 'Eine Momentaufnahme der Instanzen (Objekte) und ihrer Beziehungen zu einem bestimmten Zeitpunkt.' },
    { id: '1.3_12', q: 'Wozu dient ein Paketdiagramm?', a: 'Zur logischen Gruppierung von Modellelementen und zur Darstellung von Abhängigkeiten zwischen Paketen.' },
    { id: '1.3_13', q: 'Was beschreibt ein Komponentendiagramm?', a: 'Die modulare Struktur des Systems: Komponenten, ihre Schnittstellen und Abhängigkeiten.' },
    { id: '1.3_14', q: 'Was ist der Fokus eines Verteilungsdiagramms (Deployment Diagram)?', a: 'Die physische Hardware (Knoten) und die darauf installierte Software (Artefakte).' },
    { id: '1.3_15', q: 'Was bedeutet das Sichtbarkeitssymbol "+" in UML?', a: 'Public: Das Element ist für alle anderen Klassen sichtbar.' },
    { id: '1.3_16', q: 'Was bedeutet das Sichtbarkeitssymbol "-" in UML?', a: 'Private: Nur die Klasse selbst kann das Element sehen/nutzen.' },
    { id: '1.3_17', q: 'Was bedeutet das Sichtbarkeitssymbol "#" in UML?', a: 'Protected: Sichtbar für die Klasse selbst und ihre Subklassen.' },
    { id: '1.3_18', q: 'Was bedeutet das Sichtbarkeitssymbol "~" in UML?', a: 'Package: Sichtbar für alle Klassen innerhalb desselben Pakets.' },
    { id: '1.3_19', q: 'Wie werden abstrakte Klassen in UML dargestellt?', a: 'Der Klassenname wird kursiv geschrieben oder mit dem Stereotyp <<abstract>> versehen.' },
    { id: '1.3_20', q: 'Wie kennzeichnet man statische Attribute oder Methoden?', a: 'Sie werden unterstrichen dargestellt.' },
    { id: '1.3_21', q: 'Wie wird ein Interface in einem Klassendiagramm dargestellt?', a: 'Als Rechteck mit dem Stereotyp <<interface>> oder als kleiner Kreis (Lollipop-Notation).' },
    { id: '1.3_22', q: 'Was symbolisiert eine gestrichelte Linie mit Pfeilspitze?', a: 'Eine Abhängigkeitsbeziehung (Dependency). Eine Änderung in der Zielklasse kann die Quellklasse beeinflussen.' },
    { id: '1.3_23', q: 'Was bedeutet eine gestrichelte Linie mit einer hohlen Dreieckspitze?', a: 'Realization: Eine Klasse implementiert ein Interface oder eine abstrakte Klasse.' },
    { id: '1.3_24', q: 'Unterschied zwischen Assoziation und Abhängigkeit?', a: 'Assoziation: Strukturelle, dauerhafte Beziehung (Feld in der Klasse). Abhängigkeit: Kurzfristige Nutzung (z.B. lokaler Parameter).' },
    { id: '1.3_25', q: 'Wie benennt man Assoziationen sinnvoll?', a: 'Durch ein Verb und ggf. eine Leserichtung (kleines Dreieck), z.B. "bestellt >".' },
    { id: '1.3_26', q: 'Was bedeutet Navigierbarkeit bei einer Assoziation?', a: 'Ein Pfeil am Ende zeigt an, dass ein Objekt das andere kennt, aber nicht zwingend umgekehrt.' },
    { id: '1.3_27', q: 'Was bedeutet die <<include>> Beziehung bei Use Cases?', a: 'Ein Anwendungsfall ist zwingend Teil eines anderen (Aufsplittung in Teilaufgaben).' },
    { id: '1.3_28', q: 'Was bedeutet die <<extend>> Beziehung bei Use Cases?', a: 'Ein optionaler oder bedingter Schritt, der einen anderen Anwendungsfall erweitert.' },
    { id: '1.3_29', q: 'Was stellt der Systemrahmen (System Boundary) im Use-Case-Diagramm dar?', a: 'Die Grenze zwischen dem zu entwickelnden System und den externen Akteuren.' },
    { id: '1.3_30', q: 'Was ist eine Lebenslinie (Lifeline) im Sequenzdiagramm?', a: 'Die vertikale gestrichelte Linie, die die Existenz eines Objekts über die Zeit darstellt.' },
    { id: '1.3_31', q: 'Wie wird eine synchrone Nachricht im Sequenzdiagramm gezeichnet?', a: 'Durchgezogene Linie mit ausgefüllter Pfeilspitze.' },
    { id: '1.3_32', q: 'Wie wird eine asynchrone Nachricht dargestellt?', a: 'Durchgezogene Linie mit offener Pfeilspitze (Spitzenwinkel).' },
    { id: '1.3_33', q: 'Wie wird eine Antwortnachricht (Return) dargestellt?', a: 'Gestrichelte Linie mit offener Pfeilspitze.' },
    { id: '1.3_34', q: 'Was bedeutet das Fragment "alt" im Sequenzdiagramm?', a: 'Alternativen: Entspricht einer If-Else oder Switch-Anweisung.' },
    { id: '1.3_35', q: 'Was bedeutet das Fragment "opt" im Sequenzdiagramm?', a: 'Optional: Der Block wird nur ausgeführt, wenn eine Bedingung erfüllt ist (reines If).' },
    { id: '1.3_36', q: 'Wofür steht das Fragment "loop" im Sequenzdiagramm?', a: 'Iteration: Wiederholung eines Nachrichtenablaufs (Schleife).' },
    { id: '1.3_37', q: 'Was ist ein Entscheidungsknoten (Decision Node) im Aktivitätsdiagramm?', a: 'Eine Raute, die den Kontrollfluss basierend auf Bedingungen (Guards) aufteilt.' },
    { id: '1.3_38', q: 'Was ist ein Zusammenführungsknoten (Merge Node)?', a: 'Eine Raute, die mehrere alternative Kontrollflüsse wieder zusammenführt.' },
    { id: '1.3_39', q: 'Was bewirkt ein Split/Gabelung (Fork Node)?', a: 'Ein dicker Balken, der einen Kontrollfluss in mehrere parallel ablaufende Zweige aufteilt.' },
    { id: '1.3_40', q: 'Was bewirkt eine Vereinigung (Join Node)?', a: 'Ein dicker Balken, der parallele Zweige synchronisiert und wieder zu einem Fluss vereint.' },
    { id: '1.3_41', q: 'Wie wird der Startpunkt im Aktivitätsdiagramm dargestellt?', a: 'Ein ausgefüllter schwarzer Kreis (Initial Node).' },
    { id: '1.3_42', q: 'Wie wird das Ende eines Prozesses dargestellt?', a: 'Ein ausgefüllter Kreis mit einem Ring darum (Activity Final Node).' },
    { id: '1.3_43', q: 'Was sind Verantwortlichkeitsbereiche (Swimlanes/Partitions)?', a: 'Spalten oder Zeilen, die Aktionen bestimmten Akteuren oder Systemteilen zuordnen.' },
    { id: '1.3_44', q: 'Was ist ein Übergang (Transition) im Zustandsdiagramm?', a: 'Ein Pfeil zwischen Zuständen, der durch ein Ereignis ausgelöst wird.' },
    { id: '1.3_45', q: 'Was ist eine Wächterbedingung (Guard) in UML?', a: 'Eine Bedingung in eckigen Klammern [ ], die wahr sein muss, damit ein Übergang stattfindet.' },
    { id: '1.3_46', q: 'Was ist eine Entry-Aktion in einem Zustand?', a: 'Eine Aktion, die sofort beim Eintreten in den Zustand ausgeführt wird.' },
    { id: '1.3_47', q: 'Was ist eine Exit-Aktion in einem Zustand?', a: 'Eine Aktion, die kurz vor dem Verlassen des Zustands ausgeführt wird.' },
    { id: '1.3_48', q: 'Was ist ein Eigenübergang (Self-Transition)?', a: 'Ein Übergang, der zum selben Zustand zurückführt (löst erneut Entry/Exit Aktionen aus).' },
    { id: '1.3_49', q: 'Was ist ein Stereotyp in UML?', a: 'Ein Erweiterungsmechanismus, um Elementen eine spezifische Bedeutung zu geben (Notation: <<text>>).' },
    { id: '1.3_50', q: 'Was beschreibt ein UML-Profil?', a: 'Eine Sammlung von Stereotypen und Constraints für einen bestimmten Anwendungsbereich (z.B. UML-Profil für Java).' }
  ],

  // Topic 1.4: Software-Architektur & Schnittstellen (50 Karten)
  '1.4': [
    // --- Unterpunkt 1: Schichtenarchitektur & Microservices (10 Karten) ---
    { id: '1.4_1', q: 'Was ist das Hauptziel der 3-Schichten-Architektur?', a: 'Trennung von Zuständigkeiten (Separation of Concerns) in Präsentation, Logik und Daten.' },
    { id: '1.4_2', q: 'Nenne die drei Schichten der 3-Tier-Architektur.', a: '1. Präsentationsschicht (UI), 2. Logikschicht (Business Logic), 3. Datenschicht (Persistence).' },
    { id: '1.4_3', q: 'Warum ist lose Kopplung zwischen Schichten wichtig?', a: 'Ermöglicht den Austausch oder die Änderung einzelner Schichten, ohne das Gesamtsystem zu gefährden.' },
    { id: '1.4_4', q: 'Was unterscheidet eine n-Tier von einer 3-Tier Architektur?', a: 'Zusätzliche Ebenen wie Caching, Security-Proxys oder separate Service-Layer.' },
    { id: '1.4_5', q: 'Was charakterisiert einen Software-Monolithen?', a: 'Alle Funktionen befinden sich in einer einzigen, zusammenhängenden Codebasis und Deployment-Einheit.' },
    { id: '1.4_6', q: 'Was ist ein Microservice?', a: 'Ein kleiner, eigenständiger Dienst, der genau eine fachliche Geschäftsfunktion erfüllt.' },
    { id: '1.4_7', q: 'Was ist der Vorteil von Microservices bei Lastspitzen?', a: 'Es muss nur der betroffene Dienst mehrfach instanziiert (skaliert) werden, nicht die ganze Anwendung.' },
    { id: '1.4_8', q: 'Was bedeutet "Shared Nothing" bei Microservices?', a: 'Jeder Dienst besitzt seine eigene Datenbank; die Datenhoheit liegt allein beim jeweiligen Service.' },
    { id: '1.4_9', q: 'Wie kommunizieren Microservices primär?', a: 'Über leichtgewichtige Protokolle wie REST (HTTP) oder Message Broker (asynchron).' },
    { id: '1.4_10', q: 'Nenne eine große Herausforderung bei Microservices.', a: 'Hohe Komplexität bei Deployment, Monitoring und netzwerkbedingte Latenzen.' },

    // --- Unterpunkt 2: REST APIs (10 Karten) ---
    { id: '1.4_11', q: 'Wofür steht die Abkürzung REST?', a: 'Representational State Transfer.' },
    { id: '1.4_12', q: 'Was bedeutet Statelessness (Zustandslosigkeit) bei REST?', a: 'Der Server speichert keine Client-Sitzung. Jede Anfrage muss alle für die Verarbeitung nötigen Infos enthalten.' },
    { id: '1.4_13', q: 'Zweck der HTTP-Methode GET?', a: 'Sicheres Abrufen einer Ressource vom Server (darf keine Daten verändern).' },
    { id: '1.4_14', q: 'Zweck der HTTP-Methode POST?', a: 'Erstellen einer neuen Ressource auf dem Server.' },
    { id: '1.4_15', q: 'Zweck der HTTP-Methode PUT?', a: 'Vollständiges Ersetzen einer Ressource oder Neuanlage unter einer bekannten URL.' },
    { id: '1.4_16', q: 'Unterschied zwischen PUT und PATCH?', a: 'PUT ersetzt die gesamte Ressource, PATCH aktualisiert sie nur teilweise (Partial Update).' },
    { id: '1.4_17', q: 'Was bedeutet der HTTP-Statuscode 201?', a: 'Created (Erfolgreich erstellt).' },
    { id: '1.4_18', q: 'Was bedeutet der HTTP-Statuscode 401?', a: 'Unauthorized (Authentifizierung fehlt oder ist ungültig).' },
    { id: '1.4_19', q: 'Was bedeutet der HTTP-Statuscode 403?', a: 'Forbidden (Authentifiziert, aber keine Berechtigung für diese Ressource).' },
    { id: '1.4_20', q: 'Was bedeutet Idempotenz bei REST-Methoden?', a: 'Mehrfache identische Aufrufe führen zum selben Ergebnis wie ein einzelner Aufruf (z.B. GET, PUT, DELETE).' },

    // --- Unterpunkt 3: Datenaustauschformate (10 Karten) ---
    { id: '1.4_21', q: 'Was ist das Hauptmerkmal von JSON?', a: 'Textbasiert, leichtgewichtig, nutzt Schlüssel-Wert-Paare, nativ kompatibel mit JavaScript.' },
    { id: '1.4_22', q: 'Was ist der Kernunterschied von XML zu JSON?', a: 'Nutzt hierarchische Tags (<tag>), ist erweiterbar (XSD) und unterstützt komplexe Dokumentstrukturen.' },
    { id: '1.4_23', q: 'Wofür nutzt man XML Schema Definition (XSD)?', a: 'Zur strengen Validierung von Struktur, Inhalten und Datentypen in einem XML-Dokument.' },
    { id: '1.4_24', q: 'Zweck von Namespaces in XML?', a: 'Vermeidung von Namenskonflikten bei Elementen, wenn verschiedene XML-Vokabulare gemischt werden.' },
    { id: '1.4_25', q: 'Was ist SOAP?', a: 'Ein XML-basiertes Protokoll für Webservices mit striktem Standard (Envelope, Header, Body).' },
    { id: '1.4_26', q: 'Bedeutung der WSDL bei SOAP-Services?', a: 'Web Services Description Language; beschreibt die technische Schnittstelle (Methoden, Typen).' },
    { id: '1.4_27', q: 'Vorteil von JSON gegenüber XML für Web-APIs?', a: 'Geringerer Overhead (Datenmenge) und schnellere Verarbeitung im Browser/Frontend.' },
    { id: '1.4_28', q: 'Wann ist XML besser geeignet als JSON?', a: 'Bei sehr komplexen Dokumentenstrukturen, die eine exakte Datentyp-Validierung erfordern.' },
    { id: '1.4_29', q: 'Was bedeutet "Parsen" in Bezug auf Datenaustausch?', a: 'Das Umwandeln eines Datenstroms (z.B. JSON-String) in ein verarbeitbares Objekt im Arbeitsspeicher.' },
    { id: '1.4_30', q: 'Was versteht man unter "Marshalling"?', a: 'Der Vorgang, ein Objekt aus dem Speicher in ein Austauschformat (z.B. XML oder JSON) zu serialisieren.' },

    // --- Unterpunkt 4: Webservices & Dokumentation (10 Karten) ---
    { id: '1.4_31', q: 'Was ist ein Webservice?', a: 'Eine über ein Netzwerk bereitgestellte Dienstleistung, die über standardisierte Protokolle (HTTP) kommuniziert.' },
    { id: '1.4_32', q: 'Was beschreibt der OpenAPI-Standard?', a: 'Ein Format zur maschinenlesbaren Beschreibung und Dokumentation von REST-Schnittstellen.' },
    { id: '1.4_33', q: 'Was ist Swagger im Kontext von APIs?', a: 'Ein Toolset (UI, Editor), das den OpenAPI-Standard visualisiert und Schnittstellen testbar macht.' },
    { id: '1.4_34', q: 'Was ist ein API-Endpoint?', a: 'Die spezifische URL (URI), unter der eine bestimmte Ressource oder Funktion angesprochen wird.' },
    { id: '1.4_35', q: 'Warum ist Versionierung (z.B. /v1/) bei APIs wichtig?', a: 'Um Abwärtskompatibilität zu gewährleisten, wenn sich die Schnittstelle für neue Features ändert.' },
    { id: '1.4_36', q: 'Was ist das Grundkonzept von HATEOAS?', a: 'Die API-Antwort enthält Links zu weiteren möglichen Aktionen, sodass der Client die API explorativ nutzen kann.' },
    { id: '1.4_37', q: 'Was ist der Payload einer HTTP-Nachricht?', a: 'Die eigentlichen Nutzdaten (z.B. ein User-Objekt), die im Rumpf (Body) übertragen werden.' },
    { id: '1.4_38', q: 'Aufgabe eines API-Gateways?', a: 'Zentrale Instanz für Routing, Authentifizierung, Caching und Lastverteilung vor den eigentlichen Diensten.' },
    { id: '1.4_39', q: 'Zweck von Rate Limiting?', a: 'Schutz der API vor Überlastung (DoS) und Steuerung der Kontingente pro Nutzer/Client.' },
    { id: '1.4_40', q: 'Was bedeutet CORS (Cross-Origin Resource Sharing)?', a: 'Ein Sicherheitsmechanismus, der regelt, welche Web-Ursprünge auf Ressourcen einer anderen Domain zugreifen dürfen.' },

    // --- Unterpunkt 5: Messaging & Event-Driven (10 Karten) ---
    { id: '1.4_41', q: 'Hauptvorteil von asynchronem Messaging gegenüber REST?', a: 'Sender muss nicht auf Antwort warten; erhöhte Resilienz (Nachrichten werden gepuffert).' },
    { id: '1.4_42', q: 'Nenne ein bekanntes Tool für Message Broking.', a: 'RabbitMQ, Apache Kafka oder ActiveMQ.' },
    { id: '1.4_43', q: 'Was ist eine Message Queue?', a: 'Ein Puffer, der Nachrichten nach dem FIFO-Prinzip speichert, bis ein Empfänger sie abarbeiten kann.' },
    { id: '1.4_44', q: 'Erkläre das Pub/Sub-Prinzip (Publisher/Subscriber).', a: 'Ein Sender schickt an ein Topic; alle angemeldeten Empfänger erhalten die Nachricht gleichzeitig.' },
    { id: '1.4_45', q: 'Wie fördert Messaging die lose Kopplung?', a: 'Sender und Empfänger kennen sich nicht direkt und müssen nicht gleichzeitig erreichbar sein.' },
    { id: '1.4_46', q: 'Was ist ein Event im Kontext von Software-Architektur?', a: 'Eine relevante Zustandsänderung (z.B. "Zahlung erfolgt"), die asynchron an andere Systemteile gemeldet wird.' },
    { id: '1.4_47', q: 'Aufgabe des Message Consumers?', a: 'Das aktive Abrufen (Polling) oder Empfangen und Verarbeiten von Nachrichten aus dem Broker.' },
    { id: '1.4_48', q: 'Wie hilft Messaging bei Lastspitzen?', a: 'Nachrichten stauen sich in der Queue, statt den Dienst zu überlasten (Load Leveling).' },
    { id: '1.4_49', q: 'Was bedeutet Persistenz bei Message Brokern?', a: 'Das Speichern von Nachrichten auf der Festplatte, damit sie bei einem Systemausfall nicht verloren gehen.' },
    { id: '1.4_50', q: 'Unterschied Topic vs. Queue?', a: 'Queue: Nur ein Consumer erhält die Nachricht. Topic: Mehrere Subscriber können die gleiche Nachricht erhalten.' }
  ],

  // Topic 1.5: UI/UX & Ergonomie (40 Karten)
  '1.5': [
    // --- Unterpunkt 1: Softwareergonomie & UX (10 Karten) ---
    { id: '1.5_1', q: 'Nenne drei Grundsätze der Dialoggestaltung nach DIN EN ISO 9241-110.', a: 'Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit, Steuerbarkeit, Erwartungskonformität, Fehlertoleranz.' },
    { id: '1.5_2', q: 'Was ist der Unterschied zwischen Usability und User Experience (UX)?', a: 'Usability: Wie effizient und zufriedenstellend ein Ziel erreicht wird. UX: Das gesamte Erlebnis vor, während und nach der Nutzung (inkl. Emotionen).' },
    { id: '1.5_3', q: 'Was beschreibt der Grundsatz "Aufgabenangemessenheit"?', a: 'Die Software unterstützt den Nutzer so, dass er seine Aufgaben effektiv und effizient erledigen kann.' },
    { id: '1.5_4', q: 'Was bedeutet "Selbstbeschreibungsfähigkeit" in der UI?', a: 'Der Nutzer erkennt jederzeit, wo er sich befindet und welche Schritte als Nächstes möglich sind (z.B. durch Tooltips oder Breadcrumbs).' },
    { id: '1.5_5', q: 'Was ist das Ziel der "Erwartungskonformität"?', a: 'Die Software verhält sich konsistent und entspricht den Konventionen, die der Nutzer aus anderen Programmen kennt.' },
    { id: '1.5_6', q: 'Definition von "Fehlertoleranz" nach ISO 9241?', a: 'Das System ermöglicht es dem Nutzer, Fehler mit geringem Aufwand zu korrigieren (z.B. durch Undo-Funktionen oder klare Fehlermeldungen).' },
    { id: '1.5_7', q: 'Was versteht man unter "Individualisierbarkeit" einer Software?', a: 'Der Nutzer kann die Oberfläche oder Interaktion an seine persönlichen Bedürfnisse anpassen (z.B. Dark Mode, Schriftgröße).' },
    { id: '1.5_8', q: 'Was ist "Lernförderlichkeit" in Bezug auf UI?', a: 'Die Software sollte so gestaltet sein, dass der Nutzer den Umgang mit ihr schnell und ohne großen Schulungsaufwand erlernt.' },
    { id: '1.5_9', q: 'Was beschreibt die "Steuerbarkeit"?', a: 'Der Nutzer kann den Dialogfluss selbst bestimmen und das Tempo der Interaktion beeinflussen.' },
    { id: '1.5_10', q: 'Was ist ein "User-Centered Design" (UCD) Prozess?', a: 'Ein iterativer Gestaltungsprozess, bei dem die Bedürfnisse, Wünsche und Einschränkungen der Endnutzer in jeder Phase im Mittelpunkt stehen.' },

    // --- Unterpunkt 2: Barrierefreiheit (10 Karten) ---
    { id: '1.5_11', q: 'Wofür steht das Akronym POUR bei den WCAG-Prinzipien?', a: 'Perceivable (Wahrnehmbar), Operable (Bedienbar), Understandable (Verständlich), Robust.' },
    { id: '1.5_12', q: 'Was bedeutet "Wahrnehmbarkeit" (Perceivable) konkret?', a: 'Informationen müssen so präsentiert werden, dass sie von den Sinnen erfasst werden können (z.B. Alt-Texte für Bilder).' },
    { id: '1.5_13', q: 'Was fordert das Prinzip "Bedienbarkeit" (Operable)?', a: 'Die Benutzeroberfläche muss vollständig über verschiedene Eingabemethoden (z.B. nur Tastatur) steuerbar sein.' },
    { id: '1.5_14', q: 'Was bedeutet "Verständlichkeit" (Understandable) bei Webseiten?', a: 'Texte müssen lesbar und verständlich sein; die Bedienung muss vorhersehbar funktionieren.' },
    { id: '1.5_15', q: 'Was beschreibt das Prinzip "Robustheit"?', a: 'Inhalte müssen stabil genug sein, um von einer Vielzahl von Readern und Hilfstechnologien (Assistive Technology) interpretiert zu werden.' },
    { id: '1.5_16', q: 'Was ist die BITV 2.0?', a: 'Die Barrierefreie-Informationstechnik-Verordnung; sie regelt die Anforderungen für öffentliche Stellen in Deutschland.' },
    { id: '1.5_17', q: 'Warum sind Kontrastverhältnisse für Barrierefreiheit wichtig?', a: 'Damit Texte auch für Menschen mit Sehschwäche oder bei direkter Sonneneinstrahlung gut lesbar bleiben (Standard: 4.5:1 für Fließtext).' },
    { id: '1.5_18', q: 'Welchen Zweck haben "WAI-ARIA" Attribute?', a: 'Sie liefern zusätzliche semantische Informationen für Screenreader, um komplexe Widgets (z.B. Modale) barrierefrei zu machen.' },
    { id: '1.5_19', q: 'Was ist "Leichte Sprache"?', a: 'Ein speziell geregeltes Sprachkonzept mit kurzem Satzbau und einfachen Wörtern für Menschen mit Lernschwierigkeiten.' },
    { id: '1.5_20', q: 'Wie hilft eine korrekte HTML-Überschriftenstruktur (H1-H6) der Barrierefreiheit?', a: 'Sie ermöglicht es Screenreader-Nutzern, schnell durch die Seite zu navigieren und die Hierarchie zu verstehen.' },

    // --- Unterpunkt 3: Design-Prozess (10 Karten) ---
    { id: '1.5_21', q: 'Was ist ein Wireframe?', a: 'Ein statisches, meist farbloses Skelett einer UI, das nur die Struktur und Platzierung von Elementen zeigt.' },
    { id: '1.5_22', q: 'Unterschied Mockup vs. Prototyp?', a: 'Mockup: Statisches High-Fidelity Designbild. Prototyp: Interaktives Modell, das die Bedienung simuliert.' },
    { id: '1.5_23', q: 'Was bedeutet "Low-Fidelity" (Lo-Fi) beim Prototyping?', a: 'Einfache Skizzen (z.B. Papierprototypen), um Konzepte schnell und günstig zu testen.' },
    { id: '1.5_24', q: 'Vorteil von High-Fidelity (Hi-Fi) Prototypen?', a: 'Sie wirken fast wie das fertige Produkt und eignen sich ideal für realistische Nutzertests.' },
    { id: '1.5_25', q: 'Was versteht man unter einem "A/B-Test"?', a: 'Der Vergleich von zwei Versionen einer UI (A und B), um herauszufinden, welche bei den Nutzern besser performt.' },
    { id: '1.5_26', q: 'Was ist ein "Clickdummy"?', a: 'Ein interaktiver Prototyp ohne echte Logik/Datenbank im Hintergrund, der nur Verlinkungen zwischen Screens simuliert.' },
    { id: '1.5_27', q: 'Warum startet man oft mit "Mobile First"?', a: 'Um sich auf die wichtigsten Inhalte zu fokussieren und später für große Bildschirme zu erweitern (Progressive Enhancement).' },
    { id: '1.5_28', q: 'Was beschreibt die "Informationsarchitektur"?', a: 'Die Strukturierung und Organisation von Inhalten, um die Auffindbarkeit von Informationen zu optimieren.' },
    { id: '1.5_29', q: 'Was ist ein Design System?', a: 'Eine Sammlung von wiederverwendbaren Komponenten und Regeln, die eine konsistente UI über das gesamte Produkt sicherstellen.' },
    { id: '1.5_30', q: 'Was ist das Ziel eines "Card Sorting"?', a: 'Eine Methode, um herauszufinden, wie Nutzer Informationen gruppieren würden (hilft bei der Menüstruktur).' },

    // --- Unterpunkt 4: Farblehre, Typografie & Gestaltgesetze (10 Karten) ---
    { id: '1.5_31', q: 'Was besagt das Gestaltgesetz der Nähe?', a: 'Elemente, die räumlich eng beieinander liegen, werden als zusammengehörig wahrgenommen.' },
    { id: '1.5_32', q: 'Was besagt das Gestaltgesetz der Ähnlichkeit?', a: 'Gleich aussehende Elemente (Form, Farbe) werden als funktionale Einheit interpretiert.' },
    { id: '1.5_33', q: 'Was ist das "Gesetz der Geschlossenheit"?', a: 'Das Gehirn vervollständigt unvollständige Formen zu einem ganzen Bild.' },
    { id: '1.5_34', q: 'Erkläre den "Prägnanz"-Effekt (Gesetz der guten Gestalt).', a: 'Der Mensch bevorzugt einfache, symmetrische und regelmäßige Strukturen.' },
    { id: '1.5_35', q: 'Was sind Komplementärfarben?', a: 'Farben, die sich im Farbkreis gegenüberliegen (hoher Kontrast, z.B. Blau und Orange).' },
    { id: '1.5_36', q: 'Unterschied Serif vs. Sans-Serif Schriften?', a: 'Serif: Mit kleinen "Füßchen" (gut für Druck). Sans-Serif: Ohne Füßchen (modern, gut lesbar auf Bildschirmen).' },
    { id: '1.5_37', q: 'Was bedeutet "Zeilenabstand" (Leading) für die Lesbarkeit?', a: 'Ein angemessener Abstand verhindert, dass Zeilen optisch verschwimmen (ideal ca. 140-160%).' },
    { id: '1.5_38', q: 'Was beschreibt die "Farpsychologie"?', a: 'Die Wirkung von Farben auf Gefühle (z.B. Blau = Vertrauen/Ruhe, Rot = Gefahr/Aktion).' },
    { id: '1.5_39', q: 'Was ist der "Goldene Schnitt" im Design?', a: 'Ein mathematisches Proportionsverhältnis (ca. 1,61), das vom Menschen als besonders harmonisch empfunden wird.' },
    { id: '1.5_40', q: 'Was ist "Whitespace" (Negativraum)?', a: 'Leere Flächen zwischen UI-Elementen; sie helfen, Inhalte zu strukturieren und den Fokus zu lenken.' }
  ],

  // Topic 2.1: Algorithmen & Programmierung (70 Karten)
  '2.1': [
    // --- Unterpunkt 1: Pseudocode & Struktogramme (10 Karten) ---
    { id: '2.1_1', q: 'Was ist das Hauptziel von Pseudocode?', a: 'Logik unabhängig von einer konkreten Programmiersprache verständlich darzustellen.' },
    { id: '2.1_2', q: 'Wie wird eine "Alternative" (If-Else) im Struktogramm dargestellt?', a: 'Durch ein Rechteck, das durch ein "V" in zwei oder drei Teilbereiche (Bedingung, Ja-Zweig, Nein-Zweig) getrennt ist.' },
    { id: '2.1_3', q: 'Wofür steht die Abkürzung "DIN 66261" im Kontext der Programmierung?', a: 'Es ist die Norm für Sinnbilder von Struktogrammen (Nassi-Shneiderman-Diagramme).' },
    { id: '2.1_4', q: 'Wie erkennt man eine kopfgesteuerte Schleife im Struktogramm?', a: 'Die Bedingung steht oben, der Schleifenkörper ist darunter eingerückt dargestellt.' },
    { id: '2.1_5', q: 'Wie erkennt man eine fußgesteuerte Schleife im Struktogramm?', a: 'Die Bedingung steht unten, nach dem Schleifenkörper.' },
    { id: '2.1_6', q: 'Was ist ein "Case" oder eine "Mehrfachauswahl" im Struktogramm?', a: 'Eine Verzweigung, die mehr als zwei Wege (Fälle) basierend auf einem Wert ermöglicht.' },
    { id: '2.1_7', q: 'Welches Symbol stellt eine einfache Anweisung (Sequenz) im Struktogramm dar?', a: 'Ein einfaches Rechteck.' },
    { id: '2.1_8', q: 'Warum sind Struktogramme besser als Flussdiagramme (Flowcharts)?', a: 'Sie erzwingen eine strukturierte Programmierung (kein GOTO möglich) und sind kompakter.' },
    { id: '2.1_9', q: 'Was bedeutet "Einrücken" im Pseudocode?', a: 'Es kennzeichnet die Zugehörigkeit von Codeblöcken zu Schleifen oder Bedingungen.' },
    { id: '2.1_10', q: 'Darf Pseudocode mathematische Symbole verwenden?', a: 'Ja, Pseudocode ist informell und darf Mathematik, natürliche Sprache und Logik mischen.' },

    // --- Unterpunkt 2: Aktivitätsdiagramm (10 Karten) ---
    { id: '2.1_11', q: 'Was ist ein "Startknoten" im Aktivitätsdiagramm?', a: 'Ein ausgefüllter schwarzer Kreis, der den Beginn des Ablaufs markiert.' },
    { id: '2.1_12', q: 'Unterschied zwischen Fork (Gabelung) und Join (Vereinigung)?', a: 'Fork: Teilt einen Kontrollfluss in mehrere parallele Zweige. Join: Führt parallele Zweige wieder zusammen.' },
    { id: '2.1_13', q: 'Wie wird eine Entscheidung (Decision) im Aktivitätsdiagramm dargestellt?', a: 'Durch eine Raute mit einem eingehenden und mehreren ausgehenden Pfeilen (mit Guards in eckigen Klammern).' },
    { id: '2.1_14', q: 'Was ist ein "Merge-Knoten" im Aktivitätsdiagramm?', a: 'Ebenfalls eine Raute, führt aber alternative (nicht parallele!) Pfade wieder zusammen.' },
    { id: '2.1_15', q: 'Wie stellt man den Empfang eines externen Signals dar?', a: 'Durch ein Symbol, das wie ein Rechteck mit einer eingekerbten Seite (konkav) aussieht.' },
    { id: '2.1_16', q: 'Wie stellt man das Senden eines Signals dar?', a: 'Durch ein Symbol, das wie ein Rechteck mit einer spitzen Seite (konvex/pfeilförmig) aussieht.' },
    { id: '2.1_17', q: 'Was bedeutet "Parallelität" im Aktivitätsdiagramm?', a: 'Aktionen, die zeitgleich oder in beliebiger Reihenfolge ausgeführt werden können (zwischen Fork und Join).' },
    { id: '2.1_18', q: 'Was markiert der "Endknoten" (Activity Final)?', a: 'Ein Kreis mit einem ausgefüllten Punkt darin ("Stierauge"); beendet die gesamte Aktivität.' },
    { id: '2.1_19', q: 'Was markiert ein "Ablaufendknoten" (Flow Final)?', a: 'Ein Kreis mit einem "X" darin; beendet nur einen Pfad, nicht die ganze Aktivität.' },
    { id: '2.1_20', q: 'Was sind "Swimlanes" (Verantwortlichkeitsbereiche)?', a: 'Spalten oder Zeilen, die zeigen, wer (z.B. System, User, Datenbank) eine Aktion ausführt.' },

    // --- Unterpunkt 3: Schreibtischtests (10 Karten) ---
    { id: '2.1_21', q: 'Was ist der Zweck eines Schreibtischtests?', a: 'Die manuelle Überprüfung eines Algorithmus auf Logikfehler ohne Computer.' },
    { id: '2.1_22', q: 'Was ist eine "Tracetabelle"?', a: 'Eine Tabelle, in der die Werte aller Variablen Zeile für Zeile während des Algorithmus-Durchlaufs notiert werden.' },
    { id: '2.1_23', q: 'Was bedeutet "Trockenlauf" (Dry Run)?', a: 'Ein Synonym für Schreibtischtest; das schrittweise Durchspielen des Codes im Kopf oder auf Papier.' },
    { id: '2.1_24', q: 'Warum testet man oft Grenzwerte (z.B. 0, -1, Max-Int)?', a: 'Weil hier die meisten Logikfehler auftreten (z.B. Off-by-one-Errors).' },
    { id: '2.1_25', q: 'Was muss in der ersten Zeile einer Tracetabelle stehen?', a: 'Die Ausgangswerte (Initialzustand) der Variablen vor dem ersten Schritt.' },
    { id: '2.1_26', q: 'Was ist ein "Off-by-one-Error"?', a: 'Ein Fehler, bei dem eine Schleife genau einmal zu oft oder zu wenig durchläuft.' },
    { id: '2.1_27', q: 'Was prüft man bei Schreibtischtests von Bedingungen?', a: 'Ob der Algorithmus für True UND False das erwartete Ergebnis liefert.' },
    { id: '2.1_28', q: 'Wie geht man bei verschachtelten Schleifen in der Tracetabelle vor?', a: 'Man führt für jede Änderung der inneren Schleife eine neue Zeile (oder Spalte) ein.' },
    { id: '2.1_29', q: 'Können Schreibtischtests Endlosschleifen finden?', a: 'Ja, wenn man feststellt, dass die Abbruchbedingung niemals erreicht werden kann.' },
    { id: '2.1_30', q: 'Was ist ein "Input-Output-Check" beim Schreibtischtest?', a: 'Vergleich des manuell ermittelten Endergebnisses mit dem fachlich erwarteten Soll-Wert.' },

    // --- Unterpunkt 4: Rekursion vs. Iteration (10 Karten) ---
    { id: '2.1_31', q: 'Definition von Rekursion?', a: 'Eine Funktion, die sich selbst aufruft, um ein Problem in kleinere Teilprobleme zu zerlegen.' },
    { id: '2.1_32', q: 'Was ist die wichtigste Bedingung für eine Rekursion?', a: 'Die Abbruchbedingung (Basisfall), damit keine Endlosschleife entsteht.' },
    { id: '2.1_33', q: 'Definition von Iteration?', a: 'Wiederholtes Ausführen von Anweisungen mittels Schleifen (For, While).' },
    { id: '2.1_34', q: 'Nenne ein Problem der Rekursion.', a: 'Hoher Speicherverbrauch auf dem Stack (Gefahr des StackOverflow).' },
    { id: '2.1_35', q: 'Vorteil der Rekursion?', a: 'Oft eleganterer, kürzerer Code bei natürlich rekursiven Problemen (z.B. Bäume durchlaufen).' },
    { id: '2.1_36', q: 'Was passiert technisch bei jedem rekursiven Aufruf?', a: 'Ein neuer Frame (Kontext) wird auf dem Call-Stack abgelegt.' },
    { id: '2.1_37', q: 'Kann jede Rekursion in eine Iteration umgewandelt werden?', a: 'Ja, theoretisch ist das immer möglich (manchmal mit eigenem Stack-Management).' },
    { id: '2.1_38', q: 'Was ist "Endrekursion" (Tail Recursion)?', a: 'Eine Rekursion, bei der der Selbstaufruf die absolut letzte Aktion der Funktion ist (optimierbar durch Compiler).' },
    { id: '2.1_39', q: 'Nenne ein typisches Beispiel für Rekursion.', a: 'Fakultätsberechnung, Fibonacci-Zahlen, Verzeichnisstrukturen lesen.' },
    { id: '2.1_40', q: 'Welche Methode ist meist performanter?', a: 'Iteration ist meist schneller und speichereffizienter, da der Overhead der Funktionsaufrufe entfällt.' },

    // --- Unterpunkt 5: Such- & Sortieralgorithmen (10 Karten) ---
    { id: '2.1_41', q: 'Wie funktioniert Bubble-Sort?', a: 'Benachbarte Elemente werden verglichen und bei falscher Sortierung vertauscht. Das größte Element "steigt auf" wie eine Blase.' },
    { id: '2.1_42', q: 'Kernprinzip von Selection-Sort?', a: 'Es wird das kleinste Element gesucht und an die erste Position getauscht, dann das zweitkleinste usw.' },
    { id: '2.1_43', q: 'Kernprinzip von Insertion-Sort?', a: 'Elemente werden nacheinander an die bereits sortierte Teilmenge an der richtigen Stelle "eingefügt".' },
    { id: '2.1_44', q: 'Was ist die Binäre Suche?', a: 'Ein effizientes Suchverfahren für SORTIERTE Listen, das die Liste immer wieder in der Mitte teilt (Divide & Conquer).' },
    { id: '2.1_45', q: 'Voraussetzung für die Binäre Suche?', a: 'Die Daten müssen zwingend sortiert vorliegen.' },
    { id: '2.1_46', q: 'Was ist Quicksort?', a: 'Ein schneller, rekursiver Algorithmus, der die Liste anhand eines Pivotelements in zwei Hälften teilt.' },
    { id: '2.1_47', q: 'Was bedeutet "stabil" bei Sortieralgorithmen?', a: 'Elemente mit gleichem Sortierschlüssel behalten ihre relative Reihenfolge zueinander bei.' },
    { id: '2.1_48', q: 'Was ist der Unterschied zwischen In-Place und Out-of-Place?', a: 'In-Place benötigt kaum extra Speicher (sortiert im Original-Array). Out-of-Place benötigt Kopien.' },
    { id: '2.1_49', q: 'Wie viele Vergleiche benötigt die Lineare Suche im Worst Case?', a: 'n Vergleiche (jedes Element muss einmal angeschaut werden).' },
    { id: '2.1_50', q: 'Welcher Sortieralgorithmus ist für sehr kleine Listen oft am schnellsten?', a: 'Insertion-Sort (geringer Overhead).' },

    // --- Unterpunkt 6: Komplexität (O-Notation) (10 Karten) ---
    { id: '2.1_51', q: 'Was beschreibt die O-Notation (Landau-Symbole)?', a: 'Das asymptotische Zeit- oder Platzverhalten eines Algorithmus bei wachsender Eingabemenge.' },
    { id: '2.1_52', q: 'Was bedeutet O(1)?', a: 'Konstante Laufzeit. Unabhängig von der Eingabemenge (z.B. Zugriff auf Array-Index).' },
    { id: '2.1_53', q: 'Was bedeutet O(n)?', a: 'Lineare Laufzeit. Zeit wächst proportional zur Menge (z.B. eine einfache Schleife).' },
    { id: '2.1_54', q: 'Was bedeutet O(n²)?', a: 'Quadratische Laufzeit. Zeit wächst quadratisch (z.B. zwei verschachtelte Schleifen, wie bei Bubble-Sort).' },
    { id: '2.1_55', q: 'Welche Komplexität hat die Binäre Suche?', a: 'O(log n) – Logarithmische Laufzeit (sehr effizient).' },
    { id: '2.1_56', q: 'Welche Komplexität haben effiziente Sortierer wie Quicksort/Mergesort?', a: 'O(n log n).' },
    { id: '2.1_57', q: 'Was ist der "Worst Case"?', a: 'Das Szenario, in dem der Algorithmus am längsten braucht (wichtigstes Maß in der O-Notation).' },
    { id: '2.1_58', q: 'Was ist der "Best Case"?', a: 'Das Szenario, in dem der Algorithmus am schnellsten fertig ist (z.B. Liste ist bereits sortiert).' },
    { id: '2.1_59', q: 'Was bedeutet "Platzkomplexität"?', a: 'Wie viel zusätzlicher Speicher (RAM) ein Algorithmus im Verhältnis zur Eingabegröße benötigt.' },
    { id: '2.1_60', q: 'Warum ignoriert man konstante Faktoren (z.B. 2n -> O(n))?', a: 'Weil bei sehr großen Eingabemengen das Wachstumsverhalten (linear, quadratisch etc.) entscheidend ist, nicht das Detail.' },

    // --- Unterpunkt 7: Fehlerbehandlung (10 Karten) ---
    { id: '2.1_61', q: 'Was ist ein "Syntaxfehler"?', a: 'Ein Fehler gegen die Grammatikregeln der Programmiersprache (Code lässt sich nicht kompilieren).' },
    { id: '2.1_62', q: 'Was ist ein "Laufzeitfehler" (Runtime Error)?', a: 'Ein Fehler, der erst während der Ausführung auftritt (z.B. Division durch Null).' },
    { id: '2.1_63', q: 'Was ist ein "Logikfehler"?', a: 'Das Programm läuft fehlerfrei durch, liefert aber ein falsches Ergebnis.' },
    { id: '2.1_64', q: 'Wofür steht der "Try"-Block?', a: 'Hier steht der Code, der potenziell eine Ausnahme (Exception) auslösen könnte.' },
    { id: '2.1_65', q: 'Wofür steht der "Catch"-Block?', a: 'Hier wird die ausgelöste Exception gefangen und der Fehler behandelt.' },
    { id: '2.1_66', q: 'Wofür wird der "Finally"-Block genutzt?', a: 'Code, der IMMER ausgeführt wird, egal ob ein Fehler auftrat oder nicht (z.B. Dateien schließen).' },
    { id: '2.1_67', q: 'Was bedeutet "Throw" (oder Raise)?', a: 'Das explizite Auslösen einer Fehlermeldung/Exception im Programmcode.' },
    { id: '2.1_68', q: 'Was ist eine "NullPointerException"?', a: 'Zugriff auf ein Objekt oder eine Variable, die noch nicht instanziiert wurde (auf "null" zeigt).' },
    { id: '2.1_69', q: 'Was bedeutet "Error Propagation"?', a: 'Ein Fehler wird nicht in der aktuellen Funktion behandelt, sondern an die aufrufende Ebene weitergegeben.' },
    { id: '2.1_70', q: 'Was versteht man unter defensiver Programmierung?', a: 'Code so schreiben, dass er mit unvorhergesehenen Inputs oder Zuständen sicher umgehen kann.' }
  ],

  // Topic 2.2: Datenbank-Design & Normalisierung (50 Karten)
  '2.2': [
    // --- Unterpunkt 1: ER-Modell (ERM) & Kardinalitäten (10 Karten) ---
    { id: '2.2_1', q: 'Was stellt ein ER-Modell (ERM) dar?', a: 'Einen konzeptionellen Entwurf der Datenstruktur mit Entitäten, Attributen und deren Beziehungen.' },
    { id: '2.2_2', q: 'Was ist eine Entität?', a: 'Ein eindeutig identifizierbares Objekt der realen Welt oder der Vorstellung (z.B. "Kunde", "Rechnung").' },
    { id: '2.2_3', q: 'Was beschreibt eine 1:n Beziehung?', a: 'Ein Datensatz aus Tabelle A ist mit beliebig vielen aus Tabelle B verknüpft, aber ein Datensatz aus B nur mit genau einem aus A.' },
    { id: '2.2_4', q: 'Was ist eine m:n Beziehung?', a: 'Viele Datensätze aus Tabelle A können mit vielen aus Tabelle B verknüpft sein (erfordert eine Hilfstabelle/Zwischentabelle).' },
    { id: '2.2_5', q: 'Was bedeutet die Kardinalität (0,1)?', a: 'Ein Datensatz kann mit maximal einem anderen verknüpft sein, muss es aber nicht (optional).' },
    { id: '2.2_6', q: 'Was ist ein Attribut im ERM?', a: 'Eine Eigenschaft einer Entität (z.B. "Name", "Geburtsdatum").' },
    { id: '2.2_7', q: 'Was ist ein "identifizierendes Attribut"?', a: 'Ein Attribut, das eine Entität eindeutig kennzeichnet (Primärschlüssel-Kandidat).' },
    { id: '2.2_8', q: 'Wie wird eine m:n Beziehung in ein relationales Modell überführt?', a: 'Durch Erstellung einer Zwischentabelle, die die Primärschlüssel beider Tabellen als Fremdschlüssel enthält.' },
    { id: '2.2_9', q: 'Was beschreibt eine 1:1 Beziehung?', a: 'Jeder Datensatz aus Tabelle A ist mit genau einem Datensatz aus Tabelle B verknüpft.' },
    { id: '2.2_10', q: 'Was bedeutet "Kardinalität" allgemein?', a: 'Die Angabe über die Anzahl der an einer Beziehung beteiligten Entitäten.' },

    // --- Unterpunkt 2: Relationales Modell (Keys) (10 Karten) ---
    { id: '2.2_11', q: 'Definition eines Primärschlüssels (PK)?', a: 'Ein Attribut oder eine Attributkombination, die jeden Datensatz einer Tabelle eindeutig identifiziert.' },
    { id: '2.2_12', q: 'Was ist ein Fremdschlüssel (FK)?', a: 'Ein Attribut einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist, um eine Beziehung herzustellen.' },
    { id: '2.2_13', q: 'Was ist ein zusammengesetzter Primärschlüssel?', a: 'Ein PK, der aus zwei oder mehr Attributen besteht (oft in m:n Zwischentabellen genutzt).' },
    { id: '2.2_14', q: 'Darf ein Primärschlüssel den Wert NULL enthalten?', a: 'Nein (Entity Integrity), ein PK muss immer einen eindeutigen Wert besitzen.' },
    { id: '2.2_15', q: 'Was ist ein "Surrogatschlüssel" (künstlicher Schlüssel)?', a: 'Ein vom System generierter PK ohne fachliche Bedeutung (z.B. eine Auto-Increment ID).' },
    { id: '2.2_16', q: 'Was ist ein "Natürlicher Schlüssel"?', a: 'Ein PK aus Attributen, die bereits fachlich vorhanden sind (z.B. ISBN, E-Mail-Adresse).' },
    { id: '2.2_17', q: 'Was ist ein "Superschlüssel"?', a: 'Jede Menge von Attributen, die einen Datensatz eindeutig identifiziert (auch unnötige Attribute enthalten).' },
    { id: '2.2_18', q: 'Was ist ein "Schlüsselkandidat"?', a: 'Ein minimaler Superschlüssel (enthält keine Attribute, die weggelassen werden könnten).' },
    { id: '2.2_19', q: 'Was bedeutet "Eindeutigkeit" (Unique Constraint)?', a: 'Stellt sicher, dass alle Werte in einer Spalte verschieden sind (darf aber meist NULL sein, im Gegensatz zum PK).' },
    { id: '2.2_20', q: 'Zweck eines Index in einer Datenbank?', a: 'Beschleunigung von Suchabfragen auf bestimmten Spalten.' },

    // --- Unterpunkt 3: Normalisierung (1. - 3. NF) (10 Karten) ---
    { id: '2.2_21', q: 'Was ist das Ziel der Normalisierung?', a: 'Vermeidung von Redundanzen und Anomalien (Einfüge-, Lösch-, Änderungsanomalien).' },
    { id: '2.2_22', q: 'Wann ist eine Tabelle in der 1. Normalform (1. NF)?', a: 'Wenn alle Attribute atomar sind (nicht weiter zerlegbar) und keine Wiederholungsgruppen existieren.' },
    { id: '2.2_23', q: 'Wann ist eine Tabelle in der 2. Normalform (2. NF)?', a: 'Wenn sie in der 1. NF ist und jedes Nicht-Schlüsselattribut voll funktional vom Primärschlüssel abhängt.' },
    { id: '2.2_24', q: 'Wann ist eine Tabelle in der 3. Normalform (3. NF)?', a: 'Wenn sie in der 2. NF ist und kein Nicht-Schlüsselattribut transitiv vom Primärschlüssel abhängt.' },
    { id: '2.2_25', q: 'Was bedeutet "atomar"?', a: 'Ein Wert ist nicht weiter sinnvoll teilbar (z.B. Vorname und Nachname in getrennten Spalten).' },
    { id: '2.2_26', q: 'Was ist eine "transitive Abhängigkeit"?', a: 'Wenn ein Attribut A vom Attribut B abhängt, und B wiederum vom Primärschlüssel abhängt.' },
    { id: '2.2_27', q: 'Was ist eine "Löschanomalie"?', a: 'Beim Löschen eines Datensatzes gehen ungewollt Informationen verloren, die man eigentlich behalten wollte.' },
    { id: '2.2_28', q: 'Was ist eine "Update-Anomalie"?', a: 'Gleiche Daten müssen an mehreren Stellen geändert werden; wird eine Stelle vergessen, entstehen inkonsistente Daten.' },
    { id: '2.2_29', q: 'Was bedeutet "partielle Abhängigkeit" (Bezug zur 2. NF)?', a: 'Ein Attribut hängt nur von einem TEIL des zusammengesetzten Primärschlüssels ab.' },
    { id: '2.2_30', q: 'Nenne einen Nachteil von zu hoher Normalisierung.', a: 'Die Performance kann sinken, da für Abfragen viele Tabellen per JOIN verknüpft werden müssen.' },

    // --- Unterpunkt 4: Referenzielle Integrität & Löschweitergabe (10 Karten) ---
    { id: '2.2_31', q: 'Was bedeutet "Referenzielle Integrität"?', a: 'Jeder Fremdschlüsselwert muss entweder existieren (als PK in der Zieltabelle) oder NULL sein.' },
    { id: '2.2_32', q: 'Was bewirkt "ON DELETE CASCADE"?', a: 'Wird ein Datensatz in der Elterntabelle gelöscht, werden alle verknüpften Datensätze in der Kindtabelle automatisch mitgelöscht.' },
    { id: '2.2_33', q: 'Was bewirkt "ON DELETE SET NULL"?', a: 'Wird der Eltern-Datensatz gelöscht, wird der Fremdschlüssel in der Kindtabelle auf NULL gesetzt.' },
    { id: '2.2_34', q: 'Was bewirkt "ON DELETE RESTRICT" (oder NO ACTION)?', a: 'Das Löschen des Eltern-Datensatzes wird verhindert, solange noch Kind-Datensätze darauf verweisen.' },
    { id: '2.2_35', q: 'Was ist ein "Orphan" (Waisen-Datensatz)?', a: 'Ein Datensatz in einer Kindtabelle, dessen Fremdschlüssel auf einen nicht mehr existierenden PK verweist (Verletzung der Integrität).' },
    { id: '2.2_36', q: 'Wann nutzt man SET NULL statt CASCADE?', a: 'Wenn der Kind-Datensatz auch ohne die Verknüpfung zur Eltern-Entität sinnvoll weiter existieren darf.' },
    { id: '2.2_37', q: 'Gilt referenzielle Integrität auch für Updates?', a: 'Ja, mit "ON UPDATE CASCADE" werden PK-Änderungen an alle Fremdschlüssel weitergegeben.' },
    { id: '2.2_38', q: 'Welche Datenbank-Objekte erzwingen die referenzielle Integrität?', a: 'Foreign Key Constraints.' },
    { id: '2.2_39', q: 'Warum ist referenzielle Integrität wichtig?', a: 'Sie sichert die logische Konsistenz der Daten über Tabellengrenzen hinweg.' },
    { id: '2.2_40', q: 'Kann ein Fremdschlüssel auf die eigene Tabelle verweisen?', a: 'Ja (Self-Referencing FK), z.B. bei Mitarbeiter-Vorgesetzten-Beziehungen.' },

    // --- Unterpunkt 5: NoSQL-Ansätze (10 Karten) ---
    { id: '2.2_41', q: 'Was bedeutet die Abkürzung NoSQL?', a: '"Not only SQL" – Datenbanken, die ein nicht-relationales Datenmodell nutzen.' },
    { id: '2.2_42', q: 'Was ist eine Document-Store Datenbank?', a: 'Speichert Daten in Dokumenten (meist JSON/BSON), z.B. MongoDB.' },
    { id: '2.2_43', q: 'Was zeichnet eine Key-Value-Datenbank aus?', a: 'Sehr simpel: Ein eindeutiger Schlüssel zeigt auf einen Wert (z.B. Redis).' },
    { id: '2.2_44', q: 'Wofür nutzt man Graph-Datenbanken?', a: 'Zur Speicherung stark vernetzter Daten (Knoten und Kanten), z.B. soziale Netzwerke (Neo4j).' },
    { id: '2.2_45', q: 'Was ist der Hauptvorteil von NoSQL gegenüber SQL?', a: 'Hohe Skalierbarkeit (Horizontal Scaling) und flexibles Schema (Schema-less).' },
    { id: '2.2_46', q: 'Was bedeutet "Schema-less" (Schema-Freiheit)?', a: 'Datensätze innerhalb einer Sammlung können unterschiedliche Felder/Strukturen haben.' },
    { id: '2.2_47', q: 'Was ist das BASE-Prinzip bei NoSQL (Gegensatz zu ACID)?', a: 'Basically Available, Soft state, Eventual consistency (schließliche Konsistenz).' },
    { id: '2.2_48', q: 'Was bedeutet "Eventual Consistency"?', a: 'Nach einer Änderung sind die Daten nicht sofort auf allen Knoten aktuell, werden es aber nach kurzer Zeit.' },
    { id: '2.2_49', q: 'Was ist eine Wide-Column-Datenbank?', a: 'Speichert Daten in Spaltenfamilien statt Zeilen, optimiert für sehr große Datenmengen (z.B. Cassandra).' },
    { id: '2.2_50', q: 'Wann sollte man NoSQL statt einer relationalen DB wählen?', a: 'Bei unstrukturierten Daten, extrem hohen Schreiblasten oder wenn horizontale Skalierbarkeit zwingend ist.' }
  ],

  // Topic 2.3: Fortgeschrittenes SQL (80 Karten)
  '2.3': [
    // --- Unterpunkt 1: DQL (Komplexe JOINs & Subqueries) (10 Karten) ---
    { id: '2.3_1', q: 'Was ist ein INNER JOIN?', a: 'Gibt nur die Datensätze zurück, die in beiden Tabellen eine Übereinstimmung haben.' },
    { id: '2.3_2', q: 'Was ist ein LEFT (OUTER) JOIN?', a: 'Gibt alle Datensätze der linken Tabelle zurück und die passenden der rechten. Fehlende Werte rechts werden NULL.' },
    { id: '2.3_3', q: 'Wofür nutzt man einen SELF JOIN?', a: 'Um eine Tabelle mit sich selbst zu verknüpfen (z.B. bei hierarchischen Daten wie Mitarbeiter-Vorgesetzter).' },
    { id: '2.3_4', q: 'Unterschied zwischen WHERE und HAVING?', a: 'WHERE filtert einzelne Zeilen VOR der Gruppierung. HAVING filtert Gruppen NACH der Aggregation.' },
    { id: '2.3_5', q: 'Was bewirkt der Operator EXISTS in einer Subquery?', a: 'Gibt TRUE zurück, wenn die Unterabfrage mindestens einen Datensatz findet (performanter als IN bei großen Mengen).' },
    { id: '2.3_6', q: 'Was ist ein FULL OUTER JOIN?', a: 'Gibt alle Datensätze beider Tabellen zurück. Gibt es keine Übereinstimmung, wird die Gegenseite mit NULL aufgefüllt.' },
    { id: '2.3_7', q: 'Was bewirkt UNION (im Gegensatz zu JOIN)?', a: 'Kombiniert die Ergebnismengen zweier SELECTs vertikal (übereinander). Duplikate werden entfernt.' },
    { id: '2.3_8', q: 'Was ist eine "korrelierte Unterabfrage"?', a: 'Eine Subquery, die Werte aus der äußeren Abfrage verwendet und für jede Zeile der äußeren Abfrage neu ausgeführt wird.' },
    { id: '2.3_9', q: 'Was bewirkt der Operator LIKE mit dem Platzhalter %?', a: 'Sucht nach Mustern; % steht für beliebig viele Zeichen (auch Null).' },
    { id: '2.3_10', q: 'Was bewirkt DISTINCT in einem SELECT?', a: 'Entfernt doppelte Zeilen aus der Ergebnismenge.' },

    // --- Unterpunkt 2: Aggregat-Funktionen (10 Karten) ---
    { id: '2.3_11', q: 'Nenne die 5 wichtigsten SQL-Aggregatfunktionen.', a: 'COUNT, SUM, AVG, MIN, MAX.' },
    { id: '2.3_12', q: 'Was passiert mit NULL-Werten bei Aggregatfunktionen wie SUM oder AVG?', a: 'Sie werden ignoriert (nicht mitgezählt/berechnet).' },
    { id: '2.3_13', q: 'Warum muss jede Spalte im SELECT, die keine Aggregatfunktion ist, im GROUP BY stehen?', a: 'Weil die Datenbank sonst nicht weiß, wie sie die unterschiedlichen Werte der Spalte zu einem Ergebniswert zusammenfassen soll.' },
    { id: '2.3_14', q: 'Was bewirkt COUNT(*)?', a: 'Zählt alle Zeilen der Tabelle, inklusive Zeilen mit NULL-Werten.' },
    { id: '2.3_15', q: 'Was bewirkt COUNT(Spaltenname)?', a: 'Zählt nur die Zeilen, in denen die angegebene Spalte NICHT NULL ist.' },
    { id: '2.3_16', q: 'Was ist eine Window Function (z.B. OVER)?', a: 'Führt Berechnungen über eine Menge von Zeilen durch, die mit der aktuellen Zeile in Beziehung stehen, ohne die Zeilen zu gruppieren.' },
    { id: '2.3_17', q: 'Zweck von PARTITION BY in Window Functions?', a: 'Unterteilt das Ergebnisset in Gruppen, auf die die Funktion separat angewendet wird (ähnlich Group By, aber pro Zeile).' },
    { id: '2.3_18', q: 'Was macht die Funktion RANK()?', a: 'Vergibt Rangfolgenummern. Bei Gleichstand wird dieselbe Nummer vergeben und die nächste Nummer übersprungen.' },
    { id: '2.3_19', q: 'Was macht DENSE_RANK()?', a: 'Wie RANK(), aber ohne Lücken in der Nummerierung bei Gleichstand.' },
    { id: '2.3_20', q: 'Was bewirkt die Funktion COALESCE(val1, val2, ...)?', a: 'Gibt den ersten Wert der Liste zurück, der NICHT NULL ist.' },

    // --- Unterpunkt 3: DML (Insert, Update, Delete) (10 Karten) ---
    { id: '2.3_21', q: 'Wie kopiert man Daten von einer Tabelle in eine andere (INSERT INTO SELECT)?', a: 'INSERT INTO ZielTabelle (spalten) SELECT spalten FROM QuellTabelle WHERE ...' },
    { id: '2.3_22', q: 'Was passiert bei einem UPDATE ohne WHERE-Klausel?', a: 'Es werden ALLE Datensätze der Tabelle mit dem neuen Wert überschrieben.' },
    { id: '2.3_23', q: 'Was ist der Unterschied zwischen DELETE und TRUNCATE?', a: 'DELETE löscht Zeilen einzeln (logbar, Trigger feuern). TRUNCATE leert die Tabelle komplett (schneller, kein Logging der Einzelzeilen).' },
    { id: '2.3_24', q: 'Darf man in einem UPDATE-Statement JOINs verwenden?', a: 'Ja, in vielen SQL-Dialekten kann man Tabellen verknüpfen, um Werte basierend auf anderen Tabellen zu aktualisieren.' },
    { id: '2.3_25', q: 'Was bedeutet "Atomarität" bei DML-Operationen?', a: 'Eine Operation wird entweder ganz oder gar nicht ausgeführt (Alles-oder-Nichts-Prinzip).' },
    { id: '2.3_26', q: 'Zweck der RETURNING-Klausel (in manchen Dialekten)?', a: 'Gibt Werte der gerade eingefügten oder geänderten Zeilen sofort zurück (z.B. die neue ID).' },
    { id: '2.3_27', q: 'Was bewirkt ON CONFLICT (oder REPLACE/UPSERT)?', a: 'Legt fest, was passieren soll, wenn ein INSERT einen Unique-Constraint verletzt (z.B. stattdessen Update ausführen).' },
    { id: '2.3_28', q: 'Können DELETE-Statements Subqueries enthalten?', a: 'Ja, um z.B. alle Kunden zu löschen, die keine Bestellungen haben: DELETE FROM Kunden WHERE NOT EXISTS (...).' },
    { id: '2.3_29', q: 'Warum ist es riskant, IDs manuell per UPDATE zu ändern?', a: 'Gefahr von Verletzungen der referenziellen Integrität (Fremdschlüssel-Konflikte).' },
    { id: '2.3_30', q: 'Was ist "Mass Data Loading"?', a: 'Das hocheffiziente Einfügen sehr großer Datenmengen (oft über spezielle Tools wie COPY oder Bulk Insert).' },

    // --- Unterpunkt 4: DDL (Create, Alter, Drop) (10 Karten) ---
    { id: '2.3_31', q: 'Was bewirkt der Constraint DEFAULT?', a: 'Setzt einen festen Wert, falls beim INSERT kein Wert für diese Spalte angegeben wird.' },
    { id: '2.3_32', q: 'Zweck des CHECK-Constraints?', a: 'Stellt sicher, dass alle Werte in einer Spalte eine bestimmte Bedingung erfüllen (z.B. Alter >= 18).' },
    { id: '2.3_33', q: 'Wie fügt man einer bestehenden Tabelle eine Spalte hinzu?', a: 'ALTER TABLE tabellenname ADD spaltenname datentyp;' },
    { id: '2.3_34', q: 'Unterschied DROP TABLE vs. TRUNCATE TABLE?', a: 'DROP löscht die gesamte Tabelle inkl. Struktur. TRUNCATE löscht nur die Daten, die Struktur bleibt erhalten.' },
    { id: '2.3_35', q: 'Was bewirkt CASCADE bei einem DROP TABLE?', a: 'Löscht auch automatisch alle abhängigen Objekte (z.B. Views oder Constraints), die auf diese Tabelle verweisen.' },
    { id: '2.3_36', q: 'Was ist der Datentyp VARCHAR(n)?', a: 'Zeichenkette mit variabler Länge bis maximal n Zeichen (platzsparender als CHAR).' },
    { id: '2.3_37', q: 'Was ist der Datentyp DECIMAL(p, s)?', a: 'Exakter numerischer Typ. p = Gesamtzahl der Ziffern, s = Nachkommastellen.' },
    { id: '2.3_38', q: 'Wie benennt man eine Tabelle um?', a: 'ALTER TABLE alter_name RENAME TO neuer_name;' },
    { id: '2.3_39', q: 'Was bewirkt AUTO_INCREMENT (oder SERIAL/IDENTITY)?', a: 'Erzeugt automatisch eine fortlaufende Nummer für neue Datensätze (meist für PK).' },
    { id: '2.3_40', q: 'Können Constraints nachträglich hinzugefügt werden?', a: 'Ja, über ALTER TABLE ADD CONSTRAINT ...' },

    // --- Unterpunkt 5: Views, Indizes & Performance (10 Karten) ---
    { id: '2.3_41', q: 'Was ist eine View (Sicht)?', a: 'Eine gespeicherte SELECT-Abfrage, die wie eine virtuelle Tabelle verwendet werden kann.' },
    { id: '2.3_42', q: 'Vorteil einer View?', a: 'Kapselung komplexer Abfragen, Sicherheit (Nutzer sieht nur bestimmte Spalten), Vereinfachung für den Client.' },
    { id: '2.3_43', q: 'Was ist ein B-Baum Index (B-Tree)?', a: 'Die Standard-Indexstruktur in DBs; erlaubt Suche, Einfügen und Löschen in logarithmischer Zeit.' },
    { id: '2.3_44', q: 'Nenne einen Nachteil von zu vielen Indizes.', a: 'Schreibzugriffe (INSERT/UPDATE/DELETE) werden langsamer, da die Indizes mit aktualisiert werden müssen.' },
    { id: '2.3_45', q: 'Wofür nutzt man den EXPLAIN-Befehl?', a: 'Um den Ausführungsplan einer Abfrage zu sehen und Performance-Engpässe zu finden.' },
    { id: '2.3_46', q: 'Was ist ein "Full Table Scan"?', a: 'Die DB muss jede einzelne Zeile lesen, da kein passender Index vorhanden ist (langsam bei großen Daten).' },
    { id: '2.3_47', q: 'Was ist ein zusammengesetzter Index?', a: 'Ein Index, der über mehrere Spalten gleichzeitig gebildet wird.' },
    { id: '2.3_48', q: 'Was ist eine "Materialized View"?', a: 'Eine View, deren Ergebnis physisch gespeichert wird (erfordert manuelle/zeitgesteuerte Aktualisierung).' },
    { id: '2.3_49', q: 'Zweck der Datenbank-Denormalisierung?', a: 'Gezielte Redundanz einbauen, um die Lese-Performance (weniger Joins) zu erhöhen.' },
    { id: '2.3_50', q: 'Was bewirkt ein Clustered Index?', a: 'Bestimmt die physische Reihenfolge der Datensätze auf der Festplatte (meist der PK).' },

    // --- Unterpunkt 6: Transaktionen & ACID (10 Karten) ---
    { id: '2.3_51', q: 'Wofür steht das A in ACID?', a: 'Atomicity (Atomarität): Eine Transaktion wird ganz oder gar nicht ausgeführt.' },
    { id: '2.3_52', q: 'Wofür steht das C in ACID?', a: 'Consistency (Konsistenz): Die Datenbank ist vor und nach der Transaktion in einem validen Zustand.' },
    { id: '2.3_53', q: 'Wofür steht das I in ACID?', a: 'Isolation: Parallel laufende Transaktionen beeinflussen sich nicht gegenseitig.' },
    { id: '2.3_54', q: 'Wofür steht das D in ACID?', a: 'Durability (Dauerhaftigkeit): Erfolgreich abgeschlossene Daten bleiben auch bei Systemfehlern erhalten.' },
    { id: '2.3_55', q: 'Was bewirkt der Befehl COMMIT?', a: 'Schließt eine Transaktion erfolgreich ab und schreibt alle Änderungen dauerhaft.' },
    { id: '2.3_56', q: 'Was bewirkt der Befehl ROLLBACK?', a: 'Bricht eine Transaktion ab und macht alle ungespeicherten Änderungen rückgängig.' },
    { id: '2.3_57', q: 'Was ist ein "Deadlock"?', a: 'Zwei Transaktionen blockieren sich gegenseitig, da jede auf eine Ressource wartet, die die andere hält.' },
    { id: '2.3_58', q: 'Was ist ein "Dirty Read"?', a: 'Eine Transaktion liest Daten, die von einer anderen Transaktion geändert, aber noch nicht committet wurden.' },
    { id: '2.3_59', q: 'Was ist das "Transaction Log"?', a: 'Eine Datei, in der alle Änderungen protokolliert werden, um Wiederherstellungen nach Abstürzen zu ermöglichen.' },
    { id: '2.3_60', q: 'Was bewirkt ein SAVEPOINT?', a: 'Setzt eine Markierung innerhalb einer Transaktion, zu der man per Rollback zurückkehren kann, ohne alles abzubrechen.' },

    // --- Unterpunkt 7: Stored Procedures, Trigger & Functions (10 Karten) ---
    { id: '2.3_61', q: 'Was ist eine Stored Procedure?', a: 'Ein im Datenbanksystem gespeichertes Programm (SQL-Skript), das Parameter annehmen kann.' },
    { id: '2.3_62', q: 'Was ist ein Datenbank-Trigger?', a: 'Code, der automatisch bei bestimmten Ereignissen (INSERT, UPDATE, DELETE) ausgeführt wird.' },
    { id: '2.3_63', q: 'Unterschied zwischen Stored Procedure und Function?', a: 'Functions müssen einen Wert zurückgeben und können in SELECTs genutzt werden. Procedures geben meist nichts zurück.' },
    { id: '2.3_64', q: 'Vorteil von Stored Procedures?', a: 'Reduzierung des Netzwerkverkehrs, bessere Performance (vorkompiliert), zentrale Logik.' },
    { id: '2.3_65', q: 'Was ist ein "BEFORE INSERT" Trigger?', a: 'Wird ausgeführt, BEVOR die Daten in die Tabelle geschrieben werden (gut für Validierung/Manipulation).' },
    { id: '2.3_66', q: 'Was ist ein "AFTER DELETE" Trigger?', a: 'Wird ausgeführt, nachdem ein Datensatz gelöscht wurde (gut für Logging/Auditing).' },
    { id: '2.3_67', q: 'Was bedeutet "Deterministic" bei einer Function?', a: 'Die Funktion liefert bei gleichen Eingabeparametern immer das absolut gleiche Ergebnis.' },
    { id: '2.3_68', q: 'Was ist PL/SQL oder T-SQL?', a: 'Proprietäre Erweiterungen von SQL um prozedurale Elemente (Schleifen, Variablen) von Oracle bzw. Microsoft.' },
    { id: '2.3_69', q: 'Kann ein Trigger ein ROLLBACK auslösen?', a: 'Ja, um eine Operation zu verhindern, die gegen komplexe Geschäftsregeln verstößt.' },
    { id: '2.3_70', q: 'Nenne eine Gefahr bei Triggern.', a: 'Kettenreaktionen (Trigger löst Trigger aus) können die Performance extrem verschlechtern und die Fehlersuche erschweren.' },

    // --- Unterpunkt 8: DCL (Rechteverwaltung) (10 Karten) ---
    { id: '2.3_71', q: 'Was bewirkt der Befehl GRANT?', a: 'Erteilt einem Benutzer oder einer Rolle bestimmte Berechtigungen (z.B. SELECT, INSERT).' },
    { id: '2.3_72', q: 'Was bewirkt der Befehl REVOKE?', a: 'Entzieht einem Benutzer oder einer Rolle zuvor erteilte Berechtigungen.' },
    { id: '2.3_73', q: 'Was ist eine "Rolle" in der Rechteverwaltung?', a: 'Eine Sammlung von Berechtigungen, die man mehreren Benutzern gleichzeitig zuweisen kann.' },
    { id: '2.3_74', q: 'Was bedeutet GRANT OPTION?', a: 'Der berechtigte User darf die erhaltenen Rechte selbst an andere User weitergeben.' },
    { id: '2.3_75', q: 'Was ist ein "Schema" in einer Datenbank?', a: 'Ein Namensraum, der logisch zusammengehörige Objekte (Tabellen, Views etc.) gruppiert.' },
    { id: '2.3_76', q: 'Zweck des Least-Privilege-Prinzips?', a: 'Nutzer erhalten nur die minimal notwendigen Rechte für ihre Aufgabe, um das Sicherheitsrisiko zu minimieren.' },
    { id: '2.3_77', q: 'Kann man Berechtigungen auf Spaltenebene vergeben?', a: 'Ja, in vielen DB-Systemen kann man z.B. SELECT nur für bestimmte Spalten erlauben.' },
    { id: '2.3_78', q: 'Was ist der User "public" (in manchen Systemen)?', a: 'Eine Standardrolle, die alle registrierten Datenbankbenutzer umfasst.' },
    { id: '2.3_79', q: 'Was bewirkt DENY (in SQL Server)?', a: 'Explizites Verbieten eines Rechts, das Vorrang vor erlaubten Rechten hat.' },
    { id: '2.3_80', q: 'Wo werden die Benutzerinformationen in der DB gespeichert?', a: 'In systemeigenen Metadaten-Tabellen (Data Dictionary).' }
  ],

  // Topic 3.1: Netzwerktechnik & Cloud (50 Karten)
  '3.1': [
    // --- Unterpunkt 1: TCP/IP & OSI (10 Karten) ---
    { id: '3.1_1', q: 'Nenne die 7 Schichten des OSI-Modells in der richtigen Reihenfolge.', a: '1. Physical, 2. Data Link, 3. Network, 4. Transport, 5. Session, 6. Presentation, 7. Application.' },
    { id: '3.1_2', q: 'Welche Aufgabe hat die Schicht 3 (Network Layer)?', a: 'Logische Adressierung (IP-Adressen) und Routing von Datenpaketen zwischen Netzwerken.' },
    { id: '3.1_3', q: 'Welche Aufgabe hat die Schicht 4 (Transport Layer)?', a: 'Ende-zu-Ende Kommunikation, Segmentierung und Fehlerkontrolle (TCP/UDP).' },
    { id: '3.1_4', q: 'Hauptunterschied zwischen TCP und UDP?', a: 'TCP: Verbindungsorientiert, zuverlässig (Handshake). UDP: Verbindungslos, schnell, keine Empfangsbestätigung.' },
    { id: '3.1_5', q: 'Was ist der "Three-Way-Handshake" bei TCP?', a: 'Verbindungsaufbau: 1. SYN, 2. SYN-ACK, 3. ACK.' },
    { id: '3.1_6', q: 'Was versteht man unter "Kapselung" (Encapsulation)?', a: 'Daten einer höheren Schicht werden als Nutzlast (Payload) in ein Paket der tieferen Schicht verpackt.' },
    { id: '3.1_7', q: 'Auf welcher OSI-Schicht arbeitet ein Router?', a: 'Schicht 3 (Network Layer).' },
    { id: '3.1_8', q: 'Auf welcher OSI-Schicht arbeitet ein Layer-2-Switch?', a: 'Schicht 2 (Data Link Layer).' },
    { id: '3.1_9', q: 'Wofür steht die Abkürzung IP und welche Versionen sind aktuell?', a: 'Internet Protocol; Version 4 (IPv4) und Version 6 (IPv6).' },
    { id: '3.1_10', q: 'Was beschreibt der Begriff "Port" in der Transportschicht?', a: 'Eine logische Adresse (0-65535), um Datenströme bestimmten Anwendungen zuzuordnen (z.B. Port 80 für HTTP).' },

    // --- Unterpunkt 2: Netzwerkdienste (DNS, DHCP etc.) (10 Karten) ---
    { id: '3.1_11', q: 'Was ist die Hauptaufgabe von DNS?', a: 'Namensauflösung: Umwandlung von Domainnamen (www.google.de) in IP-Adressen.' },
    { id: '3.1_12', q: 'Unterschied zwischen rekursiver und iterativer DNS-Abfrage?', a: 'Rekursiv: Der DNS-Server übernimmt die komplette Suche. Iterativ: Der Server gibt nur Verweise auf andere Nameserver zurück.' },
    { id: '3.1_13', q: 'Welche Informationen liefert ein DHCP-Server an einen Client?', a: 'IP-Adresse, Subnetzmaske, Standard-Gateway, DNS-Server.' },
    { id: '3.1_14', q: 'Wofür steht das "S" in HTTPS?', a: 'Secure; kennzeichnet die Verschlüsselung der HTTP-Übertragung mittels TLS/SSL.' },
    { id: '3.1_15', q: 'Was ist der Standardport für SSH und wofür wird es genutzt?', a: 'Port 22; zur sicheren, verschlüsselten Remote-Verwaltung von Computern.' },
    { id: '3.1_16', q: 'Zweck des FTP-Protokolls?', a: 'File Transfer Protocol; zum Übertragen von Dateien zwischen Server und Client.' },
    { id: '3.1_17', q: 'Was bewirkt der Befehl "ping"?', a: 'Prüft die Erreichbarkeit eines Hosts mittels ICMP Echo-Requests.' },
    { id: '3.1_18', q: 'Was ist ein Proxy-Server?', a: 'Ein Stellvertreter, der Anfragen aus dem Netzwerk entgegennimmt und im Namen des Clients weiterleitet (oft für Caching/Filterung).' },
    { id: '3.1_19', q: 'Standardport für unverschlüsseltes HTTP?', a: 'Port 80.' },
    { id: '3.1_20', q: 'Was ist der "DORA"-Prozess bei DHCP?', a: '1. Discover, 2. Offer, 3. Request, 4. Acknowledge.' },

    // --- Unterpunkt 3: IPv6 & Subnetting (10 Karten) ---
    { id: '3.1_21', q: 'Wie lang ist eine IPv6-Adresse in Bit?', a: '128 Bit (8 Blöcke zu je 16 Bit).' },
    { id: '3.1_22', q: 'In welcher Notation werden IPv6-Adressen geschrieben?', a: 'Hexadezimal, Blöcke getrennt durch Doppelpunkte (z.B. 2001:db8:...).' },
    { id: '3.1_23', q: 'Was bedeutet die Kurzschreibweise "::" in IPv6?', a: 'Einmalige Ersetzung einer aufeinanderfolgenden Reihe von Null-Blöcken.' },
    { id: '3.1_24', q: 'Was ist eine Link-Local-Adresse bei IPv6?', a: 'Eine nur im lokalen Subnetz gültige Adresse, beginnt immer mit fe80::.' },
    { id: '3.1_25', q: 'Zweck von Subnetting?', a: 'Aufteilung eines großen Netzwerks in kleinere, logische Teilnetze zur besseren Organisation und Sicherheit.' },
    { id: '3.1_26', q: 'Was gibt das Präfix (z.B. /64) bei einer IPv6-Adresse an?', a: 'Die Anzahl der Bits, die den Netzwerkanteil der Adresse ausmachen.' },
    { id: '3.1_27', q: 'Was ist der "Interface Identifier" bei IPv6?', a: 'Die hinteren 64 Bit der Adresse, die den Host eindeutig identifizieren.' },
    { id: '3.1_28', q: 'Gibt es bei IPv6 noch Broadcasts?', a: 'Nein, Broadcasts wurden durch Multicasts ersetzt.' },
    { id: '3.1_29', q: 'Was ist "Dual Stack"?', a: 'Der gleichzeitige Betrieb von IPv4 und IPv6 auf denselben Netzwerkgeräten.' },
    { id: '3.1_30', q: 'Wofür steht SLAAC bei IPv6?', a: 'Stateless Address Autoconfiguration; Hosts können sich ohne DHCPv6 selbst eine Adresse generieren.' },

    // --- Unterpunkt 4: Virtualisierung & Docker (10 Karten) ---
    { id: '3.1_31', q: 'Was ist ein Hypervisor Typ 1 (Bare Metal)?', a: 'Läuft direkt auf der Hardware (ohne Host-Betriebssystem), z.B. VMware ESXi.' },
    { id: '3.1_32', q: 'Was ist ein Hypervisor Typ 2 (Hosted)?', a: 'Läuft als Anwendung auf einem installierten Betriebssystem, z.B. Oracle VirtualBox.' },
    { id: '3.1_33', q: 'Kernunterschied zwischen VM und Container?', a: 'VM: Emuliert komplette Hardware + OS. Container: Teilt sich den Kernel des Hosts (viel leichtgewichtiger).' },
    { id: '3.1_34', q: 'Was ist ein Docker-Image?', a: 'Eine schreibgeschützte Vorlage mit allen nötigen Infos zum Starten eines Containers.' },
    { id: '3.1_35', q: 'Was ist ein Docker-Container?', a: 'Die laufende Instanz eines Images.' },
    { id: '3.1_36', q: 'Zweck eines Dockerfiles?', a: 'Eine Textdatei mit Anweisungen zum automatisierten Erstellen eines Docker-Images.' },
    { id: '3.1_37', q: 'Was bewirkt "Docker Compose"?', a: 'Ermöglicht das Definieren und Starten von Multi-Container-Anwendungen (z.B. Webserver + DB) mit einer YAML-Datei.' },
    { id: '3.1_38', q: 'Was ist ein "Volume" in Docker?', a: 'Ein Mechanismus zur dauerhaften Speicherung von Daten (Persistenz), unabhängig vom Lebenszyklus des Containers.' },
    { id: '3.1_39', q: 'Was ist ein Snapshot bei virtuellen Maschinen?', a: 'Das Speichern des aktuellen Zustands einer VM, um später zu diesem Punkt zurückkehren zu können.' },
    { id: '3.1_40', q: 'Vorteil der Virtualisierung im Rechenzentrum?', a: 'Bessere Hardware-Auslastung (Serverkonsolidierung) und schnellere Bereitstellung von Systemen.' },

    // --- Unterpunkt 5: Cloud Computing (10 Karten) ---
    { id: '3.1_41', q: 'Definition von IaaS (Infrastructure as a Service)?', a: 'Bereitstellung von virtueller Hardware (Server, Speicher, Netzwerke), z.B. AWS EC2.' },
    { id: '3.1_42', q: 'Definition von PaaS (Platform as a Service)?', a: 'Bereitstellung einer Laufzeitumgebung für Entwickler (inkl. DB, OS), z.B. Heroku.' },
    { id: '3.1_43', q: 'Definition von SaaS (Software as a Service)?', a: 'Software wird als fertiger Dienst über den Browser genutzt, z.B. Microsoft 365.' },
    { id: '3.1_44', q: 'Was ist eine "Public Cloud"?', a: 'Dienste werden über das öffentliche Internet von einem Provider für jedermann angeboten.' },
    { id: '3.1_45', q: 'Was ist eine "Private Cloud"?', a: 'Die Cloud-Infrastruktur wird exklusiv für ein einzelnes Unternehmen betrieben (höhere Kontrolle/Sicherheit).' },
    { id: '3.1_46', q: 'Was bedeutet "Hybrid Cloud"?', a: 'Kombination aus Public und Private Cloud; Daten und Anwendungen können dazwischen verschoben werden.' },
    { id: '3.1_47', q: 'Was ist "Elasticity" im Cloud-Kontext?', a: 'Die Fähigkeit, Ressourcen automatisch an die aktuelle Last anzupassen (Scaling Up/Down).' },
    { id: '3.1_48', q: 'Was bedeutet "Pay-per-use"?', a: 'Abrechnungsmodell, bei dem nur die tatsächlich genutzten Ressourcen bezahlt werden.' },
    { id: '3.1_49', q: 'Zweck von "Multi-Tenancy" (Mandantenfähigkeit)?', a: 'Mehrere Kunden teilen sich dieselbe physische Infrastruktur, sind aber logisch strikt getrennt.' },
    { id: '3.1_50', q: 'Was ist "Shared Responsibility" in der Cloud?', a: 'Provider ist für Sicherheit DER Cloud zuständig, Kunde für Sicherheit IN DER Cloud (Daten, Apps).' }
  ],

  // Topic 3.2: IT-Sicherheit (Security) (50 Karten)
  '3.2': [
    // --- Unterpunkt 1: Schutzziele (10 Karten) ---
    { id: '3.2_1', q: 'Was bedeutet das Schutzziel "Vertraulichkeit" (Confidentiality)?', a: 'Daten dürfen nur von autorisierten Personen gelesen werden (Schutz vor unbefugter Preisgabe).' },
    { id: '3.2_2', q: 'Was bedeutet das Schutzziel "Integrität" (Integrity)?', a: 'Daten müssen korrekt, vollständig und unverändert bleiben (Schutz vor unbefugter Manipulation).' },
    { id: '3.2_3', q: 'Was bedeutet das Schutzziel "Verfügbarkeit" (Availability)?', a: 'Systeme und Daten müssen für autorisierte Benutzer zum geforderten Zeitpunkt nutzbar sein.' },
    { id: '3.2_4', q: 'Was bedeutet das Schutzziel "Authentizität"?', a: 'Die Echtheit und Identität eines Kommunikationspartners oder einer Datenquelle muss überprüfbar sein.' },
    { id: '3.2_5', q: 'Was bedeutet "Verbindlichkeit" (Nicht-Abstreitbarkeit)?', a: 'Ein Nutzer kann eine von ihm durchgeführte Handlung (z.B. eine Bestellung) später nicht leugnen.' },
    { id: '3.2_6', q: 'Was ist die "CIA-Triade"?', a: 'Die drei Kern-Schutzziele der IT-Sicherheit: Confidentiality, Integrity, Availability.' },
    { id: '3.2_7', q: 'Nenne eine Bedrohung für das Schutzziel Verfügbarkeit.', a: 'DDoS-Angriffe (Distributed Denial of Service) oder physische Zerstörung von Hardware.' },
    { id: '3.2_8', q: 'Nenne eine Maßnahme zur Sicherstellung der Vertraulichkeit.', a: 'Verschlüsselung der Daten (Encryption).' },
    { id: '3.2_9', q: 'Wie kann die Integrität einer Datei sichergestellt werden?', a: 'Durch die Verwendung von Prüfsummen (Hashes).' },
    { id: '3.2_10', q: 'Was ist das Ziel einer Risikoanalyse in der IT-Sicherheit?', a: 'Identifikation von Bedrohungen und Schwachstellen, um die Eintrittswahrscheinlichkeit und Schadenshöhe zu bewerten.' },

    // --- Unterpunkt 2: Kryptografie (10 Karten) ---
    { id: '3.2_11', q: 'Was zeichnet die symmetrische Verschlüsselung aus?', a: 'Sender und Empfänger nutzen denselben geheimen Schlüssel zum Ver- und Entschlüsseln (z.B. AES).' },
    { id: '3.2_12', q: 'Was ist das Hauptproblem der symmetrischen Verschlüsselung?', a: 'Der sichere Austausch des Schlüssels zwischen den Partnern (Key Exchange Problem).' },
    { id: '3.2_13', q: 'Wie funktioniert die asymmetrische Verschlüsselung?', a: 'Jeder Partner hat ein Schlüsselpaar: Einen öffentlichen Schlüssel (zum Verschlüsseln) und einen privaten (zum Entschlüsseln).' },
    { id: '3.2_14', q: 'Nenne ein bekanntes asymmetrisches Kryptoverfahren.', a: 'RSA (Rivest-Shamir-Adleman) oder Elliptic Curve Cryptography (ECC).' },
    { id: '3.2_15', q: 'Was ist eine Hashfunktion?', a: 'Eine Einwegfunktion, die aus einer beliebig langen Eingabe eine feste Zeichenfolge (Hashwert) erzeugt.' },
    { id: '3.2_16', q: 'Was bedeutet "Kollisionsresistenz" bei Hashfunktionen?', a: 'Es sollte praktisch unmöglich sein, zwei unterschiedliche Eingaben zu finden, die denselben Hashwert ergeben.' },
    { id: '3.2_17', q: 'Wofür wird "Salting" bei der Speicherung von Passwörtern genutzt?', a: 'Hinzufügen einer zufälligen Zeichenfolge vor dem Hashen, um Rainbow-Table-Angriffe zu verhindern.' },
    { id: '3.2_18', q: 'Was ist AES (Advanced Encryption Standard)?', a: 'Ein weltweit verbreiteter Standard für die symmetrische Blockverschlüsselung (sehr sicher und schnell).' },
    { id: '3.2_19', q: 'Kann man aus einem Hashwert die Originaldaten wiederherstellen?', a: 'Nein, Hashen ist ein Einweg-Prozess (keine Entschlüsselung möglich).' },
    { id: '3.2_20', q: 'Was ist "Ende-zu-Ende-Verschlüsselung" (E2EE)?', a: 'Daten werden beim Sender verschlüsselt und erst beim Empfänger wieder entschlüsselt; niemand dazwischen (auch der Provider nicht) kann mitlesen.' },

    // --- Unterpunkt 3: Digitale Signatur & Zertifikate (10 Karten) ---
    { id: '3.2_21', q: 'Welche Schutzziele garantiert eine digitale Signatur?', a: 'Authentizität, Integrität und Verbindlichkeit.' },
    { id: '3.2_22', q: 'Wie wird eine digitale Signatur technisch erstellt?', a: 'Der Sender hasht die Nachricht und verschlüsselt diesen Hashwert mit seinem PRIVATEN Schlüssel.' },
    { id: '3.2_23', q: 'Wie prüft der Empfänger eine digitale Signatur?', a: 'Er entschlüsselt die Signatur mit dem ÖFFENTLICHEN Schlüssel des Senders und vergleicht das Ergebnis mit dem selbst berechneten Hash der Nachricht.' },
    { id: '3.2_24', q: 'Was ist ein digitales Zertifikat?', a: 'Ein digitaler Datensatz, der die Identität eines Inhabers bestätigt und dessen öffentlichen Schlüssel beglaubigt.' },
    { id: '3.2_25', q: 'Was ist eine CA (Certification Authority)?', a: 'Eine vertrauenswürdige Instanz, die digitale Zertifikate ausstellt und deren Gültigkeit bestätigt.' },
    { id: '3.2_26', q: 'Wofür steht die Abkürzung PKI?', a: 'Public Key Infrastructure; ein System zum Erstellen, Verwalten und Widerrufen digitaler Zertifikate.' },
    { id: '3.2_27', q: 'Was ist der Standard X.509?', a: 'Ein weit verbreiteter Standard für das Format von Public-Key-Zertifikaten.' },
    { id: '3.2_28', q: 'Woran erkennt ein Browser ein vertrauenswürdiges Zertifikat?', a: 'Die Signatur der CA wird gegen die im Browser vorinstallierten Root-Zertifikate geprüft.' },
    { id: '3.2_29', q: 'Was passiert, wenn ein Zertifikat "abgelaufen" ist?', a: 'Der Browser gibt eine Sicherheitswarnung aus, da die Vertrauenskette nicht mehr garantiert ist.' },
    { id: '3.2_30', q: 'Was ist eine "Revocation List" (CRL)?', a: 'Eine Liste gesperrter Zertifikate, die vor Ablauf ihrer Gültigkeit für ungültig erklärt wurden.' },

    // --- Unterpunkt 4: Bedrohungen (10 Karten) ---
    { id: '3.2_31', q: 'Was ist eine SQL-Injection?', a: 'Einschleusen von bösartigem SQL-Code über Benutzereingaben, um die Datenbank zu manipulieren oder Daten auszuspähen.' },
    { id: '3.2_32', q: 'Wie verhindert man SQL-Injections effektiv?', a: 'Durch die Verwendung von Prepared Statements (Parametrisierte Abfragen) statt String-Verkettung.' },
    { id: '3.2_33', q: 'Was ist Cross-Site Scripting (XSS)?', a: 'Einschleusen von bösartigen Skripten (meist JavaScript) in vertrauenswürdige Webseiten, die dann im Browser anderer Nutzer ausgeführt werden.' },
    { id: '3.2_34', q: 'Unterschied zwischen persistentem und reflektiertem XSS?', a: 'Persistent: Skript wird in der DB gespeichert (z.B. Forum). Reflektiert: Skript ist Teil eines Links/Parameters und wird sofort zurückgegeben.' },
    { id: '3.2_35', q: 'Was ist CSRF (Cross-Site Request Forgery)?', a: 'Ein Angriff, bei dem ein Nutzer unbewusst eine Aktion auf einer Webseite ausführt, bei der er bereits angemeldet ist.' },
    { id: '3.2_36', q: 'Was ist ein Man-in-the-Middle (MitM) Angriff?', a: 'Ein Angreifer schaltet sich unbemerkt in die Kommunikation zwischen zwei Partnern ein, um Daten mitzulesen oder zu manipulieren.' },
    { id: '3.2_37', q: 'Was versteht man unter Social Engineering?', a: 'Zwischenmenschliche Beeinflussung, um Personen dazu zu bringen, vertrauliche Informationen preiszugeben oder Sicherheitsvorkehrungen zu umgehen.' },
    { id: '3.2_38', q: 'Was ist Phishing?', a: 'Versuch, über gefälschte Webseiten, E-Mails oder Kurznachrichten an persönliche Daten (z.B. Passwörter) zu gelangen.' },
    { id: '3.2_39', q: 'Was charakterisiert eine Brute-Force-Attacke?', a: 'Das automatisierte Ausprobieren aller möglichen Zeichenkombinationen, um ein Passwort zu knacken.' },
    { id: '3.2_40', q: 'Was ist Ransomware?', a: 'Schadsoftware, die Daten auf einem System verschlüsselt und für die Entschlüsselung ein Lösegeld erpresst.' },

    // --- Unterpunkt 5: Abwehrmechanismen (10 Karten) ---
    { id: '3.2_41', q: 'Was ist die Aufgabe einer Firewall?', a: 'Überwachung und Filterung des Netzwerkverkehrs basierend auf festgelegten Sicherheitsregeln.' },
    { id: '3.2_42', q: 'Was unterscheidet eine WAF (Web Application Firewall) von einer normalen Firewall?', a: 'Eine WAF ist speziell auf den HTTP-Verkehr spezialisiert und schützt Webanwendungen vor Angriffen wie SQLi oder XSS.' },
    { id: '3.2_43', q: 'Was ist ein IDS (Intrusion Detection System)?', a: 'Ein System, das Angriffe erkennt und meldet, aber nicht aktiv blockiert.' },
    { id: '3.2_44', q: 'Was ist ein IPS (Intrusion Prevention System)?', a: 'Ein System, das Angriffe erkennt und sofort aktive Gegenmaßnahmen ergreift (z.B. Verbindung trennen).' },
    { id: '3.2_45', q: 'Wofür steht VPN und was ist dessen Hauptnutzen?', a: 'Virtual Private Network; ermöglicht eine verschlüsselte und sichere Verbindung über ein unsicheres Netzwerk (z.B. Internet).' },
    { id: '3.2_46', q: 'Was ist Zwei-Faktor-Authentisierung (2FA)?', a: 'Identitätsnachweis durch zwei unabhängige Komponenten (z.B. Passwort + SMS-Code oder Fingerabdruck).' },
    { id: '3.2_47', q: 'Was bewirkt ein Sandboxing-Verfahren?', a: 'Ausführung von Programmen in einer isolierten Umgebung, um den Zugriff auf das restliche System zu verhindern.' },
    { id: '3.2_48', q: 'Zweck eines Honeypots?', a: 'Ein Ködersystem, das Angreifer anlocken soll, um deren Methoden zu studieren, ohne das echte System zu gefährden.' },
    { id: '3.2_49', q: 'Was ist das "Prinzip der geringsten Rechte" (Least Privilege)?', a: 'Nutzer und Prozesse erhalten nur exakt die Berechtigungen, die sie zwingend für ihre Aufgabe benötigen.' },
    { id: '3.2_50', q: 'Was ist ein Antivirenprogramm?', a: 'Software, die bekannte Schadprogramme (Viren, Würmer, Trojaner) auf einem System erkennt, blockiert und ggf. entfernt.' }
  ],

  // Topic 3.3: Qualitätssicherung & DevOps (60 Karten)
  '3.3': [
    // --- Unterpunkt 1: Teststufen (10 Karten) ---
    { id: '3.3_1', q: 'Was ist ein Unit-Test (Modultest)?', a: 'Testen der kleinsten funktionalen Einheiten des Codes (z.B. einzelne Methoden oder Klassen) in Isolation.' },
    { id: '3.3_2', q: 'Was wird beim Integrationstest geprüft?', a: 'Das Zusammenspiel und die Schnittstellen zwischen verschiedenen Modulen oder Subsystemen.' },
    { id: '3.3_3', q: 'Was ist das Ziel des Systemtests?', a: 'Testen des Gesamtsystems gegen die funktionalen und nicht-funktionalen Anforderungen in einer produktionsnahen Umgebung.' },
    { id: '3.3_4', q: 'Wer führt primär den Abnahmetest (Acceptance Test) durch?', a: 'Der Kunde oder Endnutzer, um zu entscheiden, ob die Software vertraglich fertiggestellt ist.' },
    { id: '3.3_5', q: 'Was ist ein Regressionstest?', a: 'Wiederholung von Tests nach Code-Änderungen, um sicherzustellen, dass bestehende Funktionen nicht beschädigt wurden.' },
    { id: '3.3_6', q: 'Was versteht man unter einem "Rauchtest" (Smoke Test)?', a: 'Ein kurzer Oberflächentest der wichtigsten Kernfunktionen, um grobe Fehler nach einem Build sofort zu finden.' },
    { id: '3.3_7', q: 'Was sind "Stubs" und "Mocks"?', a: 'Platzhalter für noch nicht existierende oder externe Komponenten, um die zu testende Einheit isolieren zu können.' },
    { id: '3.3_8', q: 'In welcher Phase der Softwareentwicklung werden Unit-Tests idealerweise erstellt?', a: 'Während der Implementierung (bei TDD sogar davor).' },
    { id: '3.3_9', q: 'Was ist ein Alpha-Test?', a: 'Ein früher Abnahmetest durch interne Mitarbeiter des Herstellers.' },
    { id: '3.3_10', q: 'Was ist ein Beta-Test?', a: 'Ein Test der Software durch eine ausgewählte Gruppe von echten Endnutzern vor dem offiziellen Release.' },

    // --- Unterpunkt 2: Testmethoden (10 Karten) ---
    { id: '3.3_11', q: 'Was charakterisiert den Black-Box-Test?', a: 'Testen ohne Kenntnis des internen Quellcodes; Fokus liegt allein auf Input und Output.' },
    { id: '3.3_12', q: 'Was charakterisiert den White-Box-Test?', a: 'Testen mit Kenntnis des internen Aufbaus und Quellcodes; Fokus liegt auf der Logik und Pfadabdeckung.' },
    { id: '3.3_13', q: 'Was ist das Ziel der Äquivalenzklassenbildung?', a: 'Einteilung von Testdaten in Gruppen (Klassen), die vom System gleich behandelt werden, um die Anzahl der Testfälle zu reduzieren.' },
    { id: '3.3_14', q: 'Warum führt man eine Grenzwertanalyse durch?', a: 'Weil Fehler besonders häufig an den Rändern von Eingabebereichen (z.B. 0, 100, Max-Int) auftreten.' },
    { id: '3.3_15', q: 'Was ist ein statischer Test?', a: 'Prüfung von Artefakten (Code, Doku) ohne das Programm auszuführen, z.B. durch Reviews oder statische Code-Analyse.' },
    { id: '3.3_16', q: 'Was ist ein dynamischer Test?', a: 'Prüfung der Software durch tatsächliche Ausführung des Programmcodes.' },
    { id: '3.3_17', q: 'Was versteht man unter explorativem Testen?', a: 'Freies Testen ohne vordefinierte Testfälle, basierend auf der Erfahrung und Intuition des Testers.' },
    { id: '3.3_18', q: 'Was ist ein Lasttest?', a: 'Überprüfung des Systemverhaltens bei der erwarteten maximalen Last.' },
    { id: '3.3_19', q: 'Was ist ein Stresstest?', a: 'Überprüfung des Systems jenseits der Belastungsgrenze, um das Verhalten bei Überlastung zu prüfen (z.B. kontrollierter Absturz).' },
    { id: '3.3_20', q: 'Was ist ein Usability-Test?', a: 'Beobachtung von Nutzern bei der Bedienung der Software, um Probleme in der Benutzerführung zu finden.' },

    // --- Unterpunkt 3: Code Coverage (10 Karten) ---
    { id: '3.3_21', q: 'Was gibt die Code Coverage (Testabdeckung) an?', a: 'Den prozentualen Anteil des Quellcodes, der durch automatisierte Tests ausgeführt wurde.' },
    { id: '3.3_22', q: 'Was ist die Zeilenabdeckung (Statement Coverage)?', a: 'Misst, wie viel Prozent der ausführbaren Codezeilen mindestens einmal durchlaufen wurden.' },
    { id: '3.3_23', q: 'Was ist die Zweigabdeckung (Branch Coverage)?', a: 'Misst, ob alle möglichen Ausgänge von Kontrollstrukturen (z.B. IF-True und IF-False) getestet wurden.' },
    { id: '3.3_24', q: 'Was ist die Bedingungsabdeckung (Condition Coverage)?', a: 'Prüft bei komplexen Bedingungen (z.B. IF A AND B), ob alle Teilbedingungen einzeln getestet wurden.' },
    { id: '3.3_25', q: 'Garantiert eine Testabdeckung von 100% Fehlerfreiheit?', a: 'Nein, es zeigt nur, dass der Code ausgeführt wurde, sagt aber nichts über die Korrektheit der fachlichen Logik aus.' },
    { id: '3.3_26', q: 'Welche Abdeckung ist aussagekräftiger: Zeilen- oder Zweigabdeckung?', a: 'Die Zweigabdeckung, da sie auch leere Else-Zweige oder Verzweigungslogik erfasst.' },
    { id: '3.3_27', q: 'Was ist "Dead Code"?', a: 'Codeabschnitte, die niemals ausgeführt werden können (wird oft durch Coverage-Tools sichtbar).' },
    { id: '3.3_28', q: 'Warum ist eine sehr hohe Coverage (z.B. >90%) oft teuer?', a: 'Der Aufwand für Tests steigt exponentiell an, um auch die letzten, seltenen Randfälle abzudecken.' },
    { id: '3.3_29', q: 'Was ist Pfadabdeckung?', a: 'Die mächtigste Metrik; prüft, ob alle theoretisch möglichen Pfade durch eine Funktion getestet wurden.' },
    { id: '3.3_30', q: 'Nenne ein Tool zur Messung der Testabdeckung (sprachabhängig).', a: 'Z.B. JaCoCo (Java), Istanbul/NYC (JavaScript) oder Coverage.py (Python).' },

    // --- Unterpunkt 4: TDD - Test Driven Development (10 Karten) ---
    { id: '3.3_31', q: 'Erkläre den "Red-Green-Refactor" Zyklus bei TDD.', a: '1. Red: Test schreiben (schlägt fehl), 2. Green: Minimalen Code schreiben (Test besteht), 3. Refactor: Code verbessern.' },
    { id: '3.3_32', q: 'Was ist der Hauptvorteil von TDD?', a: 'Höhere Codequalität, weniger Bugs und eine automatische, vollständige Testsuite von Anfang an.' },
    { id: '3.3_33', q: 'Was bedeutet "Minimaler Code" im TDD-Kontext?', a: 'Nur so viel Code schreiben, dass der aktuelle Test gerade so besteht (kein "Overengineering").' },
    { id: '3.3_34', q: 'Warum führt TDD oft zu besserem Softwaredesign?', a: 'Weil der Entwickler gezwungen ist, sich erst Gedanken über die Schnittstelle und Nutzung des Codes zu machen.' },
    { id: '3.3_35', q: 'Was ist ein Unit-Testing Framework?', a: 'Eine Bibliothek zum Erstellen und Ausführen von Tests (z.B. JUnit, Jest, PyTest).' },
    { id: '3.3_36', q: 'Was bedeutet "Refactoring" im TDD?', a: 'Struktur des Codes verbessern (Lesbarkeit, Redundanz), ohne das funktionale Verhalten zu ändern.' },
    { id: '3.3_37', q: 'Was ist eine "Assertion" (Zusicherung) im Test?', a: 'Der Vergleich zwischen dem tatsächlichen Ergebnis und dem erwarteten Soll-Wert (z.B. assertEquals(4, calc.add(2,2))).' },
    { id: '3.3_38', q: 'Warum schreibt man bei TDD den Test VOR dem Code?', a: 'Um sicherzustellen, dass der Test auch wirklich fehlschlagen kann und um die Anforderungen genau zu definieren.' },
    { id: '3.3_39', q: 'Kann TDD die Entwicklungsgeschwindigkeit bremsen?', a: 'Initial ja (Mehraufwand), langfristig spart es Zeit durch weniger Debugging und leichtere Wartung.' },
    { id: '3.3_40', q: 'Was ist BDD (Behavior Driven Development)?', a: 'Eine Erweiterung von TDD, die Tests in natürlicher Sprache (Given/When/Then) beschreibt, um das Fachverhalten zu betonen.' },

    // --- Unterpunkt 5: Versionsverwaltung - Git (10 Karten) ---
    { id: '3.3_41', q: 'Was ist der Unterschied zwischen "git commit" und "git push"?', a: 'Commit speichert Änderungen lokal in der Versionshistorie. Push überträgt die lokalen Commits an einen Remote-Server.' },
    { id: '3.3_42', q: 'Was macht der Befehl "git pull"?', a: 'Lädt die neuesten Änderungen vom Remote-Server herunter und führt sie sofort mit dem lokalen Branch zusammen (Fetch + Merge).' },
    { id: '3.3_43', q: 'Wofür nutzt man "Branches" in Git?', a: 'Um parallel an verschiedenen Features zu arbeiten, ohne die stabile Hauptlinie (Main/Master) zu stören.' },
    { id: '3.3_44', q: 'Was ist ein "Merge Conflict"?', a: 'Tritt auf, wenn in zwei Branches dieselbe Zeile einer Datei unterschiedlich geändert wurde und Git sie nicht automatisch zusammenführen kann.' },
    { id: '3.3_45', q: 'Was ist der Unterschied zwischen "Merge" und "Rebase"?', a: 'Merge fügt Zweige zusammen (erzeugt Merge-Commit). Rebase setzt lokale Änderungen "oben auf" die neuen Remote-Änderungen (linearer Verlauf).' },
    { id: '3.3_46', q: 'Was macht "git clone"?', a: 'Erstellt eine vollständige lokale Kopie eines entfernten Repositorys inkl. der gesamten Historie.' },
    { id: '3.3_47', q: 'Zweck der ".gitignore" Datei?', a: 'Festlegen, welche Dateien (z.B. Logfiles, Passwörter, Binaries) nicht von Git versioniert werden sollen.' },
    { id: '3.3_48', q: 'Was ist die "Staging Area" (Index)?', a: 'Ein Zwischenbereich, in dem Änderungen gesammelt werden, bevor sie mit einem Commit final gespeichert werden (git add).' },
    { id: '3.3_49', q: 'Was bewirkt "git checkout" (bzw. git switch)?', a: 'Wechselt den aktuellen Arbeitszustand zu einem anderen Branch oder einem bestimmten Commit.' },
    { id: '3.3_50', q: 'Was ist ein "Pull Request" (oder Merge Request)?', a: 'Eine Anfrage, Änderungen aus einem Branch in einen anderen (meist Main) zu übernehmen, oft verbunden mit einem Code Review.' },

    // --- Unterpunkt 6: CI/CD Pipelines (10 Karten) ---
    { id: '3.3_51', q: 'Wofür steht die Abkürzung CI?', a: 'Continuous Integration: Häufiges Zusammenführen von Code-Änderungen in ein zentrales Repository mit automatisierten Tests.' },
    { id: '3.3_52', q: 'Wofür steht die Abkürzung CD?', a: 'Continuous Delivery (manuelles Release) oder Continuous Deployment (vollautomatisches Release).' },
    { id: '3.3_53', q: 'Was ist eine CI/CD Pipeline?', a: 'Eine automatisierte Kette von Schritten (Build, Test, Deploy), die jede Code-Änderung durchlaufen muss.' },
    { id: '3.3_54', q: 'Was ist ein "Build-Server"?', a: 'Ein zentrales System (z.B. Jenkins, GitLab Runner), das die Pipelines ausführt und den Code kompiliert.' },
    { id: '3.3_55', q: 'Nenne einen Vorteil von CI/CD.', a: 'Schnelleres Feedback bei Fehlern, kürzere Release-Zyklen und weniger manuelle Fehlerrisiken beim Deployment.' },
    { id: '3.3_56', q: 'Was ist ein "Artifact" in einer Pipeline?', a: 'Das Ergebnis eines Build-Prozesses (z.B. eine .exe, .jar oder ein Docker-Image), das später ausgeliefert wird.' },
    { id: '3.3_57', q: 'Was bedeutet "Shift Left" im DevOps-Kontext?', a: 'Test- und Sicherheitsaktivitäten so früh wie möglich in den Entwicklungsprozess (nach links) zu verlagern.' },
    { id: '3.3_58', q: 'Was ist "Infrastructure as Code" (IaC)?', a: 'Die Verwaltung und Bereitstellung der Infrastruktur (Server, Netze) über maschinenlesbare Definitionsdateien (z.B. Terraform, Ansible).' },
    { id: '3.3_59', q: 'Was bedeutet "Blue-Green Deployment"?', a: 'Ein Verfahren, bei dem zwei identische Umgebungen existieren; eine ist live (Blue), auf die andere wird das neue Release (Green) aufgespielt und dann umgeschaltet.' },
    { id: '3.3_60', q: 'Was ist ein "Linter"?', a: 'Ein Tool, das den Quellcode statisch auf Stilfehler, potenzielle Bugs oder Formatierungsregeln prüft.' }
  ],

  // Topic 3.4: Datenschutz (DSGVO) & Recht (50 Karten)
  '3.4': [
    // --- Unterpunkt 1: DSGVO-Prinzipien (10 Karten) ---
    { id: '3.4_1', q: 'Was besagt das Prinzip der "Zweckbindung"?', a: 'Personenbezogene Daten dürfen nur für festgelegte, eindeutige und rechtmäßige Zwecke erhoben werden.' },
    { id: '3.4_2', q: 'Was bedeutet "Datensparsamkeit" (Datenminimierung)?', a: 'Es dürfen nur so viele Daten erhoben werden, wie für den jeweiligen Zweck unbedingt notwendig sind.' },
    { id: '3.4_3', q: 'Was beschreibt das Prinzip der "Transparenz" in der DSGVO?', a: 'Betroffene müssen in leicht verständlicher Form darüber informiert werden, wer welche Daten wie und warum verarbeitet.' },
    { id: '3.4_4', q: 'Was ist das Prinzip der "Richtigkeit"?', a: 'Personenbezogene Daten müssen sachlich richtig und erforderlichenfalls auf dem neuesten Stand sein.' },
    { id: '3.4_5', q: 'Was besagt die "Speicherbegrenzung"?', a: 'Daten müssen gelöscht oder anonymisiert werden, sobald sie für den Zweck der Verarbeitung nicht mehr benötigt werden.' },
    { id: '3.4_6', q: 'Was bedeutet "Integrität und Vertraulichkeit" im DSGVO-Kontext?', a: 'Daten müssen durch angemessene Sicherheit (z.B. Verschlüsselung) vor unbefugter Verarbeitung und Verlust geschützt werden.' },
    { id: '3.4_7', q: 'Was ist die "Rechenschaftspflicht" (Accountability)?', a: 'Der Verantwortliche muss nachweisen können, dass er die DSGVO-Prinzipien einhält (Dokumentationspflicht).' },
    { id: '3.4_8', q: 'Was gilt als "personenbezogene Daten"?', a: 'Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z.B. Name, IP-Adresse, E-Mail).' },
    { id: '3.4_9', q: 'Was ist "Privacy by Design"?', a: 'Datenschutz durch Technikgestaltung: Datenschutzaspekte werden bereits bei der Entwicklung eines Systems berücksichtigt.' },
    { id: '3.4_10', q: 'Was ist "Privacy by Default"?', a: 'Datenschutzfreundliche Voreinstellungen: Ab Werk sind nur die Datenverarbeitungen aktiv, die für den Zweck nötig sind.' },

    // --- Unterpunkt 2: Rechte der Betroffenen (10 Karten) ---
    { id: '3.4_11', q: 'Was umfasst das "Recht auf Auskunft" (Art. 15)?', a: 'Der Betroffene darf erfahren, ob und welche Daten über ihn gespeichert sind und zu welchem Zweck.' },
    { id: '3.4_12', q: 'Was ist das "Recht auf Löschung" (Recht auf Vergessenwerden)?', a: 'Daten müssen gelöscht werden, wenn sie nicht mehr nötig sind oder die Einwilligung widerrufen wurde (sofern keine gesetzliche Aufbewahrungsfrist vorliegt).' },
    { id: '3.4_13', q: 'Was bedeutet das "Recht auf Datenübertragbarkeit" (Portabilität)?', a: 'Nutzer können verlangen, ihre Daten in einem gängigen, maschinenlesbaren Format zu erhalten, um sie zu einem anderen Anbieter mitzunehmen.' },
    { id: '3.4_14', q: 'Was ist das "Recht auf Berichtigung"?', a: 'Unverzügliche Korrektur unrichtiger oder Ergänzung unvollständiger personenbezogener Daten.' },
    { id: '3.4_15', q: 'Was bewirkt das "Recht auf Einschränkung der Verarbeitung"?', a: 'Die Daten bleiben gespeichert, dürfen aber ohne Einwilligung des Betroffenen nicht mehr genutzt (nur noch markiert) werden.' },
    { id: '3.4_16', q: 'Was ist das "Widerspruchsrecht" (Art. 21)?', a: 'Betroffene können der Verarbeitung ihrer Daten aus Gründen ihrer besonderen Situation widersprechen (besonders bei Direktwerbung).' },
    { id: '3.4_17', q: 'Welche Pflicht hat ein Unternehmen bei einer Datenpanne?', a: 'Meldung an die Aufsichtsbehörde innerhalb von 72 Stunden, falls ein Risiko für die Rechte der Betroffenen besteht.' },
    { id: '3.4_18', q: 'Muss die Auskunftserteilung an einen Betroffenen kostenpflichtig sein?', a: 'Nein, die erste Auskunft muss in der Regel unentgeltlich (kostenlos) erfolgen.' },
    { id: '3.4_19', q: 'Was ist ein "automatisierte Entscheidung im Einzelfall" (Profiling)?', a: 'Entscheidungen, die ohne menschliches Eingreifen rein auf Algorithmen basieren (z.B. Kreditwürdigkeit); Betroffene haben hier besondere Rechte.' },
    { id: '3.4_20', q: 'Wo können sich Betroffene beschweren, wenn sie ihre Rechte verletzt sehen?', a: 'Bei der zuständigen Datenschutz-Aufsichtsbehörde (Landesdatenschutzbeauftragter).' },

    // --- Unterpunkt 3: TOMs - Technisch-organisatorische Maßnahmen (10 Karten) ---
    { id: '3.4_21', q: 'Was sind "Technische Maßnahmen" bei den TOMs?', a: 'Physische oder digitale Schutzvorkehrungen, z.B. Alarmanlagen, Firewalls, Verschlüsselung oder Backup-Systeme.' },
    { id: '3.4_22', q: 'Was sind "Organisatorische Maßnahmen" bei den TOMs?', a: 'Regelungen und Anweisungen für Menschen, z.B. Zutrittskontrollkonzepte, Schulungen oder Passwort-Richtlinien.' },
    { id: '3.4_23', q: 'Zweck der "Zutrittskontrolle"?', a: 'Unbefugte am Betreten der Räumlichkeiten (Rechenzentrum, Büro) hindern, z.B. durch Chipkarten oder Pförtner.' },
    { id: '3.4_24', q: 'Zweck der "Zugangskontrolle"?', a: 'Unbefugte an der Nutzung von Systemen hindern, z.B. durch Benutzername und Passwort.' },
    { id: '3.4_25', q: 'Zweck der "Zugriffskontrolle"?', a: 'Sicherstellen, dass berechtigte Nutzer nur auf die Daten zugreifen können, für die sie eine Erlaubnis haben (Rechtemanagement).' },
    { id: '3.4_26', q: 'Was versteht man unter "Weitergabekontrolle"?', a: 'Sicherstellen, dass Daten bei der Übermittlung nicht unbefugt gelesen oder verändert werden können (z.B. VPN, Verschlüsselung).' },
    { id: '3.4_27', q: 'Was ist die "Verfügbarkeitskontrolle"?', a: 'Maßnahmen gegen Datenverlust oder Systemausfall, z.B. USV, RAID oder regelmäßige Backups.' },
    { id: '3.4_28', q: 'Was beschreibt das Ziel der "Trennungskontrolle"?', a: 'Daten, die zu unterschiedlichen Zwecken erhoben wurden, müssen auch getrennt verarbeitet werden (z.B. getrennte Datenbanken).' },
    { id: '3.4_29', q: 'Was ist die "Eingabekontrolle"?', a: 'Nachvollziehbarkeit, wer wann welche Daten in ein System eingegeben oder verändert hat (Protokollierung/Logging).' },
    { id: '3.4_30', q: 'Müssen TOMs dem "Stand der Technik" entsprechen?', a: 'Ja, die Maßnahmen müssen regelmäßig überprüft und an aktuelle Sicherheitsstandards angepasst werden.' },

    // --- Unterpunkt 4: AVV & Datenschutzbeauftragter (10 Karten) ---
    { id: '3.4_31', q: 'Was ist ein AVV (Auftragsverarbeitungsvertrag)?', a: 'Ein Vertrag, der geschlossen werden muss, wenn ein Dienstleister (z.B. Cloud-Hoster) personenbezogene Daten im Auftrag eines Unternehmens verarbeitet.' },
    { id: '3.4_32', q: 'Wer ist bei einer Auftragsverarbeitung für den Datenschutz verantwortlich?', a: 'Der Auftraggeber bleibt voll verantwortlich (Controller), der Dienstleister ist weisungsgebunden.' },
    { id: '3.4_33', q: 'Wann muss ein Unternehmen einen Datenschutzbeauftragten (DSB) bestellen?', a: 'Wenn in der Regel mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind.' },
    { id: '3.4_34', q: 'Darf der DSB einem fachlichen Vorgesetzten weisungsgebunden sein?', a: 'Nein, der DSB ist in seiner Fachkunde weisungsfrei und berichtet direkt an die Geschäftsleitung.' },
    { id: '3.4_35', q: 'Was ist das "Verzeichnis von Verarbeitungstätigkeiten" (VVT)?', a: 'Eine interne Dokumentation aller Prozesse im Unternehmen, bei denen personenbezogene Daten verarbeitet werden.' },
    { id: '3.4_36', q: 'Was ist eine Datenschutz-Folgenabschätzung (DSFA)?', a: 'Eine Risikoanalyse, die durchgeführt werden muss, wenn eine Datenverarbeitung ein voraussichtlich hohes Risiko für die Betroffenen hat.' },
    { id: '3.4_37', q: 'Aufgabe des Datenschutzbeauftragten?', a: 'Beratung des Unternehmens, Überwachung der Einhaltung der DSGVO und Kontaktperson für Aufsichtsbehörden.' },
    { id: '3.4_38', q: 'Gilt die DSGVO auch für Unternehmen außerhalb der EU?', a: 'Ja (Marktortprinzip), wenn sie Waren oder Dienstleistungen für Personen in der EU anbieten.' },
    { id: '3.4_39', q: 'Was ist ein "gemeinsam Verantwortlicher" (Joint Controllership)?', a: 'Zwei oder mehr Unternehmen legen gemeinsam die Zwecke und Mittel der Datenverarbeitung fest.' },
    { id: '3.4_40', q: 'Kann ein Mitarbeiter des IT-Supports gleichzeitig DSB sein?', a: 'Problematisch wegen Interessenkonflikten; der DSB darf sich nicht selbst kontrollieren.' },

    // --- Unterpunkt 5: Urheberrecht & Lizenzen (10 Karten) ---
    { id: '3.4_41', q: 'Was schützt das Urheberrecht bei Software?', a: 'Den Quellcode und die Struktur des Programms als persönliche geistige Schöpfung.' },
    { id: '3.4_42', q: 'Was ist eine EULA?', a: 'End User License Agreement; die Endbenutzer-Lizenzvereinbarung zwischen Hersteller und Nutzer.' },
    { id: '3.4_43', q: 'Was zeichnet die GPL (GNU General Public License) aus?', a: 'Eine Copyleft-Lizenz: Änderungen an der Software müssen unter derselben freien Lizenz veröffentlicht werden.' },
    { id: '3.4_44', q: 'Was ist eine "permissive" Lizenz (z.B. MIT oder Apache)?', a: 'Erlaubt fast alles (Nutzung, Änderung, Verkauf), solange der ursprüngliche Urhebervermerk erhalten bleibt.' },
    { id: '3.4_45', q: 'Unterschied zwischen Freeware und Open Source?', a: 'Freeware ist kostenlos nutzbar, Quellcode meist geheim. Open Source bietet Zugriff auf den Quellcode.' },
    { id: '3.4_46', q: 'Was ist "Proprietäre Software"?', a: 'Software, deren Nutzung und Änderung durch den Hersteller stark eingeschränkt ist; Quellcode ist nicht öffentlich.' },
    { id: '3.4_47', q: 'Darf man Software "gebraucht" weiterverkaufen?', a: 'Innerhalb der EU ja, sofern die Kopie unbrauchbar gemacht wurde (Erschöpfungsgrundsatz), auch bei Downloads.' },
    { id: '3.4_48', q: 'Was bedeutet das "Vervielfältigungsrecht"?', a: 'Nur der Urheber darf Kopien des Werks erstellen oder anderen das Recht dazu einräumen.' },
    { id: '3.4_49', q: 'Sind Algorithmen an sich urheberrechtlich geschützt?', a: 'Nein, mathematische Methoden und Ideen sind nicht schützbar, nur deren konkrete Umsetzung im Code.' },
    { id: '3.4_50', q: 'Was ist eine "OEM-Lizenz"?', a: 'Eine Lizenz, die an bestimmte Hardware gebunden ist und meist günstiger verkauft wird.' }
  ],

  // Topic 4.1: Arbeits- & Tarifrecht (50 Karten)
  '4.1': [
    // --- Unterpunkt 1: Berufsausbildungsvertrag (10 Karten) ---
    { id: '4.1_1', q: 'Wer sind die Vertragspartner eines Berufsausbildungsvertrages?', a: 'Der Ausbildende (Betrieb) und der Auszubildende (Lehrling).' },
    { id: '4.1_2', q: 'Welche Form ist für den Ausbildungsvertrag zwingend vorgeschrieben?', a: 'Die Schriftform (muss vor Beginn der Ausbildung unterzeichnet sein).' },
    { id: '4.1_3', q: 'Wie lange darf die Probezeit laut BBiG maximal dauern?', a: 'Maximal 4 Monate (Mindestdauer: 1 Monat).' },
    { id: '4.1_4', q: 'Nenne drei Pflichten des Auszubildenden.', a: 'Lernpflicht, Sorgfaltspflicht, Gehorsamspflicht, Berufsschulpflicht, Berichtsheftführung.' },
    { id: '4.1_5', q: 'Nenne drei Pflichten des Ausbildenden.', a: 'Ausbildungspflicht, Vergütungspflicht, Fürsorgepflicht, Freistellung für die Berufsschule, Zeugnispflicht.' },
    { id: '4.1_6', q: 'Wie kann ein Ausbildungsvertrag während der Probezeit gekündigt werden?', a: 'Jederzeit, ohne Einhaltung einer Frist und ohne Angabe von Gründen.' },
    { id: '4.1_7', q: 'Unter welchen Bedingungen kann nach der Probezeit gekündigt werden?', a: 'Durch den Azubi mit 4 Wochen Frist (bei Berufsaufgabe/-wechsel) oder durch beide aus wichtigem Grund (fristlos).' },
    { id: '4.1_8', q: 'Was ist das "Verzeichnis der Berufsausbildungsverhältnisse"?', a: 'Ein Register bei der zuständigen Stelle (z.B. IHK), in das jeder Ausbildungsvertrag eingetragen werden muss.' },
    { id: '4.1_9', q: 'Darf ein Azubi für Überstunden zur Kasse gebeten werden?', a: 'Nein, Überstunden sind grundsätzlich besonders zu vergüten oder durch Freizeit auszugleichen.' },
    { id: '4.1_10', q: 'Was passiert mit dem Ausbildungsverhältnis bei Bestehen der Abschlussprüfung?', a: 'Es endet mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss, auch wenn der Vertrag ein späteres Datum vorsieht.' },

    // --- Unterpunkt 2: Arbeitsrechtliche Gesetze (10 Karten) ---
    { id: '4.1_11', q: 'Was regelt das Jugendarbeitsschutzgesetz (JArbSchG) bezüglich der Arbeitszeit?', a: 'Maximal 8 Stunden täglich und 40 Stunden wöchentlich (für Personen unter 18 Jahren).' },
    { id: '4.1_12', q: 'Ab welcher Arbeitszeit ist laut ArbZG eine Pause von 30 Minuten Pflicht?', a: 'Bei einer Arbeitszeit von mehr als 6 bis zu 9 Stunden.' },
    { id: '4.1_13', q: 'Was ist die gesetzliche Mindesturlaubsdauer laut Bundesurlaubsgesetz?', a: '24 Werktage bei einer 6-Tage-Woche (entspricht 20 Arbeitstagen bei einer 5-Tage-Woche).' },
    { id: '4.1_14', q: 'Wann greift der allgemeine Kündigungsschutz nach dem KSchG?', a: 'Wenn der Betrieb mehr als 10 Mitarbeiter hat und das Arbeitsverhältnis länger als 6 Monate besteht.' },
    { id: '4.1_15', q: 'Was regelt das Entgeltfortzahlungsgesetz im Krankheitsfall?', a: 'Der Arbeitgeber zahlt den Lohn für bis zu 6 Wochen zu 100% weiter.' },
    { id: '4.1_16', q: 'Wie lange ist die gesetzliche Kündigungsfrist für Arbeitnehmer laut BGB?', a: '4 Wochen zum 15. oder zum Ende eines Kalendermonats.' },
    { id: '4.1_17', q: 'Was besagt das Mutterschutzgesetz (MuSchG) zur Beschäftigung vor/nach der Geburt?', a: 'Beschäftigungsverbot 6 Wochen vor und in der Regel 8 Wochen nach der Entbindung.' },
    { id: '4.1_18', q: 'Was ist das Ziel des Allgemeinen Gleichbehandlungsgesetzes (AGG)?', a: 'Verhinderung von Benachteiligungen aus Gründen der Rasse, Ethnie, Geschlecht, Religion, Behinderung, Alter oder sexueller Identität.' },
    { id: '4.1_19', q: 'Was ist die Mindestruhezeit zwischen zwei Arbeitstagen laut ArbZG?', a: 'In der Regel 11 Stunden ununterbrochene Ruhezeit.' },
    { id: '4.1_20', q: 'Gilt das JArbSchG auch für 17-jährige Auszubildende?', a: 'Ja, es gilt für alle Personen, die noch nicht 18 Jahre alt sind.' },

    // --- Unterpunkt 3: Tarifrecht & Arbeitskampf (10 Karten) ---
    { id: '4.1_21', q: 'Was bedeutet "Tarifautonomie"?', a: 'Das Recht von Gewerkschaften und Arbeitgeberverbänden, Arbeitsbedingungen (Lohn, Urlaub) ohne staatliche Einmischung auszuhandeln.' },
    { id: '4.1_22', q: 'Was ist ein Manteltarifvertrag?', a: 'Regelt langfristige Arbeitsbedingungen wie Arbeitszeit, Urlaubstage oder Kündigungsfristen (nicht die Lohnhöhe).' },
    { id: '4.1_23', q: 'Was ist ein Entgelttarifvertrag?', a: 'Regelt die Höhe der Vergütung und hat meist eine kurze Laufzeit (z.B. 1-2 Jahre).' },
    { id: '4.1_24', q: 'Wann ist ein Arbeitnehmer an einen Tarifvertrag gebunden?', a: 'Wenn er Mitglied der Gewerkschaft ist UND der Arbeitgeber Mitglied im Arbeitgeberverband ist (oder bei Einzelvertragsklausel).' },
    { id: '4.1_25', q: 'Was bedeutet "Friedenspflicht" während eines Tarifvertrages?', a: 'Solange der Vertrag läuft, dürfen keine Arbeitskämpfe (Streiks) zu den geregelten Inhalten geführt werden.' },
    { id: '4.1_26', q: 'Was ist ein Streik?', a: 'Die gemeinsame, geplante Arbeitseinstellung durch Arbeitnehmer zur Durchsetzung von Tarifforderungen.' },
    { id: '4.1_27', q: 'Was versteht man unter einer "Aussperrung"?', a: 'Die planmäßige Nichtzulassung von Arbeitnehmern zur Arbeit durch den Arbeitgeber unter Einstellung der Lohnzahlung (Gegenmaßnahme zum Streik).' },
    { id: '4.1_28', q: 'Was ist eine Urabstimmung?', a: 'Geheime Wahl der Gewerkschaftsmitglieder darüber, ob ein Streik durchgeführt werden soll (meist 75% Zustimmung nötig).' },
    { id: '4.1_29', q: 'Was ist ein Warnstreik?', a: 'Ein kurzer Streik während der laufenden Tarifverhandlungen, um die Streikbereitschaft zu demonstrieren (noch keine Urabstimmung nötig).' },
    { id: '4.1_30', q: 'Was bedeutet die "Nachwirkung" eines Tarifvertrages?', a: 'Nach Ablauf gilt der Vertrag weiter, bis er durch eine neue Vereinbarung ersetzt wird.' },

    // --- Unterpunkt 4: Betriebsverfassung & Mitbestimmung (10 Karten) ---
    { id: '4.1_31', q: 'Ab wie vielen wahlberechtigten Mitarbeitern kann ein Betriebsrat gewählt werden?', a: 'Ab 5 ständigen wahlberechtigten Arbeitnehmern.' },
    { id: '4.1_32', q: 'Nenne drei Aufgaben des Betriebsrats.', a: 'Überwachung der Gesetze/Tarifverträge, Entgegennahme von Anregungen, Förderung der Eingliederung (z.B. Ausländer, Behinderte).' },
    { id: '4.1_33', q: 'In welchen Angelegenheiten hat der Betriebsrat ein echtes Mitbestimmungsrecht?', a: 'Soziale Angelegenheiten (z.B. Überstundenregelung, Urlaubsplan, Rauchverbote, Kantine).' },
    { id: '4.1_34', q: 'Was ist der Unterschied zwischen Mitbestimmung und Mitwirkung?', a: 'Mitbestimmung: Arbeitgeber braucht Zustimmung. Mitwirkung: Arbeitgeber muss nur informieren oder anhören.' },
    { id: '4.1_35', q: 'Muss der Betriebsrat vor jeder Kündigung angehört werden?', a: 'Ja, eine Kündigung ohne vorherige Anhörung des Betriebsrats ist unwirksam.' },
    { id: '4.1_36', q: 'Was ist eine Betriebsvereinbarung?', a: 'Ein Vertrag zwischen Arbeitgeber und Betriebsrat über Arbeitsbedingungen im konkreten Betrieb.' },
    { id: '4.1_37', q: 'Wer wählt die Jugend- und Auszubildendenvertretung (JAV)?', a: 'Alle Arbeitnehmer unter 18 Jahren sowie Azubis unter 25 Jahren.' },
    { id: '4.1_38', q: 'Was ist das Ziel der Montan-Mitbestimmung?', a: 'Paritätische Besetzung des Aufsichtsrats (50% Anteilseigner, 50% Arbeitnehmer) in der Kohle- und Stahlindustrie.' },
    { id: '4.1_39', q: 'Darf der Betriebsrat zum Streik aufrufen?', a: 'Nein, der Betriebsrat muss parteipolitisch und gewerkschaftlich neutral agieren; Streiks sind Sache der Gewerkschaften.' },
    { id: '4.1_40', q: 'Was regelt das Drittelbeteiligungsgesetz?', a: 'Ein Drittel des Aufsichtsrats muss aus Arbeitnehmervertretern bestehen (in Kapitalgesellschaften mit 500 bis 2000 Mitarbeitern).' },

    // --- Unterpunkt 5: Sozialversicherungen (10 Karten) ---
    { id: '4.1_41', q: 'Nenne die 5 Säulen der gesetzlichen Sozialversicherung in Deutschland.', a: 'Renten-, Kranken-, Arbeitslosen-, Pflege- und Unfallversicherung.' },
    { id: '4.1_42', q: 'Wer ist der Träger der gesetzlichen Rentenversicherung?', a: 'Die Deutsche Rentenversicherung (DRV).' },
    { id: '4.1_43', q: 'Wer zahlt die Beiträge zur gesetzlichen Unfallversicherung?', a: 'Der Arbeitgeber allein (100%).' },
    { id: '4.1_44', q: 'Welche Versicherung leistet bei Berufskrankheiten oder Arbeitsunfällen?', a: 'Die gesetzliche Unfallversicherung (Berufsgenossenschaften).' },
    { id: '4.1_45', q: 'Was ist das Solidaritätsprinzip in der Sozialversicherung?', a: 'Jeder zahlt nach seiner Leistungsfähigkeit (Einkommen), erhält aber Leistungen nach seinem Bedarf.' },
    { id: '4.1_46', q: 'Was ist die Beitragsbemessungsgrenze?', a: 'Der maximale Bruttolohn, bis zu dem Sozialversicherungsbeiträge berechnet werden. Der Teil darüber ist beitragsfrei.' },
    { id: '4.1_47', q: 'Wer ist der Träger der gesetzlichen Arbeitslosenversicherung?', a: 'Die Bundesagentur für Arbeit (BA).' },
    { id: '4.1_48', q: 'Was bedeutet "Paritätische Finanzierung"?', a: 'Arbeitgeber und Arbeitnehmer teilen sich die Beiträge zur Versicherung jeweils zur Hälfte (50/50).' },
    { id: '4.1_49', q: 'Welche Versicherung zahlt das "Pflegegeld"?', a: 'Die gesetzliche Pflegeversicherung.' },
    { id: '4.1_50', q: 'Was ist das Äquivalenzprinzip (vor allem in der Rentenversicherung)?', a: 'Die Höhe der Leistungen (Rente) hängt von der Höhe und Dauer der eingezahlten Beiträge ab.' }
  ],

  // Topic 4.2: Der Betrieb & Markt (50 Karten)
  '4.2': [
    // --- Unterpunkt 1: Rechtsformen (10 Karten) ---
    { id: '4.2_1', q: 'Was ist ein Einzelunternehmen bezüglich der Haftung?', a: 'Der Inhaber haftet allein und unbeschränkt mit seinem gesamten Geschäfts- und Privatvermögen.' },
    { id: '4.2_2', q: 'Was ist das Mindeststammkapital einer GmbH?', a: '25.000 Euro (bei Gründung müssen mindestens 12.500 Euro eingezahlt sein).' },
    { id: '4.2_3', q: 'Was ist das Mindestgrundkapital einer Aktiengesellschaft (AG)?', a: '50.000 Euro.' },
    { id: '4.2_4', q: 'Nenne die drei Organe einer AG.', a: 'Vorstand (Leitung), Aufsichtsrat (Kontrolle), Hauptversammlung (Aktionäre).' },
    { id: '4.2_5', q: 'Wer haftet bei einer GmbH & Co. KG unbeschränkt?', a: 'Die GmbH als Komplementär (Vollhafter); die Haftung der GmbH selbst ist jedoch auf ihr Gesellschaftsvermögen begrenzt.' },
    { id: '4.2_6', q: 'Was ist der Unterschied zwischen Komplementär und Kommanditist?', a: 'Komplementär: Haftet unbeschränkt (auch privat). Kommanditist: Haftet nur mit seiner Einlage (Teilhafter).' },
    { id: '4.2_7', q: 'Ab wann muss ein Einzelunternehmen als e.K. im Handelsregister stehen?', a: 'Wenn ein nach Art und Umfang in kaufmännischer Weise eingerichteter Geschäftsbetrieb erforderlich ist.' },
    { id: '4.2_8', q: 'Was ist eine "UG (haftungsbeschränkt)"?', a: 'Die "Mini-GmbH"; kann mit nur 1 Euro Stammkapital gegründet werden, muss aber Rücklagen bilden, bis 25.000 Euro erreicht sind.' },
    { id: '4.2_9', q: 'Was ist das oberste Willensbildungsorgan einer GmbH?', a: 'Die Gesellschafterversammlung.' },
    { id: '4.2_10', q: 'Welche Rechtsform ist eine juristische Person des Privatrechts?', a: 'Kapitalgesellschaften wie GmbH, AG, UG.' },

    // --- Unterpunkt 2: Marktformen (10 Karten) ---
    { id: '4.2_11', q: 'Was charakterisiert ein Monopol?', a: 'Nur ein Anbieter steht vielen Nachfrägern gegenüber (oder umgekehrt).' },
    { id: '4.2_12', q: 'Was ist ein Oligopol?', a: 'Wenige Anbieter stehen vielen Nachfrägern gegenüber (z.B. Tankstellen, Mobilfunkanbieter).' },
    { id: '4.2_13', q: 'Was ist ein Polypol?', a: 'Viele Anbieter stehen vielen Nachfrägern gegenüber (vollkommene Konkurrenz).' },
    { id: '4.2_14', q: 'Was versteht man unter einem "Angebotsmonopol"?', a: 'Ein einziger Verkäufer beherrscht den Markt für ein Produkt oder eine Dienstleistung.' },
    { id: '4.2_15', q: 'Was ist ein "Nachfrageoligopol" (Oligopson)?', a: 'Viele Anbieter stehen nur wenigen großen Nachfrägern gegenüber (z.B. Molkereien vs. Supermarktketten).' },
    { id: '4.2_16', q: 'Wie entsteht ein Gleichgewichtspreis im Polypol?', a: 'Durch das Zusammentreffen von Angebot und Nachfrage; der Preis räumt den Markt.' },
    { id: '4.2_17', q: 'Was passiert mit der Nachfrage bei steigenden Preisen (Normalfall)?', a: 'Die nachgefragte Menge sinkt.' },
    { id: '4.2_18', q: 'Was ist ein "zweiseitiges Oligopol"?', a: 'Wenige Anbieter stehen wenigen Nachfrägern gegenüber.' },
    { id: '4.2_19', q: 'Was ist ein "natürliches Monopol"?', a: 'Ein Monopol, das durch extrem hohe Fixkosten (z.B. Schienennetz, Stromleitungen) entsteht, die Wettbewerb unwirtschaftlich machen.' },
    { id: '4.2_20', q: 'Welches Gesetz schützt in Deutschland den Wettbewerb vor Kartellbildung?', a: 'Das GWB (Gesetz gegen Wettbewerbsbeschränkungen).' },

    // --- Unterpunkt 3: Ziele (Ökonomisch, Ökologisch, Sozial) (10 Karten) ---
    { id: '4.2_21', q: 'Was ist ein ökonomisches Ziel eines Unternehmens?', a: 'Gewinnmaximierung, Umsatzsteigerung, Erhöhung des Marktanteils.' },
    { id: '4.2_22', q: 'Nenne ein Beispiel für ein ökologisches Ziel.', a: 'Ressourcenschonung, CO2-Reduktion, Einsatz recycelbarer Materialien.' },
    { id: '4.2_23', q: 'Nenne ein Beispiel für ein soziales Ziel.', a: 'Sicherung der Arbeitsplätze, betriebliche Altersvorsorge, gerechte Entlohnung.' },
    { id: '4.2_24', q: 'Was beschreibt eine "Zielharmonie"?', a: 'Das Erreichen eines Ziels fördert gleichzeitig das Erreichen eines anderen Ziels (z.B. Abfallvermeidung spart Entsorgungskosten).' },
    { id: '4.2_25', q: 'Was ist ein "Zielkonflikt"?', a: 'Das Erreichen eines Ziels behindert das Erreichen eines anderen (z.B. Lohnerhöhung vs. Gewinnmaximierung).' },
    { id: '4.2_26', q: 'Was ist eine "Zielindifferenz"?', a: 'Die Erfüllung eines Ziels hat keinen Einfluss auf ein anderes Ziel.' },
    { id: '4.2_27', q: 'Wofür steht die SMART-Formel bei der Zieldefinition?', a: 'Spezifisch, Messbar, Attraktiv (oder Akzeptiert), Realistisch, Terminiert.' },
    { id: '4.2_28', q: 'Was bedeutet "Corporate Social Responsibility" (CSR)?', a: 'Die gesellschaftliche Verantwortung von Unternehmen über gesetzliche Pflichten hinaus.' },
    { id: '4.2_29', q: 'Was ist das Ziel der "Gewinnmaximierung"?', a: 'Erzielung des höchstmöglichen Unterschieds zwischen Erlösen und Kosten.' },
    { id: '4.2_30', q: 'Was beschreibt das "ökonomische Prinzip" (Minimalprinzip)?', a: 'Ein vorgegebenes Ziel mit möglichst geringen Mitteln (Einsatz) erreichen.' },

    // --- Unterpunkt 4: Marketing-Mix (4Ps) (10 Karten) ---
    { id: '4.2_31', q: 'Nenne die 4 Ps des klassischen Marketing-Mix.', a: 'Product (Produktpolitik), Price (Preispolitik), Place (Distributionspolitik), Promotion (Kommunikationspolitik).' },
    { id: '4.2_32', q: 'Was umfasst die "Produktpolitik" (Product)?', a: 'Qualität, Design, Verpackung, Markenname, Kundendienst, Sortimentsgestaltung.' },
    { id: '4.2_33', q: 'Was regelt die "Preispolitik" (Price)?', a: 'Preisgestaltung, Rabatte, Skonti, Liefer- und Zahlungsbedingungen.' },
    { id: '4.2_34', q: 'Was ist das Ziel der "Distributionspolitik" (Place)?', a: 'Die Wahl der Vertriebswege (direkt oder indirekt), um das Produkt zum Kunden zu bringen.' },
    { id: '4.2_35', q: 'Was gehört zur "Kommunikationspolitik" (Promotion)?', a: 'Werbung, Public Relations (PR), Sponsoring, Verkaufsförderung.' },
    { id: '4.2_36', q: 'Unterschied zwischen direktem und indirektem Vertrieb?', a: 'Direkt: Verkauf direkt vom Hersteller an den Endkunden (z.B. eigener Webshop). Indirekt: Über Zwischenhändler (z.B. Einzelhandel).' },
    { id: '4.2_37', q: 'Was beschreibt der Produktlebenszyklus?', a: 'Die Phasen eines Produkts am Markt: Einführung, Wachstum, Reife, Sättigung, Degeneration.' },
    { id: '4.2_38', q: 'Was ist eine "Penetrationsstrategie" bei der Preisbildung?', a: 'Ein niedriger Einführungspreis, um schnell Marktanteile zu gewinnen.' },
    { id: '4.2_39', q: 'Was ist eine "Skimmingstrategie" (Abschöpfung)?', a: 'Ein hoher Einführungspreis, der später schrittweise gesenkt wird (oft bei Technik-Neuheiten).' },
    { id: '4.2_40', q: 'Was ist das AIDA-Modell in der Werbung?', a: 'Attention (Aufmerksamkeit), Interest (Interesse), Desire (Wunsch), Action (Handlung).' },

    // --- Unterpunkt 5: Wettbewerbsrecht (UWG) (10 Karten) ---
    { id: '4.2_41', q: 'Wofür steht die Abkürzung UWG?', a: 'Gesetz gegen den unlauteren Wettbewerb.' },
    { id: '4.2_42', q: 'Was ist das Hauptziel des UWG?', a: 'Schutz der Mitbewerber, der Verbraucher und der Allgemeinheit vor unfairem Wettbewerb.' },
    { id: '4.2_43', q: 'Was versteht man unter "irreführender Werbung"?', a: 'Werbung mit unwahren Angaben oder Täuschungen über Merkmale des Produkts (z.B. Preis, Herkunft).' },
    { id: '4.2_44', q: 'Ist vergleichende Werbung in Deutschland erlaubt?', a: 'Ja, sofern sie sachlich ist, nicht herabsetzend wirkt und nicht irreführend ist.' },
    { id: '4.2_45', q: 'Was ist "unzumutbare Belästigung" laut UWG?', a: 'Z.B. Telefonwerbung gegenüber Verbrauchern ohne deren vorherige ausdrückliche Einwilligung (Cold Calling).' },
    { id: '4.2_46', q: 'Was ist eine "Abmahnung" im Wettbewerbsrecht?', a: 'Die Aufforderung an einen Mitbewerber, eine unlautere Wettbewerbshandlung einzustellen (Vermeidung eines Rechtsstreits).' },
    { id: '4.2_47', q: 'Was ist eine Unterlassungserklärung?', a: 'Ein Vertrag, in dem sich der Verletzer verpflichtet, die unlautere Handlung künftig nicht zu wiederholen (meist mit Vertragsstrafe).' },
    { id: '4.2_48', q: 'Was ist "Schleichwerbung"?', a: 'Werbung, die nicht als solche erkennbar ist, sondern redaktionell getarnt wird.' },
    { id: '4.2_49', q: 'Was ist "Herabsetzung" eines Mitbewerbers?', a: 'Abfällige oder unwahre Äußerungen über die Waren, Dienstleistungen oder das Unternehmen eines Konkurrenten.' },
    { id: '4.2_50', q: 'Darf man Kunden von der Konkurrenz gezielt abwerben?', a: 'Grundsätzlich ja (Wettbewerb!), solange keine unlauteren Mittel wie Nötigung oder Täuschung eingesetzt werden.' }
  ],

  // Topic 4.3: Finanzierung & Buchführung (40 Karten)
  '4.3': [
    // --- Unterpunkt 1: Entgeltabrechnung (10 Karten) ---
    { id: '4.3_1', q: 'Nenne die Formel für die Berechnung des Netto-Entgelts.', a: 'Bruttoentgelt - Lohnsteuer - Solidaritätszuschlag (falls anfallend) - Kirchensteuer - Sozialversicherungsbeiträge (AN-Anteil).' },
    { id: '4.3_2', q: 'Welche Abzüge gehören zu den Sozialversicherungsbeiträgen des Arbeitnehmers?', a: 'Rentenversicherung, Arbeitslosenversicherung, Krankenversicherung und Pflegeversicherung.' },
    { id: '4.3_3', q: 'Was ist der Unterschied zwischen Bruttolohn und Personalkosten für den Arbeitgeber?', a: 'Personalkosten = Bruttolohn + Arbeitgeberanteil zur Sozialversicherung + sonstige Lohnnebenkosten.' },
    { id: '4.3_4', q: 'Was sind vermögenswirksame Leistungen (VWL)?', a: 'Geldleistungen des Arbeitgebers, die direkt in eine Sparform des Arbeitnehmers fließen (oft staatlich gefördert).' },
    { id: '4.3_5', q: 'In welcher Lohnsteuerklasse befindet sich ein lediger Arbeitnehmer ohne Kinder in der Regel?', a: 'Lohnsteuerklasse I.' },
    { id: '4.3_6', q: 'Wer zahlt die Lohnsteuer an das Finanzamt ab?', a: 'Der Arbeitgeber behält sie vom Bruttolohn ein und führt sie direkt an das Finanzamt ab.' },
    { id: '4.3_7', q: 'Was bedeutet die Beitragsbemessungsgrenze bei der Entgeltabrechnung?', a: 'Der Teil des Einkommens, der über dieser Grenze liegt, ist beitragsfrei für die jeweilige Sozialversicherung.' },
    { id: '4.3_8', q: 'Nenne ein Beispiel für einen steuerfreien Sachbezug.', a: 'Z.B. Jobticket, Essensgutscheine oder die private Nutzung von Arbeitsgeräten (bis zu bestimmten Freigrenzen).' },
    { id: '4.3_9', q: 'Was ist der Solidaritätszuschlag aktuell?', a: 'Eine Ergänzungsabgabe zur Einkommensteuer, die seit 2021 für die meisten Steuerzahler weggefallen ist (nur noch bei sehr hohen Einkommen).' },
    { id: '4.3_10', q: 'Was ist der Unterschied zwischen einem Lohn und einem Gehalt?', a: 'Lohn wird nach tatsächlich geleisteter Arbeitszeit berechnet (variabel); Gehalt ist ein fester monatlicher Betrag.' },

    // --- Unterpunkt 2: Finanzierung (Innen/Außen, Kredit, Leasing) (10 Karten) ---
    { id: '4.3_11', q: 'Was ist der Unterschied zwischen Innen- und Außenfinanzierung?', a: 'Innen: Kapital kommt aus dem Unternehmen selbst (z.B. Gewinne). Außen: Kapital kommt von externen Quellen (z.B. Bankkredit, neue Gesellschafter).' },
    { id: '4.3_12', q: 'Was versteht man unter Selbstfinanzierung?', a: 'Einbehaltung von Gewinnen (Thesaurierung), um Investitionen zu tätigen.' },
    { id: '4.3_13', q: 'Was ist Fremdfinanzierung?', a: 'Kapitalzufuhr durch Gläubiger, die einen Rückanspruch und Zinsanspruch haben (z.B. Darlehen).' },
    { id: '4.3_14', q: 'Was ist Eigenfinanzierung?', a: 'Kapitalzufuhr durch die Eigentümer (Einlagen) oder durch im Unternehmen erwirtschaftete Gewinne.' },
    { id: '4.3_15', q: 'Erkläre das Prinzip von Leasing.', a: 'Überlassung eines Gebrauchsgegenstandes gegen Zahlung einer Leasingrate; der Leasinggeber bleibt Eigentümer.' },
    { id: '4.3_16', q: 'Vorteil von Leasing gegenüber Kreditkauf?', a: 'Schonung der Liquidität, aktuelle Technik, steuerliche Absetzbarkeit der Raten als Aufwand.' },
    { id: '4.3_17', q: 'Was ist ein Kontokorrentkredit?', a: 'Ein kurzfristiger Kreditrahmen auf dem Geschäftskonto (Dispokredit für Unternehmen) zur Überbrückung von Liquiditätsengpässen.' },
    { id: '4.3_18', q: 'Was versteht man unter Factoring?', a: 'Der Verkauf von offenen Forderungen an einen Finanzdienstleister zur sofortigen Liquiditätsgewinnung.' },
    { id: '4.3_19', q: 'Was ist Finanzierung aus Abschreibungsgegenwerten?', a: 'In die Preise einkalkulierte Abschreibungen fließen als liquide Mittel zurück und stehen für Neuinvestitionen bereit.' },
    { id: '4.3_20', q: 'Unterschied zwischen Annuitätendarlehen und Abzahlungsdarlehen?', a: 'Annuität: Konstante Rate (Zins sinkt, Tilgung steigt). Abzahlung: Konstante Tilgung (Rate sinkt, da Zins auf Restschuld sinkt).' },

    // --- Unterpunkt 3: Kosten-Leistungsrechnung (Fix/Variabel, BEP) (10 Karten) ---
    { id: '4.3_21', q: 'Was sind Fixkosten?', a: 'Kosten, die unabhängig von der Produktionsmenge anfallen (z.B. Miete, Gehälter der Verwaltung).' },
    { id: '4.3_22', q: 'Was sind variable Kosten?', a: 'Kosten, die sich mit der Produktionsmenge ändern (z.B. Rohstoffe, Fertigungslöhne, Strom für Maschinen).' },
    { id: '4.3_23', q: 'Was ist der Break-Even-Point (Gewinnschwelle)?', a: 'Der Punkt, an dem der Erlös genau so hoch ist wie die Gesamtkosten (Gewinn = 0).' },
    { id: '4.3_24', q: 'Wie berechnet man den Deckungsbeitrag pro Stück?', a: 'Verkaufspreis pro Stück - variable Kosten pro Stück.' },
    { id: '4.3_25', q: 'Was ist das Ziel der Kostenstellenrechnung?', a: 'Verteilung der Gemeinkosten auf die Orte ihrer Entstehung im Betrieb (z.B. IT-Abteilung, Fuhrpark).' },
    { id: '4.3_26', q: 'Unterschied Einzelkosten vs. Gemeinkosten?', a: 'Einzelkosten: Direkt einem Produkt zuordenbar. Gemeinkosten: Nur indirekt über Schlüssel (z.B. Heizung) zuordenbar.' },
    { id: '4.3_27', q: 'Was versteht man unter kalkulatorischen Kosten?', a: 'Kosten, denen kein echter Aufwand in der Buchführung gegenübersteht (z.B. kalkulatorischer Unternehmerlohn).' },
    { id: '4.3_28', q: 'Was ist die Vollkostenrechnung?', a: 'Alle anfallenden Kosten (Fix- und Gemeinkosten) werden auf die Kostenträger verteilt.' },
    { id: '4.3_29', q: 'Was ist die Teilkostenrechnung (Deckungsbeitragsrechnung)?', a: 'Nur die variablen Kosten werden den Produkten direkt zugerechnet; Fixkosten werden separat betrachtet.' },
    { id: '4.3_30', q: 'Wann erzielt ein Unternehmen einen Gewinn?', a: 'Wenn die Summe der Deckungsbeiträge größer ist als die gesamten Fixkosten.' },

    // --- Unterpunkt 4: Umsatzsteuer (10 Karten) ---
    { id: '4.3_31', q: 'Was ist die Vorsteuer?', a: 'Die Umsatzsteuer, die ein Unternehmen beim Einkauf von Waren oder Dienstleistungen an andere Unternehmen zahlt.' },
    { id: '4.3_32', q: 'Was ist die Mehrwertsteuer (Umsatzsteuer-Schuld)?', a: 'Die Steuer, die das Unternehmen beim Verkauf an seine Kunden einnimmt und ans Finanzamt abführen muss.' },
    { id: '4.3_33', q: 'Was bedeutet "Vorsteuerabzugsberechtigung"?', a: 'Unternehmen dürfen die gezahlte Vorsteuer von ihrer eingenommenen Umsatzsteuer abziehen und nur die Differenz ans Finanzamt zahlen.' },
    { id: '4.3_34', q: 'Wie berechnet man die Zahllast an das Finanzamt?', a: 'Eingenommene Umsatzsteuer - gezahlte Vorsteuer = Zahllast.' },
    { id: '4.3_35', q: 'Was ist ein Vorsteuerüberhang?', a: 'Wenn die gezahlte Vorsteuer höher ist als die eingenommene Umsatzsteuer (Erstattungsanspruch gegenüber dem Finanzamt).' },
    { id: '4.3_36', q: 'Nenne die zwei Regelsätze der Umsatzsteuer in Deutschland.', a: '19 % (Regelsatz) und 7 % (ermäßigter Satz, z.B. für Lebensmittel, Bücher).' },
    { id: '4.3_37', q: 'Warum ist die Umsatzsteuer für Unternehmen ein "durchlaufender Posten"?', a: 'Weil sie wirtschaftlich nur den Endverbraucher belastet; Unternehmen holen sich die gezahlte Steuer zurück.' },
    { id: '4.3_38', q: 'Was ist die Umsatzsteuer-Identifikationsnummer (USt-IdNr.)?', a: 'Eine eindeutige Kennnummer für Unternehmen zur Abwicklung von Geschäften innerhalb der EU.' },
    { id: '4.3_39', q: 'Was ist die Kleinunternehmerregelung?', a: 'Unternehmen mit geringem Umsatz (aktuell < 22.000 €/Jahr) können sich von der Umsatzsteuerpflicht befreien lassen (keine Ausweisung, kein Abzug).' },
    { id: '4.3_40', q: 'Was muss eine ordnungsgemäße Rechnung für den Vorsteuerabzug zwingend enthalten?', a: 'U.a. Steuernummer/USt-IdNr, Rechnungsdatum, fortlaufende Nummer, Leistungszeitpunkt, Steuersatz und -betrag.' }
  ],

  // Topic 4.4: Nachhaltigkeit & Gesellschaft (40 Karten)
  '4.4': [
    // --- Unterpunkt 1: Umweltschutz (10 Karten) ---
    { id: '4.4_1', q: 'Was regelt das Elektrogesetz (ElektroG)?', a: 'Die Entsorgung, Rücknahme und Verwertung von Elektro- und Elektronikgeräten (Vermeidung von Schadstoffen in der Umwelt).' },
    { id: '4.4_2', q: 'Was ist das Ziel des Kreislaufwirtschaftsgesetzes (KrWG)?', a: 'Ressourcenschonung durch Abfallvermeidung, Wiederverwendung und Recycling.' },
    { id: '4.4_3', q: 'Was bedeutet "Green IT"?', a: 'Umweltfreundliche Gestaltung der IT über den gesamten Lebenszyklus (stromsparende Hardware, effiziente Kühlung, Recycling).' },
    { id: '4.4_4', q: 'Nenne drei Maßnahmen zur Abfallvermeidung im Büro.', a: 'Papierloses Büro (Digitalisierung), Einsatz von Mehrwegsystemen, langlebige Hardware anschaffen.' },
    { id: '4.4_5', q: 'Was ist der Unterschied zwischen Recycling und Downcycling?', a: 'Recycling: Aufbereitung zu gleichwertigen Rohstoffen. Downcycling: Aufbereitung zu Rohstoffen mit geringerer Qualität.' },
    { id: '4.4_6', q: 'Warum ist sachgerechte Entsorgung von Batterien/Akkus wichtig?', a: 'Wegen enthaltener Schwermetalle (z.B. Lithium, Blei) und der Brandgefahr bei Beschädigung.' },
    { id: '4.4_7', q: 'Was versteht man unter "nachhaltigem Ressourcenmanagement"?', a: 'Nutzung natürlicher Ressourcen so, dass sie sich regenerieren können oder effizient genutzt werden, um künftige Generationen nicht zu gefährden.' },
    { id: '4.4_8', q: 'Welchen Beitrag leistet Virtualisierung zum Umweltschutz?', a: 'Serverkonsolidierung spart physische Hardware, Platz und massiv Energie für Betrieb und Kühlung.' },
    { id: '4.4_9', q: 'Was bedeutet die Energieeffizienzklasse bei IT-Geräten?', a: 'Ein EU-weit genormtes Label zur Kennzeichnung des Energieverbrauchs (A bis G).' },
    { id: '4.4_10', q: 'Was ist "Urban Mining"?', a: 'Die Rückgewinnung von Rohstoffen (z.B. Gold, Kupfer) aus Altgeräten und Schrott statt aus dem Bergbau.' },

    // --- Unterpunkt 2: Globalisierung & Strukturwandel (10 Karten) ---
    { id: '4.4_11', q: 'Was bedeutet Globalisierung?', a: 'Die zunehmende weltweite Verflechtung in den Bereichen Wirtschaft, Politik, Kultur und Umwelt.' },
    { id: '4.4_12', q: 'Nenne einen Vorteil der Globalisierung für Unternehmen.', a: 'Größere Absatzmärkte, Zugang zu spezialisierten Fachkräften weltweit, günstigere Rohstoffe.' },
    { id: '4.4_13', q: 'Was ist ein Nachteil der Globalisierung für lokale Märkte?', a: 'Erhöhter Konkurrenzdruck durch Billiglohnländer, Gefahr von Arbeitsplatzverlagerungen (Offshoring).' },
    { id: '4.4_14', q: 'Was versteht man unter "Strukturwandel"?', a: 'Langfristige Änderung der wirtschaftlichen Struktur (z.B. Wandel von der Industriegesellschaft zur Informations-/Dienstleistungsgesellschaft).' },
    { id: '4.4_15', q: 'Was bedeutet Outsourcing?', a: 'Die Auslagerung bisher intern erbrachter Leistungen an externe spezialisierte Dienstleister.' },
    { id: '4.4_16', q: 'Was ist Offshoring?', a: 'Die Verlagerung von Geschäftsprozessen ins Ausland (meist zur Kostensenkung).' },
    { id: '4.4_17', q: 'Was ist eine Freihandelszone?', a: 'Ein Gebiet, in dem mehrere Staaten auf Zölle und Handelsbeschränkungen untereinander verzichten (z.B. EU-Binnenmarkt).' },
    { id: '4.4_18', q: 'Was beschreibt der Begriff "Digitale Transformation"?', a: 'Der durch digitale Technologien ausgelöste Veränderungsprozess in Unternehmen und der gesamten Gesellschaft.' },
    { id: '4.4_19', q: 'Was ist der "Tertiärsektor" der Wirtschaft?', a: 'Der Dienstleistungssektor (inkl. IT, Handel, Banken), der in modernen Industrienationen den größten Anteil ausmacht.' },
    { id: '4.4_20', q: 'Welchen Einfluss hat die Globalisierung auf den Datenschutz?', a: 'Erhöhte Komplexität durch Datentransfers in Länder mit unterschiedlichen Sicherheitsstandards (erfordert Abkommen wie EU-US Data Privacy Framework).' },

    // --- Unterpunkt 3: Berufliche Fortbildung (10 Karten) ---
    { id: '4.4_21', q: 'Was ist der Unterschied zwischen Fortbildung und Umschulung?', a: 'Fortbildung: Vertiefung/Erweiterung der Kenntnisse im erlernten Beruf. Umschulung: Ausbildung für einen völlig neuen Beruf.' },
    { id: '4.4_22', q: 'Warum ist "lebensbegleitendes Lernen" in der IT besonders wichtig?', a: 'Wegen der extrem kurzen Innovationszyklen und des ständigen technologischen Wandels.' },
    { id: '4.4_23', q: 'Nenne drei Formen der beruflichen Weiterbildung.', a: 'Selbststudium, Präsenzseminare, Webinare/E-Learning, Konferenzbesuche, Zertifizierungen.' },
    { id: '4.4_24', q: 'Was ist eine Aufstiegsfortbildung?', a: 'Qualifizierung für eine höhere Hierarchieebene (z.B. Fachwirt, Techniker, Meister).' },
    { id: '4.4_25', q: 'Welche Vorteile hat betriebliche Weiterbildung für den Arbeitgeber?', a: 'Höhere Produktivität, Bindung von Fachkräften, Steigerung der Innovationskraft.' },
    { id: '4.4_26', q: 'Was ist Bildungsurlaub?', a: 'Bezahlte Freistellung von der Arbeit für eine bestimmte Anzahl an Tagen pro Jahr zur beruflichen oder politischen Weiterbildung (landesabhängig).' },
    { id: '4.4_27', q: 'Was ist eine Anpassungsfortbildung?', a: 'Aktualisierung des Wissens, um mit den technischen Entwicklungen im aktuellen Job Schritt zu halten.' },
    { id: '4.4_28', q: 'Welche Rolle spielen Zertifizierungen (z.B. AWS, Cisco, ISTQB) in der IT-Karriere?', a: 'Sie dienen als standardisierter Nachweis spezieller Fachkenntnisse und erhöhen den Marktwert.' },
    { id: '4.4_29', q: 'Was ist informelles Lernen?', a: 'Lernen durch Erfahrung im Arbeitsalltag (Learning by doing), Austausch mit Kollegen oder Fachforen (ohne festen Lehrplan).' },
    { id: '4.4_30', q: 'Wer trägt in der Regel die Kosten für eine angeordnete betriebliche Fortbildung?', a: 'Der Arbeitgeber.' },

    // --- Unterpunkt 4: Diversity & Ethik (10 Karten) ---
    { id: '4.4_31', q: 'Was bedeutet "Diversity" im Unternehmen?', a: 'Die Anerkennung und Wertschätzung von Vielfalt (Geschlecht, Herkunft, Alter, Religion, Behinderung, sexuelle Orientierung).' },
    { id: '4.4_32', q: 'Nenne einen Vorteil von diversen Teams in der Softwareentwicklung.', a: 'Unterschiedliche Perspektiven führen zu kreativeren Lösungen und besserer Berücksichtigung verschiedener Nutzergruppen.' },
    { id: '4.4_33', q: 'Was ist "Algorithmische Voreingenommenheit" (Algorithmic Bias)?', a: 'Wenn Algorithmen (z.B. KI) diskriminierende Ergebnisse liefern, weil sie auf vorurteilsbehafteten Daten trainiert wurden.' },
    { id: '4.4_34', q: 'Was beschreibt die IT-Ethik?', a: 'Die moralische Verantwortung beim Umgang mit Informationstechnik (z.B. Privatsphäre, Überwachung, KI-Waffen).' },
    { id: '4.4_35', q: 'Was ist "Digitaler Humanismus"?', a: 'Die Forderung, dass die Technik dem Menschen dienen muss und nicht umgekehrt; Menschenrechte müssen digital gewahrt bleiben.' },
    { id: '4.4_36', q: 'Warum ist Barrierefreiheit auch ein ethisches Gebot?', a: 'Es geht um soziale Teilhabe und die Vermeidung von Ausgrenzung in einer digitalisierten Welt.' },
    { id: '4.4_37', q: 'Was versteht man unter "Datenethik"?', a: 'Fragen nach dem richtigen Umgang mit Datenmengen (Wem gehören Daten? Wie transparent ist die Nutzung?).' },
    { id: '4.4_38', q: 'Was bedeutet "Inklusion" am Arbeitsplatz?', a: 'Die gleichberechtigte Teilhabe aller Menschen am Berufsleben, unabhängig von körperlichen oder geistigen Einschränkungen.' },
    { id: '4.4_39', q: 'Was ist "Responsible AI"?', a: 'Die Entwicklung und Nutzung von Künstlicher Intelligenz nach ethischen Prinzipien (Transparenz, Fairness, Sicherheit).' },
    { id: '4.4_40', q: 'Welche Rolle spielen Verhaltenskodizes (Code of Conduct) in Unternehmen?', a: 'Sie legen verbindliche Regeln für ethisches und respektvolles Verhalten gegenüber Kollegen und Kunden fest.' }
  ]
};
