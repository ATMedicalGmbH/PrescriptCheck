<p align="center">
  <img src="./assets/logo.png" alt="PrescriptCheck Logo" width="200"/>
</p>

<h1 align="center">PrescriptCheck</h1>
<p align="center"><strong>Digitale Rezeptvalidierung für Privatrezepte mit Sicherheitsmechanismen</strong></p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#nutzung">Nutzung</a> •
  <a href="#contributing">Mitmachen</a> •
  <a href="#license">Lizenz</a>
</p>

---

## Beschreibung

**PrescriptCheck** ist ein innovatives System zur Validierung von Privatrezepten. Es ermöglicht Ärzt:innen, fälschungssichere Rezepte zu erstellen und Apotheken, die Echtheit dieser Rezepte durch einen Verifizierungsprozess zu prüfen – **digital, sicher und gesetzeskonform**.

Entwickelt für die Praxis, bereit für die Zukunft: mit Barcode-Validierung, Lizenzmanagement, Apothekenmodul, Videosprechstunde und vollständiger Telematik-Integration in Planung.

---

## Features

- Rezeptausstellung mit QR-Validierung & Sicherheitscode
- Druckstatus & Einlöseverfolgung
- Apotheken-Verifizierungsportal mit Echtzeitprüfung
- Lizenzmodelle mit Stripe, PayPal & Klarna Integration
- Testlizenzen & automatische Benachrichtigungen
- Patientenakte mit Medikamentenverlauf & Rezeptvorlagen
- Digitale Signatur, Audit-Logs & Export verschlüsselter Prüfberichte
- Videosprechstunden-Modul
- Dark Mode, Dashboard & Statistikfunktionen

---

## Installation

### Voraussetzungen

- Node.js >= 20
- MongoDB (Cloud oder lokal)
- PM2
- nginx (für Deployment)
- Git

### Lokale Installation

```bash
git clone https://github.com/at-medical/prescriptcheck.git
cd prescriptcheck
npm install
cp .env.example .env   # .env Datei konfigurieren
npm run dev