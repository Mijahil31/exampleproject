const express = require("express");
const router = express.Router();

const { getAll, register, get, deleteUser } = require("../controller/user.controller");
const { validateRegister } = require("../validator/user.validator");
const { checkAuth } = require("../middleware/auth.middleware")

router.post("/", validateRegister, register);
router.get("/", checkAuth, getAll);
router.delete("/:id", checkAuth, deleteUser);
router.get("/:id", checkAuth, get);

module.exports = router;