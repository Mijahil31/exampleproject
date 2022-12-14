const handleHttpError = (res, error) => {
    console.log("Error", error);
    res.status(500);
    res.send({ message: "ERROR", data: null });
};

const handleErrorResponse = (res, message = "Algo ocurrio", code = 401) => {
    console.log("Error", message);
    res.status(code);
    res.send({ message: message, data: null });
};

module.exports = { handleHttpError, handleErrorResponse };