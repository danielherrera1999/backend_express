class TaskRepositoryDom {
    /**
     * Task add.
     * @param {TaskAddRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async add(_param) {}

    /**
     * Task add.
     * @returns {Promise<Result<Array<TaskDom>, Failure>>}
     */
    async list() {}

    /**
     * Task Edit.
     * @param {TaskEditRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async edit() {}

    /**
     * Task Delete.
     * @param {Number} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async delete() {}
}


module.exports = TaskRepositoryDom;