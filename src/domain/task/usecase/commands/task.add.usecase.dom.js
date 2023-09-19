const Result = require('../../../../core/utils/result');
const { Failure } = require('../../../../core/response/failure/failure.response');
const TaskRepositoryDom = require('../../repository/task.respository.dom');


const taskRepositoryDom = new TaskRepositoryDom();


class TaskAddUseCaseDom {
    constructor(taskRepositoryDom) {
            this.taskRepositoryDom = taskRepositoryDom;
        }
        /**
         * Sign up of user.
         * @param {TaskRequestDom} _param - .
         * @returns {Promise<Result<boolean, Failure>>}
         */
    async execute(_param) {
        try {
            // Called the repository
            const isValue = await this.taskRepositoryDom.add(_param);
            // condition of successfull
            if (isValue.value !== undefined) {
                return new Result.Right(isValue.value);
            } else {
                return new Result.Left(isValue.error);
            }
        } catch (error) {
            return new Result.Left(error);
        }
    }
}

module.exports = TaskAddUseCaseDom