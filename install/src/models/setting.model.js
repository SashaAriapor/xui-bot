const mongoose = require("mongoose");
const SettingSchema = mongoose.Schema({
    bot_name: { type: String, required: true },
    bot_token: { type: String, required: true },
    admin_id: { type: String, required: true },
    panel_username: { type: String, required: true },
    panel_password: { type: String, required: true },
    welcome_message: { type: String, required: true },
});

const SettingModel = mongoose.model("setting", SettingSchema);
module.exports = {
    SettingModel
}