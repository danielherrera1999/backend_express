const express = require('express')
const router = express.Router();


const UserRepositoryImpl = require('../../../data/users/services/repository.impl');
const SignUpUseCaseDom = require('../../../domain/users/usecase/commands/SignUpUseCaseDom');
const UserRequestDom = require('../../../domain/users/models/request/user.request.dom.js');
const ApiResponse = require('../../../core/response/api.response');

router.post('/signUp', async(req, res) => {
    try {
        const { username, email, password } = req.body;

        const userRepository = new UserRepositoryImpl();
        const signUpUseCase = new SignUpUseCaseDom(userRepository);


        const _param = new UserRequestDom(username, email, password);

        const result = await signUpUseCase.execute(_param)

        if (result.value !== undefined) {
            const response = ApiResponse.success(result.value, 'Successfully registered user', 200);
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
})

module.exports = router