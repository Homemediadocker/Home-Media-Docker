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
echo "Press 1 to delete Images and Containers"
echo "Press 2 to delete ALL DATA related to your container instances. This is DANGEROUS and will cause data loss!"
echo "Press any other key to exit"
read  -n 1 -p "Choose an option" mainmenuinput
echo ""
if [[ "$mainmenuinput" = "1" ]]; then
if [ -z "$1" ]
  then
    echo "#####################################################################################"
    echo "----Warning. You didn't pass a media server in ----"
    echo "pass emby, plex, or jellyfin to tear down those containers"
    echo "#####################################################################################"
    docker compose down
  else
    docker compose down
fi
echo ""
echo "Removing Images (if they are not associated with a running container)"
echo ""
docker rmi $(docker images -q)

elif [[ "$mainmenuinput" = "2" ]]; then
    echo "###################################################################################################################"
    echo 🚦🚦🚦🚦🚦🚦 Are you sure you want to delete your data in your .containers directory?  🚦🚦🚦🚦🚦🚦
        echo "###################################################################################################################"
    read  -n 1 -p " This is program data related to your instance, this is DESTRUCTIVE and DANGEROUS and will cause data loss! (y/n)" deleteAllData

    if [[ $deleteAllData = "y" ]]; then
    echo ""
    echo "🔥🔥🔥🔥🔥🔥🔥 Removing all data! This is destructive! Killing it with fire! 🔥🔥🔥🔥🔥🔥🔥"
    rm -rf .containers
    else
    echo ""
    echo "Okay Not deleting everything"
    exit 0;
    fi
else
echo "Doing nothing."
  exit 0
fi
exit 0