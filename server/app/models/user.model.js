const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sql = require("./db.js");


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
    
    /** use this to hash the password before saving it to the db*/
    async hashPassword(pw){
        const salt = await bcrypt.genSalt(10); // hardcoded bcrypt salt
        return bcrypt.hash(user.password, salt)
    }
}

User.getByEmail = (email) => {
    return new Promise(async (resolve,reject)=> {

    sql.query(
        "SELECT * FROM user WHERE email = ?",[email], (err, res) => {
        if (err) {
            reject(err);
          return;
        }
        const user = new User(res[0]);
        resolve(user);
      });
    })
}
module.exports = User;
