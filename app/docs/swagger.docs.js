const swaggerJsdoc = require("swagger-jsdoc");
const { authDocs, authLoginResponse } = require("./auth.docs");

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
        authLoginResponse: authLoginResponse
    },
};

const options = {
    swaggerDefinition,
    apis: ["app/routes/auth.js"],
};

const openapiSpecification = swaggerJsdoc(options);
module.exports = openapiSpecification;