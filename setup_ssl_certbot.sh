#!/bin/bash

# Domain und Webroot
DOMAIN=prescriptioncheck.de
EMAIL=admin@prescriptioncheck.de
WEBROOT=/var/www/certbot

# Certbot installieren (falls noch nicht vorhanden)
apt update && apt install -y certbot python3-certbot-nginx

# SSL-Zertifikat anfordern
certbot certonly --webroot -w $WEBROOT -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

# Automatische Verlängerung aktivieren
echo "0 3 * * * /usr/bin/certbot renew --quiet" | crontab -