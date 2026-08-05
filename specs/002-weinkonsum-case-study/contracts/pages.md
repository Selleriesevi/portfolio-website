# Phase 1 UI Contract: Case Study „Generative Forschung Weinkonsum"

**Feature**: `002-weinkonsum-case-study` | **Date**: 2026-08-05

Die Website hat keine programmatische Schnittstelle. Der Vertrag ist die dargestellte Seitenstruktur: URL-Zuordnung, Abschnittsfolge und Figma-Referenz je Abschnitt.

## New Page: Case Study Weinkonsum

**URL**: `/case-studies/weinkonsum.html`

**File**: `site/case-studies/weinkonsum.html`

**Figma**: Desktop `857:721`, Mobile `1557:897`

**Indexable**: ja (kein `noindex`)

**Scripts**: `js/nav.js` — kein `carousel.js`

### Section Contract

| # | Section | Markup-Muster | Figma Desktop | Figma Mobile |
|---|---------|---------------|---------------|--------------|
| 1 | Navigation | `header.nav` + `nav.nav__flyout` | `857:722` | `1557:898` |
| 2 | Hero | `section.case-hero.case-hero--panel.case-hero--weinkonsum` mit `h1.case-hero__title` | `857:723` | `1557:1026` |
| 3 | Executive Summary | `h2` + `div.text-block` mit 2 `p` | `857:724`, `870:876` | `1618:1000`, `1618:1001` |
| 4 | Meine Rolle | `div.text-block` mit `p.role-title` + `ul` | `857:726` | `1618:1002` |
| 5 | Meine Aufgaben | `div.text-block` mit `p.role-title` + `ul` | `857:727` | `1618:1003` |
| 6 | Angewandte Methoden | `h2` + `div.chips` mit 7 `span.chip` | `857:728`, `857:729` | `1618:1004`, `1618:1005` |
| 7 | Trenner | `hr.divider` | `857:736` | `1618:1014` |
| 8 | Ausgangslage & Problemdefinition | `h3.subtitle` + `h2` + `div.text-block` mit `ol` | `857:737`, `857:738` | `1618:1015`, `1618:1016` |
| 9 | Trenner | `hr.divider` | `857:739` | `1618:1017` |
| 10 | Research-Phase | `h3.subtitle.subtitle--alt` + `h2` + `div.text-block` mit `ul` | `857:740`, `857:741` | `1618:1018`, `1618:1019` |
| 11 | Bild Verhaltensmuster | `figure.image-block.image-block--narrow` | `872:1094` | `1618:1022` |
| 12 | Trenner | `hr.divider` | `857:742` | `1618:1024` |
| 13 | Ergebnisse / Personas | `h3.subtitle.subtitle--alt` + `h2` + `div.text-block` mit `ol` | `857:743`, `857:744` | `1618:1025`, `1618:1026` |
| 14 | Trenner | `hr.divider` | `857:752` | `1618:1027` |
| 15 | Bilder Personas | 2 × `figure.image-block` | `888:1108`, `888:1110` | `1618:1030`, `1618:1031` |
| 16 | Footer | `footer.footer` | `857:760` | `1557:920` |

### Heading Contract

| Level | Text | Klasse |
|-------|------|--------|
| h1 | Generative Forschung Weinkonsum | `case-hero__title` |
| h2 | Executive Summary | — |
| h2 | Angewandte Methoden: | — |
| h3 | DISCOVER | `subtitle` |
| h2 | Ausgangslage & Problemdefinition | — |
| h3 | Discover & Explore | `subtitle subtitle--alt` |
| h2 | Research-Phase | — |
| h3 | Ergebnisse | `subtitle subtitle--alt` |
| h2 | Personas | — |

### Image Contract

| Slot | Datei | Alternativtext |
|------|-------|----------------|
| Verhaltensmuster | `../assets/images/weinkonsum-1-verhaltensmuster.jpg` | Matrix der vier Verhaltensmuster beim Weinkauf |
| Persona-Seite 1 | `../assets/images/weinkonsum-2-persona-1.jpg` | Persona Marco Weinanfänger: Persönliches, Aufgaben und Bewertung von Rebsorte und Herkunft |
| Persona-Seite 2 | `../assets/images/weinkonsum-3-persona-2.jpg` | Persona Marco Weinanfänger: Kontext, Probleme, Ziele, User Needs und Merkmals-Diagramm |

## Changed Page: Home

**URL**: `/index.html` (unverändert)

**Figma**: `21:123`

**Change**: Vierte `article.project` nach der Wunddokumentations-Karte, entsprechend Figma-Knoten `1618:1072`.

| Element | Inhalt |
|---------|--------|
| `div.project__image.project__image--cover > img` | `assets/images/cs-weinkonsum.jpg` |
| `h3` | Generative Forschung Weinkonsum |
| `p` | Begrenztes Wissen über die Weinkundschaft im Denner Weinshop. Ich leitete eine generative Research-Studie und erarbeitete daraus Personas und Opportunity Areas. |
| `ul.project__metrics` | 21 Video-Interviews · 4 validierte Personas (je in `span.highlight`) |
| `a.btn` | Weiterlesen → `case-studies/weinkonsum.html` |

## Changed Pages: Flyout Navigation

Auf allen Seiten wird das mobile Flyout um einen vierten Case-Study-Eintrag ergänzt — eingefügt nach „Case Study: 3D-Scan App" und vor „CV".

| File | Link-Ziel |
|------|-----------|
| `site/index.html` | `case-studies/weinkonsum.html` |
| `site/cv.html` | `case-studies/weinkonsum.html` |
| `site/case-studies/einkaufsliste.html` | `weinkonsum.html` |
| `site/case-studies/uebersichtlichkeit.html` | `weinkonsum.html` |
| `site/case-studies/wunddokumentation.html` | `weinkonsum.html` |
| `site/case-studies/weinkonsum.html` | `weinkonsum.html` |

**Link-Text**: `Case Study: Weinkonsum`

## Changed Stylesheets

| File | Change |
|------|--------|
| `site/css/case-study.css` | Neue Variante `.case-hero--weinkonsum`: `background-color: #8499ab`, `min-height: 440px`, Wellen-Pseudoelement und transparentes Titel-Panel — geteilt mit `.case-hero--wunddokumentation`; zusätzlich `hyphens: manual` für den Titel (R-011) und neuer Modifier `.image-block--narrow` mit `max-width: 500px` (R-007) |
| `site/css/responsive.css` | `.case-hero--weinkonsum` in die bestehende Mobile-Regel `min-height: 430px` aufnehmen |

## URL Map (nach Umsetzung)

| URL | File |
|-----|------|
| `/` | `site/index.html` |
| `/cv.html` | `site/cv.html` |
| `/case-studies/einkaufsliste.html` | `site/case-studies/einkaufsliste.html` |
| `/case-studies/uebersichtlichkeit.html` | `site/case-studies/uebersichtlichkeit.html` |
| `/case-studies/wunddokumentation.html` | `site/case-studies/wunddokumentation.html` |
| `/case-studies/weinkonsum.html` | `site/case-studies/weinkonsum.html` *(neu)* |

Keine bestehende URL ändert sich (FR-010).
