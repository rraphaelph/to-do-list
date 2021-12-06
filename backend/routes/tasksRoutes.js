const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

//router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.delete('/remove/:id',TaskController.removeTask)
router.put('/edit/:id',TaskController.updateTaskPut)
router.get('/search/:buscardados',TaskController.searchTasks)
router.get('/all', TaskController.showTasks)
router.patch('/updatestatusHide', TaskController.toggleTaskStatusHide)
router.patch('/updatestatus', TaskController.toggleTaskStatus)


router.get('/updatestatusHide/:id', TaskController.updateTaskHide)

router.get('/edit/:id', TaskController.updateTask)





module.exports = router