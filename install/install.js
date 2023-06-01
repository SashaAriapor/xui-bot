const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { SettingModel } = require("./model/setting.model");
const { log } = require("console");

const app = express();

// server config

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// coonect to mongodb

const DB_URL = "mongodb://localhost:27017/xui-bot";

mongoose.connect(DB_URL)
    .then(() => console.log(`connect to mongodb was successfully`))
    .catch(error => console.log(error));
    
// bot setup route

app.post("/setup", async (req, res) => {
    const { bot_name, bot_token, admin_id } = req.body; 
    const setting = await SettingModel.create({
        bot_name,
        bot_token,
        admin_id
    });
    console.log(setting);
});
// run server

app.listen(3000, () => {
    console.log(`installer was running on port 3000`);
});