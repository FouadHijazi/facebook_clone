const connection = require("../models/db");
const bcrypt = require("bcrypt");
const salt = process.env.SALT;

const register = async (req, res) => {
    const { firstName, lastName, email, password, birthDay, profileImage, coverImage } = req.body;

    const bcriptPassword = await password.hash(password, salt);

    const query = `INSERT INTO users (firstName,lastName,email,password,birthDay,profileImage,coverImage) WHERE values =(?,?,?,?,?,?,?)`
    data = [firstName, lastName, email.toLowerCase(), bcriptPassword, birthDay, profileImage, coverImage]

    connection.query(query, data, (err, result) => {
        if (err) {
          
        return res.status(409).json({
            success: false,
            massage: "Error, Try Again",
            err
          });
        }
     return res.status(200).json({
          success: true,
          massage: "Account Created Successfully",
          result
        });
      });
    };
    
    module.exports = {
      register,
    };
    
        
      
