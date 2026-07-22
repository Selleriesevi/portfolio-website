# Quickstart: Portfolio Website

**Date**: 2026-07-22

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git
- GitHub account (for deployment)
- Figma MCP access to `Personal-Portfolio` (ZeVA3ayucgzhcCW3wYnkYD)

## Local Development

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd portfolio-website
   ```

2. Serve the site locally (any static server):
   ```bash
   cd site
   python3 -m http.server 8080
   ```
   Open http://localhost:8080

3. Alternative with npx:
   ```bash
   npx serve site
   ```

## Visual Review Checklist

For each page, compare against Figma screenshot:

- [ ] Layout matches Figma (spacing, alignment)
- [ ] Typography: Inter font, correct sizes and weights
- [ ] Colors: background #fffdf8, text #2b2b2b, accent #2f4e5f
- [ ] Images render correctly with alt text
- [ ] Mobile layout at 375px width matches Figma mobile screen
- [ ] Hamburger menu opens/closes on mobile
- [ ] All links navigate correctly
- [ ] Footer contact links work (mailto, tel)

## Pages to Verify

| Page | Desktop Figma | Mobile Figma | Local URL |
|------|---------------|--------------|-----------|
| Home | 21:123 | 926:352 | /index.html |
| Einkaufsliste | 564:471 | 930:375 | /case-studies/einkaufsliste.html |
| Übersichtlichkeit | 446:336 | 1304:826 | /case-studies/uebersichtlichkeit.html |
| Weinkonsum | — | — | /case-studies/weinkonsum.html |
| CV | 1316:1401 | 1347:813 | /cv.html |

## GitHub Pages Deployment

1. Push to `main` branch
2. In GitHub repo Settings → Pages:
   - Source: Deploy from branch
   - Branch: `main`, folder: `/site`
3. Add `site/.nojekyll` file (empty) to prevent Jekyll processing
4. Site available at `https://<username>.github.io/<repo-name>/`

## Lighthouse Audit (Optional)

```bash
npx lighthouse http://localhost:8080 --view
```

Target: Accessibility ≥ 90, Performance ≥ 80
