#!/bin/bash

# Set color variables
RED="\033[0;31m"
GREEN="\033[0;32m"
NC="\033[0m" # No Color
YELLOW="\033[0;33m"

# check run as root
if [ "$(id -u)" -ne 0 ]; then
    echo -e "${RED}Please run as root"
    exit
fi

logo=(
"                         _________   ______   _______ _________"
"|\     /|       |\     /|\__   __/  (  ___ \ (  ___  )\__   __/"
"( \   / )       | )   ( |   ) (     | (   ) )| (   ) |   ) (   "
" \ (_) /  _____ | |   | |   | |     | (__/ / | |   | |   | |   "
"  ) _ (  (_____)| |   | |   | |     |  __ (  | |   | |   | |   "
" / ( ) \        | |   | |   | |     | (  \ \ | |   | |   | |   "
"( /   \ )       | (___) |___) (___  | )___) )| (___) |   | |   "
"|/     \|       (_______)\_______/  |/ \___/ (_______)   )_(   "
""
""
)

# Print logo
for i in "${logo[@]}"; do
    echo "$i"
done



echo -e "${YELLOW} Telegram Channel: NOT YET"

sleep 5

# update server 

sudo apt update && apt upgrade -y

# install wget

sudo apt install wget -y

# install mangodb 

sudo apt install wget curl gnupg2 software-properties-common apt-transport-https ca-certificates lsb-release
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc|sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/mongodb-6.gpg
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update -y
sudo apt install mongodb-org -y
sudo systemctl enable --now mongod
mongod --version


# install nodejs 

curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo npm install -g npm@latest
node -v
npm -v

# install pm2 

sudo npm install -g pm2
pm2 -v

# install git

sudo apt-get install -y git
git --version

# download files 

git clone https://github.com/SashaAriapor/xui-bot.git

# run install file

cd xui-bot
mv install /root/
cd /root/install
npm i
pm2 start src/install.js

# finnaly

ipv4=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1)

echo -e "${GREEN} installer run as http://$ipv4:3000"

