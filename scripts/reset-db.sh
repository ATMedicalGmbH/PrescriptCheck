#!/bin/bash
echo "⚠️ Achtung: Datenbank wird zurückgesetzt!"
read -p "Bist du sicher? (j/N) " confirm
if [[ $confirm == "j" ]]; then
  mongo prescriptcheck --eval "db.dropDatabase()"
  echo "✅ Datenbank zurückgesetzt."
else
  echo "❌ Vorgang abgebrochen."
fi
