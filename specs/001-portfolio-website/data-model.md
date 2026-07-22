# Data Model: Portfolio Website

**Date**: 2026-07-22

This is a static content site. "Entities" represent content structures embedded in HTML, not database records.

## Page

Represents a standalone HTML page in the site.

| Field | Type | Description |
|-------|------|-------------|
| slug | string | URL path (e.g., `index`, `case-studies/einkaufsliste`) |
| title | string | Browser tab title |
| figma_node_desktop | string | Figma node ID for desktop reference |
| figma_node_mobile | string | Figma node ID for mobile reference |
| sections | Section[] | Ordered content sections |

**Instances**:

| slug | title | figma_desktop | figma_mobile |
|------|-------|---------------|--------------|
| index | Severin Grob — Portfolio | 21:123 | 926:352 |
| case-studies/einkaufsliste | Denner App Einkaufsliste | 564:471 | 930:375 |
| case-studies/uebersichtlichkeit | Denner App Übersichtlichkeit | 446:336 | 1304:826 |
| case-studies/imito | 3D-Scan für Wunddokumentationen | 1294:526 | 1299:672 |
| cv | Lebenslauf — Severin Grob | 1316:1401 | 1347:813 |

## Section

A logical content block within a page.

| Field | Type | Description |
|-------|------|-------------|
| type | enum | hero, case-study-teaser, case-study-detail, skills, cv-entry, footer |
| heading | string? | Section heading |
| body | string? | Paragraph text (may contain HTML) |
| items | list? | Bullet points or list items |
| image | Asset? | Associated image |
| metrics | Metric[]? | Result metrics (for case studies) |

## CaseStudy

Extended section type for full case study pages.

| Field | Type | Description |
|-------|------|-------------|
| title | string | Project name |
| summary | string | Short description (used on home teaser) |
| problem | string | Problem statement |
| approach | string | Methods and process |
| results | Metric[] | Measurable outcomes |
| images | Asset[] | Screenshots and visuals |
| link | string | URL slug to detail page |

**Instances**:

1. **Denner Einkaufsliste** — Problem: low usage, bad ratings. Results: +28% usage, 90% CSAT.
2. **Denner Übersichtlichkeit** — Problem: perceived clutter. Results: +26 CSAT.
3. **Generative Research Weinkonsum** — Problem: limited wine customer knowledge. Results: strategy insights.

## Asset

An image or icon file stored in the repository.

| Field | Type | Description |
|-------|------|-------------|
| path | string | Relative path from site root (e.g., `assets/images/hero.jpg`) |
| alt | string | Accessibility alt text |
| figma_asset_id | string? | Original Figma MCP asset UUID (for traceability) |
| width | number? | Display width in px |
| height | number? | Display height in px |

## Navigation

Shared header/footer across all pages.

| Field | Type | Description |
|-------|------|-------------|
| logo_text | string | "Severin Grob" |
| links | NavLink[] | Navigation items |
| contact | Contact | Footer contact info |

**NavLink instances**:
- Case studies → `#case-studies` (home) or `/index.html#case-studies`
- CV → `/cv.html`

**Contact**:
- email: severin.grob@hotmail.com
- phone: +41 77 408 44 30

## Metric

A measurable result displayed in case studies.

| Field | Type | Description |
|-------|------|-------------|
| label | string | Metric name |
| value | string | Metric value (e.g., "+28%", "90%") |

## Relationships

```text
Page 1──* Section
Section 0──1 Asset (optional)
CaseStudy *──1 Page (detail page)
CaseStudy *──* Asset (images)
Navigation 1──* NavLink
Page *──1 Navigation (shared)
```

## CSS Design Tokens

Defined in `site/css/base.css` as CSS custom properties:

| Token | Value | Source |
|-------|-------|--------|
| --bg | #fffdf8 | Figma background |
| --text | #2b2b2b | Figma body text |
| --accent | #2f4e5f | Figma button color |
| --container | 1000px | Figma max content width |
| --font-family | Inter, system-ui, sans-serif | Figma typography |
