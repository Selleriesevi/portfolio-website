# Implementation Plan: Zweisprachiges Portfolio (DE + EN)

**Branch**: `003-bilingual-english` | **Date**: 2026-09-29 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-bilingual-english/spec.md`

## Summary

Die bestehende statische Portfolio-Website wird zweisprachig: Deutsch bleibt Default an den heutigen URLs; Englisch erscheint als gespiegelte Language version unter `site/en/` mit denselben Dateinamen. Auf allen 12 Seiten kommt ein kompakter Sprachwechsel „DE | EN“ in Header und Mobile-Nav. Geteilte CSS/JS/Assets bleiben zentral; EN-Seiten nutzen relative Pfade eine Ebene höher. Constitution-Sprache wird von „nur DE“ auf „DE + EN“ angepasst. EN-Texte: Agent-Entwurf, Owner-Review vor gemeinsamem Go-live; EN-UI-Screenshots optional nachlieferbar (DE-Screenshots vorübergehend erlaubt).

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES2020 (vanilla, no framework) — unverändert

**Primary Dependencies**: Google Fonts (Inter) via CDN; keine neuen Abhängigkeiten

**Storage**: Static files only — no database

**Testing**: Manuelle Prüfung: Sprachwechsel-Mapping aller 6 Page pairs; EN-Inhalt vs. DE-Pendant; Overflow bei 320/390/768/1440 px; Regression deutscher URLs ohne Redirect

**Target Platform**: GitHub Pages (Artifact-Pfad `site`); Chrome, Firefox, Safari, Edge (aktuell)

**Project Type**: Static multi-page website (bilingual mirror)

**Performance Goals**: First contentful paint < 1.5 s; vollständiges Laden < 3 s bei Breitband; Sprachwechsel = normaler Navigations-Load < 2 s (SC-002)

**Constraints**: Kein Build-Toolchain; kein i18n-Framework; kein Cookie/localStorage für Sprachwahl; kein Browser-Auto-Redirect; bestehende DE-URLs unverändert; gemeinsame öffentliche Freigabe aller 6 EN-Seiten

**Scale/Scope**: 6 neue EN-HTML-Seiten; 6 DE-HTML-Seiten um Switcher + `hreflang`/`lang` ergänzt; CSS für Switcher (+ ggf. responsive Feintuning); Constitution-Update; optionale EN-Bildpfade später; keine neuen JS-Module erforderlich (Switcher = Links)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Design Fidelity | ✅ PASS | Layout/Typografie/Farben bleiben am bestehenden System. Sprachwechsel „DE \| EN“ ist spezifiziert (Clarify Session) und nicht im Figma-File — bewusst neue UI, Owner-approved. |
| II. Static-First Simplicity | ✅ PASS | Statische HTML-Spiegel unter `en/`; geteiltes CSS/JS/Assets; Switcher als Links, kein Übersetzungs-Runtime-JS. |
| III. Mobile-Responsive | ✅ PASS | Switcher in Header und Flyout; Overflow-Prüfung 320–1440 px (SC-005). |
| IV. Shareable & Deployable | ✅ PASS | Alles unter `site/`; bestehender Pages-Workflow unverändert; DE-Share-URLs bleiben gültig (FR-012). |
| V. Content Accuracy | ✅ PASS | EN = inhaltliches Pendant der DE-Seiten; Owner-Review vor Go-live; Eigennamen unverändert. |
| Technology — Language | ⚠️ → ✅ | Constitution sagt heute „nur Deutsch“. **Dieses Feature ändert die Constitution** auf DE + EN (Default DE). Gate gilt als PASS mit dieser geplanten Amendment. |

**Post-design re-check**: Alle Gates erfüllt. Keine Complexity-Tracking-Einträge (keine Frameworks, kein Build).

## Project Structure

### Documentation (this feature)

```text
specs/003-bilingual-english/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── pages.md
├── checklists/
│   └── requirements.md
└── tasks.md             # Phase 2 (/speckit-tasks) — nicht hier
```

### Source Code (repository root)

```text
site/
├── index.html                 # ÄNDERUNG: Switcher DE|EN, hreflang, aria
├── cv.html                    # ÄNDERUNG: Switcher + hreflang
├── robots.txt                 # ÄNDERUNG: Disallow auch für EN-Wunddokumentation (R-009)
├── case-studies/
│   ├── einkaufsliste.html     # ÄNDERUNG: Switcher + hreflang
│   ├── uebersichtlichkeit.html
│   ├── wunddokumentation.html
│   └── weinkonsum.html
├── en/                        # NEU: englische Language version
│   ├── index.html
│   ├── cv.html
│   └── case-studies/
│       ├── einkaufsliste.html
│       ├── uebersichtlichkeit.html
│       ├── wunddokumentation.html
│       └── weinkonsum.html
├── css/
│   ├── components.css         # ÄNDERUNG: .nav__lang / aktive Sprache
│   └── responsive.css         # ÄNDERUNG: Switcher im Mobile-Layout
├── js/
│   └── nav.js                 # unverändert (Flyout); Switcher braucht kein JS
└── assets/
    └── images/
        └── …                  # geteilt; EN-UI-Varianten später z. B. *-en.jpg (R-004)

.specify/memory/
└── constitution.md            # ÄNDERUNG: Language DE + EN (Default DE)
```

**Structure Decision**: DE bleibt Root unter `site/` (URLs unverändert). EN ist ein Verzeichnis-Spiegel `site/en/` mit identischen Dateinamen. CSS, JS und sprachneutrale Assets bleiben einmalig unter `site/css|js|assets`; EN-HTML verlinkt mit `../` bzw. `../../`. Kein Build, kein JSON-i18n.

## Complexity Tracking

> Keine Constitution-Verstösse — Abschnitt entfällt.
