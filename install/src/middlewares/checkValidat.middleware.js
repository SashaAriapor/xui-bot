const { validationResult } = require("express-validator");

function checkValidat(req, res, next) {
    const result = validationResult(req);
    let errors = [];
    result.errors.forEach(error => {
        const errorNessage = error.msg;
        errors.push(errorNessage);
    });
    errors = [...new Set(errors)];
    if(!Object.keys(result?.errors).length == 0) {
        return res.status(400).json({
            StatusCode: 400,
            data: {},
            errors: errors
        })
    }
    next();
}

module.exports = {
    checkValidat
}