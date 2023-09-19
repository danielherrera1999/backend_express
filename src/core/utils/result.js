class Result {
    constructor(value, error) {
        if (value !== undefined && error !== undefined) {
            throw Error("Both value and error cannot be defined");
        }

        this.value = value;
        this.error = error;
    }

    valRight() {
        return this.value !== undefined;
    }

    valLeft() {
        return this.error !== undefined;
    }

    resultRight(onRight) {
        if (this.valRight()) {
            onRight(this.value);
        }
    }

    resultLeft(onLeft) {
        if (this.valLeft()) {
            onLeft(this.error);
        }
    }

    result(onRight, onLeft) {
        if (this.valRight()) {
            onRight(this.value);
        } else {
            onLeft(this.error);
        }
    }
}

class Right extends Result {
    constructor(value) {
        super(value, undefined);
    }
}

class Left extends Result {
    constructor(error) {
        super(undefined, error);
    }
}

module.exports = { Result, Right, Left };