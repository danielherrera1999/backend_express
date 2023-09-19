class TaskRepositoryDom {
    /**
     * Task add.
     * @param {TaskRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async add(_param) {}

    /**
     * Task add.
     * @returns {Promise<Result<Array<TaskDom>, Failure>>}
     */
    async list() {}
}


module.exports = TaskRepositoryDom;