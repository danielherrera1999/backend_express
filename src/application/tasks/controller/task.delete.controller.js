const express = require('express')
const router = express.Router();


const ApiResponse = require('../../../core/response/api.response');
const TaskRepositoryImpl = require('../../../data/task/services/task.repository.impl');
const TaskDeleteUseCaseDom = require('../../../domain/task/usecase/commands/task.delete.usecase.dom');

const deleteTask = async(req, res) => {
    try {
        const { id } = req.body;
        const taskRepository = new TaskRepositoryImpl();
        const taskEditUseCaseDom = new TaskDeleteUseCaseDom(taskRepository);
        const result = await taskEditUseCaseDom.execute(Number(id))
        if (result.value !== undefined) {
            const response = ApiResponse.success(result.value, 'Successfully delete task', 200);
            res.status(200).json(response);
        } else {
            const errorMessage = result.error;
            const response = ApiResponse.error(errorMessage, 400);
            res.status(400).json(response);
        }
    } catch (error) {
        const response = ApiResponse.error(error, 500);
        res.status(500).json(response);
    }
}

module.exports = deleteTask