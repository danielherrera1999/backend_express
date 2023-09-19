const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");
const db = require("../config/db.config");
const ApiResponse = require('../response/api.response');


verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    if (!token) {
        const response = ApiResponse.error("No token provided!", 403);
        return res.status(403).json(response);
    }

    if (token.startsWith("Bearer ")) {
        // Elimina "Bearer " del token
        token = token.slice(7, token.length);
    }

    jwt.verify(token, config.accessTokenSecret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!",
            });
        }
        req.userId = decoded.id;
        next();
    });
};

generateAccessToken = (userId) => {
    return jwt.sign({ userId }, config.accessTokenSecret, { expiresIn: '24h' });
};

generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, config.refreshTokenSecret, { expiresIn: '7d' });
};




const authJwt = {
    verifyToken: verifyToken,
    generateAccessToken: generateAccessToken,
    generateRefreshToken: generateRefreshToken
};
module.exports = authJwt;