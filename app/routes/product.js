const express = require("express");
const router = express.Router();

const { getAll, getId, create, deleteProduct, update } = require("../controller/product.controller");
const { validate } = require("../validator/product.validator");
const { checkAuth } = require("../middleware/auth.middleware");

/**
 * Get All User
 * @swagger
 * /product:
 *      get:
 *          tags: 
 *              - Product
 *          summary: "Get all product"
 *          description: "Endpoint for get all product"
 *          security:
 *              - Bearer: []
 *          responses:
 *              '200':
 *                  description: "Obtener la lista de products"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/definitions/productResponse"
 *              
 */
router.get("/", checkAuth, getAll);

/**
 * Get User by id
 * @swagger
 * /product/{id}:
 *      get:
 *          tags: 
 *              - Product
 *          summary: "Get product"
 *          description: "Endpoint for get product"
 *          parameters:
 *              -   in: "path"
 *                  name: "id"
 *                  description: "Id product"
 *                  required: true
 *                  schema:
 *                      type: number
 *          security:
 *              - Bearer: []
 *          responses:
 *              '200':
 *                  description: "get product"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/definitions/productResponse"
 *              
 */
router.get("/:id", checkAuth, getId);

/**
 * Register Product
 * @swagger
 * /product:
 *      post:
 *          tags: 
 *              - Product
 *          summary: "Create Product"
 *          description: "Endpoint for Product creation"
 *          security:
 *              - Bearer: []
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/definitions/productBody"
 *          responses:
 *              '200':
 *                  description: "Creacion del producto de forma exitosa"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/definitions/productResponse"
 *              
 */
router.post("/", checkAuth, validate, create);

/**
 * Update Product by Id
 * @swagger
 * /product/{id}:
 *      put:
 *          tags: 
 *              - Product
 *          summary: "Create Product"
 *          description: "Endpoint for Product creation"
 *          security:
 *              - Bearer: []
 *          parameters:
 *              -   in: "path"
 *                  name: "id"
 *                  description: "Id product"
 *                  required: true
 *                  schema:
 *                      type: number
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/definitions/productBody"
 *          responses:
 *              '200':
 *                  description: "Creacion del producto de forma exitosa"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/definitions/productResponse"
 *              
 */
router.put("/:id", checkAuth, validate, update);

/**
 * Delete User by id
 * @swagger
 * /product/{id}:
 *      delete:
 *          tags: 
 *              - Product
 *          summary: "Delete product"
 *          description: "Endpoint for delete product"
 *          parameters:
 *              -   in: "path"
 *                  name: "id"
 *                  description: "Id product"
 *                  required: true
 *                  schema:
 *                      type: number
 *          security:
 *              - Bearer: []
 *          responses:
 *              '200':
 *                  description: "delete product"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/definitions/productResponse"
 *              
 */
router.delete("/:id", checkAuth, deleteProduct);

module.exports = router;