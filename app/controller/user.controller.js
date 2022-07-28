const User = require("../models/sql/user.model");
const { encrypt } = require("../utils/handleJwt");
const { matchedData } = require("express-validator");
const { handleErrorResponse, handleHttpError } = require("../utils/handleError.utils");

const register = async(req, res) => {
    try {
        const body = matchedData(req);
        const checkIsExist = await User.findOne({ email: body.email });
        if (checkIsExist) {
            handleErrorResponse(res, "User exists", 401);
            return;
        }
        const password = await encrypt(body.password);
        const role = 1;
        const bodyInsert = {...body, password, role };
        const data = await User.create(bodyInsert);
        res.status(201);
        res.json({ message: "User registered successfully", data: data });
    } catch (e) {
        handleHttpError(res, e);
    }
}

const getAll = async(req, res) => {
    try {
        data = await User.findAll();
        res.json({ message: "List of all users", data: data });
    } catch (e) {
        handleHttpError(res, e);
    }
}

const get = async(req, res) => {
    try {
        const id = req.params.id;
        data = await User.findByPk(id);
        if (!data) {
            handleErrorResponse(res, message = "User not exist", code = 404);
            return;
        }
        res.json({ message: "Get user", data: data });
    } catch (e) {
        handleHttpError(res, e);
    }
}

const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        checkIsExist = await User.findByPk(id);
        if (!checkIsExist) {
            handleErrorResponse(res, message = "User not exist", code = 404);
            return;
        }
        data = await User.destroy({
            where: {
                id
            }
        });
        res.json({ message: "Delete user", data: data });
    } catch (e) {
        handleHttpError(res, e);
    }
}

module.exports = { getAll, register, get, deleteUser };