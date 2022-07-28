const { Sequelize } = require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;
const min = parseInt(process.env.MYSQL_MIN_POOL);
const max = parseInt(process.env.MYSQL_MAX_POOL);
const acquire = process.env.MYSQL_ACQUIRE_POOL;
const idle = process.env.MYSQL_IDLE_POOL;

const mysql_db = new Sequelize(database, username, password, {
    host: host,
    dialect: "mysql",
    pool: {
        max: max,
        min: min,
        acquire: acquire,
        idle: idle
    }
});

const dbConnectMySQL = async() => {
    try {
        await mysql_db.authenticate();
        console.log("MySQL connected");
    } catch (e) {
        console.log("MySQL ERROR connected", e);
    }
};

const dbMigrateMysql = async() => {
    try {
        await mysql_db.sync({ force: true });
        console.log('All models were synchronized successfully.');
    } catch (e) {
        console.log("MySQL ERROR Migrate", e);
    }
}

module.exports = { mysql_db, dbConnectMySQL, dbMigrateMysql };