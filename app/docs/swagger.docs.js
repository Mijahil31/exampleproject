const swaggerJsdoc = require("swagger-jsdoc");
const { authDocs, authLoginResponse } = require("./auth.docs");
const { userCreate, userResponse, user } = require("./user.docs");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API Example",
        description: "Example application from nodejs",
        contact: {
            name: "Mijahil Franchi",
            email: "mijahi31@gmail.com",
        }
    },
    servers: [{
        url: "http://localhost:3000/api",
        description: "Development server",
    }, ],
    schemes: ["http"],
    components: {
        securitySchemes: {
            Bearer: {
                type: "http",
                scheme: "bearer",
            },
        },
    },
    definitions: {
        auth: authDocs,
        authLoginResponse: authLoginResponse,
        userCreate: userCreate,
        userResponse: userResponse,
        user: user,
    },
};

const options = {
    swaggerDefinition,
    apis: ["app/routes/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);
module.exports = openapiSpecification;