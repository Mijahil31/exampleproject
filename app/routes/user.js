const express = require("express");
const router = express.Router();

const { getAll, register, get, deleteUser } = require("../controller/user.controller");
const { validateRegister } = require("../validator/user.validator");

router.post("/", validateRegister, register);
router.get("/", getAll);
router.delete("/:id", deleteUser);
router.get("/:id", get);

module.exports = router;