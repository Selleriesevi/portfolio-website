# Quickstart: Case Study „Generative Forschung Weinkonsum"

**Feature**: `002-weinkonsum-case-study` | **Date**: 2026-08-05

## Lokal starten

```bash
cd site
python3 -m http.server 8000
```

Dann `http://localhost:8000/` öffnen.

## Zu prüfende Seiten

| Seite | Desktop Figma | Mobile Figma | Lokale URL |
|-------|---------------|--------------|------------|
| Home (4 Teaser) | 21:123 | 926:352 | /index.html |
| Weinkonsum *(neu)* | 857:721 | 1557:897 | /case-studies/weinkonsum.html |
| Einkaufsliste | 564:471 | 930:375 | /case-studies/einkaufsliste.html |
| Übersichtlichkeit | 446:336 | 1304:826 | /case-studies/uebersichtlichkeit.html |
| Wunddokumentation | 1294:526 | 1299:672 | /case-studies/wunddokumentation.html |
| CV | 1316:1401 | 1347:813 | /cv.html |

## Abnahmeprüfung

### Inhalt (FR-002, FR-003, SC-002)

- [ ] Hero zeigt „Generative Forschung Weinkonsum" auf blauer Fläche mit Wellenübergang
- [ ] Abschnitte in dieser Reihenfolge: Executive Summary → Meine Rolle → Meine Aufgaben → Angewandte Methoden → Ausgangslage & Problemdefinition → Research-Phase → Bild Verhaltensmuster → Ergebnisse/Personas → 2 Persona-Bilder
- [ ] 7 Methoden-Chips vorhanden
- [ ] „21 halbstrukturierte Video-Interviews" und „vier zentrale Verhaltensmuster" halbfett
- [ ] 4 Personas als nummerierte Liste

### Startseite (FR-004, SC-001)

- [ ] Vier Teaser sichtbar, Weinkonsum an Position 4
- [ ] Klick auf „Weiterlesen" öffnet `/case-studies/weinkonsum.html`

### Navigation (FR-005, SC-005)

- [ ] Mobiles Menü enthält „Case Study: Weinkonsum" auf allen sechs Seiten
- [ ] Alle Links funktionieren; kein 404

### Responsiv (FR-007, SC-003)

Prüfen bei 320 px, 390 px, 768 px, 1440 px:

- [ ] Kein horizontales Scrollen
- [ ] Hero-Titel bricht mobil auf drei Zeilen
- [ ] Methoden-Chips brechen mobil mehrzeilig um
- [ ] Matrix- und Persona-Bilder skalieren auf Bildschirmbreite

### Barrierefreiheit & Assets (FR-008, SC-004)

- [ ] Alle Bilder haben nicht-leeren, beschreibenden `alt`-Text
- [ ] Alle Bilder liegen unter `site/assets/images/` (keine externen URLs)

## Schnelltest im Terminal

Externe Bildquellen und fehlende Alt-Texte finden:

```bash
grep -n 'src="http' site/case-studies/weinkonsum.html
grep -n 'alt=""' site/case-studies/weinkonsum.html
```

Beide Befehle dürfen keine Treffer liefern (der Hero hat kein `img`).

Vorhandensein der Bilddateien prüfen:

```bash
ls -la site/assets/images/cs-weinkonsum.jpg \
       site/assets/images/weinkonsum-1-verhaltensmuster.jpg \
       site/assets/images/weinkonsum-2-persona-1.jpg \
       site/assets/images/weinkonsum-3-persona-2.jpg
```

## Deployment

Die Website wird über den bestehenden GitHub-Actions-Workflow `.github/workflows/pages.yml` aus dem Ordner `site/` veröffentlicht. Nach dem Merge nach `main` genügt ein Push; keine weitere Konfiguration nötig.

Live-URL: https://selleriesevi.github.io/portfolio-website/
