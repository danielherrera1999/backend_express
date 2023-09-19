class UserRequestDom {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.email;
    }

    setUsername(newUsername) {
        this.username = newUsername;
    }

    setEmail(newEmail) {
        this.email = newEmail;
    }

    setPassword(newPassword) {
        this.password = newPassword;
    }
}

module.exports = UserRequestDom;