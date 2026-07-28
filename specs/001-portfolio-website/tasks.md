# Tasks: Portfolio Website

**Input**: Design documents from `/specs/001-portfolio-website/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/pages.md

**Tests**: Not requested — manual visual review against Figma only.

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project scaffolding and asset pipeline

- [ ] T001 Create directory structure: site/, site/css/, site/js/, site/assets/images/, site/assets/icons/, site/case-studies/
- [ ] T002 [P] Create site/.nojekyll empty file for GitHub Pages
- [ ] T003 [P] Download hero avatar from Figma (node 21:123) to site/assets/images/hero.jpg
- [ ] T004 [P] Download case study images from Figma to site/assets/images/
- [ ] T005 [P] Download skill icons from Figma to site/assets/icons/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared CSS, JS, and navigation used by all pages

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Create site/css/base.css with CSS reset, design tokens (--bg, --text, --accent, --container), Inter font import
- [ ] T007 Create site/css/layout.css with .container, section spacing, flex/grid layouts
- [ ] T008 Create site/css/components.css with nav, footer, btn, project card, skills bar styles
- [ ] T009 Create site/css/responsive.css with 768px breakpoint, hamburger menu styles
- [ ] T010 Create site/js/nav.js with hamburger toggle (aria-expanded, menu show/hide)
- [ ] T011 Create shared navigation HTML snippet pattern in site/css/components.css (nav + footer markup documented in contracts/pages.md)

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 — HR besucht die Startseite (Priority: P1) 🎯 MVP

**Goal**: Fully functional home page with hero, case study teasers, skills, and footer

**Independent Test**: Open site/index.html — hero, 3 case study cards, skills, footer contact links all visible and functional

### Implementation for User Story 1

- [ ] T012 [US1] Implement site/index.html with semantic structure per contracts/pages.md
- [ ] T013 [US1] Add hero section: avatar, h1, intro paragraphs (content from Figma node 21:123)
- [ ] T014 [P] [US1] Add case study teaser 1 (Einkaufsliste) with image, text, metrics, link to case-studies/einkaufsliste.html
- [ ] T015 [P] [US1] Add case study teaser 2 (Übersichtlichkeit) with image, text, metrics, link to case-studies/uebersichtlichkeit.html
- [ ] T016 [P] [US1] Add case study teaser 3 (3D-Scan Wunddokumentation) with image, text, link to case-studies/wunddokumentation.html
- [ ] T017 [US1] Add skills section with alternating labels and icons
- [ ] T018 [US1] Add footer with name, email (mailto), phone (tel)
- [ ] T019 [US1] Link all CSS files in index.html and verify desktop layout matches Figma 21:123
- [ ] T020 [US1] Verify mobile layout matches Figma 926:352 at 375px viewport

**Checkpoint**: Home page complete and independently testable

---

## Phase 4: User Story 2 — Besucher liest Case Studies (Priority: P2)

**Goal**: Three complete case study detail pages

**Independent Test**: Each case study URL loads with full content, images, and back-navigation to home

### Implementation for User Story 2

- [ ] T021 [P] [US2] Implement site/case-studies/einkaufsliste.html from Figma nodes 564:471 (desktop) / 930:375 (mobile)
- [ ] T022 [P] [US2] Implement site/case-studies/uebersichtlichkeit.html from Figma nodes 446:336 / 1304:826
- [ ] T023 [P] [US2] Implement site/case-studies/wunddokumentation.html from Figma nodes 1294:526 / 1299:672
- [ ] T023b [US2] Implement responsive card layout for comparison table on uebersichtlichkeit.html (mobile)
- [ ] T024 [US2] Create site/js/carousel.js for mobile image carousel on case study pages
- [ ] T025 [US2] Add back-to-home navigation link on all case study pages
- [ ] T026 [US2] Verify all three case study pages on desktop and mobile viewports

**Checkpoint**: All case studies independently accessible

---

## Phase 5: User Story 3 — Besucher sieht den Lebenslauf (Priority: P3)

**Goal**: CV page with structured resume content

**Independent Test**: site/cv.html loads with education, experience, and skills sections matching Figma

### Implementation for User Story 3

- [ ] T027 [US3] Implement site/cv.html from Figma nodes 1316:1401 (desktop) / 1347:813 (mobile)
- [ ] T028 [US3] Add CV content sections (Ausbildung, Erfahrung, Skills) from Figma
- [ ] T029 [US3] Verify CV page on desktop and mobile viewports

**Checkpoint**: CV page complete

---

## Phase 6: User Story 4 — Mobile Besucher nutzt die Seite (Priority: P2)

**Goal**: Full mobile experience with hamburger navigation across all pages

**Independent Test**: All pages usable at 375px; hamburger opens flyout menu per Figma 1000:312

### Implementation for User Story 4

- [ ] T030 [US4] Integrate nav.js hamburger toggle into all 5 HTML pages
- [ ] T031 [US4] Style mobile flyout menu per Figma node 1000:312 in site/css/responsive.css
- [ ] T032 [US4] Add mobile nav links: Case Studies, CV
- [ ] T033 [US4] Integrate carousel.js on mobile case study pages (Einkaufsliste minimum)
- [ ] T034 [US4] Test all 5 pages at 320px, 375px, and 768px breakpoints

**Checkpoint**: Full responsive experience verified

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Deployment, accessibility, and final quality

- [ ] T035 [P] Add meaningful alt text to all images across all pages
- [ ] T036 [P] Verify all internal links work correctly (home ↔ case studies ↔ CV)
- [ ] T037 Configure GitHub Pages deployment (main branch, /site folder) per quickstart.md
- [ ] T038 Run Lighthouse accessibility audit on site/index.html (target ≥ 90)
- [ ] T039 Final visual review: compare all 5 pages against Figma screenshots (desktop + mobile)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — BLOCKS all user stories
- **User Stories (Phase 3–6)**: All depend on Phase 2 completion
  - US1 (Phase 3) first — MVP
  - US2 (Phase 4) and US4 (Phase 6) can partially parallel after US1
  - US3 (Phase 5) independent after Phase 2
- **Polish (Phase 7)**: Depends on all user stories

### User Story Dependencies

- **US1 (P1)**: After Phase 2 — no other story dependencies
- **US2 (P2)**: After Phase 2 — teaser links on home (US1) should point here, but pages are independently testable
- **US3 (P3)**: After Phase 2 — fully independent
- **US4 (P2)**: After Phase 2 — enhances all pages; best done after US1–US3 content exists

### Parallel Opportunities

- T003, T004, T005 (asset downloads) in parallel
- T014, T015, T016 (case study teasers) in parallel
- T021, T022, T023 (case study pages) in parallel
- T035, T036 (polish) in parallel

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Home page)
4. **STOP and VALIDATE**: Home page matches Figma, links ready for case studies
5. Deploy to GitHub Pages — already shareable with HR

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. US1 Home → Deploy (MVP — shareable link!)
3. US2 Case Studies → Deploy (full portfolio content)
4. US3 CV → Deploy (complete application package)
5. US4 Mobile polish → Deploy (mobile-ready)
6. Polish → Final QA and Lighthouse

---

## Notes

- All Figma content fetched via get_design_context with fileKey ZeVA3ayucgzhcCW3wYnkYD
- Assets MUST be downloaded and committed — no expiring Figma CDN URLs in final code
- German language throughout (lang="de")
- Commit after each phase completion
