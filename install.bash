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

wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -sc)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod

# install nodejs 

sudo apt-get install -y nodejs npm
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
npm start

# start firewall

sudo apt-get install -y ufw
sudo ufw allow ssh 3000/tcp 
sudo ufw enable
sudo ufw status

# finnaly

echo -e "${GREEN} installer run as http://localhost:3000/"

