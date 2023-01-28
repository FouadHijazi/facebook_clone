const db = require("./Models/db")
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");

//Routers 
const registerRouter = require("./routers/register")
const loginRouter = require("./routers/login")



const app = express();

//middlwears
app.use(cors());
app.use(express.json());
app.use("/register", registerRouter);
app.use("/login", loginRouter);


app.listen(PORT, () => {
  console.log(`Server is work on PORT ${PORT}`);
});
