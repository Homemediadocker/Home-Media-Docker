"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[1061],{2564:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>E});var t=s(4848),o=s(8453);const i={id:"setup-env",title:"Setup your Env",description:"Commands to setup your environment",sidebar_position:2},a="Env Setup",r={id:"getting-started/setup-env",title:"Setup your Env",description:"Commands to setup your environment",source:"@site/docs/getting-started/setup-env.mdx",sourceDirName:"getting-started",slug:"/getting-started/setup-env",permalink:"/Home-Media-Docker/docs/getting-started/setup-env",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/getting-started/setup-env.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"setup-env",title:"Setup your Env",description:"Commands to setup your environment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/Home-Media-Docker/docs/getting-started/prerequisites"},next:{title:"Docker Info",permalink:"/Home-Media-Docker/docs/getting-started/docker-info"}},l={},E=[{value:"Default Container Location",id:"default-container-location",level:2},{value:"Compose Profiles",id:"compose-profiles",level:2},{value:"Nord VPN Variables",id:"nord-vpn-variables",level:2},{value:"Private Key / TOKEN",id:"private-key--token",level:3},{value:"IP Configuration",id:"ip-configuration",level:3},{value:"UID/GID",id:"uidgid",level:2},{value:"Local Shares (Recommended)",id:"local-shares-recommended",level:2},{value:"Samba",id:"samba",level:2},{value:"SMB (Samba) Shares User and Pass",id:"smb-samba-shares-user-and-pass",level:3},{value:"SMB UID and GID",id:"smb-uid-and-gid",level:3},{value:"Network Shares",id:"network-shares",level:3},{value:"Jellyseer",id:"jellyseer",level:2},{value:"Transmission",id:"transmission",level:2},{value:"Dashy",id:"dashy",level:2},{value:"Pihole",id:"pihole",level:2},{value:"ZWave JS and Zigbee2MQTT",id:"zwave-js-and-zigbee2mqtt",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"env-setup",children:"Env Setup"}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,t.jsxs)(n.p,{children:["Additional modification can be done in the ",(0,t.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/docker-compose.yml",children:"docker-compose.yml"}),", but most things are variablized for you in the .env file. Please read through these steps to configure for your host machine."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Do this to create your ",(0,t.jsx)(n.code,{children:".env"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cp .env-example .env\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You will need to adjust the newly created ",(0,t.jsx)(n.code,{children:".env"})," file with values specific to your machine. These values are marked with a comment ",(0,t.jsx)(n.code,{children:"#CHANGE_ME"})]}),"\n",(0,t.jsx)(n.p,{children:"Literally everything in the docker compose file is variablized as much as possible."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:".env file explained"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'## CONTAINER  DATA LOCATION\n# This will place the container data in the current repo location.\n# You can change this and all data will be placed in that location.\nDEFAULT_CONTAINER_DATA_LOCATION="./.containers" # Change this if you want the data outside of this repo\nTRAEFIK_CONFIG_DIRECTORY="../traefik-data"\nPROJECT_HOSTNAME="localhost"\n\n####### TRAEFIK/ACME ############\nCF_API_EMAIL="" # Cloudflare email address used\nCF_DNS_API_TOKEN="" # Cloudflare api token (global)\nACME_DNS_CHALLENGE_PROVIDER="cloudflare" # The provider name -- cloudflare and netlify are supported out of the box\nTRAEFIK_TLS_CERTRESOLVER="cloudflare" # The provider name -- cloudflare and netlify are supported out of the box\nTRAEFIK_DASHBOARD_CREDENTIALS=admin:$$2y$$05$$cqTXRio8juH740Wo7m4y5OWFbQKB0eTaHexKPYmssn4qctTe8ElQe # just admin/password but hashed.\nTRAEFIK_NETLIFY_TOKEN="asdfasdfasdfasdfasdfasdfasdfasdf" # API Token from netlify dashboard\n\n## COMPOSE_PROFILES ---- Use this variable to select which containers you would like to spin up.\n## Or you can just pass "all" into the variable and it will spin up everything (except the media server, that requires you to pass it in yourself)\n# COMPOSE_PROFILES=all\n\n## or all with media server\n# COMPOSE_PROFILES=all,jellyfin\n\n## Or just individually comma separate your services.\nCOMPOSE_PROFILES=bookstack,dashy,duplicati,jellyseerr,komga,pihole,portainer,prowlarr,radarr,sonarr,transmission,vpn,jellyfin,homeassistant,zwavejs,zigbee2mqtt,mealie\n\n## OPTIONS ---- bookstack,dashy,duplicati,jellyseerr,komga,pihole,portainer,prowlarr,radarr,sonarr,transmission,vpn\n## MORE OPTIONS- jellyfin,emby,plex,homeassistant,zwavejs,zigbee2mqtt,homeAutomation,all\n\n############################################\n########## CONTAINER NAMES #################\n############################################\nBOOKSTACK_APP_CONTAINER_NAME="bookstack"\nBOOKSTACK_DB_CONTAINER_NAME="bookstack_db"\nDASHY_CONTAINER_NAME="dashy"\nDUPLICATI_CONTAINER_NAME="duplicati"\nEMBY_CONTAINER_NAME="emby"\nHEIMDALL_CONTAINER_NAME="heimdall"\nHOME_ASSISTANT_CONTAINER_NAME="homeassistant"\nJACKETT_CONTAINER_NAME="jackett"\nJELLYFIN_CONTAINER_NAME="jellyfin"\nJELLYSEERR_CONTAINER_NAME="jellyseerr"\nKOMGA_CONTAINER_NAME="komga"\nMEALIE_CONTAINER_NAME="mealie"\nMEALIE_POSTGRES_CONTAINER_NAME="mealie-postgres"\nPIHOLE_CONTAINER_NAME="pihole"\nPLEX_CONTAINER_NAME="plex"\nPORTAINER_CONTAINER_NAME="portainer"\nPROWLARR_CONTAINER_NAME="prowlarr"\nRADARR_CONTAINER_NAME="radarr"\nSONARR_CONTAINER_NAME="sonarr"\nTRAEFIK_CONTAINER_NAME="traefik"\nTRANSMISSION_CONTAINER_NAME="transmission"\nVPN_CONTAINER_NAME="vpn"\nZIGBEE2MQTT_CONTAINER_NAME="zigbee2mqtt"\nZWAVE_JS_CONTAINER_NAME="zwavejs"\n\n## NORDVPN SPECIFIC VARIABLES\nTOKEN=11111111111223123123123123asdba123 # This is specific to nord VPN - found in the account settings and generated by the user\nPRIVATE_KEY=sdlfkabakjhslkdgjadlfkjasdfhaskdjhagsdg ##CHANGE ME - follow instructions to obtain the private key\nNORD_TECHNOLOGY=NordLynx # NordLynx or OpenVPN\nNORD_CONNECT_AREA=United_States # You can separate this by country and city too, but if you leave it blank it will just default to the recommended fastest server\n\nVPN_DNS="8.8.8.8,8.8.4.4" #CHANGE_ME - this is google\'s DNS if that works for you\nVPN_ALLOWED_IPS="0.0.0.0/0" #CHANGE_ME - this allows all IPs\nVPN_NET_LOCAL="172.16.0.0/12,192.168.0.0/16" #CHANGE_ME if your network doesn\'t fit this schema\n\n## User Host Machine - unix machines can find this by doing `id <username>`\nUID="111" ##CHANGE ME this is usually the user id on the host machine that will be running the docker compose command. But you can make this be a less privileged user and that is fine too\nGID="111" ##CHANGE ME group id of the associated user(s) that may be running this. This is passed into the docker env so keep in mind that this will be the only one in there.\nTIMEZONE="America/Chicago" ##CHANGE ME - Your timezone. This gets passed into basically every container.\n\n## Samba\nSMB_USER="samba" ##CHANGE ME If you are on Mac, this SMB user is what will be used to mount the network drives on your machine.\nSMB_PASS="test" ##CHANGE ME If you are on Mac, this SMB password is what will be used to mount the network drives on your machine.\n\n## unix machines can find this by doing `id <username>` for the desired user\'s id on that machine\nSMB_UID="12312" ##CHANGE ME The user ID that has access to the smb shares\nSMB_GID="123123" ##CHANGE ME the group ID that has access to the smb shares\n\n## Network Paths\nMOVIE_NETWORK_SHARE="//IP.IP.IP.IP/SHARENAME" ##CHANGE ME network share for movies content\nTV_NETWORK_SHARE="//IP.IP.IP.IP/SHARENAME" ##CHANGE ME network share for tv content\n\n## Local Paths\nLOCAL_MOVIES_PATH="/Volumes/Movies" # #CHANGE ME - this is if you don\'t use the network shares in the dockerfile, and want to mount them on the host machine.\nLOCAL_TV_PATH="/Volumes/Television" # #CHANGE ME - this is if you don\'t use the network shares in the dockerfile, and want to mount them on the host machine.\nLOCAL_BOOKS_PATH="/Volumes/Books" #CHANGE_ME - this is if you don\'t use the network shares in the dockerfile, and want to mount them on the host machine.\nLOCAL_DOWNLOADS_PATH="/Volumes/Downloads" # #CHANGE ME - this is if you don\'t use the network shares in the dockerfile, and want to mount them on the host machine. This is for transmission specifically.\n\n## Jellyseerr\nJELLYSEER_LOG_LEVEL="info" # change this to `debug` to show more logs.\nJELLYSEER_TYPE="emby" # #CHANGE ME -  emby, jellyfin, plex --- those are all options\n\n## PLEX\nPLEX_CLAIM=""\nPLEX_VERSION="docker"\n\n## Komga\nKOMGA_LIBRARIES_SCAN_STARTUP="true"\nKOMGA_JAVA_OPTS="-Xmx8g" ## 8 GB - this helps reduce times waiting for pages to process and reduces crashing\nKOMGA_REMEMBERME_KEY="" #CHANGE ME - need to add this to be able to remember a login\n\n## JACKETT - THIS IS PROBABLY NOT USED BUT HERE THEY ARE\nJACKETT_RUN_OPTS=""\nJACKETT_AUTO_UPDATE="true"\n\n## TRANSMISSION\nTRANSMISSION_USER="transmission" ### #CHANGE ME\nTRANSMISSION_PASS="noissimsnart" ### #CHANGE ME\nTRANSMISSION_PEERPORT=""\nTRANSMISSION_HOST_WHITELIST=""\n\n## DUPLICATI\nDUPLICATI_CLI_ARGS=""\n\n## ZWAVE2MQTT (ZWAVEJS)\nZWAVE_STICK_DEVICE_PATH="/path/to/usb" #CHANGE_ME\n# ZWAVE_STICK_DEVICE_PATH="/dev/cu.usbserial-533D0042421"\n\n## Zigbee2MQTT (Zigbee)\nZIGBEE_STICK_DEVICE_PATH="/path/to/usb" #CHANGE_ME\n#ZIGBEE_STICK_DEVICE_PATH="/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00"\n\n## PIHOLE\nPIHOLE_SECURE_WEB_PASSWORD="pihole"\nPIHOLE_STATIC_IP_ADDRESS="192.168.1.200"\nPIHOLE_NETWORK_GATEWAY="192.168.1.1"\nPIHOLE_NETWORK_ADDRESS_POOL="192.168.1.0/24"\nPIHOLE_NETWORK_INTERFACE="eth0"\n\n## Dashy\n# Your Backup ID: xxxx-xxxx-xxxx-xxxx\nDASHY_CONFIG_LOCATION="./dashy-config.yml"\n\n## Bookstack - OSS Confluence Alternative\nBOOKSTACK_PORT="6875"\nBOOKSTACK_APP_URL="https://${PROJECT_HOSTNAME}" #CHANGE_ME - if you are hosting outside your local machine\n\n\nBOOKSTACK_DB_HOST="${BOOKSTACK_DB_CONTAINER_NAME}"\nBOOKSTACK_DB_PORT=3306\nBOOKSTACK_DB_NAME="bookstackapp" #CHANGE_ME - optionally change. this can stay\nBOOKSTACK_DB_USER="bookstack" #CHANGE_ME\nBOOKSTACK_DB_PASS="kcatskoob" #CHANGE_ME\nBOOKSTACK_DB_ROOT_PASS="kcatskoob" #CHANGE_ME\n\n##### MEALIE\nMEALIE_VERSION_TAG="latest"\nMEALIE_MEMORY_LIMIT="512M"\nMEALIE_ALLOW_SIGNUP="false"\nMEALIE_MAX_WORKERS=1\nMEALIE_MAX_WEB_CONCURRENCY=2\n\n### MEALIE SMTP SETTINGS\nMEALIE_SMTP_HOST=smtp.gmail.com\nMEALIE_SMTP_FROM_EMAIL=example@gmail.com\nMEALIE_SMTP_USER=example@gmail.com\nMEALIE_SMTP_PASSWORD=test1234\n\n#######################################################################################################################\n##################################### DANGER BELOW - THESE ARE DEFAULT VALUES FOR PORTS ###############################\n#######################################################################################################################\n\n## EXPOSED PORTS ---\n## These are defaults and can be changed,\n## but use caution and take backups because changing these\n## may lead to loss of access to a service\nBOOKSTACK_WEB_HOST_HTTP_PORT="${BOOKSTACK_PORT}"\nDASHY_HOST_HTTP_PORT="4000"\nDUPLICATI_HOST_PORT="8200"\nEMBY_HOST_PORT="8096"\nEMBY_HOST_PORT_SSL="8920"\nEMBYSTAT_HOST_PORT="6555"\nHEIMDALL_HOST_HTTP_PORT="3080"\nHEIMDALL_HOST_HTTPS_PORT="30803"\nJACKETT_HOST_PORT="9117"\nJELLYFIN_HOST_PORT="8096"\nJELLYFIN_HOST_PORT_SSL="8920"\nJELLYSEERR_HOST_PORT="5055"\nKOMGA_HOST_PORT="8341"\nMEALIE_HOST_PORT="9925"\nPIHOLE_HOST_PORT="8880"\nPLEX_HOST_PORT="32400"\nPORTAINER_HOST_PORT="9000"\nPORTAINER_HOST_PORT_SSL="49443"\nPROWLARR_HOST_PORT="9696"\nRADARR_HOST_PORT="7878"\nSONARR_HOST_PORT="8989"\nSONARR_HOST_PORT_SSL="9898"\nTRAEFIK_DASHBOARD_PORT="8080"\nTRANSMISSION_HOST_PORT="9091"\nTRANSMISSION_SEED_DISCOVERY_PORT_TCP="51413"\nTRANSMISSION_SEED_DISCOVERY_PORT_UDP="51413"\n\n\n#### HOME AUTOMATION EXPOSED PORTS ####\nHOME_ASSISTANT_HOST_PORT="8123"\nZIGBEE2MQTT_HOST_PORT="38080"\nZWAVE_JS_UI_HOST_PORT="8091"\nZWAVE_JS_WS_HOST_PORT="3000"\n\n## Gitlab specific\nRUNNER_NAME=RUNNER-NAME\nREGISTRATION_TOKEN=TOKEN\nCI_SERVER_URL=https://gitlab.com/\n\n##### AUTHENTIK ######\n#### I KNOW SOME OF THESE ARE DUPED. I\'ll clean these up in a later commit\n# .env (in ALL)\nDOCKERDIR=${DEFAULT_CONTAINER_DATA_LOCATION}  # CHANGEME\nPUID=${UID}               # CHANGEME\nPGID=${GID}               # CHANGEME\nTZ=${TIMEZONE}\nDOMAIN=${PROJECT_HOSTNAME}    # CHANGEME\n\n\n################################################################\n# PostgreSQL\n################################################################\nPOSTGRES_DB=pgauthentik\nPOSTGRES_USER=authentik\nPOSTGRES_PASSWORD=testing123\nPG_PASS=testing123\n\n\n################################################################\n# Authentik\n################################################################\nAUTHENTIK_REDIS__HOST=authentik_redis\nAUTHENTIK_LISTEN__HTTP=authentik-server:8000\nAUTHENTIK_LISTEN__HTTPS=authentik-server:8443\n\nAUTHENTIK_POSTGRESQL__HOST=authentik_postgresql\nAUTHENTIK_POSTGRESQL__NAME=$POSTGRES_DB\nAUTHENTIK_POSTGRESQL__USER=$POSTGRES_USER\nAUTHENTIK_POSTGRESQL__PASSWORD=$POSTGRES_PASSWORD\n\nAUTHENTIK_ERROR_REPORTING__ENABLED: "false"\nAUTHENTIK_SECRET_KEY=123123123123123123123123123123\n# WORKERS=2\n\n# SMTP Host Emails are sent to\nAUTHENTIK_EMAIL__HOST=smtp.gmail.com\nAUTHENTIK_EMAIL__PORT=587\n# Optionally authenticate (don\'t add quotation marks to your password)\nAUTHENTIK_EMAIL__USERNAME=CHANGEME@gmail.com\nAUTHENTIK_EMAIL__PASSWORD=/run/secrets/authelia_notifier_smtp_password\n# Use StartTLS\nAUTHENTIK_EMAIL__USE_TLS=false\n# Use SSL\nAUTHENTIK_EMAIL__USE_SSL=false\nAUTHENTIK_EMAIL__TIMEOUT=10\n# Email address authentik will send from, should have a correct @domain\nAUTHENTIK_EMAIL__FROM=CHANGEME@gmail.com\n\n#########################################################################################\n########## ENABLE MIDDLEWARES IF YOU WANT TO USE PROXY AUTHENTICATION ###################\n#########################################################################################\n# PROWLARR_AUTHENTIK_MIDDLEWARE="traefik.http.routers.${PROWLARR_CONTAINER_NAME}.middlewares=middlewares-authentik@file"\n# RADARR_AUTHENTIK_MIDDLEWARE="traefik.http.routers.${RADARR_CONTAINER_NAME}.middlewares=middlewares-authentik@file"\n# SONARR_AUTHENTIK_MIDDLEWARE="traefik.http.routers.${SONARR_CONTAINER_NAME}.middlewares=middlewares-authentik@file"\n# TRAEFIK_DASHBOARD_AUTHENTIK_MIDDLEWARE="traefik.http.routers.${TRAEFIK_CONTAINER_NAME}.middlewares=middlewares-authentik@file"\n\n\n################################################################\n# GeoIP\n################################################################\nGEOIPUPDATE_ACCOUNT_ID=CHANGEME\nGEOIPUPDATE_LICENSE_KEY=CHANGEME\nAUTHENTIK_AUTHENTIK__GEOIP=/geoip/GeoLite2-City.mmdb\nGEOIPUPDATE_EDITION_IDS=GeoLite2-City\nGEOIPUPDATE_FREQUENCY=8\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"default-container-location",children:"Default Container Location"}),"\n",(0,t.jsxs)(n.p,{children:["The default location where all container data is persisted is in ",(0,t.jsx)(n.code,{children:"./.containers/*"})," this is in the project directory. You can change this easily to point at your own home directory if you would like it more easily accessible."]}),"\n",(0,t.jsx)(n.h2,{id:"compose-profiles",children:"Compose Profiles"}),"\n",(0,t.jsx)(n.p,{children:"This is an interesting feature in docker that allows this project to essentially work with feature flags."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"COMPOSE_PROFILES=...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Doing this allows you to enable whatever services you would like to run in the setup down to the most granular level. This variable is set when the ",(0,t.jsx)(n.a,{href:"/Home-Media-Docker/docs/getting-started/helper-scripts",children:"helper-scripts"})," are run as well. This allows you to make minimal changes to the yaml files themselves and only make ",(0,t.jsx)(n.code,{children:".env"})," changes."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["See ",(0,t.jsx)(n.a,{href:"/Home-Media-Docker/docs/getting-started/docker-info",children:"Docker Info"})," for more information regarding including other services."]})}),"\n",(0,t.jsx)(n.h2,{id:"nord-vpn-variables",children:"Nord VPN Variables"}),"\n",(0,t.jsx)(n.h3,{id:"private-key--token",children:"Private Key / TOKEN"}),"\n",(0,t.jsx)(n.admonition,{title:"Important!",type:"info",children:(0,t.jsxs)(n.p,{children:["Token and subscription to NordVPN Is needed to use this.\n",(0,t.jsx)(n.a,{href:"https://support.nordvpn.com/hc/en-us/articles/20286980309265-How-to-use-a-token-with-NordVPN-on-Linux",children:"See here"})," for configuring/retrieving your ",(0,t.jsx)(n.code,{children:"TOKEN"})," in Linux."]})}),"\n",(0,t.jsx)(n.p,{children:"This is required to run Nord VPN. Without it, the vpn will not start up or be linked to an account."}),"\n",(0,t.jsx)(n.h3,{id:"ip-configuration",children:"IP Configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'VPN_DNS="8.8.8.8,8.8.4.4" #CHANGE_ME - this is google\'s DNS if that works for you\nVPN_ALLOWED_IPS="0.0.0.0/0" #CHANGE_ME - this allows all IPs\nVPN_NET_LOCAL="172.16.0.0/12,192.168.0.0/16" #CHANGE_ME if your network doesn\'t fit this schema\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"VPN_ALLOWED_IPS"})," is just a filler - this allows all IPs to connect to your instance. Configure this with a proper subnet here with allowed hosts to connect."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"VPN_NET_LOCAL"})," - These are local IP Addresses. This should work for most home networks. This is a comma-separated list of IP addresses with allowed CIDR ranges."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"uidgid",children:"UID/GID"}),"\n",(0,t.jsx)(n.p,{children:"This is specific to your host machine's user ID and group ID. If you run on a Unix based system then you can find these values for a user by doing the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"id <username>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"local-shares-recommended",children:"Local Shares (Recommended)"}),"\n",(0,t.jsx)(n.p,{children:"Mount the drives you want on your host machine and have them setup to connect on boot. Then reference those paths in your variables. Comment out what you don't need."}),"\n",(0,t.jsxs)(n.admonition,{title:"Pro Tip",type:"tip",children:[(0,t.jsx)(n.p,{children:"Doing it this way vs the network route ensures that the network paths are connected via your host machine. Docker networking can be a pain, so local is recommended. However, if you want to use Samba shares, you can, just be prepared to change the docker-compose file a lot."}),(0,t.jsx)(n.p,{children:"Using local also has way less headaches if you are unfamiliar with docker's volume setup."}),(0,t.jsx)(n.p,{children:"Emby and Jellyfin can also do realtime monitoring, but they do not work with Network shares! If you mount the network share on your host machine and then make it local to the container, it doesn't know the difference! You can have realtime monitoring without having to deal with network shares in the docker container!"})]}),"\n",(0,t.jsx)(n.p,{children:"These are examples using network shares mounted locally on my own Macbook setup:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'## Local Paths\nLOCAL_MOVIES_PATH="/Volumes/Movies" #CHANGE_ME\nLOCAL_TV_PATH="/Volumes/Television" #CHANGE_ME\nLOCAL_BOOKS_PATH="/Volumes/Books" #CHANGE_ME\nLOCAL_DOWNLOADS_PATH="/Volumes/Downloads" #CHANGE_ME\n'})}),"\n",(0,t.jsx)(n.h2,{id:"samba",children:"Samba"}),"\n",(0,t.jsx)(n.h3,{id:"smb-samba-shares-user-and-pass",children:"SMB (Samba) Shares User and Pass"}),"\n",(0,t.jsx)(n.p,{children:"This is specifically for mounting network shares. If you do not need this (i.e. if the host machine mounts the drives before docker spins up) then you can comment them out."}),"\n",(0,t.jsx)(n.h3,{id:"smb-uid-and-gid",children:"SMB UID and GID"}),"\n",(0,t.jsx)(n.p,{children:"This may or may not be the same as the UID and GID above. For that reason I have separated it into different variables (if you needed to have only readonly access for a user or something)."}),"\n",(0,t.jsx)(n.h3,{id:"network-shares",children:"Network Shares"}),"\n",(0,t.jsx)(n.p,{children:"These are the IP Addresses and share names related to the network shares that you would like to mount as SMB shares."}),"\n",(0,t.jsx)(n.h2,{id:"jellyseer",children:"Jellyseer"}),"\n",(0,t.jsxs)(n.p,{children:["Change this to be either ",(0,t.jsx)(n.code,{children:"jellyfin"}),", ",(0,t.jsx)(n.code,{children:"emby"}),", or ",(0,t.jsx)(n.code,{children:"plex"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'JELLYSEER_TYPE="jellyfin" #CHANGE_ME - based on what you decide for media server\n'})}),"\n",(0,t.jsx)(n.h2,{id:"transmission",children:"Transmission"}),"\n",(0,t.jsx)(n.p,{children:"The username and password is here in the env file. Please do change this and document it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'## TRANSMISSION\nTRANSMISSION_USER="transmission" #CHANGE_ME\nTRANSMISSION_PASS="noissimsnart" #CHANGE_ME\n'})}),"\n",(0,t.jsx)(n.h2,{id:"dashy",children:"Dashy"}),"\n",(0,t.jsx)(n.p,{children:"This is where the default configuration that ships with this project is based. This location can be changed if you would like to create a new config file, or would like to import someone else's."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'DASHY_CONFIG_LOCATION="./dashy-config.yml"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"pihole",children:"Pihole"}),"\n",(0,t.jsx)(n.p,{children:"The PiHole web password is defined here. Please change this from the default."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'PIHOLE_SECURE_WEB_PASSWORD="pihole"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"zwave-js-and-zigbee2mqtt",children:"ZWave JS and Zigbee2MQTT"}),"\n",(0,t.jsx)(n.p,{children:"If you decide to use ZWaveJS and Home Assistant, you will need to setup the USB dongle for the zwave network to function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'ZWAVE_STICK_DEVICE_PATH="/path/to/usb" #CHANGE_ME\nZIGBEE_STICK_DEVICE_PATH="/path/to/usb" #CHANGE_ME\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);