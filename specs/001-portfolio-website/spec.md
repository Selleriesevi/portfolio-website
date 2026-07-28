# Feature Specification: Portfolio Website

**Feature Branch**: `001-portfolio-website`

**Created**: 2026-07-22

**Status**: Draft

**Input**: User description: "Portfolio-Website aus Figma-Design für Bewerbung: Home, 3 Case Studies, CV, Mobile-Navigation, GitHub Pages Hosting"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - HR besucht die Startseite (Priority: P1)

Als HR-Mitarbeiterin oder Recruiter öffne ich den Portfolio-Link und sehe sofort, wer Severin Grob ist, welche Case Studies er vorweisen kann, und wie ich ihn kontaktieren kann — ohne scrollen zu müssen für die Kernidentität.

**Why this priority**: Die Startseite ist der erste und oft einzige Eindruck bei einer Bewerbung. Ohne funktionierende Home-Seite ist das Portfolio wertlos.

**Independent Test**: Startseite im Browser öffnen — Hero mit Foto und Intro, drei Case-Study-Teaser mit Bild und Kurzbeschreibung, Skills-Bereich und Footer mit Kontaktdaten sind sichtbar und klickbar.

**Acceptance Scenarios**:

1. **Given** ein Besucher öffnet die Portfolio-URL, **When** die Seite geladen ist, **Then** sieht er den Namen „Severin Grob", ein Profilfoto, eine Kurzbeschreibung und mindestens drei Case-Study-Vorschauen.
2. **Given** ein Besucher ist auf der Startseite, **When** er auf „Case studies" in der Navigation klickt, **Then** scrollt die Seite zum Case-Studies-Bereich.
3. **Given** ein Besucher ist auf der Startseite, **When** er auf „Weiterlesen" bei einer Case Study klickt, **Then** gelangt er zur vollständigen Case-Study-Seite.
4. **Given** ein Besucher ist auf der Startseite, **When** er die Kontaktdaten im Footer sieht, **Then** kann er per Klick eine E-Mail senden oder anrufen.

---

### User Story 2 - Besucher liest eine Case Study (Priority: P2)

Als interessierter Recruiter möchte ich eine vollständige Case Study lesen, um Severins Arbeitsweise, Methoden und messbare Ergebnisse zu verstehen.

**Why this priority**: Case Studies sind der Kerninhalt des Portfolios und differenzieren den Bewerber. Drei Case Studies müssen vollständig zugänglich sein.

**Independent Test**: Jede der drei Case-Study-Seiten einzeln aufrufbar — Inhalt, Bilder und Navigation zurück zur Startseite funktionieren.

**Acceptance Scenarios**:

1. **Given** ein Besucher ist auf der Case-Study-Seite „Denner App Einkaufsliste", **When** er den Inhalt liest, **Then** sieht er Problemstellung, Vorgehen und messbare Ergebnisse (Nutzung +28%, CSAT 90%).
2. **Given** ein Besucher ist auf der Case-Study-Seite „Denner App Übersichtlichkeit", **When** er den Inhalt liest, **Then** sieht er Research- und Design-Ansatz mit CSAT-Verbesserung (+26).
3. **Given** ein Besucher ist auf der Case-Study-Seite „3D-Scan für Wunddokumentationen", **When** er den Inhalt liest, **Then** sieht er vollständigen Case-Study-Text mit begleitenden Bildern.
4. **Given** ein Besucher ist auf einer Case-Study-Seite, **When** er die Navigation nutzt, **Then** kann er zur Startseite zurückkehren.

---

### User Story 3 - Besucher sieht den Lebenslauf (Priority: P3)

Als Recruiter möchte ich den Lebenslauf (CV) einsehen, um Ausbildung, Berufserfahrung und Qualifikationen im Überblick zu sehen.

**Why this priority**: Der CV ergänzt die Case Studies mit strukturierten Karrieredaten und ist ein Standard-Erwartung bei Bewerbungen.

**Independent Test**: CV-Seite aufrufbar — alle Abschnitte (Ausbildung, Erfahrung, Skills) lesbar und layoutgetreu zum Figma-Design.

**Acceptance Scenarios**:

1. **Given** ein Besucher navigiert zur CV-Seite, **When** die Seite geladen ist, **Then** sieht er strukturierte Lebenslauf-Inhalte gemäss Figma-Design.
2. **Given** ein Besucher ist auf der CV-Seite, **When** er die Navigation nutzt, **Then** kann er zur Startseite zurückkehren.

---

### User Story 4 - Mobile Besucher nutzt die Seite (Priority: P2)

Als Besucher auf dem Smartphone möchte ich die Portfolio-Seite komfortabel lesen und navigieren können.

**Why this priority**: Viele Recruiter öffnen Links auf dem Handy. Mobile-Layout und Navigation sind für Professionalität essentiell.

**Independent Test**: Seite auf Viewport ≤768px öffnen — Layout bricht nicht, Hamburger-Menü funktioniert, Bilder skalieren korrekt.

**Acceptance Scenarios**:

1. **Given** ein Besucher öffnet die Seite auf einem Smartphone, **When** die Seite geladen ist, **Then** passt sich das Layout an die mobile Figma-Vorlage an.
2. **Given** ein Besucher ist auf Mobile, **When** er das Hamburger-Menü öffnet, **Then** erscheint die Flyout-Navigation mit Links zu Case Studies und CV.
3. **Given** ein Besucher ist auf einer Case-Study-Seite (Mobile), **When** mehrere Bilder vorhanden sind, **Then** kann er durch ein Image-Carousel blättern.

---

### Edge Cases

- Was passiert, wenn ein Bild nicht geladen werden kann? → `alt`-Text wird angezeigt, Layout bleibt stabil.
- Wie verhält sich die Seite bei sehr schmalen Viewports (<320px)? → Inhalt bleibt lesbar ohne horizontales Scrollen.
- Was passiert bei langsamer Verbindung? → Seite rendert progressiv; Text ist vor Bildern sichtbar.
- Wie funktioniert Navigation ohne JavaScript? → Kernlinks (Seitenwechsel, mailto, tel) funktionieren ohne JS.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST eine Startseite bereitstellen mit Hero-Bereich (Foto, Name, Intro-Text), Case-Study-Teaser (3 Projekte), Skills-Bereich und Footer.
- **FR-002**: System MUST drei vollständige Case-Study-Seiten bereitstellen: Denner Einkaufsliste, Denner Übersichtlichkeit, und 3D-Scan Wunddokumentation.
- **FR-003**: System MUST eine CV-Seite mit Lebenslauf-Inhalten bereitstellen.
- **FR-004**: System MUST eine persistente Navigation mit Logo/Name, Links zu Case Studies und CV, sowie einem „Let's work together"-Button bereitstellen.
- **FR-013**: System MUST auf der Case-Study-Seite „Übersichtlichkeit" eine Vergleichstabelle (Desktop) anzeigen; auf Mobile MUST die Tabelle als gestapelte Karten dargestellt werden (kein horizontales Scrollen).
- **FR-005**: System MUST auf Mobile ein Hamburger-Menü mit Flyout-Navigation anzeigen.
- **FR-006**: System MUST Kontaktdaten (E-Mail, Telefon) im Footer bereitstellen, klickbar als `mailto:` und `tel:` Links.
- **FR-007**: System MUST alle Seiten responsiv darstellen, abgestimmt auf Desktop- und Mobile-Figma-Screens.
- **FR-008**: System MUST auf Case-Study-Seiten (Mobile) ein Bild-Carousel bereitstellen, wo im Design vorgesehen.
- **FR-009**: System MUST visuell dem Figma-Design `Personal-Portfolio` entsprechen (Farben, Typografie, Abstände, Bilder).
- **FR-010**: System MUST über GitHub Pages unter einer öffentlichen URL erreichbar sein.
- **FR-011**: System MUST auf Deutsch (`lang="de"`) ausgeliefert werden.
- **FR-012**: Alle Bilder und Icons MUST lokal im Repository gespeichert sein (keine ablaufenden externen URLs).

### Key Entities

- **Page**: Eine HTML-Seite (Home, Case Study, CV) mit eigenem Inhalt und gemeinsamer Navigation/Footer.
- **Case Study**: Ein Projekt mit Titel, Beschreibung, Ergebnis-Metriken, Bildern und Link von der Startseite.
- **Navigation**: Header mit Logo und Menülinks; auf Mobile als Hamburger-Flyout.
- **Asset**: Bild, Icon oder Foto, gespeichert unter `assets/` und referenziert in HTML/CSS.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Besucher können die Startseite in unter 3 Sekunden auf Standard-Breitband vollständig laden.
- **SC-002**: Alle 5 Seiten (Home + 3 Case Studies + CV) sind über direkte URLs erreichbar und visuell mit Figma abgeglichen.
- **SC-003**: Die Seite ist auf Viewports von 320px bis 1440px+ ohne Layout-Brüche nutzbar.
- **SC-004**: Der Portfolio-Link kann an HR weitergegeben werden und funktioniert ohne Login oder spezielle Software.
- **SC-005**: Lighthouse Accessibility Score ≥ 90 auf der Startseite.
- **SC-006**: Alle Case-Study-Teaser auf der Startseite führen zu vollständigen Detailseiten.

## Assumptions

- Figma-Datei `Personal-Portfolio` (`ZeVA3ayucgzhcCW3wYnkYD`) enthält alle finalen Texte und Bilder.
- GitHub Pages wird als Hosting-Plattform verwendet (kostenlos, statisch).
- Kein Kontaktformular nötig — `mailto:` und `tel:` Links genügen.
- Kein Analytics oder Tracking in Version 1.
- Kein CMS — Inhalte sind statisch im HTML.
- Der Bewerber (Severin Grob) reviewed visuelle Abweichungen vor Go-Live.
- Home zeigt drei Case-Study-Teaser: Einkaufsliste, Übersichtlichkeit, 3D-Scan Wunddokumentation.
- Skills auf der Home: UX Research, UX Design, Design Thinking, Prototyping, Vibecoding.
- Soft-Redesign-Tabelle existiert nur als Desktop-Design in Figma; Mobile-Adaptation als Karten-Layout wird bei der Umsetzung definiert.

## Figma Screen Reference

| Screen | Node ID | Seite |
|--------|---------|-------|
| home-desktop | 21:123 | Startseite |
| home-mobile | 926:352 | Startseite (Mobile) |
| hamburger-mobile | 1000:312 | Navigation (Mobile) |
| case-study_shopping-list_desktop | 564:471 | Case Study Einkaufsliste |
| case-study_shopping-mobile | 930:375 | Case Study Einkaufsliste (Mobile) |
| Soft-Redesign-Desktop | 446:336 | Case Study Übersichtlichkeit |
| Soft-Redesign-mobile | 1304:826 | Case Study Übersichtlichkeit (Mobile) |
| Case study Wunddokumentation Desktop | 1294:526 | Case Study 3D-Scan Wunddokumentation |
| Case study Wunddokumentation Mobile | 1299:672 | Case Study 3D-Scan Wunddokumentation (Mobile) |
| CV-Desktop | 1316:1401 | Lebenslauf |
| CV-Mobile | 1347:813 | Lebenslauf (Mobile) |
