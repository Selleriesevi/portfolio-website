# Phase 1 Data Model: Zweisprachiges Portfolio (DE + EN)

**Feature**: `003-bilingual-english` | **Date**: 2026-09-29

Keine Datenbank — Entitäten beschreiben Content-/URL-Struktur der bilingualen Site.

## Entity: Language version

| Field | DE | EN |
|-------|----|----|
| code | `de` | `en` |
| html_lang | `de` | `en` |
| root_path | `/` (site root) | `/en/` |
| default | yes (`x-default`) | no |
| switcher_label | `DE` | `EN` |

## Entity: Page pair

Sechs Paare — gleicher Informationsumfang, gleiche Abschnittsstruktur, gleicher Dateiname.

| id | DE path | EN path | Title (DE / EN working titles) |
|----|---------|---------|--------------------------------|
| home | `/index.html` | `/en/index.html` | Portfolio home |
| cv | `/cv.html` | `/en/cv.html` | CV / Resume content |
| cs-einkaufsliste | `/case-studies/einkaufsliste.html` | `/en/case-studies/einkaufsliste.html` | Einkaufsliste |
| cs-uebersichtlichkeit | `/case-studies/uebersichtlichkeit.html` | `/en/case-studies/uebersichtlichkeit.html` | App Übersichtlichkeit |
| cs-wunddokumentation | `/case-studies/wunddokumentation.html` | `/en/case-studies/wunddokumentation.html` | 3D-Scan / Wunddokumentation |
| cs-weinkonsum | `/case-studies/weinkonsum.html` | `/en/case-studies/weinkonsum.html` | Generative Forschung Weinkonsum |

### Validation rules

- Jedes Paar MUSS existieren, bevor öffentlicher EN-Go-live (FR-015).
- Dateiname-Basis identisch (kein übersetzter Slug).
- Interne Links bleiben innerhalb der Language version (FR-008).
- Switcher-Links zeigen immer auf das Pendant desselben `id`.

## Entity: Language switcher

| Field | Value |
|-------|-------|
| labels | `DE` \| `EN` (compact) |
| placement | Desktop: in `header.nav` (neben bestehenden Links); Mobile: auch im Flyout |
| active_state | Visuell + `aria-current="page"` auf aktivem Label |
| behavior | Full page navigation to pendant URL; no JS; no persistence beyond URL |

## Entity: Localized media asset

| Field | Description |
|-------|-------------|
| shared | true/false — false only if image contains language-specific UI/text |
| de_src | Path used on DE pages (and temporarily on EN if EN asset missing) |
| en_src | Optional EN replacement path; when present, EN pages MUST use it (SC-006) |
| alt_de / alt_en | Alternativtext in Seitensprache (FR-013) |

### Initial state (go-live)

- Alle `en_src` dürfen fehlen → EN-Seiten nutzen `de_src`.
- Nach Owner-Lieferung: `en_src` setzen und DE-Quellen auf EN-Seiten entfernen.

## Entity: Translation unit (informal)

Pro sichtbarem Textknoten auf einer DE-Seite existiert ein EN-Äquivalent (Überschrift, Absatz, Liste, Chip, Button, aria-label, alt, title). Kein separates CMS — Inhalt lebt im HTML.

### Review state (process)

| State | Meaning |
|-------|---------|
| draft | Agent-Übersetzung im Branch |
| reviewed | Owner freigegeben |
| live | Teil des gemeinsamen EN-Go-live |

Öffentlicher Deploy der EN-Language-version erst wenn alle sechs Page pairs = `reviewed` (Texte) und Switcher vollständig.
