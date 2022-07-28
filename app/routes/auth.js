const express = require("express");
const router = express.Router();

const { login } = require("../controller/auth.controller");
const { validateAuth } = require("../validator/auth.validator");


router.post("/", validateAuth, login);

module.exports = router;