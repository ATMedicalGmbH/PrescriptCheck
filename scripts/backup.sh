#!/bin/bash
echo "📦 Erstelle Backup der Datenbank..."
TIMESTAMP=$(date +"%F")
BACKUP_DIR="backups/$TIMESTAMP"
mkdir -p $BACKUP_DIR
mongodump --db prescriptcheck --out $BACKUP_DIR
echo "✅ Backup gespeichert unter $BACKUP_DIR"
