# Feedback nach Umsetzungsschwierigkeit sortiert

Die Einstufung basiert auf einer Durchsicht des Codes (`Navbar.js`, `LearningBox.js`, `Library.js`, `Homepage.js`, `TextBox.js` usw.). Die einfachsten Anpassungen stehen zuerst.

## 🟢 Einfach (isolierte Stil-/Asset-Anpassungen, einzelne Komponente)

1. Minus-Icon in Create/Edit durch ein Kreuz/X ersetzen (Icon-Tausch)
2. "Kreuz"-Icon durch ein Rückgängig-Icon ersetzen (Icon-Tausch)
3. "Edit"-Button in `LearningBox` durch ein Stift-Symbol ersetzen
4. Info-Icon zur `LearningBox` hinzufügen
5. "Practice"-Button in `LearningBox` vergrößern (Anpassung von `width`/`height` in den Styles)
6. Navbar mit dickerem Rand versehen (eine Style-Eigenschaft in `Navbar.js`)
7. Navbar-Icons modernisieren (Bild-Assets in `NAV_ITEMS` austauschen)
8. Suchleiste breiter als die Karte gestalten (Style-Anpassung in `Library`/`Homepage`/`TextBox`)
9. Filter-Icon zur Suchleiste hinzufügen (Erweiterung von `TextBox`)

## 🟡 Mittel (kleine Logik-/UX-Änderungen innerhalb bestehender Screens)

10. Bestätigungsdialog vor Löschen/Speichern einbauen (`Alert`/Modal um `deleteLearningBox`/`updateLearningBox`)
11. "Repeat Incorrect" und "Start Over"-Buttons visuell/textlich besser unterscheidbar machen
12. "Repeat Incorrect" automatisch ausblenden, sobald alle Karten korrekt beantwortet wurden (bedingte Logik in `usePracticeSession`)
13. Beschriftung/Erklärung von "Easy/Repeat" vs. "Repeat Incorrect" verständlicher machen
14. Plus-Icon-Button in Create/Edit durch einen klareren (kleineren oder länglicheren) beschrifteten Button ersetzen
15. Navbar aus dem Edit-Screen entfernen (`<Navbar />` aus `EditSet.js` entfernen, Layout anpassen)
16. Suchfunktion tatsächlich funktionsfähig machen (`TextInput`-State mit Filterung von `learningBoxes` verknüpfen)
17. Verwirrendes Backspace-Icon klären (Icon ersetzen und/oder Beschriftung hinzufügen)

## 🔴 Schwierig (übergreifende Änderungen, neue Infrastruktur oder neue Features)

18. Beziehung zwischen Home und Library neu gestalten — zusammenführen oder umstrukturieren ("Stapeln" statt getrennter Bereiche, mehr Statistiken, Überschrift, mehr Infos zu den letzten Sets); betrifft die Datenpräsentation in `Homepage.js` und `Library.js`
19. Dark Theme implementieren — erfordert ein Theming-System, das auf alle `StyleSheet`-Definitionen der App angewendet wird
20. Anmelde-/Account-Funktion hinzufügen — erfordert Auth-Flow, persistenten User-State, vermutlich neue Screens und Speicherlogik
21. Verwirrung durch gemischte englisch/deutsche Sprache beheben — vermutlich ein einheitlicher Texte-Durchgang oder ein kleines i18n-Setup nötig (aktuell existiert keine Sprach-Infrastruktur im Code)

## Empfohlene Reihenfolge

1. Zuerst die **einfachen** Icon-/Stil-Anpassungen umsetzen — schnelle, sichtbare Erfolge.
2. Danach den Bestätigungsdialog und die Klarheit der Practice-Buttons angehen — diese Punkte wurden von mehreren Testpersonen genannt (siehe `UsabilityTestAnalysis.md`).
3. Die Neugestaltung von Home/Library, das Dark Theme und die Anmeldefunktion als größere Folgeprojekte behandeln.
