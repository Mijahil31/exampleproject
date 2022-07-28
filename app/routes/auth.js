const express = require("express");
const router = express.Router();

const { login } = require("../controller/auth.controller");
const { validateAuth } = require("../validator/auth.validator");

/**
 * Login user
 * @swagger
 * /auth:
 *    post:
 *      tags:
 *        - Auth
 *      summary: "Login user"
 *      description: Enter the application
 *      responses:
 *        '200':
 *          description: 'Retorna el objeto insertado en la coleccion.'
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/definitions/authLoginResponse"
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/definitions/auth"
 */
router.post("/", validateAuth, login);

module.exports = router;