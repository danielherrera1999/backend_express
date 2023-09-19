const authJwt = require("../../../core/middleware/jwt.authentication");

const addTaskController = require("../controller/task.add.controller");
const listTaskController = require("../controller/task.list.controller");
const deleteTaskController = require("../controller/task.delete.controller");
const editTaskController = require("../controller/task.edit.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/services/task/add", [authJwt.verifyToken],
        addTaskController
    );

    app.post(
        "/api/services/task/edit", [authJwt.verifyToken],
        editTaskController
    );

    app.post(
        "/api/services/task/delete", [authJwt.verifyToken],
        deleteTaskController
    );

    app.post(
        "/api/services/task/list", [authJwt.verifyToken],
        listTaskController
    );
};