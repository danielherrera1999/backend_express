const express = require('express')
const router = express.Router();


const ApiResponse = require('../../../core/response/api.response');
const TaskRepositoryImpl = require('../../../data/task/services/task.repository.impl');
const TaskAddUseCaseDom = require('../../../domain/task/usecase/commands/task.add.usecase.dom');
const TaskAddRequestDom = require('../../../domain/task/models/request/task.add.request.dom');

const addTask = async(req, res) => {
    try {
        const { title, description, expiration, status } = req.body;

        const taskRepository = new TaskRepositoryImpl();
        const taskAddUseCase = new TaskAddUseCaseDom(taskRepository);


        const _param = new TaskAddRequestDom(title, description, expiration, status);

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