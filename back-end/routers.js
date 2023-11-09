const express = require('express');
const userController = require('./controllers/users');

// Crea un objeto router
const router = express.Router();

// Rutas: GET
router.get('/', userController.getForm);
router.get('/register', userController.getRegister);

// Rutas: POST
router.post('/register', userController.postForm);


module.exports = router;