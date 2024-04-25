"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[574],{2844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(4848),s=t(8453);const r={id:"start-containers",title:"Start the Containers",description:"Commands to spin up your environment",sidebar_position:3},a=void 0,o={id:"getting-started/start-containers",title:"Start the Containers",description:"Commands to spin up your environment",source:"@site/docs/getting-started/start-containers.mdx",sourceDirName:"getting-started",slug:"/getting-started/start-containers",permalink:"/Home-Media-Docker/docs/getting-started/start-containers",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/getting-started/start-containers.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"start-containers",title:"Start the Containers",description:"Commands to spin up your environment",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup your Env",permalink:"/Home-Media-Docker/docs/getting-started/setup-env"},next:{title:"Scripts",permalink:"/Home-Media-Docker/docs/getting-started/helper-scripts"}},c={},d=[{value:"Start the Containers",id:"start-the-containers",level:2},{value:"No Media Server",id:"no-media-server",level:3},{value:"Example using the startup.sh script with no media server argument",id:"example-using-the-startupsh-script-with-no-media-server-argument",level:4},{value:"With Media Server (<code>jellyfin</code> as the example)",id:"with-media-server-jellyfin-as-the-example",level:3},{value:"Example using the startup.sh script with <code>jellyfin</code> as the media server argument",id:"example-using-the-startupsh-script-with-jellyfin-as-the-media-server-argument",level:4},{value:"Stop All Containers",id:"stop-all-containers",level:2},{value:"With Media Server Running (<code>jellyfin</code> as the example again)",id:"with-media-server-running-jellyfin-as-the-example-again",level:3},{value:"With No Media Server Running",id:"with-no-media-server-running",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Note",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The system data will be placed in this project directory by default if you change nothing"}),"\n",(0,i.jsxs)(n.li,{children:["Data is placed in ",(0,i.jsx)(n.code,{children:"./.containers/"})," and is in ",(0,i.jsx)(n.code,{children:".gitignore"})," already"]}),"\n",(0,i.jsxs)(n.li,{children:["Helper scripts can be found in ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/scripts/",children:(0,i.jsx)(n.code,{children:"./scripts"})})]}),"\n",(0,i.jsxs)(n.li,{children:["This original script was setup on a Macbook and runs flawlessly on MacOS and Linux (tested). My homelab uses Ubuntu 22.04 and docker (latest) and my Macbook is on MacOS Sonoma (latest).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Additional configuration may be needed on the volumes in each service (container) section to setup for your machine (if you refer to different paths for an existing data folder and not a fresh install)."}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"start-the-containers",children:"Start the Containers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Start the containers! (run the ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/scripts/startup.sh",children:(0,i.jsx)(n.code,{children:"startup.sh"})})," script or do this)"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,i.jsxs)(n.p,{children:["Since a Media server is a heavy resource to have, and there are 3 options in this project, you must pass one in as an argument in the ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/docker-compose.yml",children:(0,i.jsx)(n.code,{children:"docker-compose"})})," command (in ",(0,i.jsx)(n.code,{children:"--profile"}),") or in the ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/scripts/startup.sh",children:(0,i.jsx)(n.code,{children:"startup.sh"})})," script as an argument."]})}),"\n",(0,i.jsx)(n.h3,{id:"no-media-server",children:"No Media Server"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker compose up -d\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Or"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"./scripts/startup.sh\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"example-using-the-startupsh-script-with-no-media-server-argument",children:["Example using the ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/scripts/startup.sh",children:"startup.sh"})," script with no media server argument"]}),"\n",(0,i.jsx)("img",{src:"/Home-Media-Docker/img/startup-no-media-server.png",alt:"startup doing its thing"}),"\n",(0,i.jsx)("img",{src:"/Home-Media-Docker/img/startup-no-media-server-success.png",alt:"startup successful"}),"\n",(0,i.jsxs)(n.h3,{id:"with-media-server-jellyfin-as-the-example",children:["With Media Server (",(0,i.jsx)(n.code,{children:"jellyfin"})," as the example)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker compose --profile jellyfin up -d\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Or"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"./scripts/startup.sh jellyfin\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"example-using-the-startupsh-script-with-jellyfin-as-the-media-server-argument",children:["Example using the ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/scripts/startup.sh",children:"startup.sh"})," script with ",(0,i.jsx)(n.code,{children:"jellyfin"})," as the media server argument"]}),"\n",(0,i.jsx)("img",{src:"/Home-Media-Docker/img/startup-jellyfin.png",alt:"startup doing its thing"}),"\n",(0,i.jsx)("img",{src:"/Home-Media-Docker/img/startup-jellyfin-success.png",alt:"startup successful"}),"\n",(0,i.jsx)(n.h2,{id:"stop-all-containers",children:"Stop All Containers"}),"\n",(0,i.jsxs)(n.h3,{id:"with-media-server-running-jellyfin-as-the-example-again",children:["With Media Server Running (",(0,i.jsx)(n.code,{children:"jellyfin"})," as the example again)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker compose --profile jellyfin down\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Or"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"./scripts/tearDown.sh jellyfin\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["See the ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/scripts/README.md",children:"Scripts readme"})," for more information about the teardownScript"]})}),"\n",(0,i.jsx)(n.h3,{id:"with-no-media-server-running",children:"With No Media Server Running"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker compose down\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Or"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"./scripts/tearDown.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["See the ",(0,i.jsx)(n.a,{href:"https://github.com/Homemediadocker/Home-Media-Docker/blob/main/scripts/README.md",children:"Scripts readme"})," for more information about the teardownScript"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Stop Individual Containers"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker compose stop <container_name>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);