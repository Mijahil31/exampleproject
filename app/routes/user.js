const express = require("express");
const router = express.Router();

const { getAll, register, get, deleteUser } = require("../controller/user.controller");
const { validateRegister } = require("../validator/user.validator");
const { checkAuth } = require("../middleware/auth.middleware")

/**
 * Register User
 * @swagger
 * /user:
 *      post:
 *          tags: 
 *              - User
 *          summary: "Create user"
 *          description: "Endpoint for user creation"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/definitions/userCreate"
 *          responses:
 *              '200':
 *                  description: "Creacion del usuario de forma exitosa"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/definitions/user"
 *              
 */
router.post("/", validateRegister, register);

/**
 * Get All User
 * @swagger
 * /user:
 *      get:
 *          tags: 
 *              - User
 *          summary: "Get all users"
 *          description: "Endpoint for get all user"
 *          security:
 *              - Bearer: []
 *          responses:
 *              '200':
 *                  description: "Obtener la lista de usuarios"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/definitions/user"
 *              
 */
router.get("/", checkAuth, getAll);

/**
 * Get User
 * @swagger
 * /user/{id}:
 *      get:
 *          tags: 
 *              - User
 *          summary: "Get user"
 *          description: "Endpoint for get all user"
 *          parameters:
 *              -   in: "path"
 *                  name: "id"
 *                  description: "Id user"
 *                  required: true
 *                  schema:
 *                      type: number
 *          security:
 *              - Bearer: []
 *          responses:
 *              '200':
 *                  description: "Obtener el usuarios"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/definitions/user"
 *              
 */
router.get("/:id", checkAuth, get);

/**
 * Delete User
 * @swagger
 * /user/{id}:
 *      delete:
 *          tags: 
 *              - User
 *          summary: "Delete user"
 *          description: "Endpoint for delete user"
 *          parameters:
 *              -   in: "path"
 *                  name: "id"
 *                  description: "Id user"
 *                  required: true
 *                  schema:
 *                      type: number
 *          security:
 *              - Bearer: []
 *          responses:
 *              '200':
 *                  description: "Obtener el usuarios"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/definitions/user"
 *              
 */
router.delete("/:id", checkAuth, deleteUser);

module.exports = router;