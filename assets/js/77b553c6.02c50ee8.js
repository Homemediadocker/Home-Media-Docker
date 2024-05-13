"use strict";(self.webpackChunkdocker_docs=self.webpackChunkdocker_docs||[]).push([[5005],{565:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(4848),i=s(8453);const o={id:"home-assistant",title:"Home Assistant and ZWaveJS UI",description:"Home Assistant - automate everything for free.",sidebar_position:0},a=void 0,r={id:"home-automation-containers/home-assistant",title:"Home Assistant and ZWaveJS UI",description:"Home Assistant - automate everything for free.",source:"@site/docs/home-automation-containers/home-assistant.mdx",sourceDirName:"home-automation-containers",slug:"/home-automation-containers/home-assistant",permalink:"/Home-Media-Docker/docs/home-automation-containers/home-assistant",draft:!1,unlisted:!1,editUrl:"https://github.com/Homemediadocker/docs/edit/main/docs/home-automation-containers/home-assistant.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"home-assistant",title:"Home Assistant and ZWaveJS UI",description:"Home Assistant - automate everything for free.",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Home Automation Containers",permalink:"/Home-Media-Docker/docs/category/home-automation-containers"},next:{title:"Other Containers",permalink:"/Home-Media-Docker/docs/category/other-containers"}},d={},l=[{value:"Home Assistant",id:"home-assistant",level:2},{value:"Home Assistant Example Docker Compose",id:"home-assistant-example-docker-compose",level:3},{value:"ZWaveJS (ZWave2MQTT)",id:"zwavejs-zwave2mqtt",level:2},{value:"ZwaveJS Example Docker Compose",id:"zwavejs-example-docker-compose",level:3},{value:"Troubleshooting ZWaveJS UI",id:"troubleshooting-zwavejs-ui",level:3},{value:"Adding S2 Nodes (QR Code)",id:"adding-s2-nodes-qr-code",level:3},{value:"Adding Ring Door Sensors",id:"adding-ring-door-sensors",level:3},{value:"Zigbee2MQTT",id:"zigbee2mqtt",level:2},{value:"Example Home Assistant Docker Compose with Zigbee2MQTT",id:"example-home-assistant-docker-compose-with-zigbee2mqtt",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"home-assistant",children:"Home Assistant"}),"\n",(0,t.jsxs)(n.admonition,{title:"Information",type:"info",children:[(0,t.jsx)(n.p,{children:"Home Assistant is a Free and Open Source Home Automation solution. This thing can connect to basically any smart home device you can think of. Use it and love it."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This package is in ",(0,t.jsx)(n.code,{children:"./optional-services/home-automation"})," and not accessible from the root docker compose."]}),"\n",(0,t.jsx)(n.li,{children:"You can access zwavejsui and homeassistant with a script:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./scripts/hassio.sh\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This will spin up both containers."}),"\n",(0,t.jsxs)(n.li,{children:["Make sure you copy the ",(0,t.jsx)(n.code,{children:"./optional-services/home-automation/.env-example"})," into a ",(0,t.jsx)(n.code,{children:".env"})," file and modify the zwavejs stick ID, and UID/GID, and Timezone variables."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Just Home Assistant Commands"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Command"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Start"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose up homeassistant -d"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Shutdown"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose down homeassistant"})})]})]})]}),"\n",(0,t.jsx)("img",{src:"/Home-Media-Docker/img/homeassistant.png",alt:"homeassistant"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Once started, Home Assistant should be hit from this url:"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"URL"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Non-SSL"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://localhost:8123",children:"http://localhost:8123"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Image"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://docs.linuxserver.io/images/docker-homeassistant/?h=home",children:"linuxserver/homeassistant"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"home-assistant-example-docker-compose",children:"Home Assistant Example Docker Compose"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'services:\n  ################### Home Automation #######################\n  homeassistant:\n    image: lscr.io/linuxserver/homeassistant:latest\n    container_name: ${HOME_ASSISTANT_CONTAINER_NAME}\n    # network_mode: host\n    environment:\n      - PUID=${UID}\n      - PGID=${GID}\n      - TZ=${TIMEZONE}\n    privileged: true\n    volumes:\n      - ${DEFAULT_CONTAINER_DATA_LOCATION}/HomeAssistant:/config\n    ports:\n      - ${HOME_ASSISTANT_HOST_PORT}:8123 #optional\n    # devices: # use if you have a usb dongle for zwave/zigbee/matter or a harddrive or something\n    #   - /path/to/device:/path/to/device #optional\n    restart: unless-stopped\n    labels:\n      - "traefik.enable=true"\n      - "traefik.http.routers.${HOME_ASSISTANT_CONTAINER_NAME}.rule=Host(`${HOME_ASSISTANT_CONTAINER_NAME}.${PROJECT_HOSTNAME}`)"\n      - "traefik.http.routers.${HOME_ASSISTANT_CONTAINER_NAME}.entrypoints=https"\n      - "traefik.http.routers.${HOME_ASSISTANT_CONTAINER_NAME}.tls=true"\n      - "traefik.http.services.${HOME_ASSISTANT_CONTAINER_NAME}.loadbalancer.server.port=${HOME_ASSISTANT_HOST_PORT}"\n      ###### FOR SSO-  SUPPORTED BY AUTHENTIK - https://docs.goauthentik.io/integrations/services/home-assistant/\n    networks:\n      - zwave\n    # depends_on:\n    #   - zwavejs\n    profiles:\n      - homeAutomation\n      - all\n      - homeassistant\n'})}),"\n",(0,t.jsx)(n.h2,{id:"zwavejs-zwave2mqtt",children:"ZWaveJS (ZWave2MQTT)"}),"\n",(0,t.jsx)(n.admonition,{title:"Information",type:"info",children:(0,t.jsx)(n.p,{children:"This is a robust UI that ships with HomeAssistant. It is not required to use HA, but it will install when you run the home assistant install commands listed above unless commented out. This UI allows you to connect a USB dongle for zwave or zigbee devices to your host machine and communicate with that closed mesh network via this UI for better device management. Since this communicates with Home Assistant over the docker network, the latency is >1ms per call and it is very fast to use. There is a bare metal option for this, but I would shy against that as an option as you will deal with higher network latency from device to device communication."})}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Do not use ",(0,t.jsx)(n.code,{children:"/dev/ttyUSBX"})," serial devices, as those mappings can change over time."]}),"\n",(0,t.jsxs)(n.li,{children:["Instead, use the ",(0,t.jsx)(n.code,{children:"/dev/serial/by-id/X"})," serial device for your Z-Wave stick."]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Just ZwaveJS Commands"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Command"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Start"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose up zwavejs -d"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Shutdown"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose down zwavejs"})})]})]})]}),"\n",(0,t.jsx)("img",{src:"/Home-Media-Docker/img/zwavejs.png",alt:"zwavejs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Once started, ZWaveJS should be hit from this url:"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"URL"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Non-SSL"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://localhost:8091",children:"http://localhost:8091"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Image"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://zwave-js.github.io/zwave-js-ui/#/getting-started/docker",children:"zwavejs/zwave-js-ui"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Official Docs"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://zwave-js.github.io/zwave-js-ui/#/getting-started/docker?id=installation",children:"Documentation"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"zwavejs-example-docker-compose",children:"ZwaveJS Example Docker Compose"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'services:\n  zwavejs:\n    container_name: ${ZWAVE_JS_CONTAINER_NAME}\n    image: zwavejs/zwave-js-ui:latest\n    restart: unless-stopped\n    tty: true\n    stop_signal: SIGINT\n    privileged: true\n    environment:\n      - SESSION_SECRET="|_yTXKTh4~eMs17IQ+[95|KTl6EEk6"\n      # - ZWAVEJS_EXTERNAL_CONFIG=/usr/src/app/store/.config-db\n      # Uncomment if you want log times and dates to match your timezone instead of UTC\n      # Available at https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\n      - TZ=${TIMEZONE}\n    #network_mode: host\n    networks:\n      - zwave\n    devices:\n      # Do not use /dev/ttyUSBX serial devices, as those mappings can change over time.\n      # Instead, use the /dev/serial/by-id/X serial device for your Z-Wave stick.\n      - "${ZWAVE_STICK_DEVICE_PATH}:/dev/zwave"\n    volumes:\n      - ${DEFAULT_CONTAINER_DATA_LOCATION}/ZwaveJS:/usr/src/app/store\n    ports:\n      - "${ZWAVE_JS_UI_HOST_PORT}:8091" # port for web interface\n      - "${ZWAVE_JS_WS_HOST_PORT}:3000" # port for Z-Wave JS websocket server\n    profiles:\n      - all\n      - homeAutomation\n      - zwavejs\n'})}),"\n",(0,t.jsx)(n.h3,{id:"troubleshooting-zwavejs-ui",children:"Troubleshooting ZWaveJS UI"}),"\n",(0,t.jsx)(n.p,{children:"This is a very straightforward UI but I ran into a few things when using this that may be beneficial to know."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Infinite Loop Contact Sensor Being added"})}),"\n",(0,t.jsx)(n.p,{children:"I had to ultimately factory reset the contact sensor for the loop to stop."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Removing failed false nodes"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to do this, I ended up finding a comment that helps from the ",(0,t.jsx)(n.a,{href:"https://community.home-assistant.io/t/remove-dead-node-on-z-wave-js/304732/6",children:"HA community"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"As it turns out this is possible :slight_smile: I installed the Z-Wave JS to MQTT Supervisor addon and have it running in control panel only mode.\nThis is done by toggling \u201cDisable MQTT Gateway\u201d in the settings for the add-on itself. Once that was set I was able to select a Dead device in the Z-Wave JS to MQTT Control Panel, click advanced and then under \u201cFailed Nodes\u201d click Remove."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"adding-s2-nodes-qr-code",children:"Adding S2 Nodes (QR Code)"}),"\n",(0,t.jsxs)(n.p,{children:["I haven't gotten this to work with my camera. So I scan the QR Code and manually add it as text input on the UI (the QR code is a long string of numbers like this ",(0,t.jsx)(n.code,{children:"900111178002544233880632986416460002914054548530552300100179303078022000838005130076900271"}),"). Encased in that is a device ID."]}),"\n",(0,t.jsx)(n.h3,{id:"adding-ring-door-sensors",children:"Adding Ring Door Sensors"}),"\n",(0,t.jsx)(n.p,{children:"These are put in inclusion mode by removing the battery cover, then pressing the reset button (paper clip) and the front button at the same time - this is not Classic Inclusion. Classic inclusion is insecure."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In order to add a Ring node securely, use the QR code text code and manually include it on the ",(0,t.jsx)(n.code,{children:"Provisioning Entries"})," page."]}),"\n",(0,t.jsx)(n.li,{children:"Then put it in inclusion mode (secure)."}),"\n",(0,t.jsx)(n.li,{children:"ZwaveJS UI should pick it up."}),"\n",(0,t.jsx)(n.li,{children:"You may have to re-interview it to get the node to report all of its entities properly once it is added."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"zigbee2mqtt",children:"Zigbee2MQTT"}),"\n",(0,t.jsxs)(n.admonition,{title:"Information",type:"info",children:[(0,t.jsx)(n.p,{children:"Like ZwaveJS UI, this runs similarly, if not almost exactly the same, but for zigbee devices to keep them modular in the setup, and not fully dependent on home assistant to manage the devices."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This package is in ",(0,t.jsx)(n.code,{children:"./optional-services/home-automation"})," and not accessible from the root docker compose."]}),"\n",(0,t.jsx)(n.li,{children:"You can access zigbee2mqtt with a script:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./scripts/hassio.sh\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This will spin up both containers."}),"\n",(0,t.jsxs)(n.li,{children:["Make sure you copy the ",(0,t.jsx)(n.code,{children:"./optional-services/home-automation/.env-example"})," into a ",(0,t.jsx)(n.code,{children:".env"})," file and modify the zwavejs stick ID, and UID/GID, and Timezone variables."]}),"\n"]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Same warning as Zwave above:"}),"\n",(0,t.jsxs)(n.li,{children:["Do not use ",(0,t.jsx)(n.code,{children:"/dev/ttyUSBX"})," serial devices, as those mappings can change over time."]}),"\n",(0,t.jsxs)(n.li,{children:["Instead, use the ",(0,t.jsx)(n.code,{children:"/dev/serial/by-id/X"})," serial device for your Z-Wave stick."]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Just Zigbee2Mqtt Commands"}),"\n",(0,t.jsxs)(n.li,{children:["Be sure to ",(0,t.jsx)(n.code,{children:"cd ./optional-services/home-automation"})," before running the commands below."]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Command"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Start"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose up zigbee2mqtt -d"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Shutdown"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose down zigbee2mqtt"})})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Once started, Zigbee2MQTT should be hit from this url:"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"URL"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Non-SSL"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"http://localhost:38080",children:"http://localhost:38080"})," (default port is 8080, but we changed it here"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Official Docs"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.zigbee2mqtt.io/guide/installation/02_docker.html",children:"Documentation - Docker"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example-home-assistant-docker-compose-with-zigbee2mqtt",children:"Example Home Assistant Docker Compose with Zigbee2MQTT"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"services:\n  zigbee2mqtt:\n    container_name: ${ZIGBEE2MQTT_CONTAINER_NAME}\n    image: koenkk/zigbee2mqtt\n    restart: unless-stopped\n    volumes:\n      - ${DEFAULT_CONTAINER_DATA_LOCATION}/Zigbee2MQTT:/app/data\n      - /run/udev:/run/udev:ro\n    ports:\n      # Frontend port\n      - ${ZIGBEE2MQTT_HOST_PORT}:8080\n    environment:\n      - TZ=${TIMEZONE}\n    profiles:\n      - zigbee2mqtt\n      - homeAutomation\n      - all\n    devices:\n      # Make sure this matched your adapter location\n      - ${ZIGBEE_STICK_DEVICE_PATH}:/dev/ttyACM0\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);