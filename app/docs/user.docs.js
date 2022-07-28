const UserResponse = {
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

module.exports = { UserResponse }