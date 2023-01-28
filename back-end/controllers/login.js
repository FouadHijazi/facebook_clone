const connection = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const login = (req, res) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    const data = [email];
    const query = `SELECT * FROM users WHERE email= ? AND isDeleted =0`;
    connection.query(query, data, (err, result) => {
        if (err) throw err
        if (result.length > 0) {

            bcrypt.compare(password, result[0].password, (err, response) => {
                if (err) throw res.json.err
                if (response) {

                    const payload = {
                        userId: result[0].userId,
                        Id: result[0].Id
                    }
                    const secret = process.env.SECRET
                    const token = jwt.sign(payload, secret)

                    return res.status(200).json({
                        succses: true,
                        massage: "Welcome",
                        token: token,
                        response: result
                    })
                } else {
                    return res.status(403).json({
                        succses: false,
                        massage: "Incorect Password",
                    })
                }
            })
        } else {
            return res.status(404).json({
                succses: false,
                massage: "email is not exciest",
            })
        }
    })


}

module.exports = {
    login,
};
