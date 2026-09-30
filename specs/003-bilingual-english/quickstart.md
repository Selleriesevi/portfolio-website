# Quickstart: Zweisprachiges Portfolio (DE + EN)

**Feature**: `003-bilingual-english` | **Date**: 2026-09-29

## Lokal starten

```bash
cd site
python3 -m http.server 8000
```

- DE Home: http://localhost:8000/
- EN Home: http://localhost:8000/en/

## Zu prüfende URLs

| Pair | DE | EN |
|------|----|----|
| Home | `/index.html` | `/en/index.html` |
| CV | `/cv.html` | `/en/cv.html` |
| Einkaufsliste | `/case-studies/einkaufsliste.html` | `/en/case-studies/einkaufsliste.html` |
| Übersichtlichkeit | `/case-studies/uebersichtlichkeit.html` | `/en/case-studies/uebersichtlichkeit.html` |
| Wunddokumentation | `/case-studies/wunddokumentation.html` | `/en/case-studies/wunddokumentation.html` |
| Weinkonsum | `/case-studies/weinkonsum.html` | `/en/case-studies/weinkonsum.html` |

## Abnahmeprüfung

### Language switcher (FR-004–006, SC-002, SC-005)

- [x] Auf jeder DE- und EN-Seite: kompakte Labels **DE | EN** in Header und Mobile-Flyout
- [x] Aktive Sprache visuell erkennbar
- [x] Klick auf die andere Sprache öffnet das korrekte Pendant (nicht nur Home)
- [x] Kein horizontaler Overflow bei 320 / 390 / 768 / 1440 px

### English content (FR-002–003, FR-007–008, SC-004)

- [x] Alle 6 EN-Seiten: `lang="en"`, Texte/Navigation/alts auf Englisch (Agent-Entwurf; Feinschliff beim Review)
- [x] Abschnittsstruktur entspricht DE-Pendant
- [x] Interne Links auf EN-Seiten zeigen nach `/en/…`
- [x] Owner hat EN-Texte freigegeben

### German regression (FR-001, FR-011–012, SC-003)

- [x] Root-URLs weiterhin Deutsch
- [x] Kein Auto-Redirect anhand Browser-Sprache
- [x] Bestehende Bookmarks/Share-Links funktionieren

### Images (FR-009, SC-006)

- [x] EN-Seiten nutzen dieselben Screenshot-Dateien wie DE; separate EN-UI-Bilder sind nicht erforderlich

### Constitution

- [x] `.specify/memory/constitution.md` erlaubt DE + EN (Default DE)

## Owner review checklist (vor gemeinsamem Go-live)

- [x] `en/index.html`
- [x] `en/cv.html`
- [x] `en/case-studies/einkaufsliste.html`
- [x] `en/case-studies/uebersichtlichkeit.html`
- [x] `en/case-studies/wunddokumentation.html`
- [x] `en/case-studies/weinkonsum.html`
