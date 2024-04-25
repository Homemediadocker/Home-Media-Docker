"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[484],{786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(4848),i=r(8453);const s={id:"helper-scripts",title:"Scripts",description:"Helper Scripts to help you spin up or teardown your environment",sidebar_position:4},l=void 0,o={id:"getting-started/helper-scripts",title:"Scripts",description:"Helper Scripts to help you spin up or teardown your environment",source:"@site/docs/getting-started/helper-scripts.mdx",sourceDirName:"getting-started",slug:"/getting-started/helper-scripts",permalink:"/Home-Media-Docker/docs/getting-started/helper-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/getting-started/helper-scripts.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"helper-scripts",title:"Scripts",description:"Helper Scripts to help you spin up or teardown your environment",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Start the Containers",permalink:"/Home-Media-Docker/docs/getting-started/start-containers"},next:{title:"Home Media Containers",permalink:"/Home-Media-Docker/docs/category/home-media-containers"}},a={},d=[{value:"Command Line Arguments",id:"command-line-arguments",level:2},{value:"<code>startup.sh</code>",id:"startupsh",level:3},{value:"Example: Start with Jellyfin",id:"example-start-with-jellyfin",level:4},{value:"Example: Start with No Media Server",id:"example-start-with-no-media-server",level:4},{value:"<code>tearDown.sh</code>",id:"teardownsh",level:3},{value:"Examples",id:"examples",level:4},{value:"With Media Server Argument",id:"with-media-server-argument",level:5},{value:"Without Media Server Argument",id:"without-media-server-argument",level:5}];function c(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"command-line-arguments",children:"Command Line Arguments"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsx)("th",{colspan:"2",children:"Media Server Arguments"})}),(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"Options"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Starts all containers without a media server."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"emby"})}),(0,n.jsx)("td",{children:"Starts all containers with Emby as the Media Server"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"jellyfin"})}),(0,n.jsx)("td",{children:"Starts all containers with Jellyfin as the Media Server"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"plex"})}),(0,n.jsx)("td",{children:"Starts all containers with Plex as the Media Server"})]})]}),"\n",(0,n.jsx)(t.h3,{id:"startupsh",children:(0,n.jsx)(t.code,{children:"startup.sh"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This is just a useful script to startup your server without needing to know the docker compose commands."}),"\n",(0,n.jsxs)(t.li,{children:["Takes in an optional ",(0,n.jsx)(t.code,{children:"$arg"})," to startup the media server with your server"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"example-start-with-jellyfin",children:"Example: Start with Jellyfin"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"./scripts/startup.sh jellyfin\n"})}),"\n",(0,n.jsx)(t.h4,{id:"example-start-with-no-media-server",children:"Example: Start with No Media Server"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"./scripts/startup.sh\n"})}),"\n",(0,n.jsx)(t.h3,{id:"teardownsh",children:(0,n.jsx)(t.code,{children:"tearDown.sh"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["This is a potentially destructive script. Be very careful using this. ",(0,n.jsx)(t.strong,{children:"Use it at your own risk!"})]}),"\n",(0,n.jsxs)(t.li,{children:["This script also takes in a ",(0,n.jsx)(t.code,{children:"$arg"})," for media server (see table above for options)."]}),"\n",(0,n.jsxs)(t.li,{children:["There are 2 options when running this script:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Option 1:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The script will attempt to shutdown all running containers."}),"\n",(0,n.jsx)(t.li,{children:"It will remove all docker images (as long as the container is shut down)."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Option 2:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25 ",(0,n.jsx)(t.strong,{children:"DANGER AHEAD"})," \ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25"]}),"\n",(0,n.jsxs)(t.li,{children:["This will destroy the ",(0,n.jsx)(t.code,{children:"./.containers"})," directory and remove any data from the machine related to your container instances."]}),"\n",(0,n.jsxs)(t.li,{children:["This command should be a no-op as you ",(0,n.jsx)(t.em,{children:"will"})," need to set everything back up from scratch by rerunning the ",(0,n.jsx)(t.code,{children:"startup.sh"})," script.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["This is useful if you have data corruption and need to start fresh. I would recommend backing up your entire ",(0,n.jsx)(t.code,{children:"${DEFAULT_CONTAINER_DATA_LOCATION}/"})," directory prior to running this command."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h5,{id:"with-media-server-argument",children:"With Media Server Argument"}),"\n",(0,n.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin.png",alt:"teardown example"}),"\n",(0,n.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin-option1.png",alt:"teardown example"}),"\n",(0,n.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin-option2.png",alt:"teardown example"}),"\n",(0,n.jsx)(t.h5,{id:"without-media-server-argument",children:"Without Media Server Argument"}),"\n",(0,n.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-no-media-server-arg.png",alt:"teardown example"}),"\n",(0,n.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin-option1.png",alt:"teardown example"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Looks like it is telling us that a container was being used by a running service"})}),"\n",(0,n.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-dockerDesktop-jellyfin-still-running.png",alt:"teardown example"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Notice that Jellyfin is still running"})}),"\n",(0,n.jsx)("img",{src:"/Home-Media-Docker/img/tearDown-script-jellyfin-option2.png",alt:"teardown example"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(6540);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);