
# PrescriptCheck

**PrescriptCheck** ist eine webbasierte Plattform zur Validierung von privatärztlichen Rezepten. Sie schützt Apotheken, Ärzt:innen und Patient:innen vor Rezeptfälschung und ermöglicht eine revisionssichere Nachverfolgbarkeit.

---

## Funktionen

- **Rezeptvalidierung** durch Apotheken über QR/Barcode
- **Rezeptverwaltung** inkl. Status: gültig, abgelaufen, gesperrt, eingelöst
- **Seriennummernregistrierung** durch Ärzte mit digitalem Stempel
- **Sicherheitsmerkmale** wie Ablaufdatum, PDF417-Barcode, QR-Code
- **Lizenzen & Abrechnung** über Stripe, PayPal & Klarna
- **Patientenakte** und Rezeptverlauf pro Patient
- **SCORM-kompatible Lerneinheiten**
- **Dark Mode**, responsive Oberfläche, Multi-Faktor-Authentifizierung
- **Auditing, Protokolle und Exportfunktionen**
- **Videosprechstunde und Telemedizin-Modul (Beta)**

---

## Technologie-Stack

| Komponente     | Technologie        |
|----------------|--------------------|
| Backend        | Node.js, Express   |
| Frontend       | Vue.js             |
| Datenbank      | MongoDB Atlas      |
| Authentifizierung | JWT, SMTP        |
| Deployment     | PM2, Nginx, Certbot|

---

## Lokales Setup

```bash
git clone https://github.com/<your-username>/prescriptcheck.git
cd prescriptcheck/backend
cp .env.example .env
npm install
npm start
```

Frontend (optional separat):
```bash
cd ../frontend
npm install
npm run dev
```

---

## Deployment

Siehe `docs/deployment-guide.md` für vollständige Anleitungen inkl. PM2, Nginx & HTTPS.

---

## Lizenz

© 2025 AT Medical GmbH – Alle Rechte vorbehalten  
Vertrieb, Nutzung und Reproduktion nur mit ausdrücklicher Genehmigung.
