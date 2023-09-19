const Result = require('../../../core/utils/result');
const { Failure } = require('../../../core/response/failure/failure.response');
const db = require("../../../core/utils/sequelize");
const Task = db.task;

class TaskRepositoryImpl {
    /**
     * Sign up of user.
     * @param {TaskRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async add(_param) {
        try {
            const newTask = await Task.create({
                title: _param.title,
                description: _param.description,
                expiration: _param.expiration,
                status: _param.status
            });

            if (newTask) {
                return new Result.Right(true);
            } else {
                return new Result.Left('Failed to add task');
            }
        } catch (error) {
            return new Result.Left('error server');
        }
    }
}

module.exports = TaskRepositoryImpl;