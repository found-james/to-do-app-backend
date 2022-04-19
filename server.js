require("dotenv").config();
const express = require("express");
const CORS = require("cors");
const PORT = 8000;
const todoControllers = require("./controllers/todoControllers.js");

const app = express();

app.use(CORS());
app.use(express.json());
app.use("/todo", todoControllers)

app.listen(PORT);
