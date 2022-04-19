require("dotenv").config();
require("./config/connection.js");

const express = require("express");
const CORS = require("cors");

const { errorHandler, explainThisOne } = require("./middleware/errorMiddleware.js")
const todoRoutes = require("./routes/todoRoutes.js");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(CORS());

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use("/", todoRoutes);
app.use(errorHandler);
app.use(explainThisOne);



app.listen(PORT);

// urlencoded allows to use client to input key value pairs into the req.body