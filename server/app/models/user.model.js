const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");


class User {
    constructor(user) {
        this.email = user.email
        this.password = user.password // hashed with bcrypt
        this.isAdmin = user.isAdmin
    }

    generateAuthToken() {
        return jwt.sign({
            email: this.email,
            isAdmin: this.isAdmin
        }, "mockedPrivateKey", {expiresIn: 600000})
    }

    /** get user from db by email */
    getByEmail(email) {
        // TODO
        return null
    }

    /** use this to hash the password before saving it to the db*/
    async hashPassword(pw){
        const salt = await bcrypt.genSalt(10); // hardcoded bcrypt salt
        return bcrypt.hash(user.password, salt)
    }
}

module.exports = User;
