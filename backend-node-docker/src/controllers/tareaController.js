const tareaService = require('../services/tareaService');

async function getTareas(req, res) {
    try {
        const usuarioId = req.user.userId; // Obtener el ID del usuario desde el token
        const tareas = await tareaService.getTareas(usuarioId);
        console.log(tareas);
        res.status(200).json({message: "Tareas obtenidas correctamente", data: tareas });
    } catch (error) {
        console.error("Error fetching tareas:", error);
        res.status(500).json({ message: error.message });
    }
}

async function deleteTarea(req, res) {
    try {
        const usuarioId = req.user.userId;
        const rol = req.user.rol;
        const id = parseInt(req.params.id);
        const tarea = await tareaService.deleteTarea(id, usuarioId, rol);
        res.status(200).json({ message: "Tarea eliminada correctamente", data: tarea });
    } catch (error) {
        console.error("Error deleting tarea:", error);
        res.status(500).json({ message: error.message });
    }
}

async function createTarea(req, res) {
    try {
        const nuevaTarea = await tareaService.createTarea(req.body, req.user.userId);
        res.status(201).json({ message: "Tarea creada correctamente", data: nuevaTarea });
    } catch (error) {
        console.error("Error creating tarea:", error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea
};
