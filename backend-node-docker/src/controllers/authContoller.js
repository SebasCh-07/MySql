const authService = require('../services/authServices');
const backlistRepo = require('../repositories/tokenBlacklistRepository');


async function register(req, res) {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json({message: 'User registered successfully', user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }   
}



async function loginUser(req, res) {
    try {
        const token = await authService.loginUser(req.body);
        res.json({message: "Usuario logueado correctamente",data: token});
    } catch (error) {
        res.status(500).json({message: error.message});
    }   
}

async function logoutUser(req, res) {

    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({message: 'No se proporciono un token'});

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({message: 'No se proporciono un token'});

    await backlistRepo.agregarToken(token);
    res.json({message: 'Token revocado correctamente'});

}


module.exports = {
    register,
    loginUser,
    logoutUser
};