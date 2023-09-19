class UserRepositoryDom {
    /**
     * Sign up of user.
     * @param {UserRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async signUp(_param) {}

    /**
     * Sign up of user.
     * @param {AuthRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async signIn(_param) {}
}


module.exports = UserRepositoryDom;