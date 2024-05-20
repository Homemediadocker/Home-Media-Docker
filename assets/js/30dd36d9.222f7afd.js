"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[484],{786:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(4848),t=n(8453);const s={id:"helper-scripts",title:"Scripts",description:"Helper Scripts to help you spin up or teardown your environment",sidebar_position:5},l=void 0,a={id:"getting-started/helper-scripts",title:"Scripts",description:"Helper Scripts to help you spin up or teardown your environment",source:"@site/docs/getting-started/helper-scripts.mdx",sourceDirName:"getting-started",slug:"/getting-started/helper-scripts",permalink:"/Home-Media-Docker/docs/getting-started/helper-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/getting-started/helper-scripts.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"helper-scripts",title:"Scripts",description:"Helper Scripts to help you spin up or teardown your environment",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Start the Containers",permalink:"/Home-Media-Docker/docs/getting-started/start-containers"},next:{title:"Home Media Containers",permalink:"/Home-Media-Docker/docs/category/home-media-containers"}},o={},c=[{value:"Command Line Arguments",id:"command-line-arguments",level:2},{value:"<code>config-check.sh</code>",id:"config-checksh",level:3},{value:"Example: with Jellyfin",id:"example-with-jellyfin",level:4},{value:"Example: With No Media Server",id:"example-with-no-media-server",level:4},{value:"<code>startup.sh</code>",id:"startupsh",level:3},{value:"Example: Start with Jellyfin",id:"example-start-with-jellyfin",level:4},{value:"Example: Start with No Media Server",id:"example-start-with-no-media-server",level:4},{value:"<code>tearDown.sh</code>",id:"teardownsh",level:3},{value:"Examples",id:"examples",level:4},{value:"With Media Server Argument",id:"with-media-server-argument",level:5},{value:"Without Media Server Argument",id:"without-media-server-argument",level:5}];function d(e){const i={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"command-line-arguments",children:"Command Line Arguments"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("th",{colspan:"2",children:"Media Server Arguments"})}),(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Options"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Starts all containers without a media server."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"emby"})}),(0,r.jsx)("td",{children:"Starts all containers with Emby as the Media Server"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"jellyfin"})}),(0,r.jsx)("td",{children:"Starts all containers with Jellyfin as the Media Server"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"plex"})}),(0,r.jsx)("td",{children:"Starts all containers with Plex as the Media Server"})]})]}),"\n",(0,r.jsx)(i.h3,{id:"config-checksh",children:(0,r.jsx)(i.code,{children:"config-check.sh"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["This is just a useful script to check your compose config and uses your ",(0,r.jsx)(i.code,{children:"COMPOSE_PROFILES"})," env variable to build the configuration."]}),"\n",(0,r.jsxs)(i.li,{children:["Takes in an optional ",(0,r.jsx)(i.code,{children:"$arg"})," to also include the media server with your config"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"example-with-jellyfin",children:"Example: with Jellyfin"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"./scripts/config-check.sh jellyfin\n"})}),"\n",(0,r.jsx)(i.h4,{id:"example-with-no-media-server",children:"Example: With No Media Server"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"./scripts/config-check.sh\n"})}),"\n",(0,r.jsx)(i.h3,{id:"startupsh",children:(0,r.jsx)(i.code,{children:"startup.sh"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"This is just a useful script to startup your server without needing to know the docker compose commands."}),"\n",(0,r.jsxs)(i.li,{children:["Takes in an optional ",(0,r.jsx)(i.code,{children:"$arg"})," to startup the media server with your server"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"example-start-with-jellyfin",children:"Example: Start with Jellyfin"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"./scripts/startup.sh jellyfin\n"})}),"\n",(0,r.jsx)(i.h4,{id:"example-start-with-no-media-server",children:"Example: Start with No Media Server"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"./scripts/startup.sh\n"})}),"\n",(0,r.jsx)(i.h3,{id:"teardownsh",children:(0,r.jsx)(i.code,{children:"tearDown.sh"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["This is a potentially destructive script. Be very careful using this. ",(0,r.jsx)(i.strong,{children:"Use it at your own risk!"})]}),"\n",(0,r.jsxs)(i.li,{children:["This script also takes in a ",(0,r.jsx)(i.code,{children:"$arg"})," for media server (see table above for options)."]}),"\n",(0,r.jsxs)(i.li,{children:["There are 2 options when running this script:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Option 1:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The script will attempt to shutdown all running containers."}),"\n",(0,r.jsx)(i.li,{children:"It will remove all docker images (as long as the container is shut down)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Option 2:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25 ",(0,r.jsx)(i.strong,{children:"DANGER AHEAD"})," \ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25"]}),"\n",(0,r.jsxs)(i.li,{children:["This will destroy the ",(0,r.jsx)(i.code,{children:"./.containers"})," directory and remove any data from the machine related to your container instances."]}),"\n",(0,r.jsxs)(i.li,{children:["This command should be a no-op as you ",(0,r.jsx)(i.em,{children:"will"})," need to set everything back up from scratch by rerunning the ",(0,r.jsx)(i.code,{children:"startup.sh"})," script.","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["This is useful if you have data corruption and need to start fresh. I would recommend backing up your entire ",(0,r.jsx)(i.code,{children:"${DEFAULT_CONTAINER_DATA_LOCATION}/"})," directory prior to running this command."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.h5,{id:"with-media-server-argument",children:"With Media Server Argument"}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin.png",alt:"teardown example"}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin-option1.png",alt:"teardown example"}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin-option2.png",alt:"teardown example"}),"\n",(0,r.jsx)(i.h5,{id:"without-media-server-argument",children:"Without Media Server Argument"}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-no-media-server-arg.png",alt:"teardown example"}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin-option1.png",alt:"teardown example"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"Looks like it is telling us that a container was being used by a running service"})}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-dockerDesktop-jellyfin-still-running.png",alt:"teardown example"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"Notice that Jellyfin is still running"})}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin-option2.png",alt:"teardown example"})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>a});var r=n(6540);const t={},s=r.createContext(t);function l(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);