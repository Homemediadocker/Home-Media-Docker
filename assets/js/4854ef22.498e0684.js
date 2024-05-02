"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[7017],{2109:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=i(4848),t=i(8453);const s={id:"pihole",title:"PiHole",description:"PiHole is a DNS manager and network AD Blocker",sidebar_position:0},r=void 0,d={id:"other-services/pihole",title:"PiHole",description:"PiHole is a DNS manager and network AD Blocker",source:"@site/docs/other-services/pihole.mdx",sourceDirName:"other-services",slug:"/other-services/pihole",permalink:"/Home-Media-Docker/docs/other-services/pihole",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/other-services/pihole.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"pihole",title:"PiHole",description:"PiHole is a DNS manager and network AD Blocker",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Dashboards",permalink:"/Home-Media-Docker/docs/other-services/dashboards"},next:{title:"External Access",permalink:"/Home-Media-Docker/docs/external-access"}},l={},c=[{value:"PiHole",id:"pihole",level:2},{value:"PiHole Example Docker Compose",id:"pihole-example-docker-compose",level:3}];function h(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"pihole",children:"PiHole"}),"\n",(0,n.jsxs)(o.admonition,{title:"Information",type:"info",children:[(0,n.jsx)(o.p,{children:"This is behind a separate profile. Configure this on your network with caution. This could block things unnecessarily, but can be very useful to block ads without needing an extension to do so."}),(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["For more information, please refer to the ",(0,n.jsx)(o.a,{href:"https://docs.pi-hole.net/",children:"PiHole Docs"})]}),"\n"]})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Just pihole Commands"}),"\n"]}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Command"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Start"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"docker compose up pihole -d"})})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Shutdown"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"docker compose down pihole"})})]})]})]}),"\n",(0,n.jsx)("img",{src:"/Home-Media-Docker/img/pihole.png",alt:"pihole"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Once started, pihole should be hit from this url:"}),"\n"]}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"URL"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Non-SSL (Web UI)"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.a,{href:"http://localhost:8880/admin",children:"http://localhost:8880/admin"})})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Image"}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.a,{href:"https://hub.docker.com/r/pihole/pihole",children:"pihole/pihole"}),"(Docker Hub)"]})]})]})]}),"\n",(0,n.jsx)(o.h3,{id:"pihole-example-docker-compose",children:"PiHole Example Docker Compose"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-yaml",children:'services:\n  pihole:\n    container_name: pihole\n    image: pihole/pihole:latest\n    # For DHCP it is recommended to remove these ports and instead add: network_mode: "host"\n    ports:\n      - "53:53/tcp"\n      - "53:53/udp"\n      - "67:67/udp" # Only required if you are using Pi-hole as your DHCP server\n      - "${PIHOLE_HOST_PORT}:80/tcp" # Web interface -- http://<ipaddress>:${PIHOLE_HOST_PORT}/admin\n    environment:\n      TZ: ${TIMEZONE}\n      WEBPASSWORD: ${PIHOLE_SECURE_WEB_PASSWORD}\n    # Volumes store your data between container upgrades\n    volumes:\n      - "${DEFAULT_CONTAINER_DATA_LOCATION}/PiHole/config:/etc/pihole"\n      - "${DEFAULT_CONTAINER_DATA_LOCATION}/PiHole/etc-dnsmasq.d:/etc/dnsmasq.d"\n    #   https://github.com/pi-hole/docker-pi-hole#note-on-capabilities\n    cap_add:\n      - NET_ADMIN # Required if you are using Pi-hole as your DHCP server, else not needed\n    restart: unless-stopped\n    profiles:\n      - pihole\n'})})]})}function a(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>d});var n=i(6540);const t={},s=n.createContext(t);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);