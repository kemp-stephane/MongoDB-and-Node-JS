const {Router} = require("express")

const{getTasks, saveTask, deleteTask, updateTask} = require("../controllers/Controllers")

const router =Router()

router.get("/", getTasks);
router.post("/save", saveTask);
router.put("/updates/:id", updateTask);
router.delete("/delete/:id", deleteTask);
 
module.exports = router;

