"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[6903],{4505:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=o(4848),t=o(8453);const s={id:"intro",title:"Intro - Please Read",description:"Introduction",sidebar_position:0},r="Introduction - Please Read!",a={id:"intro",title:"Intro - Please Read",description:"Introduction",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/Home-Media-Docker/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"intro",title:"Intro - Please Read",description:"Introduction",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/Home-Media-Docker/docs/category/getting-started"}},l={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Copy Env files",id:"copy-env-files",level:3},{value:"Spin up the containers",id:"spin-up-the-containers",level:3},{value:"View Traefik Dashboard",id:"view-traefik-dashboard",level:3},{value:"Get Stuck? Read the docs!",id:"get-stuck-read-the-docs",level:3},{value:"Multiple Compose Files?",id:"multiple-compose-files",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"VPN",id:"vpn",level:3},{value:"IPVanish",id:"ipvanish",level:4},{value:"Nord VPN Setup",id:"nord-vpn-setup",level:4},{value:"Other setup",id:"other-setup",level:2},{value:"Emby",id:"emby",level:3},{value:"Plex",id:"plex",level:3},{value:"Jellyfin",id:"jellyfin",level:3},{value:"Running the Startup Script",id:"running-the-startup-script",level:2},{value:"Where to start after your containers are live",id:"where-to-start-after-your-containers-are-live",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction---please-read",children:"Introduction - Please Read!"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Heads Up!",type:"info",children:[(0,i.jsxs)(n.p,{children:["This project is the companion documentation for ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker",children:"Home-Media-Docker"}),". You will need to do the following in order to start working:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Homemediadocker/Home-Media-Docker.git && cd Home-Media-Docker\n"})}),(0,i.jsx)(n.p,{children:"You can read on to learn more about all the inner workings of this project."})]}),"\n",(0,i.jsxs)(n.p,{children:["In order to start using this package, you may need to make a few modifications for your usecase in the ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/docker-compose.yml",children:(0,i.jsx)(n.code,{children:"docker-compose.yml"})})," or in the associated included ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/compose-files",children:"compose-files"}),". Those two places ultimately drive the entire experience."]}),"\n",(0,i.jsxs)(n.p,{children:["Also ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"read this"})," about ",(0,i.jsx)(n.code,{children:"Docker Compose"})," and what you will need to be able to use it. This project uses ",(0,i.jsx)(n.code,{children:"docker compose"})," V2."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," has a concept of ",(0,i.jsx)(n.code,{children:"includes:"})," at the top level, which will dynamically include or parse the files based on the ",(0,i.jsx)(n.code,{children:"docker compose config"})," that is used at runtime. For instance, in this project, it uses ",(0,i.jsx)(n.code,{children:"profiles"})," so if you ran ",(0,i.jsx)(n.code,{children:"COMPOSE_PROFILES=traefik,jellyfin,sonarr,radarr docker compose config"}),", it would only include those specific configuration yaml files in the final run. That's the most powerful part about profiles in docker, they are essentially like feature flags."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Impatient? Quick start here",type:"success",children:[(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),(0,i.jsx)(n.p,{children:"If you don't want to go through this whole doc site, you can quickly get started by running the following commands (once you pull the repo in)."}),(0,i.jsx)(n.h3,{id:"copy-env-files",children:"Copy Env files"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"  ./scripts/copyenv.sh\n"})}),(0,i.jsx)(n.h3,{id:"spin-up-the-containers",children:"Spin up the containers"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"  COMPOSE_PROFILES=all,jellyfin docker compose up -d\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This will install everything for you plus a media server."}),"\n"]}),(0,i.jsx)(n.h3,{id:"view-traefik-dashboard",children:"View Traefik Dashboard"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["go to ",(0,i.jsx)(n.a,{href:"http://localhost:8080/dashboard#/http/routers",children:"http://localhost:8080/dashboard#/http/routers"})," to see where your CNAMEs for your containers (i.e. ",(0,i.jsx)(n.a,{href:"https://jellyfin.localhost",children:"https://jellyfin.localhost"}),")"]}),"\n"]}),(0,i.jsx)(n.h3,{id:"get-stuck-read-the-docs",children:"Get Stuck? Read the docs!"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/getting-started/docker-info#compose-profiles",children:"Docker Info"})," for all the profiles if you only want a few services"]}),"\n",(0,i.jsxs)(n.li,{children:["See the ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/getting-started/setup-env",children:"Environment page"})," for setting up your different env variables. ",(0,i.jsxs)(n.strong,{children:["You will probably encounter errors when spinning up containers if you just copied them without configuring anything. especially with the ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/getting-started/setup-env#local-shares-recommended",children:"LOCAL_PATHs"})," in the root ",(0,i.jsx)(n.code,{children:".env"}),", ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/home-media-containers/vpn",children:"VPN setup"}),", and the ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/authentik-sso",children:"Authentik SSO Setup"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Each container has its own ",(0,i.jsx)(n.code,{children:".env"})," file generated for you to configure individually and there is a global ",(0,i.jsx)(n.code,{children:".env"})," file to configure shared options."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"multiple-compose-files",children:"Multiple Compose Files?"}),"\n",(0,i.jsx)(n.p,{children:"This project has been refactored as of May 2024 to be more modular and have a different compose file for each service/use case. Everything is still run from the root level, but if you end up making changes to a compose file and I push an update to it, the blast radius is much smaller for conflict resolution."}),"\n",(0,i.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Before you can run the startup script, you need to first setup your ",(0,i.jsx)(n.code,{children:".env"})," for docker to be able to fill in the variables in the docker container setup:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["See the ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/getting-started/setup-env",children:"Setup your Environment"})," section for a detailed overview of the ",(0,i.jsx)(n.code,{children:".env"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Default Location Variables for Local Paths",type:"warning",children:[(0,i.jsx)(n.p,{children:"The default location variables for the local paths are defined as MacOS Volumes. Please change those to be where your local volumes are stored on your local machine."}),(0,i.jsxs)(n.p,{children:["For example, your setup may be a linux machine and your shares are stored in ",(0,i.jsx)(n.code,{children:"/media/MyShare/Movies"})," or your stuff may be on a windows machine and your shares may be in ",(0,i.jsx)(n.code,{children:"%HOMEPATH%/Shares/Movies"})," or something."]}),(0,i.jsx)(n.p,{children:"These are the default values:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'## Local Paths\nLOCAL_MOVIES_PATH="/Volumes/Movies" #CHANGE_ME\nLOCAL_TV_PATH="/Volumes/Television" #CHANGE_ME\nLOCAL_BOOKS_PATH="/Volumes/Books" #CHANGE_ME\nLOCAL_DOWNLOADS_PATH="/Volumes/Downloads" #CHANGE_ME\nLOCAL_BACKUPS_PATH="/Volumes/Backups" #CHANGE_ME\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"After you do that, you need to determine what VPN solution you will use."}),"\n",(0,i.jsx)(n.h3,{id:"vpn",children:"VPN"}),"\n",(0,i.jsxs)(n.p,{children:["Out of the box, you get a lot of stuff pre-configured. It's very opinionated so you may need to modify things like the VPN setup, which currently uses the ",(0,i.jsx)(n.code,{children:"ghcr.io/bubuntux/nordvpn"})," image. This is specifically for someone that may have a NordVPN setup."]}),"\n",(0,i.jsx)(n.h4,{id:"ipvanish",children:"IPVanish"}),"\n",(0,i.jsx)(n.p,{children:"I highly recommend using Nord, but if you don't have a VPN currently and want another option to compare, IPVanish is also an option."}),"\n",(0,i.jsxs)(n.p,{children:["I have not tested this option, but here is an option utilizing ",(0,i.jsx)(n.code,{children:"IPVanish"})," - ",(0,i.jsx)(n.a,{href:"https://hub.docker.com/r/brettmcgin/ipvanish",children:"see here"}),"."]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("strong",{children:"IPVanish Docker Compose example (TLDR)"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'version: "3"\nservices:\n  ipvanish:\n    cap_add:\n      - NET_ADMIN\n      - NET_RAW\n      - SYS_MODULE\n    container_name: ipvanish\n    devices:\n      - /dev/net/tun\n    environment:\n      PASSWORD: YOUR_PASSWORD\n      REGION: YOUR_REGION\n      USERNAME: YOUR_USERNAME\n      image: brettmcgin/private_internet_access\n    ports:\n      - <portsNeededByOtherService>\n  busybox: # example service in the VPN network\n    container_name: busybox\n    image: busybox\n    network_mode: service:ipvanish\n    command: ifconfig | grep inet\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"Comment out the VPN block if you don't need it, or if you want to use your own solution."}),"\n",(0,i.jsx)(n.p,{children:"If you decided to just use Nord, you can move forward."}),"\n",(0,i.jsx)(n.h4,{id:"nord-vpn-setup",children:"Nord VPN Setup"}),"\n",(0,i.jsx)(n.admonition,{title:"Important!",type:"info",children:(0,i.jsxs)(n.p,{children:["Token and subscription to NordVPN Is needed to use this.\n",(0,i.jsx)(n.a,{href:"https://support.nordvpn.com/hc/en-us/articles/20286980309265-How-to-use-a-token-with-NordVPN-on-Linux",children:"See here"})," for configuring/retrieving your ",(0,i.jsx)(n.code,{children:"TOKEN"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.code,{children:"transmission"}),"'s ports are configured to be used through the VPN. Simply remove the ",(0,i.jsx)(n.code,{children:"network_mode: service:vpn"})," from the dockerfile and uncomment the ports if you remove the vpn connection from this dockerfile."]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["You must explicitly configure the network_mode to pass the containers through the VPN connection (if required like for ",(0,i.jsx)(n.code,{children:"transmission"}),"), otherwise they are exposed on the Docker host and your public IP will be exposed!"]})})}),"\n",(0,i.jsx)(n.h2,{id:"other-setup",children:"Other setup"}),"\n",(0,i.jsx)(n.p,{children:"Choose which media server you want to use (if any)."}),"\n",(0,i.jsx)(n.p,{children:"This script is setup with a few things in mind: Media Servers are heavy and absolutely not required to run this dockerized setup; but it is an all inclusive setup and specifically designed for someone to quickly scale and get started in an hour or less with an entire home media setup."}),"\n",(0,i.jsx)(n.h3,{id:"emby",children:"Emby"}),"\n",(0,i.jsx)(n.p,{children:"This is a closed-source media server. It is free to use, but does have some pay walls. It is my go-to solution and it is a great solution for media management. It has a lot of stuff that Plex doesn't have, but also doesn't have a lot of ads (that Plex does have)."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Freemium"}),"\n",(0,i.jsx)(n.li,{children:"Lots of support in forums"}),"\n",(0,i.jsx)(n.li,{children:"Server runs in any environment (Mac, Linux, Windows, Docker)"}),"\n",(0,i.jsx)(n.li,{children:"Works on every device type for clients"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"plex",children:"Plex"}),"\n",(0,i.jsx)(n.p,{children:"This is another option, and one I used to use a lot. Plex offers a lot of simplicity and lots of support for anyone picking it up. It is also Free to use, but does have stuff behind paywalls that can be limiting. Emby does offer more for free than Plex does."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Freemium"}),"\n",(0,i.jsx)(n.li,{children:"Lots of support in forums"}),"\n",(0,i.jsx)(n.li,{children:"Server runs in any environment (Mac, Linux, Windows, Docker)"}),"\n",(0,i.jsx)(n.li,{children:"Works on every device type for clients (more than Emby)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"jellyfin",children:"Jellyfin"}),"\n",(0,i.jsx)(n.p,{children:"This is 100% free and Open Source. Jellyfin is a hard fork of the Emby project before Emby went Closed-Source. Jellyfin is entirely community driven and developed and it offers everything that Emby offers but for free. There are a few things it does out of the box that are not quite what Emby has, and since it is OSS, it can have bugs that may not present the product as stable. However, Jellyfin looks and feels like Emby. Since the code is open, you can do a lot more customization with the setup and UI if you choose to (like adding your own logo or tweaking the entire CSS that comes with it)."}),"\n",(0,i.jsx)(n.p,{children:"The UI is similar, but yet very different from Emby, but lots of nods to the original project's direction and structure."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"100% Free forever"}),"\n",(0,i.jsx)(n.li,{children:"Lots of support in forums"}),"\n",(0,i.jsx)(n.li,{children:"Server runs in any environment (Mac, Linux, Windows, Docker)"}),"\n",(0,i.jsx)(n.li,{children:"Works on every device type for clients (the same as Emby)"}),"\n",(0,i.jsx)(n.li,{children:"Maybe not as stable since it is Open Source, but it has almost feature-for-feature what Emby has."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running-the-startup-script",children:"Running the Startup Script"}),"\n",(0,i.jsx)(n.p,{children:"The Startup Script is not necessary to make this project work, but it does offer some simplicity when running it."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./scripts/startup.sh <mediaServer> ## media server optional\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you want everything including the media server."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./scripts/startup.sh jellyfin\n\n## OR\n\nCOMPOSE_PROFILES=all,jellyfin docker compose up -d\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Everything ",(0,i.jsx)(n.strong,{children:"except"})," a media server do this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./script/startup.sh ## no media server will get created\n\n## OR\n\ndocker compose up -d\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you choose not to use this and want to spin up each service individually, you can just do this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose up -d <serviceName> ## individual service will spin up\n"})}),"\n",(0,i.jsx)(n.h2,{id:"where-to-start-after-your-containers-are-live",children:"Where to start after your containers are live"}),"\n",(0,i.jsxs)(n.p,{children:["The first thing you should do after successfully spinning up your containers is go through all of the URLs found in the ",(0,i.jsx)(n.a,{href:"/docs/category/home-media-containers/",children:"Home Media Containers"})," section and figure out if your containers are accessible."]}),"\n",(0,i.jsx)(n.p,{children:"After that, if you have existing media then go to your media server and setup your Libraries."}),"\n",(0,i.jsxs)(n.p,{children:["If you don't have content, then setup ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/home-media-containers/web-crawlers#prowlarr",children:"Prowlarr"})," first with all of your indexers. Then setup ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/home-media-containers/pvr-clients#sonarr",children:"Sonarr"})," (for TV) and ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/home-media-containers/pvr-clients#radarr",children:"Radarr"})," (For Movies). You will need to obtain an API Key in each of those apps for Prowlarr to function the best. Once that is done, setup ",(0,i.jsx)(n.a,{href:"/Home-Media-Docker/docs/home-media-containers/transmission#transmission",children:"Transmission"}),". I have ",(0,i.jsx)(n.a,{href:"https://pushover.net/",children:"Pushover"})," setup to send me notifications, but most of them work with Discord or Slack as well."]}),"\n",(0,i.jsx)(n.p,{children:"You may want to do this in a different order, but that is how I did it. I do not want to walk you through it with screenshots. If you want to know more information then go to their respective sites for correct configuration of each one. Sonarr, Radarr, Prowlarr, and Transmission are the 4 main pieces of this setup that make it :chef-kiss: and completely automates all of the content gathering."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var i=o(6540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);