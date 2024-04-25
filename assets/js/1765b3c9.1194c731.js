"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[6101],{1021:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(4848),d=n(8453);const o={id:"other-info",title:"Other Info",description:"Other Information",sidebar_position:99},t="Other Info",r={id:"other-info",title:"Other Info",description:"Other Information",source:"@site/docs/other-info.mdx",sourceDirName:".",slug:"/other-info",permalink:"/Home-Media-Docker/docs/other-info",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/other-info.mdx",tags:[],version:"current",sidebarPosition:99,frontMatter:{id:"other-info",title:"Other Info",description:"Other Information",sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"Mobile Apps",permalink:"/Home-Media-Docker/docs/mobile-apps"},next:{title:"Troubleshooting",permalink:"/Home-Media-Docker/docs/troubleshooting"}},a={},c=[{value:"NVIDIA Setup on Linux (Debian) Based Systems with a docker container",id:"nvidia-setup-on-linux-debian-based-systems-with-a-docker-container",level:2},{value:"NVIDIA Quick Reference",id:"nvidia-quick-reference",level:3},{value:"Failed to initialize NVML: Failed to Initialize in Docker",id:"failed-to-initialize-nvml-failed-to-initialize-in-docker",level:3},{value:"Error:",id:"error",level:4},{value:"Solution",id:"solution",level:3},{value:"Screenshots",id:"screenshots",level:3}];function l(e){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"other-info",children:"Other Info"}),"\n",(0,s.jsx)(i.h2,{id:"nvidia-setup-on-linux-debian-based-systems-with-a-docker-container",children:"NVIDIA Setup on Linux (Debian) Based Systems with a docker container"}),"\n",(0,s.jsxs)(i.p,{children:["I followed ",(0,s.jsx)(i.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",children:"this page"})," for the latest NVIDIA Container Toolkit instructions and installing. ",(0,s.jsx)(i.code,{children:"nvidia-ctk"})," is a utility built to give nvidia graphics capabilities into containers seamlessly."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["Uninstalling nvidia drivers from your system can be done ",(0,s.jsx)(i.a,{href:"https://lunux.net/how-to-uninstall-nvidia-drivers-in-ubuntu/",children:"like this"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["A quick install of the nvidia drivers for Ubuntu 22.04 can be found ",(0,s.jsx)(i.a,{href:"https://askubuntu.com/a/1456466",children:"here"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"nvidia-ctk"})," should setup the ",(0,s.jsx)(i.code,{children:"/etc/docker/daemon.json"})," or the ",(0,s.jsx)(i.code,{children:"~/.config/docker/daemon.json"})," for you, but this is what my working config looks like for reference:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "default-runtime": "nvidia",\n  "features": {\n    "cdi": true\n  },\n  "runtimes": {\n    "nvidia": {\n      "args": [],\n      "path": "nvidia-container-runtime"\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Be sure to set the devices in your ",(0,s.jsx)(i.code,{children:"docker-compose.yml"})," to be like this for the emby container to recognize them in the ",(0,s.jsx)(i.code,{children:"nvidia-smi"})]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"devices:\n  - /dev/nvidia-uvm:/dev/nvidia-uvm # Added nvidia devices here\n  - /dev/nvidia-uvm-tools:/dev/nvidia-uvm-tools # Added nvidia devices here\n  - /dev/nvidia-modeset:/dev/nvidia-modeset # Added nvidia devices here\n  - /dev/nvidiactl:/dev/nvidiactl # Added nvidia devices here\n  - /dev/nvidia0:/dev/nvidia0 # Added nvidia devices here\n  - /dev/nvidia1:/dev/nvidia1 # Added nvidia devices here (i have a 2nd GPU so i needed this too)\n  - /dev/dri:/dev/dri # For VAAPI access, not necessarily for NVIDIA cards\n"})}),"\n",(0,s.jsx)(i.h3,{id:"nvidia-quick-reference",children:"NVIDIA Quick Reference"}),"\n",(0,s.jsx)(i.p,{children:"If you ever lose your nvidia transcoding from emby, you can try a few things:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Reboot the system. This will solve it 99% of the time"}),"\n",(0,s.jsx)(i.li,{children:"Reinstall the NVIDIA Drivers from the web"}),"\n",(0,s.jsx)(i.li,{children:"Reinstall the NVIDIA Drivers from the apt repository"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo apt-get install nvidia-driver-535 -y\n# or install nvidia-driver-### where your number is the current version\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Run ",(0,s.jsx)(i.code,{children:"nvidia-smi"})," (Output should be similar to below)"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"$ nvidia-smi\nFri Apr  5 14:58:16 2024\n+---------------------------------------------------------------------------------------+\n| NVIDIA-SMI 535.161.07             Driver Version: 535.161.07   CUDA Version: 12.2     |\n|-----------------------------------------+----------------------+----------------------+\n| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |\n|                                         |                      |               MIG M. |\n|=========================================+======================+======================|\n|   0  NVIDIA GeForce GTX 1080        Off | 00000000:24:00.0 Off |                  N/A |\n|  0%   41C    P8              11W / 180W |      2MiB /  8192MiB |      0%      Default |\n|                                         |                      |                  N/A |\n+-----------------------------------------+----------------------+----------------------+\n|   1  NVIDIA GeForce GTX 1080        Off | 00000000:25:00.0 Off |                  N/A |\n|  0%   34C    P8               5W / 180W |      2MiB /  8192MiB |      0%      Default |\n|                                         |                      |                  N/A |\n+-----------------------------------------+----------------------+----------------------+\n\n+---------------------------------------------------------------------------------------+\n| Processes:                                                                            |\n|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |\n|        ID   ID                                                             Usage      |\n|=======================================================================================|\n|  No running processes found                                                           |\n+---------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Check for persistence: (if this is disabled or failed then this could be your issue)"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo systemctl status nvidia-persistenced\n"})}),"\n",(0,s.jsx)(i.h3,{id:"failed-to-initialize-nvml-failed-to-initialize-in-docker",children:"Failed to initialize NVML: Failed to Initialize in Docker"}),"\n",(0,s.jsxs)(i.p,{children:["This error may occur inside of the emby docker container where it will not register ",(0,s.jsx)(i.code,{children:"nvidia-smi"})," or any associated video cards. I reported this to ",(0,s.jsx)(i.code,{children:"linuxserver.io"})," in their github as an issue here: ",(0,s.jsx)(i.a,{href:"https://github.com/linuxserver/docker-emby/issues/97",children:"docker-emby:#41"}),"."]}),"\n",(0,s.jsx)(i.h4,{id:"error",children:"Error:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"$ docker exec -it emby /bin/bash\nroot@5a15af76e670:/# nvidia-smi\nFailed to initialize NVML: Unknown Error\n"})}),"\n",(0,s.jsx)(i.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(i.p,{children:["TLDR - solved this ",(0,s.jsx)(i.a,{href:"https://discord.com/channels/354974912613449730/1226289649530568725",children:"in Discord"})," for anyone that comes across this in google and wants to try this solution."]}),"\n",(0,s.jsxs)(i.p,{children:["The container wouldn't initialize the ",(0,s.jsx)(i.code,{children:"nvidia-smi"})," and any cards associated with it. So mapping the nvidia stuff directly (as seen ",(0,s.jsx)(i.a,{href:"https://github.com/linuxserver/docker-emby/issues/97#issuecomment-2041262711",children:"in the comment above"})," in the docker command) is what ultimately solved it."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"--device=/dev/nvidia-uvm \\"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["--device=/dev/nvidia-uvm-tools ",(0,s.jsx)(i.br,{}),"\n","--device=/dev/nvidia-modeset ",(0,s.jsx)(i.br,{}),"\n","--device=/dev/nvidiactl ",(0,s.jsx)(i.br,{}),"\n","--device=/dev/nvidia0 ",(0,s.jsx)(i.br,{}),"\n","--device=/dev/nvidia1 \\"]}),"\n",(0,s.jsx)(i.p,{children:"In my docker compose it looks like this:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"emby:\n  image: lscr.io/linuxserver/emby:latest\n  container_name: emby\n  environment:\n    - PUID=${EMBY_UID}\n    - PGID=${EMBY_GID}\n    - NVIDIA_VISIBLE_DEVICES=all\n    - NVIDIA_DRIVER_CAPABILITIES=all\n    - TZ=${TIMEZONE}\n  volumes:\n    - ${DEFAULT_CONTAINER_DATA_LOCATION}/Emby:/config # Configuration directory\n    - ./images/logowhite.png:/app/emby/system/dashboard-ui/modules/logoscreensaver/logowhite.png\n    - ./images/logowhite.png:/app/emby/system/dashboard-ui/modules/themes/logowhite.png\n    - ./images/logodark.png:/app/emby/system/dashboard-ui/modules/themes/logodark.png\n    - ${LOCAL_TV_PATH}:/media/Synology/Television # Media directory\n    - ${LOCAL_MOVIES_PATH}:/media/Synology/Movies # Media directory\n    - ${LOCAL_BACKUPS_PATH}:/media/Synology/Backups #Backups Directory\n    - /ssl/fullchain.pem:/ssl/fullchain.pem\n    - /ssl/privkey.pem:/ssl/privkey.pem\n    - /ssl/token:/ssl/token\n  ports:\n    - ${EMBY_HOST_PORT}:8096 #http port\n    - ${EMBY_HOST_PORT_SSL}:8920 #ssl port\n  runtime: nvidia\n  restart: unless-stopped\n  devices:\n    - /dev/nvidia-uvm:/dev/nvidia-uvm # Added nvidia devices here\n    - /dev/nvidia-uvm-tools:/dev/nvidia-uvm-tools # Added nvidia devices here\n    - /dev/nvidia-modeset:/dev/nvidia-modeset # Added nvidia devices here\n    - /dev/nvidiactl:/dev/nvidiactl # Added nvidia devices here\n    - /dev/nvidia0:/dev/nvidia0 # Added nvidia devices here\n    - /dev/nvidia1:/dev/nvidia1 # Added nvidia devices here (i have a 2nd GPU so i needed this too)\n    - /dev/dri:/dev/dri # I added this per suggestion, but this is for VAAPI so i don't know if this actually works -- this was what was failing before.\n  profiles:\n    - emby\n"})}),"\n",(0,s.jsx)(i.h3,{id:"screenshots",children:"Screenshots"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"nvidia-smi"})," in the container:"]}),"\n",(0,s.jsx)("img",{width:"806",alt:"Screenshot 2024-04-07 at 12 01 21\u202fPM",src:"https://github.com/linuxserver/docker-emby/assets/18407074/6df72d77-6e1f-493a-8087-3a45173bdeb1"}),"\n",(0,s.jsx)(i.p,{children:"Inside of emby in the transcoding section:"}),"\n",(0,s.jsx)("img",{width:"985",alt:"Screenshot 2024-04-07 at 12 01 41\u202fPM",src:"https://github.com/linuxserver/docker-emby/assets/18407074/cf539cff-cc93-47ce-8f51-e7032887fc64"})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>r});var s=n(6540);const d={},o=s.createContext(d);function t(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);