const Result = require('../../../core/utils/result');
const { Failure } = require('../../../core/response/failure/failure.response');
const db = require("../../../core/utils/sequelize");
const User = db.user;
const bcrypt = require('bcryptjs');

class UserRepositoryImpl {
    /**
     * Sign up of user.
     * @param {UserRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async signUp(_param) {
        try {
            const existingUser = await User.findOne({
                where: {
                    email: _param.email
                }
            });
            if (existingUser != null) {
                return new Result.Left('Email already in use');
            } else {
                const password = _param.password;
                //Generate Password
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(password, saltRounds);
                const newUser = await User.create({
                    username: _param.username,
                    email: _param.email,
                    password: hashedPassword,
                });
                if (newUser) {
                    return new Result.Right(true);
                } else {
                    return new Result.Left('Failed to register user');
                }
            }
        } catch (error) {
            return new Result.Left('error server');
        }
    }

    /**
     * Sign up of user.
     * @param {AuthRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async signIn(_param) {
        try {
            const existingUser = await User.findOne({
                where: {
                    email: _param.email
                }
            });
            if (existingUser === null) {
                return new Result.Left('User not found');
            }

            const isPasswordValid = await bcrypt.compare(_param.password, existingUser.password);
            if (!isPasswordValid) {
                return new Result.Left('Incorrect password');
            }

            return new Result.Right(true);
        } catch (error) {
            return new Result.Left('Server error');
        }
    }
}

module.exports = UserRepositoryImpl;