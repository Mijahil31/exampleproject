const userCreate = {
    type: "object",
    properties: {
        name: {
            type: "string",
        },
        age: {
            type: "integer",
        },
        email: {
            type: "string",
        },
        password: {
            type: "string",
        }
    }
}

const id = {
    type: "integer",
}

const userResponse = {
    type: "object",
    properties: {
        id: {
            type: "integer"
        },
        name: {
            type: "string",
        },
        age: {
            type: "integer",
        },
        email: {
            type: "string",
        },
        password: {
            type: "string",
        },
        role: {
            type: "integer",
        },
        createdAt: {
            type: "string"
        },
        updatedAt: {
            type: "string"
        }
    }
}

const user = {
    type: "object",
    properties: {
        message: {
            type: "string",
        },
        data: userResponse
    }
}

module.exports = { userResponse, userCreate, user, id };