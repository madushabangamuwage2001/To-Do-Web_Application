const{Router} = require("express");
const TodoController = require('../controllers/TodoController');


const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/TodoController");

const router = Router()


router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)


module.exports = router;