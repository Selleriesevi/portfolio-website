# Phase 1 UI Contract: Zweisprachiges Portfolio (DE + EN)

**Feature**: `003-bilingual-english` | **Date**: 2026-09-29

Keine programmatische API. Vertrag = URL-Map, Switcher-Markup, Head-Metadaten und Link-Regeln.

## URL Map (Page pairs)

| Pair ID | DE URL | EN URL | Files |
|---------|--------|--------|-------|
| home | `/index.html` | `/en/index.html` | `site/index.html` ↔ `site/en/index.html` |
| cv | `/cv.html` | `/en/cv.html` | `site/cv.html` ↔ `site/en/cv.html` |
| cs-einkaufsliste | `/case-studies/einkaufsliste.html` | `/en/case-studies/einkaufsliste.html` | … |
| cs-uebersichtlichkeit | `/case-studies/uebersichtlichkeit.html` | `/en/case-studies/uebersichtlichkeit.html` | … |
| cs-wunddokumentation | `/case-studies/wunddokumentation.html` | `/en/case-studies/wunddokumentation.html` | … |
| cs-weinkonsum | `/case-studies/weinkonsum.html` | `/en/case-studies/weinkonsum.html` | … |

**Indexing**: EN folgt derselben Index-Politik wie DE. `robots.txt` Disallow für Wunddokumentation gilt auch für `/en/case-studies/wunddokumentation.html`.

## Document language

| Version | `<html lang>` |
|---------|----------------|
| DE | `de` |
| EN | `en` |

## Alternate / hreflang (every page)

Auf jeder Seite im `<head>` (Beispiel Home):

```html
<link rel="alternate" hreflang="de" href="{absolute-or-site-relative DE URL}" />
<link rel="alternate" hreflang="en" href="{absolute-or-site-relative EN URL}" />
<link rel="alternate" hreflang="x-default" href="{DE URL of this pair}" />
```

Relative site paths sind akzeptabel, solange Paare korrekt sind; absolute Canonical-URLs optional später.

## Language switcher contract

### Desktop (`header.nav`)

- Container: z. B. `nav.nav__lang` oder Links innerhalb von `.nav__links` / neben CTA
- Zwei Links: Text `DE` und `EN`, optisch getrennt (Pipe oder Gap)
- Aktive Sprache: Klasse `nav__lang-link--active` (o. ä.) + `aria-current="page"`
- Inaktive Sprache: Link zum Pendant laut URL Map
- Aktive Sprache: Link zur aktuellen Seite oder `<span>` — bevorzugt Link mit `aria-current` für Einfachheit

### Mobile (`nav.nav__flyout`)

- Dieselbe DE | EN-Steuerung sichtbar, wenn Flyout offen (FR-004)
- Darf als eigene Zeile oben/unten im Flyout stehen; darf Nav nicht zum Overflow bringen (SC-005)

### Accessibility labels

| Element | DE page | EN page |
|---------|---------|---------|
| Switcher group | `aria-label="Sprache"` | `aria-label="Language"` |
| Toggle button (existing) | deutsch belassen / übersetzen wo user-facing | English equivalents |

## Internal link rules

| On page | Internal targets must be |
|---------|--------------------------|
| DE | DE URLs only |
| EN | EN URLs only (`/en/…`) |

Logo-Home, Case-Study-Teaser, Flyout-Items, Footer-Kontakt bleiben sprachkonsistent.

## Asset path rules (EN files)

| From | CSS/JS | Images (shared) |
|------|--------|-----------------|
| `site/en/*.html` | `../css/…`, `../js/…` | `../assets/…` |
| `site/en/case-studies/*.html` | `../../css/…`, `../../js/…` | `../../assets/…` |

## Content parity

Jede EN-Seite MUSS dieselbe Abschnittsreihenfolge und denselben Block-Typ wie die DE-Seite haben (siehe bestehende Case-Study-/Home-/CV-Strukturen aus Features 001/002). Nur Sprache der Texte/alts/aria ändert sich; Layout-Klassen bleiben.

## Go-live gate

Öffentlicher Deploy mit EN-Tree erst wenn:

1. Alle 6 EN-Dateien vorhanden und inhaltlich reviewed
2. Switcher auf allen 12 Seiten korrekt gemappt
3. DE-Regression: Root-URLs weiter DE, kein Auto-Redirect
