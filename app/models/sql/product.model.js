const { mysql_db } = require("../../config/mysql.config");
const { DataTypes } = require("sequelize");
const Category = require('./category.model');

const Products = mysql_db.define(
    "products", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_category: {
            type: DataTypes.INTEGER,
        }
    }, {
        timestamps: true,
    }
);

Products.hasOne(Category, {
    foreignKey: 'id_category'
});

module.exports = Products;