class ApiResponse {
    constructor(data, msg, code, success, type) {
        this.data = data;
        this.msg = msg;
        this.code = code;
        this.success = success;
        this.type = type;
    }

    static success(data, msg = 'Operación exitosa', code = 200) {
        return new ApiResponse(data, msg, code, true, 'SUCCESS');
    }

    static error(msg, code = 500) {
        return new ApiResponse(null, msg, code, false, 'ERROR');
    }
}

module.exports = ApiResponse;