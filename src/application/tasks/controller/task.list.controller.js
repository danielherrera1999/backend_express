const express = require('express')
const router = express.Router();


const ApiResponse = require('../../../core/response/api.response');
const TaskRepositoryImpl = require('../../../data/task/services/task.repository.impl');
const TaskListUseCaseDom = require('../../../domain/task/usecase/queries/task.list.usecase.dom');

const listTask = async(req, res) => {
    try {
        const taskRepository = new TaskRepositoryImpl();
        const taskListUseCase = new TaskListUseCaseDom(taskRepository);


        const result = await taskListUseCase.execute()

        if (result.value !== undefined) {
            const response = ApiResponse.success(result.value, 'Successfully list task', 200);
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

module.exports = listTask