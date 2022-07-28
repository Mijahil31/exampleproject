const { UserResponse } = require('./user.docs');

const authDocs = {
    type: "object",
    properties: {
        email: {
            type: "string",
        },
        password: {
            type: "string",
        }
    }
}

const authResponse = {
    type: "object",
    properties: {
        token: {
            type: "string",
        },
        user: UserResponse
    }
}

const authLoginResponse = {
    type: "object",
    properties: {
        message: {
            type: "string",
        },
        data: authResponse
    }
}


module.exports = { authDocs, authLoginResponse };