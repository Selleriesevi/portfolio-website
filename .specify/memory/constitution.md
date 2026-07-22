<!--
Sync Impact Report
- Version change: template → 1.0.0
- Modified principles: All placeholders replaced with portfolio-specific principles
- Added sections: Technology Constraints, Deployment, Quality Standards
- Templates: plan-template.md ✅ aligned, spec-template.md ✅ aligned, tasks-template.md ✅ aligned
- Follow-up TODOs: none
-->

# Portfolio Website Constitution

## Core Principles

### I. Design Fidelity

Every page MUST match the approved Figma designs (`Personal-Portfolio`, file key `ZeVA3ayucgzhcCW3wYnkYD`) for layout, typography, colors, spacing, and imagery. Visual deviations require explicit user approval. The Figma file is the single source of truth for visual design.

### II. Static-First Simplicity

The site MUST be built as static HTML, CSS, and minimal vanilla JavaScript — no build toolchain unless a concrete need arises. Pages MUST work without a backend. Complexity MUST be justified before adding frameworks, bundlers, or CMS integrations.

### III. Mobile-Responsive (NON-NEGOTIABLE)

Every page MUST have a responsive layout matching both desktop and mobile Figma screens. Breakpoints and mobile navigation (hamburger menu) MUST be implemented. Layout MUST remain usable on viewports from 320px to 1440px+.

### IV. Shareable & Deployable

The site MUST be deployable to GitHub Pages with a public URL suitable for sharing with HR and recruiters. All assets MUST be committed locally (no expiring external URLs). The deployment path MUST require at most a git push.

### V. Content Accuracy

All text, contact details, case study content, and CV information MUST reflect the content defined in Figma. Content changes MUST be traceable to the design file or explicit user input.

## Technology Constraints

- **Stack**: HTML5, CSS3, vanilla JavaScript (ES modules only if needed)
- **Hosting**: GitHub Pages (static site from repository root or `/docs` or `/site`)
- **Assets**: Images and icons stored in the repository under `assets/`
- **Fonts**: Google Fonts (Inter) as specified in Figma
- **Language**: German (`lang="de"`) for all user-facing content
- **No backend**: Contact via `mailto:` and `tel:` links only

## Quality Standards

- Semantic HTML with accessible landmarks (`header`, `main`, `footer`, `nav`)
- Meaningful `alt` text on all images
- Smooth scroll for in-page anchor navigation
- Page load target: under 3 seconds on standard broadband
- Cross-browser support: latest Chrome, Firefox, Safari, Edge

## Development Workflow

1. Constitution → Spec → Plan → Tasks → Implement (Speckit workflow)
2. Each page is implemented against its Figma node reference
3. Desktop layout first, then mobile breakpoint adjustments
4. Manual visual review against Figma screenshot before marking complete

## Governance

This constitution supersedes ad-hoc implementation decisions. Amendments require updating this file with a version bump and documenting the rationale in the Sync Impact Report comment.

All implementation work MUST verify compliance with principles I–V before merge or deployment.

**Version**: 1.0.0 | **Ratified**: 2026-07-22 | **Last Amended**: 2026-07-22
