"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[4611],{597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>E,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),r=t(8453);const s={id:"mealie",title:"Mealie",description:"Mealie is a FOSS recipe manager and cookbook",sidebar_position:3},o=void 0,a={id:"other-services/mealie",title:"Mealie",description:"Mealie is a FOSS recipe manager and cookbook",source:"@site/docs/other-services/mealie.mdx",sourceDirName:"other-services",slug:"/other-services/mealie",permalink:"/Home-Media-Docker/docs/other-services/mealie",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/other-services/mealie.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"mealie",title:"Mealie",description:"Mealie is a FOSS recipe manager and cookbook",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Wiki/Notes",permalink:"/Home-Media-Docker/docs/other-services/wiki"},next:{title:"Traefik (Reverse Proxy)",permalink:"/Home-Media-Docker/docs/traefik-reverse-proxy"}},l={},d=[{value:"Mealie",id:"mealie",level:2},{value:"Mealie Example Docker Compose",id:"mealie-example-docker-compose",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"mealie",children:"Mealie"}),"\n",(0,i.jsx)(n.admonition,{title:"Information",type:"info",children:(0,i.jsx)(n.p,{children:"Mealie is a free and open source recipe manager and cookbook utility. It can import and scrape receipes and strip out ads from the internet. This is probably its most powerful feature."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Just Mealie Commands"}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Command"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Start"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"docker compose up mealie -d"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Shutdown"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"docker compose down mealie"})})]})]})]}),"\n",(0,i.jsx)("img",{src:"/Home-Media-Docker/img/mealie.png",alt:"mealie"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Once started, mealie should be hit from this url:"}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"URL"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Non-SSL (Web UI)"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"http://localhost:9925",children:"http://localhost:9925"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Image"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://hub.docker.com/r/hkotel/mealie",children:"hkotel/mealie"}),"(Docker Hub)"]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"mealie-example-docker-compose",children:"Mealie Example Docker Compose"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'services:\n  mealie:\n    image: ghcr.io/mealie-recipes/mealie:${MEALIE_VERSION_TAG:-latest} #\n    container_name: ${MEALIE_CONTAINER_NAME}\n    restart: unless-stopped\n    ports:\n      - "${MEALIE_HOST_PORT:-9925}:9000" #\n    deploy:\n      resources:\n        limits:\n          memory: ${MEALIE_MEMORY_LIMIT:-512M} #\n    networks:\n      - homelab\n      - mealie\n    labels:\n      - "traefik.enable=true"\n      - "traefik.docker.network=home-media-docker_homelab"\n      - "traefik.http.routers.${MEALIE_CONTAINER_NAME}.rule=Host(`${MEALIE_CONTAINER_NAME}.${PROJECT_HOSTNAME}`)"\n      - "traefik.http.routers.${MEALIE_CONTAINER_NAME}.entrypoints=https"\n      - "traefik.http.routers.${MEALIE_CONTAINER_NAME}.tls=true"\n      - "traefik.http.services.${MEALIE_CONTAINER_NAME}.loadbalancer.server.port=9000"\n    volumes:\n      - ${DEFAULT_CONTAINER_DATA_LOCATION}/Mealie/app:/app/data/\n    environment:\n      # Set Backend ENV Variables Here\n      ALLOW_SIGNUP: ${MEALIE_ALLOW_SIGNUP:-false}\n      PUID: ${UID}\n      PGID: ${GID}\n      TZ: ${TIMEZONE}\n      MAX_WORKERS: ${MEALIE_MAX_WORKERS:-1}\n      WEB_CONCURRENCY: ${MEALIE_MAX_WEB_CONCURRENCY:-2}\n      BASE_URL: https://${MEALIE_CONTAINER_NAME}.${PROJECT_HOSTNAME}\n      # Database Settings\n      DB_ENGINE: ${MEALIE_DB_ENGINE:-postgres}\n      POSTGRES_USER: ${MEALIE_DB_USER:-mealie}\n      POSTGRES_PASSWORD: ${MEALIE_DB_PASSWORD:-mealie}\n      POSTGRES_SERVER: ${MEALIE_POSTGRES_CONTAINER_NAME:-mealie-postgres}\n      POSTGRES_PORT: 5432\n      POSTGRES_DB: ${MEALIE_DB_NAME:-mealie}\n      SMTP_HOST: ${MEALIE_SMTP_HOST}\n      SMTP_FROM_EMAIL: ${MEALIE_SMTP_FROM_EMAIL}\n      SMTP_USER: ${MEALIE_SMTP_USER}\n      SMTP_PASSWORD: ${MEALIE_SMTP_PASSWORD}\n    depends_on:\n      mealie-postgres:\n        condition: service_healthy\n    profiles:\n      - all\n      - mealie\n\n  mealie-postgres:\n    container_name: ${MEALIE_POSTGRES_CONTAINER_NAME:-mealie-postgres}\n    networks:\n      - mealie\n    image: postgres:15\n    restart: unless-stopped\n    volumes:\n      - ${DEFAULT_CONTAINER_DATA_LOCATION}/Mealie/db:/var/lib/postgresql/data\n    environment:\n      POSTGRES_PASSWORD: ${MEALIE_DB_PASSWORD:-mealie}\n      POSTGRES_USER: ${MEALIE_DB_USER:-mealie}\n    healthcheck:\n      test: ["CMD", "pg_isready"]\n      interval: 30s\n      timeout: 20s\n      retries: 3\n    profiles:\n      - all\n      - mealie\n'})})]})}function E(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);