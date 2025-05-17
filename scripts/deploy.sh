#!/bin/bash
echo "🔄 Starte Deployment für PrescriptCheck..."
pm2 stop all
git pull origin main
npm install
pm2 start ecosystem.config.js
echo "✅ Deployment abgeschlossen."
