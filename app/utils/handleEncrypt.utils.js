const bcrypt = require("bcryptjs");

const encrypt = async(text) => {
    const hash = await bcrypt.hash(text, 10);
    return hash;
};

const compare = async(passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };