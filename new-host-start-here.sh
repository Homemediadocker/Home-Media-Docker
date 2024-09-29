#!/bin/bash
echo "Upgrading Packages for Host Machine via apt"
apt-get update
apt-get upgrade -y
apt-get dist-upgrade -y

sleep 5

echo "SETTING UP DOCKER AND FETCHING PACKAGES"
apt-get install ca-certificates curl git
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc

sleep 5

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update

sleep 5

echo "########## INSTALLING DOCKER NOW ################"
apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sleep 5

echo "########## Linux Post-install steps ############"
echo "---------- Setting up docker for non-root access ------------"
groupadd docker
usermod -aG docker $USER
newgrp docker

sleep 5

echo "------- Fixing permissions on docker config file ---------"
chown "$USER":"$USER" /home/"$USER"/.docker -R
chmod g+rwx "$HOME/.docker" -R

sleep 5

echo "##### Setting up docker to start on boot #####"
systemctl enable docker.service
systemctl enable containerd.service

sleep 5

echo "##### Executing App Armor hack to disable it for now (Ubuntu Only) #####"
# Check status:
aa-status

sleep 2

# Shutdown and prevent it from restarting:
aa-disable

sleep 2

# Unload AppArmor profiles:
aa-teardown

sleep 2

# Check status:
aa-status

sleep 2


echo "###### Installing OH MY ZSH #######"
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

sleep 5 

echo "Setting working directory back to home"
cd ~

echo "######### Setting up acme.sh ##########"
git clone https://github.com/acmesh-official/acme.sh.git
cd ./acme.sh
./acme.sh --install -m me@example.com

sleep 5

echo "Setting working directory back to home"
cd ~

echo "######### Setting up Home-Media-Docker ###########"
git clone https://github.com/Homemediadocker/Home-Media-Docker.git

sleep 5

cd Home-Media-Docker
chmod +x ./scripts/*.sh

echo "----- Creating .env files ------"
./scripts/copyenv.sh

echo "Setting working directory back to home"
cd ~

sleep 5

echo "########## REMOVING OLD NVIDIA DRIVERS ############"
apt-get remove --purge '^nvidia-.*'
echo 'nouveau' | tee -a /etc/modules
rm /etc/X11/xorg.conf

sleep 5

echo "########### Setting Up NVIDIA PPA #################"
add-apt-repository ppa:graphics-drivers/ppa 
dpkg --add-architecture amd64
apt update 

echo "Uninstalling with nvidia-uninstall. It might fail here. Comment out if it does"
nvidia-uninstall

sleep 5

echo "----- Installing NVIDIA drivers and vulkan -----------"
apt install -y nvidia-driver-550 libvulkan1 libvulkan1:amd64

##### IF THE ABOVE COMMAND DOESN'T WORK ######
# wget https://us.download.nvidia.com/XFree86/Linux-x86_64/550.120/NVIDIA-Linux-x86_64-550.120.run
# chmod +x ./NVIDIA-Linux-x86_64-550.120.run
# ./NVIDIA-Linux-x86_64-550.120.run

# sleep 5

# echo "----- Removing NVIDIA Driver installer -----"
# rm -rf ./NVIDIA-Linux-x86_64-550.120.run

sleep 5

echo "######## Setting up NVIDIA to work in containers ##########"
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

apt-get update

apt-get install -y nvidia-container-toolkit

sleep 5

echo "########## Running nvidia-ctk to runtime=docker in rootless mode ##########"

nvidia-ctk runtime configure --runtime=docker --config=$HOME/.config/docker/daemon.json
nvidia-ctk config --set nvidia-container-cli.no-cgroups --in-place

systemctl restart docker

sleep 5

echo "######### Installing ufw-docker #################"
wget -O /usr/local/bin/ufw-docker \
  https://github.com/chaifeng/ufw-docker/raw/master/ufw-docker

chmod +x /usr/local/bin/ufw-docker

ufw-docker install

sleep 5

echo "######### Finished installing packages ##############"

exit 0