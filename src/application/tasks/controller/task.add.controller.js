const express = require('express')
const router = express.Router();


const ApiResponse = require('../../../core/response/api.response');
const TaskRepositoryImpl = require('../../../data/task/services/task.repository.impl');
const TaskUseCaseDom = require('../../../domain/task/usecase/commands/taskUseCaseDom');
const TaskRequestDom = require('../../../domain/task/models/request/task.request.dom');

const addTask = async(req, res) => {
    try {
        const { title, description, expiration } = req.body;

        const taskRepository = new TaskRepositoryImpl();
        const taskAddUseCase = new TaskUseCaseDom(taskRepository);


        const _param = new TaskRequestDom(title, description, expiration, 'PENDIENTE');

        const result = await taskAddUseCase.execute(_param)

        if (result.value !== undefined) {
            const response = ApiResponse.success(result.value, 'Successfully add task', 200);
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

module.exports = addTask