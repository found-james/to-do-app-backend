require("dotenv").config();
const express = require("express");
const CORS = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware.js")
const PORT = process.env.PORT || 3000;
const todoRoutes = require("./routes/todoRoutes.js");
const  connectDB  = require("./config/connection.js")

const app = express();

app.use(CORS());

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use("/todo", todoRoutes)
app.use(errorHandler);
app.use(function(err, req, res, next){
    res.status(500).send({message: "somethiing is off"});
})

app.listen(PORT);

// urlencoded allows to use client to input key value pairs into the req.body