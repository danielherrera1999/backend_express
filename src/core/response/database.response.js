class DatabaseResponse {
    constructor(data, msg, code) {
        this.data = data;
        this.msg = msg;
        this.code = code;
    }

    static success(data, msg = 'Operación exitosa', code = 200) {
        return DatabaseResponse(data, msg, code);
    }

    static error(msg, code = 500) {
        return DatabaseResponse(null, msg, code);
    }
}

module.exports = DatabaseResponse;