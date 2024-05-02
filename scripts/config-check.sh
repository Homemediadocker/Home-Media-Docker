#!/bin/bash
echo "Sourcing Environment Variables from .env file"
set -a; source .env; set +a

if [ -z "$1" ]
  then
    echo "NOTICE: You didn't pass a media server argument. Pass \"emby\", \"jellyfin\", or \"plex\" to tear down those media servers"
  else
  MEDIA_SERVER=$1
  COMPOSE_PROFILES=$COMPOSE_PROFILES,$MEDIA_SERVER
fi

echo "COMPOSE_PROFILES=${COMPOSE_PROFILES}"

docker compose config