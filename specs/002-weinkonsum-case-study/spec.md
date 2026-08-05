# Feature Specification: Case Study „Generative Forschung Weinkonsum"

**Feature Branch**: `002-weinkonsum-case-study`

**Created**: 2026-08-05

**Status**: Draft

**Input**: User description: "baue meine portfolio seite entsprechend an, so dass der neue use case auch drin ist (weinkonsum)" — mit Figma-Referenzen Home `21:123`, Case Study Desktop `857:721`, Case Study Mobile `1557:897`.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Case Study lesen (Priority: P1)

Eine Recruiterin oder ein Hiring Manager öffnet die Detailseite der Case Study „Generative Forschung Weinkonsum" und liest die vollständige Fallstudie: Executive Summary, Rolle und Aufgaben, angewandte Methoden, Ausgangslage, Research-Phase mit Verhaltensmuster-Matrix sowie die Ergebnisse mit den vier Personas.

**Why this priority**: Die Detailseite ist der eigentliche Inhalt des neuen Use Cases. Ohne sie gibt es nichts zu verlinken; sie belegt Severins Research-Kompetenz eigenständig.

**Independent Test**: Die Seite kann direkt über ihre URL geöffnet und vollständig gelesen werden — auch ohne Änderungen an der Startseite.

**Acceptance Scenarios**:

1. **Given** ein Besucher öffnet die Case-Study-URL direkt, **When** die Seite lädt, **Then** erscheinen Hero-Titel „Generative Forschung Weinkonsum", Executive Summary, Rolle, Aufgaben, Methoden-Chips, die Abschnitte Ausgangslage, Research-Phase und Ergebnisse sowie Navigation und Footer.
2. **Given** ein Besucher liest den Abschnitt Research-Phase, **When** er weiterscrollt, **Then** sieht er die Grafik der vier Verhaltensmuster.
3. **Given** ein Besucher liest den Abschnitt Ergebnisse, **When** er weiterscrollt, **Then** sieht er die Persona-Darstellungen als Bilder.
4. **Given** ein Besucher nutzt die Navigation, **When** er „Case studies" oder „CV" wählt, **Then** landet er auf der Startseite bzw. der CV-Seite.

---

### User Story 2 - Case Study von der Startseite entdecken (Priority: P2)

Ein Besucher der Startseite scrollt durch die Case-Study-Übersicht und findet dort einen Teaser zur Weinkonsum-Case-Study mit Kurzbeschreibung, Kennzahlen und Button „Weiterlesen", der zur Detailseite führt.

**Why this priority**: Ohne Teaser ist die neue Seite praktisch unauffindbar. Die Auffindbarkeit ist jedoch erst wertvoll, wenn die Detailseite existiert.

**Independent Test**: Auf der Startseite ist ein vierter Teaser sichtbar; ein Klick auf „Weiterlesen" führt zur Detailseite.

**Acceptance Scenarios**:

1. **Given** ein Besucher ist auf der Startseite, **When** er zum Abschnitt „Case Studies" scrollt, **Then** sieht er vier Teaser, wobei Weinkonsum an vierter Position steht.
2. **Given** ein Besucher sieht den Weinkonsum-Teaser, **When** er auf „Weiterlesen" klickt, **Then** öffnet sich die Case-Study-Detailseite.
3. **Given** ein Besucher öffnet das mobile Menü auf einer beliebigen Seite, **When** er die Einträge liest, **Then** ist die Weinkonsum-Case-Study als Menüpunkt vorhanden.

---

### User Story 3 - Mobile Nutzung (Priority: P3)

Ein Besucher öffnet Startseite und Case Study auf dem Smartphone und kann alle Inhalte ohne horizontales Scrollen lesen.

**Why this priority**: Ein grosser Teil der Zugriffe erfolgt mobil; die Verfassung fordert responsive Layouts. Der Inhalt ist jedoch bereits über Story 1 und 2 nutzbar.

**Independent Test**: Bei 390px Viewport-Breite sind alle Abschnitte lesbar, Methoden-Chips brechen um und es entsteht kein horizontaler Overflow.

**Acceptance Scenarios**:

1. **Given** ein Besucher nutzt ein Smartphone (390px), **When** er die Case Study öffnet, **Then** bricht der Hero-Titel auf drei Zeilen und alle Abschnitte sind ohne horizontales Scrollen lesbar.
2. **Given** ein Besucher nutzt ein Smartphone, **When** er den Methodenblock erreicht, **Then** sind die Chips mehrzeilig umgebrochen.
3. **Given** ein Besucher nutzt ein Smartphone, **When** er die Bildabschnitte erreicht, **Then** passen sich Matrix und Persona-Bilder der Bildschirmbreite an.

---

### Edge Cases

- **Sehr schmale Viewports (320px)**: Hero-Titel und Chips müssen umbrechen, ohne den Seiteninhalt breiter als den Viewport zu machen.
- **Bilder laden nicht**: Jedes Bild braucht beschreibenden Alternativtext, damit der Inhalt verständlich bleibt.
- **Direkter Einstieg auf der Detailseite**: Navigationslinks müssen auch ohne vorherigen Besuch der Startseite auf die richtigen Ziele zeigen.
- **Vier statt drei Teaser auf der Startseite**: Der zusätzliche Teaser darf Abstände und Rhythmus der bestehenden Übersicht nicht brechen.
- **Persona-Bilder mit viel Feintext**: Auf kleinen Viewports sind Details begrenzt lesbar; das Bild darf trotzdem nicht abgeschnitten werden.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Die Website MUSS eine eigene Detailseite für die Case Study „Generative Forschung Weinkonsum" bereitstellen, die über eine eigene URL erreichbar ist.
- **FR-002**: Die Detailseite MUSS die Inhalte des Figma-Designs abbilden: Hero-Titel, Executive Summary, „Meine Rolle", „Meine Aufgaben", angewandte Methoden, „Ausgangslage & Problemdefinition", „Research-Phase", „Ergebnisse / Personas".
- **FR-003**: Die Detailseite MUSS die Grafik der vier Verhaltensmuster sowie die Persona-Darstellungen als Bilder mit beschreibendem Alternativtext enthalten.
- **FR-004**: Die Startseite MUSS einen vierten Case-Study-Teaser für Weinkonsum enthalten — mit Titel, Kurzbeschreibung, Kennzahlen und Button „Weiterlesen", der auf die Detailseite verlinkt.
- **FR-005**: Das mobile Navigationsmenü MUSS auf allen Seiten einen Eintrag zur Weinkonsum-Case-Study enthalten.
- **FR-006**: Die Detailseite MUSS demselben visuellen Muster folgen wie die bestehenden Case Studies (Hero, Abschnittsüberschriften mit Phasenlabel, Trennlinien, Methoden-Chips, Bildblöcke, Footer).
- **FR-007**: Die Detailseite MUSS in einem Desktop- und einem Mobile-Layout entsprechend den beiden Figma-Screens dargestellt werden.
- **FR-008**: Alle Bilder der Detailseite MÜSSEN dauerhaft verfügbar sein; Bildquellen, die ablaufen können, sind nicht zulässig.
- **FR-009**: Die Detailseite MUSS von Suchmaschinen indexierbar sein (im Gegensatz zur Wunddokumentations-Case-Study, die aus Vertraulichkeitsgründen ausgenommen ist).
- **FR-010**: Alle bereits veröffentlichten Adressen der Website — insbesondere die im Lebenslauf verlinkte Startseiten-Adresse — MÜSSEN unverändert bleiben.

### Key Entities

- **Case Study Weinkonsum**: Vierte Fallstudie mit Titel, Executive Summary, Rolle, Aufgaben, Methodenliste, drei Inhaltsphasen (Ausgangslage, Research-Phase, Ergebnisse) und zugehörigen Bildern.
- **Case-Study-Teaser**: Eintrag in der Startseiten-Übersicht mit Vorschaubild, Titel, Kurzbeschreibung, Kennzahlen und Link zur Detailseite.
- **Bild-Asset**: Lokale Bilddatei mit Alternativtext; hier Verhaltensmuster-Matrix, zwei Persona-Darstellungen und ein Teaser-Vorschaubild.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Die Startseite zeigt vier Case-Study-Teaser; der Weinkonsum-Teaser führt mit einem Klick zur Detailseite.
- **SC-002**: Alle acht im Design vorgesehenen Inhaltsabschnitte der Detailseite sind vorhanden und in derselben Reihenfolge wie im Figma-Design.
- **SC-003**: Bei Viewport-Breiten von 320px bis 1440px entsteht kein horizontales Scrollen auf Startseite und Detailseite.
- **SC-004**: Alle Bilder besitzen einen nicht-leeren, beschreibenden Alternativtext.
- **SC-005**: Kein Link auf der Website führt zu einem Fehler (404); alle bisherigen URLs funktionieren weiterhin.
- **SC-006**: Die Detailseite lädt in unter 3 Sekunden auf gewöhnlicher Breitbandverbindung.

## Assumptions

- Die Case Study enthält keine vertraulichen Inhalte; der Auftraggeber (Denner) darf namentlich genannt werden — analog zu den beiden bestehenden Denner-Case-Studies.
- Die Weinkonsum-Case-Study wird als vierter Teaser ergänzt und ersetzt keine bestehende; das entspricht dem Home-Design mit vier Projekt-Karten.
- Der Teaser-Text ersetzt den Platzhalter „XYZ" aus dem Figma-Design durch eine Kurzbeschreibung im Stil der übrigen Teaser.
- Als Kennzahlen des Teasers dienen Angaben aus dem Case-Study-Inhalt (21 Interviews, 4 Personas), damit die Karte dem Muster der anderen Teaser entspricht.
- Persona-Darstellungen werden als Bilder eingebunden und nicht als HTML nachgebaut.
- Bildabschnitte werden zentriert dargestellt — konsistent zu den bestehenden Bildblöcken der Website.
- Bestehende gemeinsame Bausteine (Navigation, Footer, Chips, Trennlinien, Bildblöcke, mobiles Menü) werden wiederverwendet statt neu erstellt.
- Die Inhalte stammen aus dem Figma-Design; es werden keine neuen inhaltlichen Aussagen erfunden.
