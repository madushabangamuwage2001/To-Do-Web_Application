// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const router = require("./routes/ToDoRoute");  // Updated path
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

console.log("MongoDB URI:", process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(router);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));