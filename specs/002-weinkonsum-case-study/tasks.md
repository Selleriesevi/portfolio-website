---
description: "Task list for Case Study Generative Forschung Weinkonsum"
---

# Tasks: Case Study „Generative Forschung Weinkonsum"

**Input**: Design documents from `/specs/002-weinkonsum-case-study/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/pages.md

**Tests**: Keine automatisierten Tests — die Spezifikation verlangt manuelle visuelle Prüfung gegen Figma (siehe quickstart.md). Es werden daher keine Test-Tasks generiert.

**Organization**: Tasks sind nach User Story gruppiert, damit jede Story eigenständig umsetzbar und prüfbar ist.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Kann parallel laufen (andere Datei, keine Abhängigkeit)
- **[Story]**: Zugehörige User Story (US1, US2, US3)

## Path Conventions

Statische Website: Seiten unter `site/`, Case Studies unter `site/case-studies/`, Stylesheets unter `site/css/`, Bilder unter `site/assets/images/`.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Bildmaterial aus Figma beschaffen und ablegen — Grundlage für Detailseite und Teaser

- [x] T001 [P] Figma-Knoten `872:1094` exportieren, auf 1000 × 1000 reduzieren und als `site/assets/images/weinkonsum-1-verhaltensmuster.jpg` ablegen (R-002; 1000 px genügt für die 500-px-Darstellung aus R-007)
- [x] T002 Figma-Export von `888:1108`/`888:1110` (ein Breitbild 4096 × 1156) in zwei Hälften à 2048 × 1156 teilen und als `site/assets/images/weinkonsum-2-persona-1.jpg` sowie `site/assets/images/weinkonsum-3-persona-2.jpg` ablegen (R-003)
- [x] T003 Aus der linken Persona-Hälfte das Teaser-Vorschaubild `site/assets/images/cs-weinkonsum.jpg` erzeugen (~1200 px breit) (R-005, abhängig von T002)
- [x] T004 Dateigrössen der vier neuen Bilder prüfen und ggf. JPEG-Qualität senken, damit das Ladezeitziel unter 3 s eingehalten wird (SC-006)

**Checkpoint**: Alle Bild-Assets liegen lokal vor

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Hero-Farbvariante im CSS — wird von der neuen Detailseite benötigt

**⚠️ CRITICAL**: Ohne diese Phase erscheint der Hero der neuen Seite ohne Hintergrund

- [x] T005 In `site/css/case-study.css` die Variante `.case-hero--weinkonsum` ergänzen: `background-color: #8499ab`, `min-height: 440px`, Wellen-Pseudoelement und transparentes Titel-Panel — Deklarationen mit `.case-hero--wunddokumentation` über Selektorlisten teilen statt duplizieren (R-001)
- [x] T006 In `site/css/responsive.css` die Klasse `.case-hero--weinkonsum` in die bestehende Mobile-Regel mit `min-height: 430px` aufnehmen

**Checkpoint**: Hero-Variante steht bereit — Detailseite kann gebaut werden

---

## Phase 3: User Story 1 - Case Study lesen (Priority: P1) 🎯 MVP

**Goal**: Vollständig lesbare Detailseite unter `/case-studies/weinkonsum.html`

**Independent Test**: Seite direkt per URL öffnen; alle Abschnitte in der Reihenfolge aus `contracts/pages.md` sind vorhanden, Navigation und Footer funktionieren

### Implementation for User Story 1

- [x] T007 [US1] `site/case-studies/weinkonsum.html` anlegen: Grundgerüst mit `lang="de"`, Titel „Generative Forschung Weinkonsum — Severin Grob", Inter-Font-Einbindung und den fünf Stylesheets analog `uebersichtlichkeit.html`; **kein** `noindex` (FR-009), `js/nav.js` einbinden, `carousel.js` weglassen (R-010)
- [x] T008 [US1] Navigation (`header.nav`) und Flyout (`nav.nav__flyout`) mit vier Case-Study-Einträgen einsetzen; Desktop-Nav unverändert
- [x] T009 [US1] Hero-Abschnitt einsetzen: `section.case-hero.case-hero--panel.case-hero--weinkonsum` mit `h1.case-hero__title` „Generative Forschung Weinkonsum" (abhängig von T005)
- [x] T010 [US1] Executive Summary einsetzen: `h2` plus `div.text-block` mit den zwei Absätzen aus data-model.md Block 2
- [x] T011 [US1] „Meine Rolle" und „Meine Aufgaben" als zwei `div.text-block` mit `p.role-title` und Listen einsetzen (Blöcke 3 und 4)
- [x] T012 [US1] „Angewandte Methoden:" als `h2` plus `div.chips` mit den sieben Chips in Designreihenfolge einsetzen (Block 5)
- [x] T013 [US1] Abschnitt „Ausgangslage & Problemdefinition" einsetzen: `hr.divider`, `h3.subtitle` „DISCOVER", `h2`, `div.text-block` mit den zwei Forschungsfragen als `ol` (Block 6)
- [x] T014 [US1] Abschnitt „Research-Phase" einsetzen: `hr.divider`, `h3.subtitle.subtitle--alt` „Discover & Explore", `h2`, Text mit halbfetten Hervorhebungen „21 halbstrukturierte Video-Interviews" und „vier zentrale Verhaltensmuster" sowie die vier Verhaltensmuster als `ul` (Block 7)
- [x] T015 [US1] Bildblock Verhaltensmuster als `figure.image-block` mit `weinkonsum-1-verhaltensmuster.jpg` und Alternativtext aus contracts/pages.md einsetzen (abhängig von T001)
- [x] T016 [US1] Abschnitt „Ergebnisse / Personas" einsetzen: `hr.divider`, `h3.subtitle.subtitle--alt` „Ergebnisse", `h2` „Personas", Einleitungstext, die vier Personas als `ol` und den Abschlusssatz zu den Opportunity Areas (Block 8)
- [x] T017 [US1] Die zwei Persona-Bildblöcke als `figure.image-block` mit `weinkonsum-2-persona-1.jpg` und `weinkonsum-3-persona-2.jpg` samt Alternativtexten einsetzen, getrennt durch `hr.divider` wie im Design (abhängig von T002)
- [x] T018 [US1] Footer (`footer.footer`) mit Name, E-Mail und Telefonnummer analog den übrigen Seiten einsetzen

**Checkpoint**: Detailseite ist vollständig lesbar und eigenständig prüfbar

---

## Phase 4: User Story 2 - Case Study von der Startseite entdecken (Priority: P2)

**Goal**: Vierter Teaser auf der Startseite und Flyout-Eintrag auf allen Seiten

**Independent Test**: Startseite zeigt vier Teaser; „Weiterlesen" beim vierten führt zur Detailseite; mobiles Menü listet die neue Case Study auf jeder Seite

### Implementation for User Story 2

- [x] T019 [US2] In `site/index.html` nach der Wunddokumentations-Karte eine vierte `article.project` einsetzen: `project__image--cover` mit `cs-weinkonsum.jpg`, `h3`, Kurzbeschreibung, `ul.project__metrics` mit „21 Video-Interviews" und „4 validierte Personas" in `span.highlight`, `a.btn` „Weiterlesen" auf `case-studies/weinkonsum.html` (abhängig von T003, FR-004)
- [x] T020 [P] [US2] In `site/index.html` den Flyout-Eintrag „Case Study: Weinkonsum" → `case-studies/weinkonsum.html` nach dem 3D-Scan-Eintrag ergänzen
- [x] T021 [P] [US2] In `site/cv.html` denselben Flyout-Eintrag mit Ziel `case-studies/weinkonsum.html` ergänzen
- [x] T022 [P] [US2] In `site/case-studies/einkaufsliste.html` den Flyout-Eintrag mit Ziel `weinkonsum.html` ergänzen
- [x] T023 [P] [US2] In `site/case-studies/uebersichtlichkeit.html` den Flyout-Eintrag mit Ziel `weinkonsum.html` ergänzen
- [x] T024 [P] [US2] In `site/case-studies/wunddokumentation.html` den Flyout-Eintrag mit Ziel `weinkonsum.html` ergänzen

**Checkpoint**: Neue Case Study ist von jeder Seite aus erreichbar

---

## Phase 5: User Story 3 - Mobile Nutzung (Priority: P3)

**Goal**: Startseite und Detailseite sind auf Smartphones ohne horizontales Scrollen nutzbar

**Independent Test**: Bei 320 px und 390 px Viewport-Breite sind alle Abschnitte lesbar, Chips brechen um, kein Overflow

### Implementation for User Story 3

- [x] T025 [US3] Detailseite bei 390 px prüfen: Hero-Titel bricht auf drei Zeilen wie im Mobile-Frame `1557:897`; falls nötig weiche Trennstellen im Titel setzen
- [x] T026 [US3] Methoden-Chips bei 390 px prüfen: mehrzeiliger Umbruch analog Figma-Knoten `1618:1006`
- [x] T027 [US3] Bildblöcke bei 320 px und 390 px prüfen: Matrix und Persona-Bilder skalieren auf Bildschirmbreite ohne Overflow
- [x] T028 [US3] Startseite mit vier Teasern bei 390 px prüfen: Karten stapeln, Abstände und Rhythmus der bestehenden Übersicht bleiben erhalten (Edge Case aus spec.md)

**Checkpoint**: Alle drei User Stories sind eigenständig funktionsfähig

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Konsistenz, Dokumentation und Abnahme

- [x] T029 [P] Prüfen, dass `site/robots.txt` unverändert bleibt und die neue Seite nicht sperrt (R-008)
- [x] T030 [P] Prüfen, dass alle Bilder der neuen Seite lokale Pfade nutzen und nicht-leere Alternativtexte haben (FR-008, SC-004)
- [x] T031 Alle internen Links der Website durchklicken: keine 404, bestehende URLs unverändert (SC-005, FR-010)
- [x] T032 Abnahmeprüfung nach `quickstart.md` durchführen und Ergebnis festhalten
- [x] T033 Feature-Übersicht in `specs/001-portfolio-website/` unangetastet lassen; stattdessen in diesem Feature dokumentieren, dass die Website nun vier Case Studies umfasst

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: keine Abhängigkeiten — kann sofort starten
- **Foundational (Phase 2)**: unabhängig von Phase 1 startbar, blockiert aber T009
- **User Story 1 (Phase 3)**: benötigt T001, T002 (Bilder) und T005 (Hero-CSS)
- **User Story 2 (Phase 4)**: benötigt T003 (Teaser-Bild) und die fertige Seite aus US1 als Linkziel
- **User Story 3 (Phase 5)**: benötigt US1 und US2, da beide Seiten geprüft werden
- **Polish (Phase 6)**: nach allen User Stories

### Within Each User Story

- Abschnitte der Detailseite werden in Dokumentreihenfolge eingesetzt (T009 → T018), da sie dieselbe Datei betreffen und daher nicht parallelisierbar sind
- Flyout-Änderungen (T020–T024) betreffen verschiedene Dateien und laufen parallel

### Parallel Opportunities

- T001 und T002 parallel (verschiedene Bilder)
- T020 bis T024 parallel (fünf verschiedene Dateien)
- T029 und T030 parallel

---

## Parallel Example: User Story 2

```text
# Flyout-Einträge in fünf Dateien gleichzeitig ergänzen:
T020: site/index.html
T021: site/cv.html
T022: site/case-studies/einkaufsliste.html
T023: site/case-studies/uebersichtlichkeit.html
T024: site/case-studies/wunddokumentation.html
```

---

## Implementation Strategy

### MVP First (User Story 1)

1. Phase 1 (Bilder) und Phase 2 (Hero-CSS)
2. Phase 3 — Detailseite fertigstellen
3. **STOP und PRÜFEN**: Seite gegen Figma `857:721` vergleichen
4. Deploybar: Seite ist erreichbar, nur noch nicht verlinkt

### Incremental Delivery

1. Setup + Foundational → Grundlage steht
2. US1 → Detailseite lesbar (MVP)
3. US2 → Seite von Startseite und Menü erreichbar
4. US3 → Mobile abgesichert
5. Polish → Abnahme

---

## Notes

- [P] = verschiedene Dateien, keine Abhängigkeit
- Alle Texte stammen aus dem Figma-Design; keine neuen inhaltlichen Aussagen erfinden (Prinzip V)
- Bewusste Designabweichung: Bildblöcke zentriert statt linksbündig (R-007) — nach Umsetzung dem Nutzer melden
- Nach jeder Phase committen

## Abnahme (2026-08-05)

Alle 33 Tasks umgesetzt. Prüfergebnisse:

| Prüfung | Ergebnis |
|---------|----------|
| Interne Referenzen | 128 geprüft, keine kaputten Links (SC-005) |
| Externe Bildquellen auf der neuen Seite | keine (FR-008) |
| Leere `alt`-Attribute | keine (SC-004) |
| Projekt-Karten auf der Startseite | 4 (SC-001) |
| Flyout-Eintrag „Case Study: Weinkonsum" | auf allen 6 Seiten je 1× (FR-005) |
| Overflow bei 390 px | `scrollWidth` 390 = Viewport, kein Element zu breit (SC-003) |
| Overflow bei 320 px | `scrollWidth` 320 = Viewport, kein Element zu breit (SC-003) |
| Hero-Titel mobil | 3 Zeilen bei 390 px und 320 px wie Mobile-Frame (nach R-011) |
| Hero-Titel Desktop | 2 Zeilen wie Desktop-Frame |
| Methoden-Chips mobil | mehrzeilig umgebrochen (232 px bei 390 px, 282 px bei 320 px) |
| `site/robots.txt` | unverändert, sperrt nur die Wunddokumentation (R-008) |
| Neue Bild-Assets zusammen | ~500 KB (SC-006) |

Während der Umsetzung ergänzt: `hyphens: manual` für den Hero-Titel (R-011) und Modifier `.image-block--narrow` für die 500-px-Matrix (R-007). Beide sind in research.md und contracts/pages.md dokumentiert.
