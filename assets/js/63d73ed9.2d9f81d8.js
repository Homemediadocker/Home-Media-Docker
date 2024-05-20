"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[7552],{8138:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=s(4848),n=s(8453);const r={id:"wiki",title:"Wiki/Notes",description:"Wiki using Bookstack - a FOSS alternative to Confluence",sidebar_position:2},i="Wiki",c={id:"other-services/wiki",title:"Wiki/Notes",description:"Wiki using Bookstack - a FOSS alternative to Confluence",source:"@site/docs/other-services/wiki.mdx",sourceDirName:"other-services",slug:"/other-services/wiki",permalink:"/Home-Media-Docker/docs/other-services/wiki",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/other-services/wiki.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"wiki",title:"Wiki/Notes",description:"Wiki using Bookstack - a FOSS alternative to Confluence",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"PiHole",permalink:"/Home-Media-Docker/docs/other-services/pihole"},next:{title:"Mealie",permalink:"/Home-Media-Docker/docs/other-services/mealie"}},a={},d=[{value:"BookStack",id:"bookstack",level:2},{value:"Bookstack Example Docker Compose",id:"bookstack-example-docker-compose",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"wiki",children:"Wiki"}),"\n",(0,o.jsx)(t.p,{children:"A wiki or notes solution is always needed. This aims to provide a scalable solution that can be self hosted and entirely private to your home."}),"\n",(0,o.jsx)(t.h2,{id:"bookstack",children:"BookStack"}),"\n",(0,o.jsx)(t.p,{children:"This is a free and open source solution comparable to Confluence."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Just Bookstack Commands"}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Command"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Start"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"docker compose up bookstack -d"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Shutdown"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"docker compose down bookstack"})})]})]})]}),"\n",(0,o.jsx)("img",{src:"/Home-Media-Docker/img/bookstack.png",alt:"bookstack"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Once started, Bookstack should be hit from this url:"}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"URL"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Non-SSL"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"http://localhost:6875",children:"http://localhost:6875"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Image"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://docs.linuxserver.io/images/docker-bookstack/",children:"lscr.io/linuxserver/bookstack"})})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"bookstack-example-docker-compose",children:"Bookstack Example Docker Compose"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yml",children:'services:\n  bookstack:\n    image: lscr.io/linuxserver/bookstack\n    container_name: ${BOOKSTACK_APP_CONTAINER_NAME}\n    environment:\n      - PUID=${UID}\n      - PGID=${GID}\n      - APP_URL=${BOOKSTACK_APP_URL}\n      - DB_HOST=${BOOKSTACK_DB_HOST}\n      - DB_PORT=${BOOKSTACK_DB_PORT}\n      - DB_USER=${BOOKSTACK_DB_USER}\n      - DB_PASS=${BOOKSTACK_DB_PASS}\n      - DB_DATABASE=${BOOKSTACK_DB_NAME}\n    volumes:\n      - ${DEFAULT_CONTAINER_DATA_LOCATION}/Bookstack/app:/config\n    labels:\n      - "traefik.enable=true"\n      - "traefik.http.routers.${BOOKSTACK_APP_CONTAINER_NAME}.rule=Host(`${BOOKSTACK_APP_CONTAINER_NAME}.${PROJECT_HOSTNAME}`)"\n      - "traefik.http.routers.${BOOKSTACK_APP_CONTAINER_NAME}.entrypoints=https"\n      - "traefik.http.routers.${BOOKSTACK_APP_CONTAINER_NAME}.tls=true"\n      - "traefik.http.middlewares.${BOOKSTACK_APP_CONTAINER_NAME}-https-redirect.redirectscheme.scheme=https"\n      - "traefik.http.routers.${BOOKSTACK_APP_CONTAINER_NAME}.middlewares=${BOOKSTACK_APP_CONTAINER_NAME}-https-redirect"\n      - "traefik.http.routers.${BOOKSTACK_APP_CONTAINER_NAME}.service=${BOOKSTACK_APP_CONTAINER_NAME}"\n      - "traefik.http.services.${BOOKSTACK_APP_CONTAINER_NAME}.loadbalancer.server.port=80" # linuxserver image exposes port 80 and 443\n      # - "traefik.http.services.${BOOKSTACK_APP_CONTAINER_NAME}.loadbalancer.server.url=http://${BOOKSTACK_APP_CONTAINER_NAME}:${BOOKSTACK_WEB_HOST_HTTP_PORT}" #komga in the url here is the service name which cannot be dynamic --- komga requires a url with a port in it for access\n\n      ###### FOR AUTHENTIK SUPPORT BOOKSTACK USES SAML - https://docs.goauthentik.io/integrations/services/bookstack/\n    restart: unless-stopped\n    depends_on:\n      - ${BOOKSTACK_DB_CONTAINER_NAME}\n    networks:\n      - homelab\n      - zbookstack\n    profiles:\n      - all\n      - bookstack\n  bookstack_db:\n    image: lscr.io/linuxserver/mariadb\n    container_name: ${BOOKSTACK_DB_CONTAINER_NAME}\n    environment:\n      - PUID=${UID}\n      - PGID=${GID}\n      - MYSQL_ROOT_PASSWORD=${BOOKSTACK_DB_ROOT_PASS}\n      - TZ=${TIMEZONE}\n      - MYSQL_DATABASE=${BOOKSTACK_DB_NAME}\n      - MYSQL_USER=${BOOKSTACK_DB_USER}\n      - MYSQL_PASSWORD=${BOOKSTACK_DB_PASS}\n    volumes:\n      - ${DEFAULT_CONTAINER_DATA_LOCATION}/Bookstack/db:/config\n    restart: unless-stopped\n    networks:\n      - zbookstack\n    profiles:\n      - all\n      - bookstack\n\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var o=s(6540);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);