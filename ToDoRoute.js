const express = require("express");
const { getToDO, saveToDO } = require("./controllers/ToDoControllers");
const router = express.Router();

router.get("/", getToDO );
rourter.post("/save", saveToDO);

module.exports = router;
