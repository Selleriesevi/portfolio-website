---
description: "Task list for Zweisprachiges Portfolio (DE + EN)"
---

# Tasks: Zweisprachiges Portfolio (DE + EN)

**Input**: Design documents from `/specs/003-bilingual-english/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/pages.md, quickstart.md

**Tests**: Keine automatisierten Tests — Spezifikation verlangt manuelle Prüfung (quickstart.md). Keine Test-Tasks.

**Organization**: Tasks nach User Story gruppiert. **Öffentlicher Go-live erst nach Abschluss aller Stories** (FR-015); lokal darf US1 früher validiert werden.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Kann parallel laufen (andere Datei, keine Abhängigkeit)
- **[Story]**: Zugehörige User Story (US1–US4)

## Path Conventions

Statische Website: DE unter `site/`, EN-Spiegel unter `site/en/`, Styles unter `site/css/`, JS unter `site/js/`, Assets unter `site/assets/`.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verzeichnisstruktur und Governance für DE+EN vorbereiten

- [x] T001 Verzeichnisse `site/en/` und `site/en/case-studies/` anlegen (plan.md Structure)
- [x] T002 In `.specify/memory/constitution.md` Language-Constraint auf Deutsch (Default an Root) + Englisch (`en/`-Spiegel) ändern und Sync Impact Report aktualisieren (R-007)
- [x] T003 In `site/robots.txt` Disallow-Einträge für EN-Wunddokumentation ergänzen (`/en/case-studies/wunddokumentation.html` und Project-Pages-Präfix analog zu DE) (R-009)

**Checkpoint**: `en/`-Baum und Constitution sind bereit

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: CSS für den Sprachwechsel — wird von allen Stories benötigt

**⚠️ CRITICAL**: Ohne diese Phase fehlt das gemeinsame Switcher-Styling

- [x] T004 In `site/css/components.css` Styles für den Sprachwechsel ergänzen (z. B. `.nav__lang`, `.nav__lang-link`, `.nav__lang-link--active`) — kompakt „DE | EN“, aktive Sprache hervorgehoben (R-002, FR-006)
- [x] T005 In `site/css/responsive.css` Switcher im Mobile-/Flyout-Kontext absichern (kein Overflow bei 320 px; Sichtbarkeit im offenen Flyout) (SC-005)

**Checkpoint**: Switcher-CSS steht — EN-Home und DE-Nav können gebaut werden

---

## Phase 3: User Story 1 - Englische Startseite lesen (Priority: P1) 🎯 MVP

**Goal**: Vollständig englische Startseite unter `/en/index.html`

**Independent Test**: `http://localhost:8000/en/` öffnen — Hero, Teaser, Skills, Kontakt, Nav und Footer auf Englisch; Teaser-Links zeigen auf `/en/case-studies/…` (Seiten dürfen bis US3 noch fehlen)

### Implementation for User Story 1

- [x] T006 [US1] `site/en/index.html` anlegen: Gerüst mit `lang="en"`, Titel, Inter-Font, Stylesheets/JS über `../css/…` und `../js/nav.js` (R-003)
- [x] T007 [US1] In `site/en/index.html` Navigation, Flyout, Hero, vier Case-Study-Teaser, Skills und Footer als inhaltliches Pendant zu `site/index.html` auf Englisch übersetzen (Agent-Entwurf; Eigennamen behalten) (FR-003, R-006)
- [x] T008 [US1] In `site/en/index.html` interne Links auf EN-Ziele setzen (`index.html`, `cv.html`, `case-studies/*.html`) (FR-008)
- [x] T009 [US1] In `site/en/index.html` Sprachwechsel DE|EN in Header und Flyout einbauen: EN aktiv, DE → `../index.html`; `aria-label="Language"` (FR-004–006, contracts/pages.md)
- [x] T010 [US1] In `site/en/index.html` `hreflang`-Alternates (`de`, `en`, `x-default` → DE-Home) im `<head>` setzen (R-005)
- [x] T011 [US1] Bild-`src`/`alt` in `site/en/index.html`: sprachneutrale Assets via `../assets/…`; UI-Screenshots vorübergehend DE-Dateien mit englischen `alt`-Texten (FR-009, FR-013)

**Checkpoint**: EN-Home ist lokal lesbar und eigenständig prüfbar

---

## Phase 4: User Story 2 - Sprache wechseln (Priority: P2)

**Goal**: DE|EN-Switcher auf allen deutschen Seiten; Home-Paar vollständig umschaltbar

**Independent Test**: Von DE-Home auf EN-Home und zurück; aktive Sprache erkennbar; Mapping laut `contracts/pages.md` für Home (übrige EN-Ziele werden in US3 befüllt)

### Implementation for User Story 2

- [x] T012 [P] [US2] In `site/index.html` Sprachwechsel DE|EN (Header + Flyout) ergänzen: DE aktiv, EN → `en/index.html`; `aria-label="Sprache"`; `hreflang`-Alternates (FR-004–007)
- [x] T013 [P] [US2] In `site/cv.html` Sprachwechsel + `hreflang` ergänzen (EN → `en/cv.html`)
- [x] T014 [P] [US2] In `site/case-studies/einkaufsliste.html` Sprachwechsel + `hreflang` ergänzen (EN → `../en/case-studies/einkaufsliste.html`)
- [x] T015 [P] [US2] In `site/case-studies/uebersichtlichkeit.html` Sprachwechsel + `hreflang` ergänzen (EN → `../en/case-studies/uebersichtlichkeit.html`)
- [x] T016 [P] [US2] In `site/case-studies/wunddokumentation.html` Sprachwechsel + `hreflang` ergänzen (EN → `../en/case-studies/wunddokumentation.html`)
- [x] T017 [P] [US2] In `site/case-studies/weinkonsum.html` Sprachwechsel + `hreflang` ergänzen (EN → `../en/case-studies/weinkonsum.html`)

**Checkpoint**: Alle DE-Seiten haben Switcher; Home DE↔EN funktioniert

---

## Phase 5: User Story 3 - Englische Case Studies und CV (Priority: P3)

**Goal**: EN-CV und vier EN-Case-Studies als vollständige Pendants

**Independent Test**: Jede EN-Case-Study-URL und `/en/cv.html` sind auf Englisch lesbar; Flyout/Nav auf EN; Switcher zurück zum DE-Pendant

### Implementation for User Story 3

- [x] T018 [P] [US3] `site/en/cv.html` anlegen: Übersetzung von `site/cv.html`, `lang="en"`, Pfade `../css|js|assets`, interne EN-Links, Switcher (DE → `../cv.html`), `hreflang` (FR-002–008)
- [x] T019 [P] [US3] `site/en/case-studies/einkaufsliste.html` anlegen: Übersetzung von `site/case-studies/einkaufsliste.html`, Pfade `../../…`, EN-interne Links, Switcher (DE → `../../case-studies/einkaufsliste.html`), `hreflang`, DE-Screenshots vorübergehend ok (FR-009)
- [x] T020 [P] [US3] `site/en/case-studies/uebersichtlichkeit.html` analog T019 aus `site/case-studies/uebersichtlichkeit.html` erstellen
- [x] T021 [P] [US3] `site/en/case-studies/wunddokumentation.html` analog T019 aus `site/case-studies/wunddokumentation.html` erstellen
- [x] T022 [P] [US3] `site/en/case-studies/weinkonsum.html` analog T019 aus `site/case-studies/weinkonsum.html` erstellen
- [x] T023 [US3] In `site/en/index.html` Teaser-/Flyout-Ziele gegen die nun existierenden EN-Case-Studies und `en/cv.html` verifizieren und korrigieren falls nötig
- [x] T024 [US3] Alle EN-Seiten: englische `alt`-Texte, aria-Labels (Nav/Flyout/Toggle) und Footer-Konsistenz prüfen (FR-013)

**Checkpoint**: Alle sechs EN-Inhaltsseiten existieren und sind untereinander verlinkt

---

## Phase 6: User Story 4 - Bestehende deutsche URLs unverändert (Priority: P4)

**Goal**: DE-Regression und Index-Politik; kein Auto-Redirect

**Independent Test**: Alle bisherigen DE-URLs liefern Deutsch ohne Zwangswechsel; Root = DE; Switcher erzwingt keinen Browser-Lang-Redirect

### Implementation for User Story 4

- [x] T025 [US4] Manuell alle sechs DE-URLs prüfen: Inhalt weiterhin Deutsch, `lang="de"`, keine Meta-Refresh-/JS-Redirects auf EN (FR-001, FR-011–012, SC-003)
- [x] T026 [US4] `site/robots.txt` final gegen DE- und EN-Wunddokumentations-Pfade abgleichen (R-009, T003)
- [x] T027 [US4] Page-pair-Map aus `contracts/pages.md` für alle 12 Seiten stichprobenartig verifizieren (Switcher + `hreflang`)

**Checkpoint**: DE-Default und Share-URLs sind regressionsfrei

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Abnahme, Responsive, Owner-Review vor gemeinsamem Go-live

- [x] T028 [P] Overflow- und Switcher-Bedienung bei 320/390/768/1440 px auf DE- und EN-Home sowie einer Case Study prüfen (SC-005); CSS in `site/css/responsive.css` / `components.css` nachziehen falls nötig
- [x] T029 Owner-Review der sechs EN-Seiten laut `specs/003-bilingual-english/quickstart.md` (FR-014, SC-004) — Feedback einarbeiten in den jeweiligen `site/en/**/*.html`
- [x] T030 Checkliste in `specs/003-bilingual-english/quickstart.md` vollständig durchgehen und abhaken (SC-001–SC-006)
- [x] T031 Sicherstellen, dass öffentlicher Deploy erst nach T029/T030 erfolgt (FR-015) — kein teilweiser EN-Go-live

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Keine Abhängigkeiten
- **Foundational (Phase 2)**: Nach Setup — blockiert US1–US4
- **US1 (Phase 3)**: Nach Foundational — MVP lokal
- **US2 (Phase 4)**: Nach Foundational; Home-Test braucht US1 (`en/index.html`)
- **US3 (Phase 5)**: Nach Foundational; vollständiger Switcher-Test für Case Studies braucht US2-Markup-Muster
- **US4 (Phase 6)**: Nach US1–US3 (sinnvolle Regression erst mit vollem EN-Tree)
- **Polish (Phase 7)**: Nach US4; **öffentlicher Go-live erst hier** (FR-015)

### User Story Dependencies

- **US1 (P1)**: Nach Phase 2 — unabhängig testbar
- **US2 (P2)**: Nach Phase 2; Home-Roundtrip braucht US1; Case-Study-EN-Ziele vollständig erst nach US3
- **US3 (P3)**: Nach Phase 2; kann parallel zu US2 starten, sobald Switcher-CSS (T004/T005) und Markup-Muster klar sind
- **US4 (P4)**: Nach US1–US3

### Parallel Opportunities

- T012–T017 (DE-Switcher) parallel möglich
- T018–T022 (EN-Seiten) parallel möglich nach Foundational
- T028 parallel zu inhaltlichem Review-Vorbereitung

---

## Parallel Example: User Story 2

```bash
# DE-Seiten parallel um Switcher ergänzen:
Task: "site/index.html Sprachwechsel + hreflang"
Task: "site/cv.html Sprachwechsel + hreflang"
Task: "site/case-studies/einkaufsliste.html Sprachwechsel + hreflang"
Task: "site/case-studies/uebersichtlichkeit.html Sprachwechsel + hreflang"
Task: "site/case-studies/wunddokumentation.html Sprachwechsel + hreflang"
Task: "site/case-studies/weinkonsum.html Sprachwechsel + hreflang"
```

## Parallel Example: User Story 3

```bash
# EN-Seiten parallel anlegen:
Task: "site/en/cv.html"
Task: "site/en/case-studies/einkaufsliste.html"
Task: "site/en/case-studies/uebersichtlichkeit.html"
Task: "site/en/case-studies/wunddokumentation.html"
Task: "site/en/case-studies/weinkonsum.html"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only — lokal)

1. Phase 1 Setup + Phase 2 Foundational
2. Phase 3 US1 (`site/en/index.html`)
3. **STOP und lokal validieren** — noch **kein** öffentlicher EN-Go-live (FR-015)

### Incremental Delivery (Entwicklung)

1. Setup + Foundational
2. US1 → lokal prüfen
3. US2 → DE-Switcher + Home-Roundtrip
4. US3 → restliche EN-Seiten
5. US4 → DE-Regression
6. Polish + Owner-Review → **erst dann** gemeinsamer öffentlicher Go-live

### Notes for implementers

- EN-Texte: Agent-Entwurf, Owner-Freigabe vor Deploy (FR-014)
- EN-UI-Screenshots: DE-Dateien vorübergehend erlaubt (FR-009)
- Kein Cookie, kein Browser-Auto-Redirect (FR-011)
- `nav.js` unverändert lassen (R-002)

---

## Notes

- [P] = unterschiedliche Dateien, keine Blocker untereinander
- Story-Labels mappen auf Spec US1–US4
- Format validiert: Checkbox + Task-ID + optionales [P] + Story-Label (nur US-Phasen) + Dateipfad
- Commit nach logischen Task-Gruppen empfohlen
- Nächster Schritt: `/speckit-implement` (oder optional `/speckit-analyze`)
