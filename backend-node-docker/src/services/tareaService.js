const tareaRepository = require('../repositories/tareaRepository');

async function getTareas(usuarioId) {
    return await tareaRepository.getTareas(usuarioId);
}

async function deleteTarea(id, usuarioId, rol) {
    return await tareaRepository.deleteTarea(id, usuarioId, rol);
}
async function createTarea(data, usuarioId) {
    return await tareaRepository.createTarea(data, usuarioId);
}

module.exports = {
    getTareas,
    createTarea,
    deleteTarea
};