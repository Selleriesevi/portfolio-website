# Phase 1 Data Model: Case Study „Generative Forschung Weinkonsum"

**Feature**: `002-weinkonsum-case-study` | **Date**: 2026-08-05

Die Website hat keine Datenbank; „Entitäten" sind Inhaltsstrukturen, die als statisches Markup vorliegen. Dieses Dokument hält fest, welche Inhalte die neue Case Study trägt und wie sie sich in das Modell aus Feature `001-portfolio-website` einfügt.

## Entity: Case Study (Instanz Weinkonsum)

Erweitert die bestehende Entität `Case Study` um eine vierte Instanz.

| Field | Value |
|-------|-------|
| slug | `case-studies/weinkonsum` |
| title | Generative Forschung Weinkonsum |
| client | Denner Weinshop |
| figma_desktop | `857:721` |
| figma_mobile | `1557:897` |
| hero_style | Flächenfarbe `#8499ab` mit Wellenübergang |
| indexable | ja |
| carousel | nein |

### Content Blocks (Reihenfolge verbindlich)

| # | Block | Typ | Inhalt |
|---|-------|-----|--------|
| 1 | Hero | Titel | „Generative Forschung Weinkonsum" |
| 2 | Executive Summary | H2 + 2 Absätze | Ausgangslage und Nutzen der Studie |
| 3 | Meine Rolle | Label + Liste | Projektleitung; User-Research Lead |
| 4 | Meine Aufgaben | Label + Liste | 6 Aufgaben (Forschungsfragen … Personas ausarbeiten) |
| 5 | Angewandte Methoden | H2 + Chips | 7 Methoden |
| 6 | Ausgangslage & Problemdefinition | Label `DISCOVER` + H2 + nummerierte Liste | 2 Forschungsfragen |
| 7 | Research-Phase | Label `Discover & Explore` + H2 + Text + Liste + Bild | 21 Interviews, 4 Verhaltensmuster, Matrix-Bild |
| 8 | Ergebnisse / Personas | Label `Ergebnisse` + H2 „Personas" + Text + nummerierte Liste + 2 Bilder | Quantitative Validierung, 4 Personas, Opportunity Areas |

### Methoden-Chips (Reihenfolge wie Design)

Interviews · Screener · Umfrage · Inhaltsanalyse · Clustering · Personas Mapping · Insight Statements

### Personas (Ergebnisliste)

1. Marco – Weinanfänger
2. Markus – Weinkenner
3. Sophie – Anlass-Trinkerin
4. Regula – Alltag-Trinkerin

### Verhaltensmuster (Research-Phase)

1. Heikler Geschmack bei gleichzeitig abwechslungsreichem Weinkauf
2. Unkomplizierter Geschmack bei abwechslungsreichem Weinkauf
3. Heikler Geschmack bei vorsichtigem Weinkauf
4. Unkomplizierter Geschmack bei vorsichtigem Weinkauf

### Hervorhebungen

| Textstelle | Auszeichnung |
|------------|--------------|
| „21 halbstrukturierte Video-Interviews" | halbfett |
| „vier zentrale Verhaltensmuster" | halbfett |

## Entity: Case-Study-Teaser (Instanz Weinkonsum)

Vierte Instanz in der Startseiten-Übersicht, Position 4 nach Wunddokumentation.

| Field | Value |
|-------|-------|
| position | 4 |
| figma_node | `1618:1072` |
| title | Generative Forschung Weinkonsum |
| summary | Begrenztes Wissen über die Weinkundschaft im Denner Weinshop. Ich leitete eine generative Research-Studie und erarbeitete daraus Personas und Opportunity Areas. |
| metrics | 21 Video-Interviews; 4 validierte Personas |
| image | `assets/images/cs-weinkonsum.jpg` (beschnitten) |
| link | `case-studies/weinkonsum.html` |
| cta | Weiterlesen |

## Entity: Asset (neue Instanzen)

| path | alt | Quelle (Figma) | Grösse |
|------|-----|----------------|--------|
| `assets/images/cs-weinkonsum.jpg` | Persona Marco Weinanfänger aus der Weinkonsum-Studie | `888:1108` (linke Hälfte) | ~1200 px breit |
| `assets/images/weinkonsum-1-verhaltensmuster.jpg` | Matrix der vier Verhaltensmuster beim Weinkauf | `872:1094` | 1000 × 1000 |
| `assets/images/weinkonsum-2-persona-1.jpg` | Persona Marco Weinanfänger: Persönliches, Aufgaben und Bewertung von Rebsorte und Herkunft | `888:1108` (linke Hälfte) | 2048 × 1156 |
| `assets/images/weinkonsum-3-persona-2.jpg` | Persona Marco Weinanfänger: Kontext, Probleme, Ziele, User Needs und Merkmals-Diagramm | `888:1110` (rechte Hälfte) | 2048 × 1156 |

## Entity: Navigation (Änderung)

Das mobile Flyout-Menü führt bislang drei Case Studies. Es wird auf allen fünf bestehenden Seiten sowie der neuen Seite um einen vierten Eintrag ergänzt.

| Eintrag | Ziel (relativ von `site/`) |
|---------|----------------------------|
| Case Study: Einkaufsliste | `case-studies/einkaufsliste.html` |
| Case Study: App Übersicht | `case-studies/uebersichtlichkeit.html` |
| Case Study: 3D-Scan App | `case-studies/wunddokumentation.html` |
| **Case Study: Weinkonsum** (neu) | `case-studies/weinkonsum.html` |
| CV | `cv.html` |

Die Desktop-Navigation (`Case studies`, `CV`, CTA) bleibt unverändert.
