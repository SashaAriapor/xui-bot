const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { SettingModel } = require("./models/setting.model");
const { phoneNumberValidator } = require("./validators/setup.validator");
const { checkValidat } = require("./middlewares/checkValidat.middleware");

// default variables
const { panel_username, panel_password, wellcome_message } = require("./default.json");


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

app.post("/setup", phoneNumberValidator(), checkValidat, async (req, res) => {
    const { bot_name, bot_token, admin_id } = req.body; 
    const setting = await SettingModel.create({
        bot_name,
        bot_token,
        admin_id,
        panel_username,
        panel_password,
        wellcome_message
    });
    res.json(setting);
});
// run server


// 404 error => redirect to install.html file
app.use((req, res, next) => {
    res.redirect("/install.html");
});

app.listen(4000 , () => {
    console.log(`installer was running on port 3000`);
});