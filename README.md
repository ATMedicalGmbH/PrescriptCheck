<p align="center">
  <img src="./assets/logo.PNG" alt="PrescriptCheck Logo" width="200"/>
</p>

<p align="center"><strong>Digitale Rezeptvalidierung für Privatrezepte – Secure prescription validation made in Germany</strong></p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage--nutzung">Nutzung</a> •
  <a href="#contributing">Mitmachen</a> •
  <a href="#license">Lizenz</a>
</p>

---

## Projektbeschreibung / Project Overview

**PrescriptCheck** ist ein innovatives System zur Validierung von Privatrezepten. Es ermöglicht Ärzt:innen, fälschungssichere Rezepte zu erstellen, und Apotheken, die Echtheit dieser Rezepte über eine sichere Plattform zu überprüfen – **digital, effizient und gesetzeskonform**.

**PrescriptCheck** is an innovative prescription validation platform for private prescriptions in Germany. It enables doctors to issue tamper-proof prescriptions and pharmacies to verify authenticity via a secure, real-time system.

---

## Features

- Rezeptausstellung mit QR-Validierung & Sicherheitscode  
  QR-based prescription codes with secure verification
- Druck- & Einlöseverfolgung  
  Tracking of print status and redemption
- Echtzeitprüfung für Apotheken  
  Real-time pharmacy validation portal
- Lizenzmanagement (Stripe, PayPal, Klarna)  
  Fully integrated license and payment handling
- Patientenakte mit Verlauf & Vorlagen  
  Patient history and smart prescription templates
- Digitale Signatur, Audit-Logs, verschlüsselte Exporte  
  Digital signature, audit trail, secure reporting
- Videosprechstunde & Dashboard  
  Telemedicine-ready with real-time analytics

---

## Installation

### Voraussetzungen / Requirements

- Node.js >= 20
- MongoDB (Atlas oder lokal)
- PM2 (für Production Mode)
- nginx (für Reverse Proxy)
- Git

### Lokale Installation

```bash
git clone https://github.com/at-medical/prescriptcheck.git
cd prescriptcheck
npm install
cp .env.example .env
npm run dev
