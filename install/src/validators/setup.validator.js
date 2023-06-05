const { body } = require("express-validator");

function phoneNumberValidator() {
    return [
        body("bot_name").custom((value, ctx) => {
            if(!value) throw "no bot name entered";
            return true;
        }),
        body("bot_token").custom((value, ctx) => {
            if(!value) throw "no bot token entered";
            if (value.length != 46) throw "bot token is unvalid";
            return true;
        }),
        body("admin_id").custom((value, ctx) => {
            if(!value) throw "no admin id entered";
            if (value.length != 10) throw "admin id is unvalid";
            return true;
        })
    ]
}

module.exports = {
    phoneNumberValidator
}