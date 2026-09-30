# Feature Specification: Zweisprachiges Portfolio (DE + EN)

**Feature Branch**: `003-bilingual-english`

**Created**: 2026-09-29

**Status**: Draft

**Input**: User description: "Portfolio zweisprachig machen. Default-Sprache bleibt Deutsch an den bestehenden URLs. Englische Version als Spiegel. Nutzer liefert Bilder mit englischem UI-Text. Speckit-Workflow einhalten."

## Clarifications

### Session 2026-09-29

- Q: Who creates and approves the English copy? → A: Agent translates from the German content; the site owner reviews and approves before go-live.
- Q: What if English UI screenshots are not ready yet? → A: English pages may go live with translated text while temporarily keeping German screenshots.
- Q: How should the language switcher be labeled? → A: Compact labels „DE | EN“ in the header and mobile navigation.
- Q: Must all English pages go live together? → A: Yes — all 6 English pages must go live together.
- Q: Should English URLs use translated filenames? → A: No — same filenames as German pages within the English language-version path.
- Q: Are separate English UI screenshots required? → A: No — English pages keep the existing German screenshot files. English alt text is enough.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Englische Startseite lesen (Priority: P1)

Eine internationale Recruiterin öffnet die englische Startseite und findet denselben Inhalt wie auf Deutsch — Hero, Case-Study-Teaser, Skills und Kontakt — vollständig auf Englisch, inkl. Navigation und Call-to-Action.

**Why this priority**: Ohne englische Startseite gibt es keinen sinnvollen Einstieg für nicht-deutschsprachige Besucher; sie ist das MVP der EN-Version.

**Independent Test**: Die englische Startseite kann über ihre eigene URL direkt geöffnet und vollständig gelesen werden — unabhängig von Case Studies und CV.

**Acceptance Scenarios**:

1. **Given** ein Besucher öffnet die englische Startseite, **When** die Seite lädt, **Then** sind Hero-Text, Teaser-Beschreibungen, Skills-Labels, Navigation und Footer auf Englisch.
2. **Given** ein Besucher ist auf der englischen Startseite, **When** er einen Case-Study-Teaser anklickt, **Then** landet er auf der entsprechenden englischen Case-Study-Seite.
3. **Given** ein Besucher ist auf der englischen Startseite, **When** er „CV“ wählt, **Then** öffnet sich die englische CV-Seite.

---

### User Story 2 - Sprache wechseln (Priority: P2)

Ein Besucher, der auf einer deutschen oder englischen Seite landet, kann bewusst zwischen Deutsch und Englisch wechseln und bleibt dabei auf der inhaltlich entsprechenden Seite (z. B. deutsche Weinkonsum-Case-Study ↔ englische Weinkonsum-Case-Study).

**Why this priority**: Der Switcher macht die zweite Sprache auffindbar und verhindert, dass Besucher in der „falschen“ Sprache stecken bleiben; setzt voraus, dass mindestens die Startseite in beiden Sprachen existiert.

**Independent Test**: Auf Startseite (DE und EN) ist ein Sprachwechsel sichtbar; nach dem Wechsel ist die andere Sprache aktiv und der Seiteninhalt entspricht dem Pendant.

**Acceptance Scenarios**:

1. **Given** ein Besucher ist auf der deutschen Startseite, **When** er Englisch wählt, **Then** öffnet sich die englische Startseite.
2. **Given** ein Besucher ist auf einer deutschen Case-Study-Seite, **When** er Englisch wählt, **Then** öffnet sich die englische Version derselben Case Study.
3. **Given** ein Besucher ist auf einer englischen Seite, **When** er Deutsch wählt, **Then** landet er auf dem deutschen Pendant.
4. **Given** ein Besucher wechselt die Sprache, **When** die neue Seite geladen ist, **Then** ist die aktive Sprache im Switcher klar erkennbar (kompakte Labels „DE | EN“).

---

### User Story 3 - Englische Case Studies und CV (Priority: P3)

Ein Besucher liest die vier Case Studies und den Lebenslauf auf Englisch, inklusive Alternativtexten. UI-Screenshots sind dieselben Dateien wie auf Deutsch.

**Why this priority**: Vervollständigt die EN-Version für Tiefenlektüre; die Startseite allein reicht bereits für einen ersten Eindruck.

**Independent Test**: Jede englische Case-Study-URL und die englische CV-URL sind einzeln erreichbar und vollständig auf Englisch lesbar.

**Acceptance Scenarios**:

1. **Given** ein Besucher öffnet eine englische Case Study, **When** er die Seite liest, **Then** sind Titel, Fliesstexte, Labels und Navigation auf Englisch und entsprechen inhaltlich der deutschen Version.
2. **Given** ein Besucher öffnet die englische CV-Seite, **When** er die Seite liest, **Then** sind Abschnitte, Rollenbeschreibungen und Skills auf Englisch.
3. **Given** eine Case Study enthält UI-Screenshots, **When** der Besucher die englische Version betrachtet, **Then** sieht er dieselben Screenshot-Dateien wie auf Deutsch, mit englischem Alternativtext. Eigene englische UI-Bilder sind nicht erforderlich.
4. **Given** ein Besucher nutzt das mobile Menü auf einer englischen Seite, **When** er die Einträge liest, **Then** sind Menüpunkte auf Englisch und verlinken auf englische Ziele.

---

### User Story 4 - Bestehende deutsche URLs unverändert (Priority: P4)

Recruiter und bestehende Bookmarks öffnen weiterhin die bekannten deutschen URLs und finden denselben deutschen Inhalt; nichts bricht durch die Einführung der englischen Version.

**Why this priority**: Schützt bestehende Share-Links und die DE-Default-Erfahrung; ist eine Nicht-Regression gegenüber dem Status quo.

**Independent Test**: Alle bisherigen deutschen Seiten-URLs laden den deutschen Inhalt wie zuvor; kein automatischer Redirect auf Englisch.

**Acceptance Scenarios**:

1. **Given** ein Besucher öffnet eine bisherige deutsche URL (Startseite, CV, Case Study), **When** die Seite lädt, **Then** erscheint der deutsche Inhalt ohne Zwangswechsel auf Englisch.
2. **Given** die Website wird öffentlich geteilt ohne Sprachangabe, **When** jemand die Root-URL öffnet, **Then** ist Deutsch die angezeigte Sprache.

---

### Edge Cases

- **Direkter Einstieg auf einer EN-Unterseite**: Navigation und Sprachwechsel müssen auf korrekte EN- bzw. DE-Pendants zeigen, ohne die Startseite vorauszusetzen.
- **UI-Screenshots**: Englische Seiten verwenden dieselben Screenshot-Dateien wie die deutschen Seiten. Es werden keine separaten englischen UI-Bilder erstellt.
- **Sehr schmale Viewports (320px)**: Der Sprachwechsel darf Navigation und Inhalt nicht zum horizontalen Overflow bringen.
- **Projektnamen / Eigennamen**: Marken- und Projekttitel (z. B. „Weinkonsum“, Firmennamen) dürfen in der EN-Version unverändert bleiben, wenn sie Eigennamen sind; beschreibende Texte sind übersetzt.
- **Teilweise fertige EN-Version**: Entwicklungsreihenfolge darf gestaffelt sein, aber öffentlich live gehen die sechs englischen Inhaltsseiten nur gemeinsam (kein EN-Home ohne EN-CV und EN-Case-Studies).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Die Website MUSS alle bestehenden deutschsprachigen Seiten weiterhin unter ihren bisherigen Adressen bereitstellen, mit Deutsch als Default-Sprache der Root-URL.
- **FR-002**: Die Website MUSS für jede bestehende Inhaltsseite ein englischsprachiges Pendant bereitstellen (Startseite, CV, vier Case Studies); die Dateinamen der EN-Pendants entsprechen den deutschen Dateinamen (keine übersetzten Dateinamen).
- **FR-003**: Jede englische Seite MUSS denselben Informationsumfang und dieselbe Abschnittsstruktur wie ihr deutsches Pendant haben — übersetzt, nicht gekürzt.
- **FR-004**: Nutzer MÜSSEN auf jeder Seite (DE und EN, Desktop und Mobile) zwischen Deutsch und Englisch wechseln können; der Switcher verwendet kompakte Labels „DE | EN“ in Header und mobiler Navigation.
- **FR-005**: Ein Sprachwechsel MUSS auf die inhaltlich entsprechende Seite in der anderen Sprache führen (nicht nur immer auf die Startseite).
- **FR-006**: Die aktive Sprache MUSS im Sprachwechsel visuell erkennbar sein (Hervorhebung von „DE“ bzw. „EN“).
- **FR-007**: Englische Seiten MÜSSEN für Screenreader und Browser korrekt als Englisch gekennzeichnet sein; deutsche Seiten weiterhin als Deutsch.
- **FR-008**: Interne Links auf englischen Seiten MÜSSEN auf englische Ziele zeigen; interne Links auf deutschen Seiten weiterhin auf deutsche Ziele.
- **FR-009**: Englische Seiten MÜSSEN dieselben UI-Screenshot-Dateien verwenden wie die deutschen Seiten. Separate englische Screenshot-Varianten sind nicht erforderlich. Alternativtexte auf englischen Seiten MÜSSEN Englisch sein.
- **FR-010**: Geteilte visuelle Gestaltung (Layout, Typografie, Farben, Abstände) MUSS zwischen DE und EN konsistent bleiben; Abweichungen nur dort, wo übersetzter Text die Zeilenlänge verändert.
- **FR-011**: Es DARF KEINEN automatischen Sprachwechsel allein aufgrund der Browser-Spracheinstellung geben.
- **FR-012**: Bestehende deutsche Share-URLs MÜSSEN ohne Breaking Change gültig bleiben.
- **FR-013**: Alternativtexte, Navigations-Labels und sonstige für Accessibility relevante Texte MÜSSEN in der jeweiligen Seitensprache vorliegen.
- **FR-014**: Englische Fliesstexte und Labels MÜSSEN vor Go-live vom Seiteninhaber reviewed und freigegeben sein (Entwurf durch Agent aus dem deutschen Inhalt).
- **FR-015**: Die sechs englischen Inhaltsseiten (Startseite, CV, vier Case Studies) DÜRFEN nur gemeinsam öffentlich live gehen — kein teilweiser Go-live einzelner EN-Seiten.

### Key Entities

- **Language version**: Eine vollständige Darstellung der Portfolio-Inhalte in einer Sprache (Deutsch oder Englisch), mit eigener Einstiegsadresse und eigenen Unterseiten.
- **Page pair**: Zuordnung einer deutschen Inhaltsseite zu ihrem englischen Pendant (gleiche Case Study / gleiches CV / gleiche Startseite); dieselbe Dateiname-Basis in beiden Language versions.
- **Language switcher**: Steuerungselement, das die aktive Sprache anzeigt und den Wechsel zum Pendant auslöst.
- **Localized media asset**: Bild (insbesondere UI-Screenshot), das sprachspezifischen Text enthält und der jeweiligen Language version zugeordnet ist.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Alle 6 Inhaltsseiten existieren in beiden Sprachen (12 Seiten insgesamt) und sind über eigene Adressen erreichbar; der öffentliche EN-Go-live erfolgt erst, wenn alle sechs EN-Seiten bereit und freigegeben sind.
- **SC-002**: Ein Sprachwechsel von einer beliebigen Inhaltsseite führt in unter 2 Sekunden (bei Breitband) zum korrekten Pendant; die aktive Sprache ist ohne Scrollen erkennbar.
- **SC-003**: 100 % der bisherigen deutschen URLs liefern weiterhin deutschen Inhalt ohne erzwungenen Redirect auf Englisch.
- **SC-004**: Nach Freigabe der englischen Texte durch den Seiteninhaber kann ein nicht-deutschsprachiger Teser Startseite, eine Case Study und CV ausschliesslich auf Englisch lesen und versteht Rolle, Projekte und Kontaktweg ohne Deutschkenntnisse.
- **SC-005**: Auf Viewports 320px, 390px, 768px und 1440px verursacht der Sprachwechsel keinen horizontalen Overflow und bleibt bedienbar.
- **SC-006**: Jede englische Seite mit UI-Screenshots zeigt dieselben Bilddateien wie ihr deutsches Pendant und englische Alternativtexte. Es gibt keine offenen EN-Screenshot-Lieferungen.

## Assumptions

- Englische Seiten behalten dieselben Dateinamen wie ihre deutschen Pendants (innerhalb der EN-Language-Version); es werden keine übersetzten URL-Dateinamen eingeführt.
- Die englische Version spiegelt die bestehenden sechs Inhaltsseiten; keine neuen Case Studies oder CV-Abschnitte nur für EN.
- Englische Übersetzungen werden als inhaltlich gleichwertige Fachübersetzung erstellt (Portfolio-/UX-Ton): der Agent erstellt den Entwurf aus dem deutschen Inhalt; der Seiteninhaber reviewt und gibt vor Go-live frei.
- UI-Screenshots werden zwischen Deutsch und Englisch geteilt. Der Seiteninhaber liefert keine separaten englischen UI-Bilder.
- Bilder ohne sprachspezifischen UI-Text (z. B. Hero-Portrait, Icons) dürfen zwischen DE und EN geteilt werden.
- Keine Speicherung der Sprachwahl über Cookies oder Geräte hinweg erforderlich — die URL bestimmt die Sprache.
- Keine Browser-Spracherkennung und kein Geo-Redirect.
- Die Constitution wird im Zuge dieses Features angepasst, sodass Zweisprachigkeit (DE + EN) erlaubt ist (bisher: nur Deutsch).
- Visuelles Design bleibt am bestehenden Figma-/Site-System ausgerichtet; der Sprachwechsel erscheint als kompaktes „DE | EN“-Element in Header und mobiler Navigation.
