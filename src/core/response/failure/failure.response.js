class Failure extends Error {
    constructor(message) {
        super(message);
        this.name = 'Failure';
    }
}

class ServerFailure extends Failure {
    constructor(message) {
        super(message);
        this.name = 'ServerFailure';
        Object.setPrototypeOf(this, ServerFailure.prototype);
    }
}

module.exports = { Failure, ServerFailure };