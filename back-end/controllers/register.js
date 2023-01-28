const connection = require("../models/db");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    birthDay,
    profileImage,
    coverImage,
  } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 5);
  console.log(encryptedPassword);

  const query = `INSERT INTO users (firstName,
    lastName,
    email,
    password,
    birthDay,
    profileImage,
    coverImage) VALUES (?,?,?,?,?,?,?)`;
  data = [
    firstName,
    lastName,
    email.toLowerCase(),
    encryptedPassword,
    birthDay,
    profileImage,
    coverImage,
  ];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(409).json({
        success: false,
        massage: "Error, Try Again",
        err,
      });
    }
    return res.status(200).json({
      success: true,
      massage: "Account Created Successfully",
      result,
    });
  });
};

module.exports = {
  register,
};
