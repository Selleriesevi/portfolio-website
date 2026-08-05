# Phase 0 Research: Case Study „Generative Forschung Weinkonsum"

**Feature**: `002-weinkonsum-case-study` | **Date**: 2026-08-05

Alle Punkte des Technical Context der bestehenden Website sind bereits durch Feature `001-portfolio-website` festgelegt (HTML5/CSS3/Vanilla JS, GitHub Pages, Deutsch, Inter). Offen waren ausschliesslich featurespezifische Fragen zu Hero-Darstellung, Bildbeschaffung und Startseiten-Integration.

## R-001: Hero-Darstellung

**Decision**: Neue CSS-Variante `.case-hero--weinkonsum` mit Flächenfarbe `#8499ab` und der bereits existierenden Wellen-Pseudoelement-Technik; kein Hero-Bild.

**Rationale**: Der Figma-Hero (`857:723`) ist als Bildfüllung angelegt, enthält aber keinen Bildinhalt. Der exportierte Export (4096×1252) hat an den oberen Ecken exakt `rgb(132,153,171)` = `#8499ab` und an den unteren Ecken `rgb(255,253,248)` = `#fffdf8` (Seitenhintergrund). Der Hero ist also eine Farbfläche mit Wellenübergang — identisch zum Muster der Wunddokumentations-Case-Study, das bereits in `site/css/case-study.css` implementiert ist.

**Alternatives considered**:
- Hero-Bild einbinden (4096×1252 PNG, ~138 KB): abgelehnt, weil es reine Farbfläche ist und unnötig Ladezeit sowie eine schlecht skalierende Wellenkante erzeugt.
- Bestehende Klasse `.case-hero--wunddokumentation` wiederverwenden: abgelehnt, weil der Klassenname eine andere Case Study benennt; eine eigene Variante bleibt lesbar. Die gemeinsamen Deklarationen werden per Selektorliste geteilt.

## R-002: Bildbeschaffung Verhaltensmuster-Matrix

**Decision**: Der Figma-Knoten `872:1094` wird als JPEG exportiert und als `weinkonsum-1-verhaltensmuster.jpg` abgelegt (quadratisch, auf 1500 px Kantenlänge reduziert).

**Rationale**: Der Rohexport ist 4096×4096 px — deutlich mehr als die 500 px Darstellungsgrösse im Design. 1500 px deckt Retina-Darstellung bis 750 px Anzeigebreite ab und hält die Dateigrösse gering (Performanceziel unter 3 s). Der Bildhintergrund entspricht dem Seitenhintergrund, daher ist keine Rahmung nötig.

**Alternatives considered**:
- SVG-Nachbau der Matrix: abgelehnt, hoher Aufwand ohne Mehrwert; alle übrigen Case Studies verwenden ebenfalls Bilder.
- Original 4096 px behalten: abgelehnt wegen Dateigrösse.

## R-003: Bildbeschaffung Persona-Darstellungen

**Decision**: Der Figma-Export von `888:1108`/`888:1110` ist **ein** breites Quellbild (4096×1156), das im Design zweimal mit versetztem Bildausschnitt (`w-200%`, links/rechts) verwendet wird. Es wird in zwei Hälften à 2048×1156 geteilt und als `weinkonsum-2-persona-1.jpg` (Profilseite Marco) sowie `weinkonsum-3-persona-2.jpg` (Kontext/Probleme/Ziele/User Needs mit Radar-Diagramm) abgelegt.

**Rationale**: Visuelle Prüfung der beiden Hälften bestätigt zwei inhaltlich vollständige, eigenständige Persona-Seiten. Zwei getrennte Bilder entsprechen der Darstellung im Design (zwei gestapelte Blöcke) und erlauben separaten Alternativtext je Inhalt.

**Alternatives considered**:
- Breitbild als Ganzes einbinden: abgelehnt, weil dann zwei Seiten nebeneinander in halber Grösse erscheinen — auf Mobilgeräten unlesbar.
- CSS-Ausschnitt wie in Figma (200 % Breite mit Versatz): abgelehnt, unnötige Komplexität gegenüber zwei Dateien.

## R-004: Persona-Darstellung als Bild statt HTML

**Decision**: Die Persona-Seiten werden als Bilder eingebunden.

**Rationale**: Es handelt sich um gestaltete Research-Artefakte mit eigener Typografie, Radar-Diagramm und Illustrationen. Ein HTML-Nachbau wäre aufwendig, würde vom Design abweichen und widerspräche dem Prinzip Static-First Simplicity. Die bestehenden Case Studies binden vergleichbare Artefakte ebenfalls als Bild ein.

**Alternatives considered**: HTML/CSS-Nachbau der Persona-Karten — abgelehnt (Aufwand, Abweichungsrisiko, kein Nutzergewinn).

## R-005: Startseiten-Teaser — Position und Vorschaubild

**Decision**: Weinkonsum wird als **vierte** Projekt-Karte nach der Wunddokumentation ergänzt. Vorschaubild ist die erste Persona-Seite, abgelegt als `cs-weinkonsum.jpg` und über die bestehende Variante `.project__image--cover` beschnitten.

**Rationale**: Der Home-Frame `21:123` enthält vier Projekt-Karten, wobei `1618:1072` (Weinkonsum) an vierter Position steht. Der Figma-Thumbnail dieser Karte zeigt die Persona-Seite. Der direkte Thumbnail-Export aus Figma liefert nur 390×221 px und ist für den 484×350-Slot zu klein; die Persona-Hälfte aus R-003 liefert dieselbe Bildaussage in hoher Auflösung.

**Alternatives considered**:
- Verhaltensmuster-Matrix als Vorschaubild: abgelehnt, weicht vom Design ab (wäre optisch aber ebenfalls tragfähig).
- Figma-Thumbnail-Export direkt verwenden: abgelehnt wegen zu geringer Auflösung.

## R-006: Teaser-Text und Kennzahlen

**Decision**: Der Platzhalter „XYZ" aus dem Design wird durch eine Kurzbeschreibung im Muster der übrigen Teaser ersetzt (Problem → Rolle → Ergebnis). Als Kennzahlen dienen „21 Video-Interviews" und „4 validierte Personas".

**Rationale**: Alle drei bestehenden Teaser folgen dem Muster Kurztext plus hervorgehobene Kennzahlen; ein Teaser ohne Kennzahlen würde optisch aus der Reihe fallen. Beide Zahlen stammen unmittelbar aus dem Case-Study-Inhalt im Figma-Design (Abschnitt Research-Phase bzw. Ergebnisse), es werden keine neuen Aussagen erfunden.

**Alternatives considered**: Teaser ohne Kennzahlen-Liste — abgelehnt wegen Inkonsistenz zur bestehenden Übersicht.

## R-007: Ausrichtung und Grösse der Bildblöcke

**Decision**: Bildblöcke werden über die bestehende Klasse `.image-block` zentriert dargestellt. Die Matrix behält ihre Designgrösse von 500 px über eine neue Modifier-Klasse `.image-block--narrow`; die Persona-Bilder nutzen die volle Containerbreite von 1000 px wie im Design.

**Rationale**: Im Desktop-Design steht die 500×500-Matrix linksbündig in einem 1000 px breiten Container. Alle übrigen Bildblöcke der Website sind zentriert; `.image-block` zentriert bereits. Eine linksbündige Sonderbehandlung würde einen Sonderfall im CSS erzeugen und vom Rhythmus der Website abweichen. Abweichend ist damit nur die horizontale Ausrichtung, nicht die Grösse — ohne `--narrow` würde die Matrix auf 1000 px skalieren und doppelt so gross erscheinen wie im Design. Auf Mobilgeräten greift `width: 100%`, sodass die Matrix wie im Mobile-Frame die volle Breite einnimmt.

**Alternatives considered**: Linksbündig exakt wie Figma — verworfen, aber trivial nachrüstbar (eine zusätzliche Modifier-Klasse).

## R-011: Umbruch des Hero-Titels

**Decision**: Für `.case-hero--weinkonsum .case-hero__title` wird `hyphens: manual` gesetzt.

**Rationale**: `.case-hero__title` hat global `hyphens: auto`, was für lange Einzelwörter wie „Wunddokumentation" nötig ist. Beim dreiteiligen Titel „Generative Forschung Weinkonsum" führte die automatische Trennung auf Mobilgeräten zu „Generative For-/schung/Weinkonsum". Der Mobile-Frame `1557:897` zeigt drei saubere Zeilen. Da jedes der drei Wörter bei 320 px und 390 px in eine Zeile passt, genügt das Abschalten der automatischen Trennung; gemessen wurden anschliessend drei Zeilen bei beiden Breiten, Desktop bleibt zweizeilig.

**Alternatives considered**:
- `<br>` im Markup wie bei der Wunddokumentation: abgelehnt, weil der Desktop-Umbruch (zwei Zeilen) ein anderer ist als der mobile (drei Zeilen) — fixe Umbrüche würden eine der beiden Breiten verschlechtern.
- `hyphens: auto` global entfernen: abgelehnt, weil die Wunddokumentations-Seite die Trennung benötigt.

## R-008: Indexierbarkeit

**Decision**: Keine `noindex`-Auszeichnung; die Seite bleibt indexierbar. `site/robots.txt` bleibt unverändert.

**Rationale**: Die Case Study betrifft denselben Auftraggeber wie die beiden bereits öffentlichen Denner-Case-Studies. Nur die Wunddokumentations-Case-Study ist aus Vertraulichkeitsgründen ausgenommen — `robots.txt` sperrt ausschliesslich diesen Pfad, weitere Einträge sind also nicht erforderlich.

**Alternatives considered**: Vorsorglich `noindex` — abgelehnt, würde die Sichtbarkeit gegenüber Recruitern unnötig einschränken.

## R-009: Phasenlabel-Schreibweise

**Decision**: Die Labels werden wie im Design übernommen: `DISCOVER` und `Discover & Explore`. Die bestehende CSS-Regel `.subtitle` setzt `text-transform: uppercase`, wodurch beide Labels in Grossbuchstaben erscheinen und die Schreibweise im Quelltext keine sichtbare Inkonsistenz erzeugt.

**Rationale**: Design Fidelity ohne sichtbaren Stilbruch — die Vereinheitlichung erledigt das bestehende Stylesheet.

**Alternatives considered**: Labels im Markup vereinheitlichen — unnötig, da visuell identisch.

## R-010: Wiederverwendung bestehender Bausteine

**Decision**: Keine neuen Komponenten. Wiederverwendet werden: `.nav` / `.nav__flyout`, `.footer`, `.case-hero` (+ neue Farbvariante), `.content-section` mit `h2` / `h3.subtitle` / `.text-block` / `.role-title`, `.chips` / `.chip`, `.divider`, `.image-block`, `.highlight`, `.project` / `.project__image--cover` / `.project__metrics`, `js/nav.js`.

**Rationale**: Die Case Study benötigt kein Element, das nicht bereits existiert. Insbesondere ist **kein** Karussell nötig, weil keine Bildserie dargestellt wird — Matrix und Personas sind Einzelbilder, die auf Mobilgeräten in voller Breite skalieren. Damit entfällt auch die Einbindung von `js/carousel.js`.

**Alternatives considered**: Karussell für die Persona-Seiten auf Mobilgeräten — abgelehnt, weil zwei gestapelte Bilder dem Design entsprechen und weniger Interaktionsaufwand erzeugen.
