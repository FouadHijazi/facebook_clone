const mysql = require("mysql2");
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

if (connection) {
  console.log("Connected to database");
} else {
  console.log("Connection failed");
}

module.exports = connection;
