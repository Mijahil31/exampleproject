const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator.utils");

const validate = [
    check("name").exists().notEmpty(),
    check("id_category").exists().notEmpty().isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = { validate };