const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");
const db = require("../config/db.config");
const ApiResponse = require('../response/api.response');


verifyRefreshToken = (req, res, next) => {
    let refreshToken = req.headers["x-access-token"] || req.headers["authorization"];

    if (!refreshToken) {
        const response = ApiResponse.error("No token provided!", 403);
        return res.status(403).json(response);
    }

    const tokenParts = accessToken.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
        return res.status(403).send({
            message: "Invalid access token format!"
        });
    }

    jwt.verify(refreshToken, config.refreshSecret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken: verifyToken,
    verifyRefreshToken: verifyRefreshToken,
};

module.exports = authJwt;