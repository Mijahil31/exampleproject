const User = require("../models/sql/user.model");
const { matchedData } = require("express-validator");
const { handleErrorResponse, handleHttpError } = require("../utils/handleError.utils");
const { tokenSign } = require("../utils/handleToken.utils");
const { compare } = require("../utils/handleEncrypt.utils");

const login = async(req, res) => {
    try {
        const body = matchedData(req);
        const user = await User.findOne({ email: body.email });
        if (!user) {
            handleErrorResponse(res, "USER NOT EXISTS", 404);
            return;
        }
        const checkPassword = await compare(body.password, user.password);

        if (!checkPassword) {
            handleErrorResponse(res, "PASSWORD INVALID", 401);
            return;
        }

        const tokenJwt = await tokenSign(user);

        const data = {
            token: tokenJwt,
            user: user,
        };
        res.status(202);
        res.send({ message: "User entered correctly.", data: data });
    } catch (e) {
        handleHttpError(res, e);
    }
}

module.exports = { login };