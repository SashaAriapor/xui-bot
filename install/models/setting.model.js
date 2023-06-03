const mongoose = require("mongoose");
const SettingSchema = mongoose.Schema({
    bot_name: { type: String, required: true },
    bot_token: { type: String, required: true },
    admin_id: { type: String, required: true },
});

const SettingModel = mongoose.model("setting", SettingSchema);
module.exports = {
    SettingModel
}