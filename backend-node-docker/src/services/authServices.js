const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

const saltRounds = 10;

async function registerUser(data) { 
    const userExiste = await userRepository.obtenerPorEmail(data.email);
    if (userExiste) {
        throw new Error('User already exists');
    }  
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    const user = await userRepository.createUser({...data, password: hashedPassword,rol:data.rol}); 
    return user;
}


const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const secret_key = jwtSecret;

async function loginUser(data) {
    const user = await userRepository.obtenerPorEmail(data.email);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    const passwordMatch = await bcrypt.compare(data.password, user.password);
    const payload = {userId: user.id, email: user.email, rol: user.rol};
    
    //firmar el token
    const token = jwt.sign(payload, secret_key, {expiresIn: '1h'});
    return token;
}

module.exports = {
    loginUser,
    registerUser
};