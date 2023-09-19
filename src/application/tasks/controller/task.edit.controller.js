const express = require('express')
const router = express.Router();


const ApiResponse = require('../../../core/response/api.response');
const TaskRepositoryImpl = require('../../../data/task/services/task.repository.impl');
const TaskEditUseCaseDom = require('../../../domain/task/usecase/commands/task.edit.usecase.dom');
const TaskEditRequestDom = require('../../../domain/task/models/request/task.edit.request.dom');

const editTask = async(req, res) => {
    try {
        const { id, title, description, expiration } = req.body;

        const taskRepository = new TaskRepositoryImpl();
        const taskEditUseCaseDom = new TaskEditUseCaseDom(taskRepository);


        const _param = new TaskEditRequestDom(id, title, description, expiration, 'PENDIENTE');

        const result = await taskEditUseCaseDom.execute(_param)

        if (result.value !== undefined) {
            const response = ApiResponse.success(result.value, 'Successfully edit task', 200);
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

module.exports = editTask