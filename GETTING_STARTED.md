# Getting Started

In order to start using this package, you may need to make a few modifications for your usecase in the [`docker-compose.yml`](./docker-compose.yml). That file ultimately drives the entire experience.

Also [read this](https://docs.docker.com/compose/install/) about `Docker Compose` and what you will need to be able to use it. This project uses `docker compose` V2.

## Environment Variables

Before you can run the startup script, you need to first setup your `.env` for docker to be able to fill in the variables in the docker container setup:

```bash
cp .env-example .env
```

Literally everything in the docker compose file is variablized as much as possible. 
<details>
    <summary><strong>.env file explained</strong></summary>

```bash
## NORDVPN SPECIFIC VARIABLES
TOKEN=11111111111223123123123123asdba123 # This is specific to nord VPN, but the Private key is the better option. Not used in this docker-compose
PRIVATE_KEY=sdlfkabakjhslkdgjadlfkjasdfhaskdjhagsdg ##CHANGE ME - follow instructions to obtain the private key

## User Host Machine - unix machines can find this by doing `id <username>`
UID="111" ##CHANGE ME this is usually the user id on the host machine that will be running the docker compose command. But you can make this be a less privileged user and that is fine too
GID="111" ##CHANGE ME group id of the associated user(s) that may be running this. This is passed into the docker env so keep in mind that this will be the only one in there.
TIMEZONE="America/Chicago" ##CHANGE ME - Your timezone. This gets passed into basically every container.

## Samba
SMB_USER="samba" ##CHANGE ME If you are on Mac, this SMB user is what will be used to mount the network drives on your machine.
SMB_PASS="test" ##CHANGE ME If you are on Mac, this SMB password is what will be used to mount the network drives on your machine.

## unix machines can find this by doing `id <username>` for the desired user's id on that machine
SMB_UID="12312" ##CHANGE ME The user ID that has access to the smb shares
SMB_GID="123123" ##CHANGE ME the group ID that has access to the smb shares

## Network Paths
MOVIE_NETWORK_SHARE="//IP.IP.IP.IP/SHARENAME" ##CHANGE ME network share for movies content
TV_NETWORK_SHARE="//IP.IP.IP.IP/SHARENAME" ##CHANGE ME network share for tv content

## Local Paths
LOCAL_MOVIES_PATH="/Volumes/Movies" # #CHANGE ME - this is if you don't use the network shares in the dockerfile, and want to mount them on the host machine.
LOCAL_TV_PATH="/Volumes/Television" # #CHANGE ME - this is if you don't use the network shares in the dockerfile, and want to mount them on the host machine.
LOCAL_DOWNLOADS_PATH="/Volumes/Downloads" # #CHANGE ME - this is if you don't use the network shares in the dockerfile, and want to mount them on the host machine. This is for transmission specifically.

## Jellyseerr
JELLYSEER_LOG_LEVEL="info" # change this to `debug` to show more logs.
JELLYSEER_TYPE="emby" # #CHANGE ME -  emby, jellyfin, plex --- those are all options

## PLEX
PLEX_CLAIM=""
PLEX_VERSION="docker"

## Komga
KOMGA_LIBRARIES_SCAN_STARTUP="true"
KOMGA_JAVA_OPTS="-Xmx8g" ## 8 GB - this helps reduce times waiting for pages to process and reduces crashing
KOMGA_REMEMBERME_KEY="" #CHANGE ME - need to add this to be able to remember a login

## JACKETT - THIS IS PROBABLY NOT USED BUT HERE THEY ARE
JACKETT_RUN_OPTS=""
JACKETT_AUTO_UPDATE="true"

## TRANSMISSION
TRANSMISSION_USER="transmission" ### #CHANGE ME
TRANSMISSION_PASS="noissimsnart" ### #CHANGE ME
TRANSMISSION_PEERPORT=""
TRANSMISSION_HOST_WHITELIST=""

## DUPLICATI
DUPLICATI_CLI_ARGS=""

#######################################################################################################################
##################################### DANGER BELOW - THESE ARE DEFAULT VALUES FOR PORTS ###############################
#######################################################################################################################

## EXPOSED PORTS --- 
## These are defaults and can be changed, 
## but use caution and take backups because changing these 
## may lead to loss of access to a service
PORTAINER_HOST_PORT="9000"
PORTAINER_HOST_PORT_SSL="49443"
TRANSMISSION_HOST_PORT="9091"
EMBY_HOST_PORT="8096"
EMBY_HOST_PORT_SSL="8920"
JELLYFIN_HOST_PORT="8096"
JELLYFIN_HOST_PORT_SSL="8920"
PLEX_HOST_PORT="32400"
KOMGA_HOST_PORT="8341"
JELLYSEERR_HOST_PORT="5055"
SONARR_HOST_PORT="8989"
SONARR_HOST_PORT_SSL="9898"
RADARR_HOST_PORT="7878"
PROWLARR_HOST_PORT="9696"
JACKETT_HOST_PORT="9117"
DUPLICATI_HOST_PORT="8200"

```

</details>

After you do that, you need to determine what VPN solution you will use.

### VPN
Out of the box, you get a lot of stuff pre-configured. It's very opinionated so you may need to modify things like the VPN setup, which currently uses the `ghcr.io/bubuntux/nordlynx` image. This is specifically for someone that may have a NordVPN setup. 


#### IPVanish
I highly recommend using Nord, but if you don't have a VPN currently and want another option to compare, IPVanish is also an option.

I have not tested this option, but here is an option utilizing `IPVanish` - [see here](https://hub.docker.com/r/brettmcgin/ipvanish).

<details>
    <summary><strong>IPVanish Docker Compose example (TLDR)</strong></summary>

```yaml
version: "3"
services:
  ipvanish:
    cap_add:
      - NET_ADMIN
      - NET_RAW
      - SYS_MODULE
    container_name: ipvanish
    devices:
      - /dev/net/tun
    environment:
      PASSWORD: YOUR_PASSWORD
      REGION: YOUR_REGION
      USERNAME: YOUR_USERNAME
      image: brettmcgin/private_internet_access
    ports:
      - <portsNeededByOtherService>
  busybox: # example service in the VPN network
    container_name: busybox
    image: busybox
    network_mode: service:ipvanish
    command: ifconfig | grep inet
```

</details>

Comment out the VPN block if you don't need it, or if you want to use your own solution.

If you decided to just use Nord, you can move forward.

#### Nord VPN Setup
Private Key and subscription to NordVPN Is needed to use this.

[See here](https://github.com/bubuntux/nordlynx#how-to-get-your-private_key) for configuring/retrieving your `PRIVATE_KEY`.

Note that `transmission`'s ports are configured to be used through the VPN. Simply remove the `network_mode: service:vpn` from the dockerfile and uncomment the ports if you remove the vpn connection from this dockerfile.

**Also note that you must explicitly configure the network_mode to pass the containers through the VPN connection (if required like for `transmission`), otherwise they are exposed on the Docker host and your public IP will be exposed!**

## Other setup

Choose which media server you want to use (if any).

This script is setup with a few things in mind: Media Servers are heavy and absolutely not required to run this dockerized setup; but it is an all inclusive setup and specifically designed for someone to quickly scale and get started in an hour or less with an entire home media setup. See the [`README.md`](./README.md) for more information about each image.

### Emby
This is a closed-source media server. It is free to use, but does have some pay walls. It is my go-to solution and it is a great solution for media management. It has a lot of stuff that Plex doesn't have, but also doesn't have a lot of ads (that Plex does have).
- Freemium
- Lots of support in forums
- Server runs in any environment (Mac, Linux, Windows, Docker)
- Works on every device type for clients

### Plex
This is another option, and one I used to use a lot. Plex offers a lot of simplicity and lots of support for anyone picking it up. It is also Free to use, but does have stuff behind paywalls that can be limiting. Emby does offer more for free than Plex does.
- Freemium
- Lots of support in forums
- Server runs in any environment (Mac, Linux, Windows, Docker)
- Works on every device type for clients (more than Emby)

### Jellyfin
This is 100% free and Open Source. Jellyfin is a hard fork of the Emby project before Emby went Closed-Source. Jellyfin is entirely community driven and developed and it offers everything that Emby offers but for free. There are a few things it does out of the box that are not quite what Emby has, and since it is OSS, it can have bugs that may not present the product as stable. However, Jellyfin looks and feels like Emby. Since the code is open, you can do a lot more customization with the setup and UI if you choose to (like adding your own logo or tweaking the entire CSS that comes with it).
- 100% Free forever
- Lots of support in forums
- Server runs in any environment (Mac, Linux, Windows, Docker)
- Works on every device type for clients (more than Emby)
- Maybe not as stable since it is Open Source, but it has almost feature-for-feature what Emby has.

## Running the Startup Script
The Startup Script is not necessary to make this project work, but it does offer some simplicity when running it. 

```bash
./scripts/startup.sh <mediaServer> ## media server optional
```

If you want everything including the media server.
```bash
./scripts/startup.sh jellyfin

## OR

docker compose --profile jellyfin up -d
```

Everything **except** a media server do this:
```bash
./script/startup.sh ## no media server will get created

## OR

docker compose up -d
```

If you choose not to use this and want to spin up each service individually, you can just do this:

```bash
docker compose up -d <serviceName> ## individual service will spin up
```

## Where to start
The first thing you should do after successfully spinning up your containers is go through all of the URLs found on the [README.md](./README.md) and figure out if your containers are accessible. 

After that, if you have existing media then go to your media server and setup your Libraries.

If you don't have content, then setup [Prowlarr](./README.md#prowlarr) first with all of your indexers. Then setup [Sonarr](./README.md#sonarr) (for TV) and [Radarr](./README.md#radarr) (For Movies). You will need to obtain and API Key in each of those apps for Prowlarr to function the best. Once that is done, setup [Transmission](./README.md#transmission). I have [Pushover](https://pushover.net/) setup to send me notifications, but most of them work with Discord or Slack as well. 

You may want to do this in a different order, but that is how I did it. I do not want to walk you through it with screenshots. If you want to know more information then go to their respective sites for correct configuration of each one. Sonarr, Radarr, Prowlarr, and Transmission are the 4 main pieces of this setup that make it :chef-kiss: and completely automates all of the content gathering.