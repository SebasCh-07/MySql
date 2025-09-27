const jwt = require('jsonwebtoken');
const backlistRepo = require('../repositories/tokenBlacklistRepository');
const secret_key = process.env.JWT_SECRET;

async function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({message: 'No token provided'});
    }
    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).json({message: 'No se proporciono un token'});

    const revocado = await backlistRepo.estaEnRevocado(token);
    if (revocado) return res.status(401).json({message: 'Token revocado'});

    try{
        const decoded = jwt.verify(token, secret_key);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({message: 'Invalid token'});
    }
    
}

module.exports = {
    verifyToken
}