#!/bin/bash
if [ ! -f .env ]; then
  echo "Global .env not found - Creating global .env file"
  cp .env-example .env-test
fi



for f in ./compose-files/*/; do
  if [ ! -f "$f.env" ]; then
    echo "CREATE - $f.env"
    cp "$f.env-example" "$f.env"
  fi
  # echo "Copying .env-example into .env for $f"
  # cp "$f/.env-example" "$f/.env"
done