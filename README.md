# Docker Compose Home Media Setup

<div style="display: grid; place-content: center">
<img src="./images/home-media-docker-logo.png" alt="home media docker logo" />
</div>

## Builds

This is using Github Actions to build on each push to this repo. I am executing manual `docker compose` scripts and running the custom `./scripts` here.

### Docker Builds

![Build Action](https://github.com/Homemediadocker/Home-Media-Docker/actions/workflows/compose-jellyfin.yml/badge.svg)
![Build Action](https://github.com/Homemediadocker/Home-Media-Docker/actions/workflows/compose-emby.yml/badge.svg)
![Build Action](https://github.com/Homemediadocker/Home-Media-Docker/actions/workflows/compose-plex.yml/badge.svg)
![Build Action](https://github.com/Homemediadocker/Home-Media-Docker/actions/workflows/compose-hassio.yml/badge.svg)

### Custom Scripts

![Build Action](https://github.com/Homemediadocker/Home-Media-Docker/actions/workflows/compose-startup-script.yml/badge.svg)

# Documentation

- [Docs Site](https://Homemediadocker.github.io/Home-Media-Docker/) has moved to a dedicated page - Docusaurus and searchable.

- TODO: Add Traefik and Authentik notes to the docs

## OTHER NOTES

- The system data will be placed in this project directory by default if you change nothing
- Data is placed in `./.containers/` via the `DEFAULT_CONTAINER_DATA_LOCATION` environment variable by default -- this directory is in the `.gitignore` already in the event you decide to use that location.
- Helper scripts can be found in [`./scripts`](./scripts)
- This original script was setup on a Macbook and runs flawlessly on MacOS and Linux (tested). My homelab uses Ubuntu 22.04 and docker (latest) and an Apple Silicon Macbook that is on MacOS Sonoma (latest).
  - Additional configuration may be needed on the volumes in each service (container) section to setup for your machine (if you refer to different paths for an existing data folder and not a fresh install).
