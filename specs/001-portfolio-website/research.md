# Research: Portfolio Website

**Date**: 2026-07-22

## R1: Hosting Platform

**Decision**: GitHub Pages, serving from `/site` directory via GitHub Actions or branch config.

**Rationale**: Free, reliable, provides public HTTPS URL instantly after push. No server management. Perfect for static portfolio. User explicitly confirmed GitHub Pages in prior conversation.

**Alternatives considered**:
- Netlify/Vercel — more features but unnecessary complexity for static HTML
- Custom domain hosting — not needed for initial HR link sharing

## R2: Tech Stack

**Decision**: Plain HTML5 + CSS3 + vanilla JavaScript. No React, no build step.

**Rationale**: Constitution principle II (Static-First Simplicity). Site has 5 pages with no dynamic data. Previous partial implementation already used this approach successfully. Faster to deploy, easier to maintain for a solo portfolio.

**Alternatives considered**:
- React/Vite — overkill for 5 static pages, adds build complexity
- Astro/11ty — static site generators add toolchain without clear benefit at this scale

## R3: Asset Management

**Decision**: Download all Figma assets and commit to `site/assets/`. Reference locally in HTML.

**Rationale**: Figma MCP asset URLs expire in ~7 days (per figma-design-to-code skill). GitHub Pages needs permanent asset URLs. Local assets ensure long-term deployability.

**Alternatives considered**:
- Figma CDN URLs — expire, unsuitable for production
- External image hosting (Cloudinary) — unnecessary dependency

## R4: Mobile Navigation Pattern

**Decision**: CSS-hidden flyout menu toggled by vanilla JS `nav.js`. Hamburger icon visible below 768px breakpoint.

**Rationale**: Matches Figma `hamburger-mobile` screen (node 1000:312). Minimal JS, works without framework. Progressive enhancement — links still work if JS fails on desktop.

**Alternatives considered**:
- CSS-only checkbox hack — harder to match Figma flyout animation
- Full-screen overlay nav library — unnecessary dependency

## R5: Image Carousel (Mobile Case Studies)

**Decision**: Lightweight vanilla JS carousel in `carousel.js` for mobile case study pages.

**Rationale**: Figma mobile case study screens show image carousel (node 930:375). Simple prev/next with touch swipe support. No library needed for 3-5 images per case study.

**Alternatives considered**:
- Swiper.js — good library but adds dependency for simple use case
- Static stacked images — doesn't match Figma mobile design

## R6: CSS Architecture

**Decision**: Split CSS into 4 files: `base.css`, `layout.css`, `components.css`, `responsive.css`.

**Rationale**: Separation of concerns without a preprocessor. Shared styles loaded on every page. Responsive rules isolated for easier mobile debugging against Figma.

**Alternatives considered**:
- Single CSS file — harder to maintain at ~500+ lines
- CSS Modules/SCSS — adds build step, violates constitution

## R7: GitHub Pages Configuration

**Decision**: Deploy from `main` branch, `/site` folder as source. Add `.nojekyll` file to prevent Jekyll processing.

**Rationale**: Standard GitHub Pages setup for project sites. `.nojekyll` prevents issues with underscore-prefixed files.

**Alternatives considered**:
- `/docs` folder — less descriptive than `site/`
- Root deployment — would mix spec files with site files
