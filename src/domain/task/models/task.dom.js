class TaskDom {
    constructor(id, title, description, expiration, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.expiration = expiration;
        this.status = status;
    }

    getId() {
        return this.title;
    }

    getTitle() {
        return this.title;
    }

    getDescriptiol() {
        return this.description;
    }

    getExpiration() {
        return this.expiration;
    }

    getStatus() {
        return this.status;
    }

    setId(newValue) {
        this.id = newValue;
    }

    setTitle(newValue) {
        this.title = newValue;
    }

    setDescription(newValue) {
        this.description = newValue;
    }

    setExpiration(newValue) {
        this.expiration = newValue;
    }

    setStatus(newValue) {
        this.status = newValue;
    }
}

module.exports = TaskDom;