const express = require('express');
const router = express.Router();
const authController = require('../controllers/authContoller');

const verifyToken = require('../services/authServices');

router.post('/registrar', authController.register);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
module.exports = router;