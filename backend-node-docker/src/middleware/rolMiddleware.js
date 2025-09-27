function autorizarRoles(...rolesPermitidos) {
    return (req, res, next) => {
        const usuario = req.user; // Suponiendo que el usuario ya está autenticado y su info está en req.usuario
        if (!usuario) return res.status(401).json({ mensaje: 'Acceso denegado: rol no autorizado' });

        if (!rolesPermitidos.includes(usuario.rol)) return res.status(403).json({ mensaje: 'Acceso denegado: rol no autorizado' });

        next();
    };
}

module.exports = autorizarRoles;