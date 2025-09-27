const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function getTareas(usuarioId) {
    return await prisma.tarea.findMany({
        where: {usuarioId: usuarioId}
    });
}

async function deleteTarea(id, usuarioId, rol) {
    if (rol === 'admin') {
        return await prisma.tarea.delete({where: {id}});
    } else {
        return await prisma.tarea.delete({where: {id, usuarioId}});
    }
}

async function createTarea(data, usuarioId) {
    data.usuarioId = usuarioId;
    return await prisma.tarea.create({
        data: {
            ...data,
            usuarioId: usuarioId
        }
    });
}


module.exports = {
    getTareas,
    deleteTarea,
    createTarea
};