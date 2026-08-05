# Implementation Plan: Case Study „Generative Forschung Weinkonsum"

**Branch**: `002-weinkonsum-case-study` | **Date**: 2026-08-05 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-weinkonsum-case-study/spec.md`

## Summary

Die bestehende statische Portfolio-Website wird um eine vierte Case Study erweitert: „Generative Forschung Weinkonsum". Umgesetzt werden eine neue Detailseite `site/case-studies/weinkonsum.html` nach den Figma-Frames `857:721` (Desktop) und `1557:897` (Mobile), ein vierter Projekt-Teaser auf der Startseite nach `21:123` sowie ein zusätzlicher Eintrag im mobilen Flyout-Menü aller Seiten. Technisch werden ausschliesslich bestehende Bausteine wiederverwendet; ergänzt werden eine Hero-Farbvariante im CSS und vier lokale Bild-Assets.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES2020 (vanilla, no framework) — unverändert gegenüber Feature 001

**Primary Dependencies**: Google Fonts (Inter) via CDN link tag; keine neuen Abhängigkeiten

**Storage**: Static files only — no database

**Testing**: Manuelle visuelle Prüfung gegen die Figma-Screens `857:721`, `1557:897`, `21:123`; Link- und Overflow-Prüfung bei 320/390/768/1440 px

**Target Platform**: GitHub Pages (statisches Hosting); Chrome, Firefox, Safari, Edge (aktuell)

**Project Type**: Static multi-page website

**Performance Goals**: First contentful paint < 1.5 s; vollständiges Laden < 3 s bei Breitband

**Constraints**: Kein Build-Toolchain; alle Assets im Repository; Deutsch; Figma-Designtreue; bestehende URLs unverändert

**Scale/Scope**: 1 neue HTML-Seite, 5 bestehende HTML-Seiten angepasst (Flyout-Navigation), 1 CSS-Variante, 4 neue Bild-Assets

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Design Fidelity | ✅ PASS | Alle Abschnitte auf Figma-Knoten gemappt (siehe `contracts/pages.md`). Eine bewusste Abweichung: Bildblöcke zentriert statt linksbündig (R-007) — dokumentiert und dem Nutzer gemeldet. |
| II. Static-First Simplicity | ✅ PASS | Keine neuen Abhängigkeiten, keine neuen Komponenten, kein zusätzliches JavaScript (R-010) |
| III. Mobile-Responsive | ✅ PASS | Mobile-Frame `1557:897` vorhanden; bestehende Breakpoint-Regeln greifen, Hero-Variante erhält Mobile-Höhe |
| IV. Shareable & Deployable | ✅ PASS | Alle Bilder werden lokal abgelegt (R-002, R-003); Deployment über bestehende GitHub-Actions-Workflow |
| V. Content Accuracy | ✅ PASS | Texte 1:1 aus Figma; Teaser-Text und Kennzahlen aus dem Case-Study-Inhalt abgeleitet und in R-006 begründet |

**Post-design re-check**: Alle Gates weiterhin erfüllt. Keine Verstösse, die Complexity Tracking erfordern.

## Project Structure

### Documentation (this feature)

```text
specs/002-weinkonsum-case-study/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── pages.md
├── checklists/
│   └── requirements.md  # Spec quality checklist
└── tasks.md             # Phase 2 output (/speckit-tasks)
```

### Source Code (repository root)

```text
site/
├── index.html                          # ÄNDERUNG: 4. Projekt-Card + Flyout-Eintrag
├── cv.html                             # ÄNDERUNG: Flyout-Eintrag
├── robots.txt                          # unverändert (sperrt nur die Wunddokumentation)
├── case-studies/
│   ├── einkaufsliste.html              # ÄNDERUNG: Flyout-Eintrag
│   ├── uebersichtlichkeit.html         # ÄNDERUNG: Flyout-Eintrag
│   ├── wunddokumentation.html          # ÄNDERUNG: Flyout-Eintrag
│   └── weinkonsum.html                 # NEU: Case Study Generative Forschung Weinkonsum
├── css/
│   ├── base.css                        # unverändert
│   ├── layout.css                      # unverändert
│   ├── components.css                  # unverändert
│   ├── case-study.css                  # ÄNDERUNG: .case-hero--weinkonsum
│   └── responsive.css                  # ÄNDERUNG: Mobile-Höhe der neuen Hero-Variante
├── js/
│   ├── nav.js                          # unverändert (wird eingebunden)
│   └── carousel.js                     # unverändert (wird NICHT eingebunden)
└── assets/
    └── images/
        ├── cs-weinkonsum.jpg                    # NEU: Teaser-Vorschaubild
        ├── weinkonsum-1-verhaltensmuster.jpg    # NEU: 2×2-Matrix
        ├── weinkonsum-2-persona-1.jpg           # NEU: Persona-Seite 1
        └── weinkonsum-3-persona-2.jpg           # NEU: Persona-Seite 2
```

**Structure Decision**: Die bestehende Struktur aus Feature `001-portfolio-website` wird unverändert weitergeführt — Seiten unter `site/`, Case Studies unter `site/case-studies/`, geteilte Stylesheets unter `site/css/`, Bilder unter `site/assets/images/`. Die neue Seite ist eine weitere Datei im bestehenden Case-Study-Verzeichnis und benötigt keine neuen Verzeichnisse. Die Bildbenennung folgt dem etablierten Muster `<case>-<nr>-<inhalt>.jpg` bzw. `cs-<case>.jpg` für Teaser.

## Complexity Tracking

> Keine Constitution-Verstösse — Abschnitt entfällt.
