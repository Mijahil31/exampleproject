const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator.utils");

const validateAuth = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({ min: 8, max: 15 }),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = { validateAuth };