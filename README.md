<p align="center">
  <img src="https://www.at-medical.de/logo.png" alt="AT Medical Logo" height="100">
</p>

**PrescriptCheck** ist eine digitale Plattform zur Validierung von Privatrezepten in Deutschland. Ziel ist es, Apotheken eine sichere Möglichkeit zu geben, die Echtheit und Gültigkeit eines Rezepts zu überprüfen – datenschutzkonform, revisionssicher und praxisnah.

---

## Features

- Digitale Rezeptprüfung mit QR-Code oder Seriennummer  
- Statusverwaltung: gültig, eingelöst, gesperrt, abgelaufen  
- PDF417-Barcode-Generierung und Validierung  
- Apothekenprüfung mit Echtzeit-Statusabfrage  
- Benutzerrollen: Arzt, Apotheke, Admin  
- Lizenz- und Zahlungsabwicklung (Stripe, PayPal, Klarna)  
- Telemedizin-Modul (Videoberatung)  
- SCORM-kompatible Lernmodule für medizinisches Fachpersonal  
- Mehrsprachige Oberfläche  
- PM2- und Docker-Deployment  
- GitHub Actions CI/CD Workflows  

---

## Projektstruktur

```
/backend            → Node.js (Express) API  
/frontend           → Vue 3 App mit Vite  
/scripts            → Shell-Skripte für Deployment, SSL, Seeding  
/docs               → Dokumentation, Architektur, Indexseiten  
/scorm              → SCORM Module für Weiterbildung  
.github/workflows   → CI/CD Konfiguration (GitHub Actions)  
pm2.config.js       → Prozessmanager-Konfiguration (PM2)  
Dockerfile          → Docker-Build-Anleitung  
docker-compose.yml  → Lokale Multi-Service-Entwicklung  
.env.template       → Beispiel für Produktionskonfiguration  
```

---

## Setup

### 1. Klonen & Installieren

```bash
git clone https://github.com/ATMedicalGmbH/PrescriptCheck.git
cd PrescriptCheck
npm install
```

### 2. Umgebungsvariablen

Erstelle eine Datei `.env.production` auf Basis der Vorlage `.env.template`:

```env
NODE_ENV=production
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/prescriptcheck
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_live_xxx
SMTP_HOST=smtp.example.com
SMTP_USER=mailer@example.com
SMTP_PASS=securepassword
```

---

## Lokaler Start

### Entwicklung:

```bash
npm run dev         # Frontend via Vite
npm run backend     # Backend via Node.js
```

### Produktion mit PM2:

```bash
pm2 start pm2.config.js
```

### Produktion mit Docker:

```bash
docker build -t prescriptcheck .
docker run -p 3000:3000 prescriptcheck
```

### Mit Docker Compose:

```bash
docker-compose up --build
```

---

## Sicherheit & .gitignore

```gitignore
node_modules/
.env
.env.production
.env.template
dist/
.vscode/
logs/
*.log
```

---

## GitHub Actions CI/CD

### 1. CI: Build & Test Workflow (`ci.yml`)

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: cd frontend && npm install && npm run build
      - run: npm run backend &
      - run: sleep 5 && curl --fail http://localhost:3000 || exit 1
```

### 2. Release Workflow (`release.yml`)

```yaml
name: Create Release
on:
  push:
    tags:
      - 'v*.*.*'
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: cd frontend && npm install && npm run build
      - uses: softprops/action-gh-release@v1
        with:
          generate_release_notes: true
```

### 3. Docker Deployment Workflow (`docker.yml`)

```yaml
name: Build and Push Docker Image
on:
  push:
    branches: [ main ]
jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: yourdockerhubname/prescriptcheck:latest
```

### 4. SSH Deployment Workflow (`deploy.yml`)

```yaml
name: Deploy to Server
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: sudo apt-get install openssh-client -y
      - uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /home/ubuntu/prescriptcheck
            git pull
            npm install
            pm2 restart prescriptcheck
```

---

## Lizenz

MIT License – © 2025 AT Medical GmbH

---

## Kontakt

**Projektleitung:** Andreas Tremml  
**Support:** support@at-medical.de  
**Webseite:** [www.at-medical.de](https://www.at-medical.de)
