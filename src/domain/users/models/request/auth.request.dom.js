class AuthRequestDom {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }



    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.email;
    }


    setEmail(newEmail) {
        this.email = newEmail;
    }

    setPassword(newPassword) {
        this.password = newPassword;
    }
}

module.exports = AuthRequestDom;