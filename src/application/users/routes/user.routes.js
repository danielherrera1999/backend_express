const authJwt = require("../../../core/middleware/jwt.authentication");
const refreshAccessTokenController = require("../controller/refresh.token.controller");

const signIncontroller = require("../controller/signIn.controller");
const signUpcontroller = require("../controller/signUp.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signUp",
        signUpcontroller
    );

    app.post("/api/auth/signIn", signIncontroller);
    app.post("/api/auth/refreshToken", refreshAccessTokenController);

    app.get(
        "/api/auth/jwt", [authJwt.verifyToken], (req, res) => {
            res.json({ message: "AUTHENTICADO" })
        })
};