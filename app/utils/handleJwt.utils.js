const bcrypt = require("bcryptjs");

/**
 * Encrypt text
 * @param {*} text 
 * @returns 
 */
const encrypt = async(text) => {
    const hash = await bcrypt.hash(text, 10);
    return hash;
};


/**
 * Comparte password with hash
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 * @returns 
 */
const compare = async(passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };