const express = require("express");
require("dotenv").config();
const db = require("./Models/db")
const PORT = process.env.PORT;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is work on PORT ${PORT}`);
});
