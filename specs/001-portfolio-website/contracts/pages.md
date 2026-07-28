# Page Contracts: Portfolio Website

**Date**: 2026-07-22

These contracts define the expected structure and behavior of each page. Used for implementation verification.

## Shared: Navigation Header

**Present on**: All pages

```html
<header class="nav">
  <div class="container nav__inner">
    <a href="/index.html" class="nav__logo">Severin Grob</a>
    <nav class="nav__menu">...</nav>
    <button class="nav__toggle" aria-label="Menü öffnen">...</button>
  </div>
</header>
```

**Behavior**:
- Desktop (≥768px): horizontal links visible, hamburger hidden
- Mobile (<768px): hamburger visible, menu hidden until toggled
- Logo links to home page

## Shared: Footer

**Present on**: All pages

```html
<footer class="footer">
  <div class="container footer__inner">
    <span class="footer__name">Severin Grob</span>
    <div class="footer__contact">
      <a href="mailto:severin.grob@hotmail.com">severin.grob@hotmail.com</a>
      <a href="tel:+41774084430">077 408 44 30</a>
    </div>
  </div>
</footer>
```

## Page: Home (`site/index.html`)

**Figma**: Desktop 21:123, Mobile 926:352

**Sections (in order)**:
1. Navigation header
2. Hero: avatar (90×90, round), h1 "Hallo, ich bin Severin Grob", intro paragraphs
3. Section heading "Case Studies"
4. Project card × 3: image + title + description + metrics + "Weiterlesen" button
5. Skills bar: alternating skill labels and icons
6. Footer

**Links**:
- "Weiterlesen" → respective case study page
- "Case studies" nav → `#case-studies`

## Page: Case Study — Einkaufsliste (`site/case-studies/einkaufsliste.html`)

**Figma**: Desktop 564:471, Mobile 930:375

**Sections**: Navigation, case study hero/content, images, footer

**Mobile**: Image carousel for multiple screenshots

## Page: Case Study — Übersichtlichkeit (`site/case-studies/uebersichtlichkeit.html`)

**Figma**: Desktop 446:336, Mobile 1304:826

**Sections**: Navigation, case study content, images, footer

## Page: Case Study — 3D-Scan Wunddokumentation (`site/case-studies/wunddokumentation.html`)

**Figma**: Desktop 1294:526, Mobile 1299:672

**Sections**: Navigation, case study content, images, footer

**Hinweis**: Seite trägt `noindex, nofollow` (sensible Inhalte; nicht für Suchmaschinenindexierung).

## Page: CV (`site/cv.html`)

**Figma**: Desktop 1316:1401, Mobile 1340:826

**Sections**: Navigation, CV content blocks (education, experience, skills), footer

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| ≥768px | Desktop layout per Figma desktop screens |
| <768px | Mobile layout per Figma mobile screens; hamburger nav active |

## Accessibility Requirements

- All images have descriptive `alt` attributes
- Hamburger button has `aria-label` and `aria-expanded`
- Semantic HTML landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`
- Focus visible on interactive elements
- Color contrast meets WCAG AA

## URL Map

| URL | File |
|-----|------|
| `/` | `site/index.html` |
| `/cv.html` | `site/cv.html` |
| `/case-studies/einkaufsliste.html` | `site/case-studies/einkaufsliste.html` |
| `/case-studies/uebersichtlichkeit.html` | `site/case-studies/uebersichtlichkeit.html` |
| `/case-studies/wunddokumentation.html` | `site/case-studies/wunddokumentation.html` |

## Responsive: Comparison Table (Übersichtlichkeit)

Desktop: `.comparison-table` with 4 columns (Beschreibung, Design, Mittelwert, Varianz).

Mobile (&lt;768px): `.comparison-cards` — each row becomes a card with label-value pairs. Row „Design Alternative" highlighted in `#d5624c`.
