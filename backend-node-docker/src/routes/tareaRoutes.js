const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const { verifyToken } = require('../middleware/authMiddleware');
const autorizarRoles = require('../middleware/rolMiddleware');

router.get('/tareas',verifyToken ,tareaController.getTareas);
router.post('/tareas',verifyToken,tareaController.createTarea);
router.delete('/tareas/:id',verifyToken, autorizarRoles("admin") ,tareaController.deleteTarea);

module.exports = router;