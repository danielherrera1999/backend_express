const Result = require('../../../../core/utils/result');
const { Failure } = require('../../../../core/response/failure/failure.response');
const TaskRepositoryDom = require('../../repository/task.respository.dom');


const taskRepositoryDom = new TaskRepositoryDom();


class TaskListUseCaseDom {
    constructor(taskRepositoryDom) {
            this.taskRepositoryDom = taskRepositoryDom;
        }
        /**
         * Sign up of user.
         * @returns {Promise<Result<Array<TaskDom>, Failure>>}
         */
    async execute(_param) {
        try {
            // Called the repository
            const value = await this.taskRepositoryDom.list();
            // condition of successfull
            if (value.value !== undefined) {
                return new Result.Right(value.value);
            } else {
                return new Result.Left(value.error);
            }
        } catch (error) {
            return new Result.Left(error);
        }
    }
}

module.exports = TaskListUseCaseDom