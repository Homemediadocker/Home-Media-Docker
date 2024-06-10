"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[5843],{4063:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var t=r(4848),a=r(8453);const s={id:"vaultwarden",title:"Vaultwarden",description:"Vaultwarden is a self hosted password manager and generator similar to Last Pass or Google Password Manager",sidebar_position:5},o=void 0,d={id:"other-services/vaultwarden",title:"Vaultwarden",description:"Vaultwarden is a self hosted password manager and generator similar to Last Pass or Google Password Manager",source:"@site/docs/other-services/vaultwarden.mdx",sourceDirName:"other-services",slug:"/other-services/vaultwarden",permalink:"/Home-Media-Docker/docs/other-services/vaultwarden",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/other-services/vaultwarden.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"vaultwarden",title:"Vaultwarden",description:"Vaultwarden is a self hosted password manager and generator similar to Last Pass or Google Password Manager",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Mattermost",permalink:"/Home-Media-Docker/docs/other-services/mattermost"},next:{title:"Wallos",permalink:"/Home-Media-Docker/docs/other-services/wallos"}},l={},i=[{value:"Vaultwarden",id:"vaultwarden",level:2},{value:"Vaultwarden Example Docker Compose",id:"vaultwarden-example-docker-compose",level:3},{value:"Vaultwarden Example .env file",id:"vaultwarden-example-env-file",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"vaultwarden",children:"Vaultwarden"}),"\n",(0,t.jsx)(n.admonition,{title:"Information",type:"info",children:(0,t.jsx)(n.p,{children:"Vaultwarden is a self hosted password manager and generator similar to Last Pass or Google Password"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Just Vaultwarden Commands"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Command"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Start"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose up vaultwarden -d"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Shutdown"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose down vaultwarden"})})]})]})]}),"\n",(0,t.jsx)("img",{src:"/Home-Media-Docker/img/vaultwarden.png",alt:"vaultwarden"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Once started, vaultwarden should be hit from this url:"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"URL"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Non-SSL (Web UI)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://localhost:9445",children:"http://localhost:9445"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Image"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/vaultwarden/server",children:"vaultwarden/server"}),"(Docker Hub)"]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"vaultwarden-example-docker-compose",children:"Vaultwarden Example Docker Compose"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'services:\n  vaultwarden:\n    image: vaultwarden/server:latest\n    container_name: ${VAULTWARDEN_CONTAINER_NAME:-vaultwarden}\n    restart: unless-stopped\n    ports:\n      - 9445:80 #map any custom port to use (replace 8445 not 80)\n    volumes:\n      - ${DEFAULT_CONTAINER_DATA_LOCATION}/Vaultwarden:/data:rw\n    environment:\n      #     - ROCKET_TLS={certs="/ssl/certs/certs.pem",key="/ssl/private/key.pem"}  // Environment variable is specific to the Rocket web server\n      - ADMIN_TOKEN=${ADMIN_TOKEN}\n      - WEBSOCKET_ENABLED=true\n      - SIGNUPS_ALLOWED=true\n      - SMTP_HOST=${SMTP_HOST}\n      - SMTP_FROM=${SMTP_FROM}\n      - SMTP_PORT=${SMTP_PORT}\n      - SMTP_SSL=${SMTP_SSL}\n      - SMTP_USERNAME=${SMTP_USERNAME}\n      - SMTP_PASSWORD=${SMTP_PASSWORD}\n      - DOMAIN=${DOMAIN}\n    env_file:\n      - ./.env\n      - ../../.env\n    labels:\n      - "traefik.enable=true"\n      - "traefik.http.routers.${VAULTWARDEN_CONTAINER_NAME:-vaultwarden}.rule=Host(`${VAULTWARDEN_CONTAINER_NAME:-vaultwarden}.${PROJECT_HOSTNAME}`)"\n      - "traefik.http.routers.${VAULTWARDEN_CONTAINER_NAME:-vaultwarden}.entrypoints=https"\n      - "traefik.http.routers.${VAULTWARDEN_CONTAINER_NAME:-vaultwarden}.tls=true"\n      - "traefik.http.services.${VAULTWARDEN_CONTAINER_NAME:-vaultwarden}.loadbalancer.server.port=80"\n      ## Middlewares\n      - ${VAULTWARDEN_AUTHENTIK_MIDDLEWARE:-}\n    profiles:\n      - all\n      - vaultwarden\n    networks:\n      - homelab\n'})}),"\n",(0,t.jsx)(n.h3,{id:"vaultwarden-example-env-file",children:"Vaultwarden Example .env file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"ADMIN_TOKEN= # randomly generated string of characters, for example running openssl rand -base64 48\nWEBSOCKET_ENABLED=true\nSIGNUPS_ALLOWED=true ##change to false once create the admin account\nSMTP_HOST=smtp-relay.sendinblue.com\nSMTP_FROM=user@example.com ##replace example.com with your domain\nSMTP_PORT=587\nSMTP_SSL=true\nSMTP_USERNAME=user@example.com ##sendinblue user\nSMTP_PASSWORD=sendinblue password\nDOMAIN=https://bitwarden.example.com #replace example.com with your domain\nVAULTWARDEN_CONTAINER_NAME=vaultwarden\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);