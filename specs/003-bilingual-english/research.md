# Phase 0 Research: Zweisprachiges Portfolio (DE + EN)

**Feature**: `003-bilingual-english` | **Date**: 2026-09-29

Technischer Kontext (HTML/CSS/Vanilla JS, GitHub Pages, kein Build) ist durch Features `001`/`002` gesetzt. Offen waren die i18n-Architektur und UX-Details; Clarifications (2026-09-29) und dieses Research schliessen sie.

## R-001: Language-version architecture

**Decision**: Gespiegelte statische Seiten unter `site/en/` mit denselben Dateinamen wie DE; Deutsch bleibt an bestehenden Root-URLs.

**Rationale**: Erfüllt FR-001/002/012 ohne Breaking Changes; Static-First; klare Page pairs für den Switcher; SEO-freundliche eigene URLs; kein Runtime-Wörterbuch.

**Alternatives considered**:
- JS-Text-Swap / JSON-Dictionary: abgelehnt (SEO, Share-URLs, Static-First, Wartung).
- Beide Sprachen unter `/de/` und `/en/` mit Root-Redirect: abgelehnt (bricht bestehende DE-URLs).
- Query-Parameter `?lang=en`: abgelehnt (Swap-Links, Caching, Sharing).

## R-002: Language switcher implementation

**Decision**: Reine HTML-Links „DE | EN“ in `header.nav` (Desktop) und im `nav.nav__flyout` (Mobile); aktive Sprache per CSS-Klasse (z. B. `nav__lang-link--active`) und `aria-current="page"`; kein JavaScript.

**Rationale**: Spec verlangt kompakte Labels und Pendant-Navigation; Links brauchen kein JS; `nav.js` bleibt unverändert für das Hamburger-Menü.

**Alternatives considered**:
- Select-Dropdown: abgelehnt (schwerer, unnötig für zwei Sprachen).
- Flags/Emojis: abgelehnt (Accessibility, Design-Sprache der Site).
- Nur Link zur anderen Sprache ohne aktive Markierung: abgelehnt (FR-006).

## R-003: Relative asset paths from `en/`

**Decision**: EN-Seiten unter `site/en/` und `site/en/case-studies/` nutzen `../css/…`, `../js/…`, `../assets/…` bzw. `../../…` von Case Studies aus; kein Kopieren von CSS/JS/Assets.

**Rationale**: Eine Quelle der Wahrheit für Styles und sprachneutrale Medien; weniger Drift.

**Alternatives considered**: Assets nach `en/assets` kopieren — abgelehnt (Duplikate). Absolute Root-Pfade `/css/…` — möglich auf GitHub Pages Project Sites mit Base-Path riskant; relative Pfade sind robuster für lokales `http.server` und Project Pages.

## R-004: Localized vs shared images

**Decision**: Sprachneutrale Bilder (Portrait, Icons, rein visuelle Diagramme ohne UI-Text) bleiben geteilt. UI-Screenshots mit Text: EN-Seiten starten mit denselben DE-Dateien (Clarify); später optionale EN-Dateien nach Konvention `<name>-en.<ext>` oder paralleler Ordner — Austausch nur in EN-HTML-`src`/`alt`.

**Rationale**: FR-009 / SC-006; Owner liefert EN-UI später; Go-live nicht blockiert.

**Alternatives considered**: Go-live blockieren bis EN-Bilder da — abgelehnt (Clarify B). Bilder ausblenden — abgelehnt (Clarify).

## R-005: HTML language & alternate links

**Decision**: DE-Seiten behalten `lang="de"`; EN-Seiten setzen `lang="en"`. Jede Seite erhält im `<head>` gegenseitige `link rel="alternate" hreflang="de|en|x-default"` (x-default → DE-Root-Pendant).

**Rationale**: FR-007; hilft Suchmaschinen, Language versions zu verbinden, ohne Auto-Redirect (FR-011).

**Alternatives considered**: Nur `lang` ohne hreflang — schwächer für SEO. Content-Negotiation / Auto-Redirect — verboten durch Spec.

## R-006: Translation & review workflow

**Decision**: Agent erstellt EN-Entwurf 1:1 aus DE-Markup (gleiche Abschnitte); Owner reviewt vor gemeinsamem Go-live aller sechs EN-Seiten. Eigennamen/Projektnamen unverändert lassen, wo sinnvoll.

**Rationale**: Clarify Q1 + FR-015 / SC-001 / SC-004.

**Alternatives considered**: Owner liefert alle Texte — abgelehnt. Go-live ohne Review — abgelehnt.

## R-007: Constitution language amendment

**Decision**: In `.specify/memory/constitution.md` Language-Constraint von „German only“ auf „German (default at root) + English (`en/` mirror)“ ändern; Sync Impact Report aktualisieren.

**Rationale**: Spec-Assumption; Technology Constraints müssen zur Realität passen, sonst schlagen künftige Speckit-Gates fehl.

**Alternatives considered**: Constitution unverändert lassen und Ausnahme nur im Plan — abgelehnt (Governance drift).

## R-008: Switcher link targets (page-pair map)

**Decision**: Feste 1:1-Zuordnung (siehe `data-model.md` / `contracts/pages.md`). Beispiel: `site/case-studies/weinkonsum.html` ↔ `site/en/case-studies/weinkonsum.html`; `site/index.html` ↔ `site/en/index.html`.

**Rationale**: FR-005; gleiche Dateinamen (Clarify Q5) machen die Map trivial und fehlerarm.

**Alternatives considered**: Übersetzte Slugs — abgelehnt (Clarify A).

## R-009: robots.txt / indexing

**Decision**: Bestehende Disallows für die Wunddokumentations-Case-Study um die EN-Pfade ergänzen (`/en/case-studies/wunddokumentation.html` und ggf. Project-Pages-Präfix). Übrige EN-Seiten bleiben indexierbar wie DE.

**Rationale**: Index-Politik muss sprachübergreifend konsistent sein; sonst wäre die EN-Version der gesperrten Case Study auffindbar.

**Alternatives considered**: robots.txt unverändert — abgelehnt, weil EN-Wunddokumentation sonst crawlar wäre.
