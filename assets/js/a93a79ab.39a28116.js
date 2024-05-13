"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[4580],{7252:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=t(4848),i=t(8453);const n={id:"traefik-reverse-proxy",title:"Traefik (Reverse Proxy)",description:"Traefik is a robust reverse proxy solution that is hostable as a standalone, docker, or in a K8 cluster.",sidebar_position:70},a="Traefik",o={id:"traefik-reverse-proxy",title:"Traefik (Reverse Proxy)",description:"Traefik is a robust reverse proxy solution that is hostable as a standalone, docker, or in a K8 cluster.",source:"@site/docs/traefik-reverse-proxy.mdx",sourceDirName:".",slug:"/traefik-reverse-proxy",permalink:"/Home-Media-Docker/docs/traefik-reverse-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/traefik-reverse-proxy.mdx",tags:[],version:"current",sidebarPosition:70,frontMatter:{id:"traefik-reverse-proxy",title:"Traefik (Reverse Proxy)",description:"Traefik is a robust reverse proxy solution that is hostable as a standalone, docker, or in a K8 cluster.",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Wiki/Notes",permalink:"/Home-Media-Docker/docs/other-services/wiki"},next:{title:"SSO with Authentik",permalink:"/Home-Media-Docker/docs/authentik-sso"}},c={},d=[{value:"Do I have to use it?",id:"do-i-have-to-use-it",level:2},{value:"Certificates",id:"certificates",level:2},{value:"Setup",id:"setup",level:3},{value:"Traefik Dashboard",id:"traefik-dashboard",level:3},{value:"Traefik Example Docker Compose",id:"traefik-example-docker-compose",level:3}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"traefik",children:"Traefik"}),"\n",(0,s.jsx)(r.p,{children:"This is definitely one of the better reverse proxy solutions I have ever used. Traefik is just magical and they explain their product better than I ever could:"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Traefik is an open-source Edge Router that makes publishing your services a fun and easy experience. It receives requests on behalf of your system and finds out which components are responsible for handling them."}),"\n",(0,s.jsxs)(r.p,{children:["What sets Traefik apart, besides its many features, is that it automatically discovers the right configuration for your services. The magic happens when Traefik inspects your infrastructure, where it finds relevant information and discovers which service serves which request. ",(0,s.jsx)(r.a,{href:"https://doc.traefik.io/traefik/#:~:text=Traefik%20is%20an,serves%20which%20request.",children:"source"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Basically when you spin up your containers, as long as you have the right labels on them, Traefik knows about them, and serves them up accordingly. It's very cool and one of the best parts about this entire setup is almost every compose file is already presetup and tested in a local and server environment with Traefik in mind as a first class citizen."}),"\n",(0,s.jsx)(r.h2,{id:"do-i-have-to-use-it",children:"Do I have to use it?"}),"\n",(0,s.jsxs)(r.p,{children:["Traefik is completely optional to enable, but when you do, every container is setup to be hit with a direct hostname (no port required) like ",(0,s.jsx)(r.code,{children:"https://*.localhost"})," or ",(0,s.jsx)(r.code,{children:"https://<container_name>.localhost"})," or further ",(0,s.jsx)(r.code,{children:"https://sonarr.localhost"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"certificates",children:"Certificates"}),"\n",(0,s.jsxs)(r.p,{children:["Traefik comes with a nice little feature and integration with ",(0,s.jsx)(r.code,{children:"acme"})," and Let's Encrypt inside of it to sign certificates and give you a solid SSL experience. Since it is a reverse proxy and Load balancer, you can sign a single wild card cert and all of your containers will use it without having to configure each container to work with static SSL certs."]}),"\n",(0,s.jsx)(r.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(r.p,{children:["First and foremost -- ",(0,s.jsx)(r.a,{href:"https://doc.traefik.io/traefik/",children:"READ THE DOCS"})," - they are going to be your guiding light if you veer away from this project or do your own compose files."]}),"\n",(0,s.jsx)(r.p,{children:"Every container is already setup for basic use of traefik and SSL out of the box, all you have to do is enable traefik."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Enable Traefik Project Wide for Scripts"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'# In your .env file\n## Or just individually comma separate your services.\nCOMPOSE_PROFILES=bookstack,dashy,........ # (truncated for readability)\n\n### ENABLE TRAEFIK - keep COMPOSE_PROFILES above\nCOMPOSE_PROFILES=${COMPOSE_PROFILES},traefik"\n'})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Run the startup script"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"./scripts/startup.sh jellyfin # jellyfin is just a media server example\n\n# you will see an echo of your enabled profiles\nCOMPOSE_PROFILES=bookstack,dashy,duplicati,...,traefik\n\n## containers will start or pull\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Just Traefik Commands"}),"\n"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Command"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Start"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"docker compose up traefik -d"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Shutdown"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"docker compose down traefik"})})]})]})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Once started, Traefik should be hit from this url:"}),"\n"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"URL"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Non-SSL"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://localhost:8080/dashboard",children:"http://localhost:8080/dashboard"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"via Reverse Proxy"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://traefik.localhost/dashboard",children:"https://traefik.localhost/dashboard"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Image"}),(0,s.jsx)(r.td,{children:(0,s.jsxs)(r.a,{href:"https://hub.docker.com/_/traefik",children:["traefik",":v3",".0"]})})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"traefik-dashboard",children:"Traefik Dashboard"}),"\n",(0,s.jsx)("img",{src:"/Home-Media-Docker/img/traefik-dashboard.png",alt:"traefik-dashboard"}),"\n",(0,s.jsx)(r.h3,{id:"traefik-example-docker-compose",children:"Traefik Example Docker Compose"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:'services:\n  traefik:\n    image: traefik:v3.0\n    container_name: ${TRAEFIK_CONTAINER_NAME}\n    restart: unless-stopped\n    security_opt:\n      - no-new-privileges:true\n    networks:\n      - homelab\n    ports:\n      - 80:80\n      - 443:443/tcp\n      - 443:443/udp # Uncomment if you want HTTP3\n      - ${TRAEFIK_DASHBOARD_PORT}:8080\n    environment:\n      # CF_DNS_API_TOKEN_FILE: /run/secrets/cf_api_token # note using _FILE for docker secrets\n      CF_DNS_API_TOKEN: ${CF_DNS_API_TOKEN} # if using .env\n      TRAEFIK_DASHBOARD_CREDENTIALS: ${TRAEFIK_DASHBOARD_CREDENTIALS}\n      NETLIFY_TOKEN: ${TRAEFIK_NETLIFY_TOKEN}\n    # secrets:\n    #   - cf_api_token\n    volumes:\n      - /etc/localtime:/etc/localtime:ro\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n      - ../traefik-data/traefik.yml:/traefik.yml:ro\n      - ../traefik-data/acme.json:/acme.json\n      - ../traefik-data/config.yml:/config.yml:ro\n    labels:\n      - "traefik.enable=true"\n      - "traefik.docker.network=home-media-docker_homelab"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}.entrypoints=http"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}.rule=Host(`${TRAEFIK_CONTAINER_NAME}.${PROJECT_HOSTNAME}`)"\n      # - "traefik.http.middlewares.traefik-auth.basicauth.users=${TRAEFIK_DASHBOARD_CREDENTIALS}"\n      - "traefik.http.middlewares.traefik-https-redirect.redirectscheme.scheme=https"\n      - "traefik.http.middlewares.sslheader.headers.customrequestheaders.X-Forwarded-Proto=https"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}.middlewares=traefik-https-redirect"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}-secure.entrypoints=https"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}-secure.rule=Host(`${TRAEFIK_CONTAINER_NAME}.${PROJECT_HOSTNAME}`)"\n      # - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}-secure.middlewares=traefik-auth"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}-secure.tls=true"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}-secure.tls.certresolver=${TRAEFIK_TLS_CERTRESOLVER}"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}-secure.tls.domains[0].main=${PROJECT_HOSTNAME}"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}-secure.tls.domains[0].sans=*.${PROJECT_HOSTNAME}"\n      - "traefik.http.routers.${TRAEFIK_CONTAINER_NAME}-secure.service=api@internal"\n      ## Middlewares\n      - ${TRAEFIK_DASHBOARD_AUTHENTIK_MIDDLEWARE:-}\n    profiles:\n      - all\n      - traefik\n'})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var s=t(6540);const i={},n=s.createContext(i);function a(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);