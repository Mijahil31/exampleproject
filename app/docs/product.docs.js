const productBody = {
    type: "object",
    properties: {
        name: { type: "string" },
        id_category: { type: "integer" }
    }
}

const product = {
    type: "object",
    properties: {
        id: { type: "integer" },
        name: { type: "string" },
        id_category: { type: "integer" },
        createdAt: { type: "string" },
        updatedAt: { type: "string" }
    }
}

const productResponse = {
    type: "object",
    properties: {
        message: { type: "string" },
        data: product
    }
}

module.exports = { productBody, productResponse }