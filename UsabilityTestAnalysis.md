# Analyse des Usability-Tests

Basierend auf `TestberichtHCI.xlsx` (Notizen von 3 Testpersonen) und der Analyseaufgabe aus `aufgabe.txt`:
- Welche Probleme wurden bei mehr als einer Testperson beobachtet bzw. genannt?

## Probleme, die von 2+ Testpersonen genannt wurden

| Problem | Testpersonen | Notizen |
|---|---|---|
| Keine klare Unterscheidung zwischen Library und Home | T1, T3 | T1: "Library und Home sieht gleich aus"; T3: "kein Unterschied zwischen Library und Home, braucht keine Unterteilung, durch Stapeln ersetzen" |
| Fehlende Anmeldeoption | T1, T2 | Beide haben unabhängig voneinander eine "Anmeldeoption" gewünscht |
| Keine Bestätigung vor Löschen/Speichern | T1, T2 | T1 möchte sie implementiert sehen; T2 stimmt zu, hält ein Rückgängig-Feature aber für nicht nötig |
| Verwirrende "Repeat"/"Repeat Incorrect"/"Start Over"-Steuerung in der Practice-Ansicht | T2, T3 | T2: schwer zu unterscheiden zwischen "Repeat Incorrect" und "Start Over"; T3: "Easy/Repeat and Repeat Incorrect verwirrt", zudem sollte der Button verschwinden, sobald alles korrekt beantwortet wurde |
| Navbar benötigt visuelle/strukturelle Überarbeitung | T2, T3 | T2: Icons sollen moderner wirken; T3: Navbar im Edit-Screen entfernen, dickerer Rand |
| Aufgabe selbst war klar und schnell durchführbar (positiver Befund) | T1, T2 | Beide bestätigen, dass der Kernablauf funktioniert — die Reibung liegt also eher in der Informationsarchitektur (Library/Home/Navbar) als im eigentlichen Karteikarten-Workflow |

## Beobachtungen einzelner Testpersonen (geringere Aussagekraft, aber dennoch relevant)

- Verwirrung durch gemischte englisch/deutsche Beschriftungen (T1)
- Suchfunktion funktioniert nicht (T1)
- Wunsch nach Dark Theme (T1)
- Filter-Icon in der Suchleiste (T2)
- Gestaltung des Plus-Icons in Create/Edit (T2)
- Icon-Tausch: Minus → Kreuz / Kreuz → Rückgängig (T2)
- Info-Icon in der LearningBox (T2)
- Stift-Symbol für den Edit-Button (T3)
- Größerer Practice-Button (T3)
- Verwirrendes Backspace-Icon (T3)

## Zusammenfassung

Der Kernablauf (Erstellen/Üben von Karteikarten-Sets) wurde von mehreren Testpersonen als klar und schnell bewertet — das ist eine Stärke, die erhalten werden sollte. Die wiederkehrenden Reibungspunkte liegen vor allem in der **Informationsarchitektur** (Redundanz zwischen Library und Home, Konsistenz der Navbar), bei **fehlenden Sicherheitsnetzen** (keine Bestätigung beim Löschen/Speichern), bei **fehlenden Account-Funktionen** (Anmeldung) sowie bei **unklaren Steuerelementen im Practice-Ablauf** (Repeat Incorrect vs. Start Over). Diese von mehreren Testpersonen genannten Probleme sollten gegenüber den kosmetischen Einzelmeinungen priorisiert werden.
