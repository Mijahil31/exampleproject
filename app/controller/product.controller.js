const Product = require("../models/sql/product.model");
const { matchedData } = require("express-validator");
const { handleErrorResponse, handleHttpError } = require("../utils/handleError.utils");

const getAll = async(req, res) => {
    try {
        let data = await Product.findAll();
        res.json({ message: "Get all products", data: data });
    } catch (e) {
        handleHttpError(res, e);
        return;
    }
}

const getId = async(req, res) => {
    try {
        const id = req.params.id;
        let data = await Product.findByPk(id);
        if (!data) {
            handleErrorResponse(res, "Product not exist", 404);
            return;
        }
        res.json({ message: "Get Product", data: data });
    } catch (e) {
        handleHttpError(res, e);
        return;
    }
}

const create = async(req, res) => {
    try {
        const body = matchedData(req);
        let data = await Product.findOne({ where: { name: body.name } });
        console.log(data);
        if (data) {
            handleErrorResponse(res, "Product exist", 400);
            return;
        }
        data = await Product.create(body);
        res.status(201);
        res.json({ message: "Product created", data: data });
    } catch (e) {
        handleHttpError(res, e);
        return;
    }
}

const update = async(req, res) => {
    try {
        const id = req.params.id;
        const body = matchedData(req);
        let data = await Product.findByPk(id);
        if (!data) {
            handleErrorResponse(res, "Product not exist", 404);
            return;
        }
        data = await Product.update(body, { where: { id } });
        res.status(200);
        res.json({ message: "Product updated", data: data });
    } catch (e) {
        handleHttpError(res, e);
        return;
    }
}

const deleteProduct = async(req, res) => {
    try {
        const id = req.params.id;
        let data = await Product.findByPk(id);
        if (!data) {
            handleErrorResponse(res, "Product not exist", 404);
            return;
        }
        data = await Product.destroy({ where: { id } });
        res.status(200);
        res.json({ message: "Product deleted", data: data });
    } catch (e) {
        handleHttpError(res, e);
        return;
    }
}

module.exports = { getId, getAll, create, deleteProduct, update };