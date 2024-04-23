"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[4895],{9506:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=o(4848),t=o(8453);const s={id:"troubleshooting",title:"Troubleshooting",description:"Helpful information and troubleshooting",sidebar_position:100},i="Troubleshooting",a={id:"troubleshooting",title:"Troubleshooting",description:"Helpful information and troubleshooting",source:"@site/docs/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/Home-Media-Docker/docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/troubleshooting.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{id:"troubleshooting",title:"Troubleshooting",description:"Helpful information and troubleshooting",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Other Info",permalink:"/Home-Media-Docker/docs/other-info"}},l={},d=[{value:"Updating Images/Containers",id:"updating-imagescontainers",level:2},{value:"Using Portainer",id:"using-portainer",level:3},{value:"Update Using the CLI",id:"update-using-the-cli",level:3},{value:"No Connection to the container?",id:"no-connection-to-the-container",level:2},{value:"Transmission Behind a VPN Connection - No External Access",id:"transmission-behind-a-vpn-connection---no-external-access",level:3},{value:"Sonarr/Radarr/*Arr Migration from Windows to Unix (docker)",id:"sonarrradarrarr-migration-from-windows-to-unix-docker",level:2},{value:"Docker Errors and Can&#39;t ever completely come up",id:"docker-errors-and-cant-ever-completely-come-up",level:2},{value:"Completely Uninstall Docker (Linux - Ubuntu)",id:"completely-uninstall-docker-linux---ubuntu",level:3},{value:"Reinstall Docker Daemon on the Host Machine (Linux - Ubuntu)",id:"reinstall-docker-daemon-on-the-host-machine-linux---ubuntu",level:3},{value:"Docker Quick Commands",id:"docker-quick-commands",level:2},{value:"Emby Restore From Backup",id:"emby-restore-from-backup",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.h2,{id:"updating-imagescontainers",children:"Updating Images/Containers"}),"\n",(0,r.jsxs)(n.p,{children:["In order to update an image, you can use a few different methods. If you don't have access to the CLI and wanted to use a GUI, then ",(0,r.jsx)(n.a,{href:"/Home-Media-Docker/docs/home-media-containers/container-management#portainer",children:"portainer"})," is your best bet."]}),"\n",(0,r.jsx)(n.h3,{id:"using-portainer",children:"Using Portainer"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Login to Portainer and select your stack"}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/portainer-update-container-image-step-1.png",alt:"portainer step 1"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Click on Your container you want to update and go to its details screen"}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/portainer-update-container-image-step-2.png",alt:"portainer step 2"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Click "Recreate"'}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/portainer-update-container-image-step-3.png",alt:"portainer step 3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Ensure that the option to "re-pull image" is toggled on. This will pull the latest image and recreate the container for you.'}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/portainer-update-container-image-step-4.png",alt:"portainer step 4"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"update-using-the-cli",children:"Update Using the CLI"}),"\n",(0,r.jsx)(n.p,{children:"Do the following command to pull the latest image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose pull\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then spin up your environment again (either with the ",(0,r.jsx)(n.a,{href:"/Home-Media-Docker/docs/getting-started/helper-scripts",children:"startup script"}),") or ",(0,r.jsx)(n.code,{children:"docker compose"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./scripts/startup.sh jellyfin\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OR"})," (all containers not behind a profile)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up -d\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OR"})," (individual container)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up <CONTAINER_NAME> -d\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OR"})," (with profile flag)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose --profile jellyfin up -d\n"})}),"\n",(0,r.jsx)(n.h2,{id:"no-connection-to-the-container",children:"No Connection to the container?"}),"\n",(0,r.jsx)(n.p,{children:"Usually you can connect internally on your home network, but when you start to try to expose things to the outside world, the containers are not accessible on the host system."}),"\n",(0,r.jsxs)(n.p,{children:["Commonly on Linux systems, there is a firewall installed that blocks things (UFW). It is not safe to disable this, but some do that. ",(0,r.jsx)(n.code,{children:"ufw disable"}),". But if you would like to keep it enabled, there is a docker extended version for ufw that will read your containers and allow connections to those interfaces exposed for you. This very well may solve your problems and lots of headaches."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/chaifeng/ufw-docker",children:"ufw-docker"}),"(Github)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Example ",(0,r.jsx)(n.code,{children:"sudo ufw-docker allow jellyfin"})," - this would look at your running jellyfin containers and allow those ports through your firewall so you can hit it from outside your host network or machine."]}),"\n",(0,r.jsxs)(n.li,{children:["Then you would do ",(0,r.jsx)(n.code,{children:"sudo ufw-docker install"})," to commit any new entries to the ufw table"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["MacOS has something similar in System Preferences, but if you are a CLI person, then you can view ",(0,r.jsx)(n.a,{href:"https://superuser.com/a/472097",children:"this help article"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Another common problem would be if you are using ",(0,r.jsx)(n.code,{children:"network_mode: host"})," - this basically removes any exposed custom ports from your docker compose file. Check that you are referring to the default exposed ports or exposing them on another container that is not ",(0,r.jsx)(n.code,{children:"network_mode: host"})," - you will want the container you are wanting to be ",(0,r.jsx)(n.code,{children:"network_mode: bridge"})," or just remove that key and ",(0,r.jsx)(n.code,{children:"bridge"})," is the default."]}),"\n",(0,r.jsx)(n.h3,{id:"transmission-behind-a-vpn-connection---no-external-access",children:"Transmission Behind a VPN Connection - No External Access"}),"\n",(0,r.jsxs)(n.p,{children:["I have yet to get this work with a true external connection via ddns or with my public IP address. Instead, I have had luck setting up my router VPN and using ",(0,r.jsx)(n.a,{href:"https://openvpn.net/client/",children:"OpenVPN Connect"})," on my smartphone to access Transmission as if I was on my LAN at home, even when I am away. It was super easy to setup with my router, if you have a way to setup an openvpn connection to your server, then go for it. I will try to add a VPN server that is accessible via this docker setup, but for now you are on your own."]}),"\n",(0,r.jsx)(n.h2,{id:"sonarrradarrarr-migration-from-windows-to-unix-docker",children:"Sonarr/Radarr/*Arr Migration from Windows to Unix (docker)"}),"\n",(0,r.jsxs)(n.p,{children:["I found this very useful because I migrated my setup from windows to Linux (debian). This is painful because of how Windows does it's ",(0,r.jsx)(n.code,{children:"\\"})," between its filepaths. Linux uses ",(0,r.jsx)(n.code,{children:"/"})," so this migration helped a lot. This is quite old but still very helpful."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.reddit.com/r/unRAID/comments/ibgone/migrating_sonarr_and_radarr_from_windows_10_to/",children:"Migrating Sonarr and Radarr from Windows 10 to unRAID"})," - This proved to be useful in my docker setup which runs on a Ubuntu 22.04 host machine."]}),"\n",(0,r.jsx)(n.h2,{id:"docker-errors-and-cant-ever-completely-come-up",children:"Docker Errors and Can't ever completely come up"}),"\n",(0,r.jsx)(n.p,{children:"Docker Compose won't down the containers:"}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/docker-error-failed-to-stop.png",alt:"docker down error"}),"\n",(0,r.jsx)(n.p,{children:"Docker Compose won't start the containers for some reason:"}),"\n",(0,r.jsx)("img",{src:"/Home-Media-Docker/img/docker-error-failed-to-start.png",alt:"docker start error"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Currently the only fix I have gotten to work is to completely wipe out the docker installation and start over to solve the above error if a restart, teardown, and startup fresh doesn't work. Read below for more info"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Information",type:"info",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This may very well be due to the apparmor installed with ubuntu as a security measure. AppArmor is part of snapd baked into Ubuntu. ",(0,r.jsx)(n.a,{href:"https://wiki.archlinux.org/title/Snap#:~:text=snapd%20is%20a%20REST%20API,enabled%20in%20the%20default%20kernel.",children:"See here"})," for more info around snapd and AppArmor."]}),"\n",(0,r.jsx)(n.li,{children:"This can cause containers to fail to start/stop due to the app armor profile not being setup properly. If you are comfortable setting up an app-armor profile, you can do that, or disable it."}),"\n",(0,r.jsx)(n.li,{children:"To disable apparmor, follow these steps:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Check status:\nsudo aa-status\n\n# Shutdown and prevent it from restarting:\nsudo aa-disable\n\n# Unload AppArmor profiles:\nsudo aa-teardown\n\n# Check status:\nsudo aa-status\n\n# You should now be able to stop/kill containers. A restart may be required to complete this step.\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Next, if that doesn't work then uninstall apparmor ",(0,r.jsx)(n.strong,{children:"Not Recommended, but as a last resort you can do this"})]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get remove apparmor apparmor-utils -y\n"})}),(0,r.jsxs)(n.p,{children:["After you run that command above, you may need to ",(0,r.jsx)(n.a,{href:"#reinstall-docker-daemon-on-the-host-machine-linux---ubuntu",children:"Reinstall Docker"})," anyway. So follow the ",(0,r.jsx)(n.a,{href:"#completely-uninstall-docker-linux---ubuntu",children:"Uninstall Docker"})," steps below and re-install."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If none of this works, then proceed with uninstalling docker and reinstalling it."}),"\n",(0,r.jsxs)(n.li,{children:["More information about AppArmor Security can be found ",(0,r.jsx)(n.a,{href:"https://ubuntu.com/server/docs/security-apparmor",children:"here"})]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"completely-uninstall-docker-linux---ubuntu",children:"Completely Uninstall Docker (Linux - Ubuntu)"}),"\n",(0,r.jsx)(n.admonition,{title:"WARNING",type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This is needed sometimes if the docker network sock or the containers fail to start."}),"\n",(0,r.jsx)(n.li,{children:"This will not modify the data at rest, but it will remove all data related to the docker installation and daemon."}),"\n",(0,r.jsxs)(n.li,{children:["This is destructive but only on the host system and only related to docker itself. Not related to your data for your containers.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["That is stored in ",(0,r.jsx)(n.code,{children:"./.containers/**"})," for the most part if you use the default installation."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\nsudo apt-get purge -y docker-engine docker docker.io docker-ce\nsudo apt-get autoremove -y --purge docker-engine docker docker.io docker-ce\nsudo umount /var/lib/docker/\nsudo rm -rf /var/lib/docker /etc/docker\nsudo rm /etc/apparmor.d/docker\nsudo groupdel docker\nsudo rm -rf /var/run/docker.sock\nsudo rm -rf /usr/bin/docker-compose\n"})}),"\n",(0,r.jsx)(n.h3,{id:"reinstall-docker-daemon-on-the-host-machine-linux---ubuntu",children:"Reinstall Docker Daemon on the Host Machine (Linux - Ubuntu)"}),"\n",(0,r.jsxs)(n.p,{children:["Since this could change, please see the ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/#installation-methods",children:"Docker Documentation"})," for the official installation steps to get back up and going. This will walk you through:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Adding a new PPA repository for ",(0,r.jsx)(n.code,{children:"apt"})," to install from"]}),"\n",(0,r.jsx)(n.li,{children:"Adding docker-ce and other utilities to the CLI in a server"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["After executing the install above, be sure to look at the ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/",children:"Post Installation Steps"})," to execute docker commands as a non-root user without ",(0,r.jsx)(n.code,{children:"sudo"})]}),"\n",(0,r.jsx)(n.h2,{id:"docker-quick-commands",children:"Docker Quick Commands"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Delete All Containers (if they are stopped)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker rm $(docker ps -a -q)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Delete individual container"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker rm <containerId>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Delete all docker images (if they are unused)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker rmi $(docker images -q)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Delete all Volumes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker volume rm $(docker volume ls -q)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"emby-restore-from-backup",children:"Emby Restore From Backup"}),"\n",(0,r.jsx)(n.p,{children:"Emby Server restores can be tricky - when you do have to do it, you need to edit the /config/data/library.db file - this file causes the image to not spin up properly as it becomes corrupt in the restoring process. Copy this file over manually after the restore completes."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Stop the emby container first!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# stop emby contaienr\ndocker compose stop emby\n\n# make a backup of your library.db and copy the new one in from your backups directory\nsudo mv ~/path/to/.containers/Emby/data/library.db ~/path/to/.containers/Emby/data/library.db.bak && \\\nsudo cp /media/Synology/Backups/SomeEmbyBackup04-01-2024/library.db ~/path/to/.containers/Emby/data/\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(6540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);