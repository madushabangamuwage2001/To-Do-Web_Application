// routes/ToDoRoute.js
const express = require("express");
const { getToDO, saveToDO } = require("../controllers/ToDoControllers");
const router = express.Router();

router.get("/", getToDO);
router.post("/save", saveToDO);  // Fixed typo in 'router'

module.exports = router;