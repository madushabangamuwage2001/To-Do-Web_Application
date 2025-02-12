// routes/ToDoRoute.js
const express = require("express");
const { getToDO, saveToDO, updateToDO, deleteToDO } = require("../controllers/ToDoControllers");
const router = express.Router();

router.get("/", getToDO);
router.post("/save", saveToDO);  
router.post("/update", updateToDO);
router.post("/delete", deleteToDO);

module.exports = router;