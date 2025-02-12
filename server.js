const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000

const cors = require('cors')
app.use(express.json());
 app.use(cors())

const router = require("./ToDoRoute");


require("dotenv").config();

console.log("MongoDB URI:", process.env.MONGODB_URL); // Debugging line

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
app.use(router);

app.listen(PORT, () => console.log(`listening on: ${PORT}`));
