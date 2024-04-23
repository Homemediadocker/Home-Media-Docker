#!/bin/bash
if [ -z "$1" ]
  then
    echo "NOTICE: You didn't pass a media server argument. Pass \"emby\", \"jellyfin\", or \"plex\" to tear down those media servers"
  else
  MEDIA_SERVER=$1
fi

case $1 in "emby") docker compose --profile $1 up -d;;
"jellyfin") docker compose --profile $1 up -d;;
"plex") docker compose --profile $1 up -d ;;
"hassio") docker compose up -d homeassistant zwavejs portainer;;
*)
echo "Warning. You didn't pass a media server in - pass emby, plex, or jellyfin to spin up one of those containers"
docker compose up -d;;
esac