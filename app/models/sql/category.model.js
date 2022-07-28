const { mysql_db } = require("../../config/mysql.config");
const { DataTypes } = require("sequelize");
const Product = require("./product.model");

const Category = mysql_db.define(
    "category", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true,
    }
);

module.exports = Category;