const { mysql_db } = require("../../config/mysql.config");
const { DataTypes } = require("sequelize");

const User = mysql_db.define(
    "users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.INTEGER,
        },
    }, {
        timestamps: true,
    }
);

module.exports = User;