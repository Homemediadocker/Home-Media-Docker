"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[8328],{4880:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=o(4848),i=o(8453);const s={id:"prerequisites",title:"Prerequisites",description:"Learn how to setup your docker environment for your homelab",sidebar_position:1},r="Prerequisites",d={id:"getting-started/prerequisites",title:"Prerequisites",description:"Learn how to setup your docker environment for your homelab",source:"@site/docs/getting-started/prerequisites.mdx",sourceDirName:"getting-started",slug:"/getting-started/prerequisites",permalink:"/Home-Media-Docker/docs/getting-started/prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/getting-started/prerequisites.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"prerequisites",title:"Prerequisites",description:"Learn how to setup your docker environment for your homelab",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/Home-Media-Docker/docs/category/getting-started"},next:{title:"Setup your Env",permalink:"/Home-Media-Docker/docs/getting-started/setup-env"}},c={},a=[{value:"Downloading Docker Desktop (Windows/Mac/Linux Desktop)",id:"downloading-docker-desktop-windowsmaclinux-desktop",level:2},{value:"Downloading for a Linux Server Host Machine (Ubuntu - Debian)",id:"downloading-for-a-linux-server-host-machine-ubuntu---debian",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.h2,{id:"downloading-docker-desktop-windowsmaclinux-desktop",children:"Downloading Docker Desktop (Windows/Mac/Linux Desktop)"}),"\n",(0,n.jsxs)(t.p,{children:["Download ",(0,n.jsx)(t.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker"})," for your architecture."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Linux Desktop Querks",type:"warning",children:[(0,n.jsxs)(t.p,{children:["Just note that certain Linux distros (like Ubuntu or Pop_OS!) ship with ",(0,n.jsx)(t.code,{children:"snapd"})," preinstalled. This causes issues since snapd is docker-based. You may need to ",(0,n.jsx)(t.a,{href:"/Home-Media-Docker/docs/troubleshooting##docker-errors-and-cant-ever-completely-come-up",children:"completely remove docker"})," (this link will show you different troubleshooting options)."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["snapd can be installed alongside docker, but it can cause issues with docker commands due to ",(0,n.jsx)(t.code,{children:"apparmor"})," that comes with it. This is a security measure put in place with Ubuntu systems but it can cause the errors seen in the troubleshooting page above."]}),"\n",(0,n.jsxs)(t.li,{children:["Docker Desktop ",(0,n.jsx)(t.em,{children:"may"})," conflict with the internal ",(0,n.jsx)(t.code,{children:"snapd"})," docker engine. So be wary of installing it from source, you may want to install it from ",(0,n.jsx)(t.code,{children:"snapd"})," itself."]}),"\n"]})]}),"\n",(0,n.jsx)("img",{src:"/Home-Media-Docker/img/docker-desktop.png",alt:"docker-desktop"}),"\n",(0,n.jsx)(t.h2,{id:"downloading-for-a-linux-server-host-machine-ubuntu---debian",children:"Downloading for a Linux Server Host Machine (Ubuntu - Debian)"}),"\n",(0,n.jsxs)(t.p,{children:["Since this could change, please see the ",(0,n.jsx)(t.a,{href:"https://docs.docker.com/engine/install/ubuntu/#installation-methods",children:"Docker Documentation"})," for the official installation steps to get back up and going. This will walk you through:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Adding a new PPA repository for ",(0,n.jsx)(t.code,{children:"apt"})," to install from"]}),"\n",(0,n.jsx)(t.li,{children:"Adding docker-ce and other utilities to the CLI in a server"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["After executing the install above, be sure to look at the ",(0,n.jsx)(t.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/",children:"Post Installation Steps"})," to execute docker commands as a non-root user without ",(0,n.jsx)(t.code,{children:"sudo"})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>d});var n=o(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);