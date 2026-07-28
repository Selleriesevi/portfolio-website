# Implementation Plan: Portfolio Website

**Branch**: `001-portfolio-website` | **Date**: 2026-07-22 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-portfolio-website/spec.md`

## Summary

Build a static portfolio website for Severin Grob from the Figma design file `Personal-Portfolio`. The site includes a home page, three case study detail pages, a CV page, responsive mobile layouts with hamburger navigation, and deployment to GitHub Pages. Implementation uses plain HTML/CSS/vanilla JS with assets committed locally.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES2020 (vanilla, no framework)

**Primary Dependencies**: Google Fonts (Inter) — loaded via CDN link tag

**Storage**: Static files only — no database

**Testing**: Manual visual review against Figma screenshots; optional Lighthouse audit

**Target Platform**: GitHub Pages (static hosting), browsers: Chrome, Firefox, Safari, Edge (latest)

**Project Type**: Static multi-page website

**Performance Goals**: First contentful paint < 1.5s; full page load < 3s on broadband

**Constraints**: No build toolchain; all assets in repo; German language; Figma design fidelity

**Scale/Scope**: 5 HTML pages, 11 Figma screens, ~20 image assets, single developer

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Design Fidelity | ✅ PASS | All pages mapped to Figma node IDs |
| II. Static-First Simplicity | ✅ PASS | HTML/CSS/JS only, no bundler |
| III. Mobile-Responsive | ✅ PASS | Mobile screens defined for every page |
| IV. Shareable & Deployable | ✅ PASS | GitHub Pages deployment planned |
| V. Content Accuracy | ✅ PASS | Content sourced from Figma |

**Post-design re-check**: All gates pass. No violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── pages.md
├── tasks.md             # Phase 2 output
└── spec.md
```

### Source Code (repository root)

```text
site/
├── index.html                          # Home page
├── cv.html                             # CV / Lebenslauf
├── case-studies/
│   ├── einkaufsliste.html              # Denner Einkaufsliste
│   ├── uebersichtlichkeit.html         # Denner Übersichtlichkeit
│   └── wunddokumentation.html          # 3D-Scan für Wunddokumentationen
├── css/
│   ├── base.css                        # Reset, variables, typography
│   ├── layout.css                      # Container, grid, sections
│   ├── components.css                  # Nav, buttons, cards, carousel
│   └── responsive.css                  # Mobile breakpoints, hamburger
├── js/
│   ├── nav.js                          # Hamburger menu toggle
│   └── carousel.js                     # Image carousel for mobile case studies
└── assets/
    ├── images/                         # Project screenshots, hero photo
    └── icons/                          # Skill icons, UI icons
```

**Structure Decision**: Single `site/` directory serves as the GitHub Pages root. Multi-page static site with shared CSS/JS. Case studies in subdirectory for clean URLs.

## Phase 0: Research Summary

See [research.md](./research.md) for full decisions.

## Phase 1: Design Summary

See [data-model.md](./data-model.md) for content entities and [contracts/pages.md](./contracts/pages.md) for page contracts.

## Complexity Tracking

No constitution violations. No complexity justification needed.
