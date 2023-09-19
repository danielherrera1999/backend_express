const Result = require('../../../core/utils/result');
const { Failure } = require('../../../core/response/failure/failure.response');
const db = require("../../../core/utils/sequelize");
const TaskDom = require('../../../domain/task/models/task.dom');
const Task = db.task;

class TaskRepositoryImpl {
    /**
     * add of task.
     * @param {TaskAddRequestDom} _param - .
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

    /**
     * list of task.
     * @returns {Promise<Result<Array<TaskDom>, Failure>>}
     */
    async list() {
        try {
            const tasks = await Task.findAll();

            const taskList = tasks.map(task => {
                const taskDom = new TaskDom(
                    task.id,
                    task.title,
                    task.description,
                    task.expiration,
                    task.status
                );
                return taskDom;
            });

            return new Result.Right(taskList);
        } catch (error) {
            log(error)
            return new Result.Left('error server');
        }
    }

    /**
     * add of task.
     * @param {TaskEditRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async edit(_param) {
        try {
            const existingTask = await Task.findByPk(_param.id);
            if (!existingTask) {
                return new Result.Left('Task not found');
            }
            existingTask.title = _param.title;
            existingTask.description = _param.description;
            existingTask.expiration = _param.expiration;
            existingTask.status = _param.status;
            await existingTask.save();
            return new Result.Right(true)
        } catch (error) {
            return new Result.Left('error server');
        }
    }


    /**
     * Task Delete.
     * @param {Number} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async delete(_param) {
        try {
            const existingTask = await Task.findByPk(_param);
            if (!existingTask) {
                return new Result.Left('Task not found');
            }
            await existingTask.destroy();
            return new Result.Right(true);
        } catch (error) {
            return new Result.Left('error server');
        }
    }
}

module.exports = TaskRepositoryImpl;