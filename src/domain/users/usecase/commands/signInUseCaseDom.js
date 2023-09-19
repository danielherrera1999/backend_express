const UserRepositoryDom = require('../../repository/user.respository.dom');
const Result = require('../../../../core/utils/result');
const { Failure } = require('../../../../core/response/failure/failure.response');


const userRepository = new UserRepositoryDom();


class SignInUseCaseDom {
    constructor(userRepository) {
            this.userRepository = userRepository;
        }
        /**
         * Sign up of user.
         * @param {AuthRequestDom} _param - .
         * @returns {Promise<Result<Object, Failure>>}
         */
    async execute(_param) {
        try {
            // Called the repository
            const isRegistered = await this.userRepository.signIn(_param);
            // condition of successfull
            if (isRegistered.value !== undefined) {
                return new Result.Right(isRegistered.value);
            } else {
                return new Result.Left(isRegistered.error);
            }
        } catch (error) {
            return new Result.Left(error);
        }
    }
}

module.exports = SignInUseCaseDom