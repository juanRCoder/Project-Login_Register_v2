const user = require('../models/user');     //Exportar modelo
const path = require('path');

//GET:  TRAE PAGINA PRINCIPAL (main.html)
exports.getPage = (req, res) => {
    const htmlFilePath = path.join(__dirname, '../../front-end/main.html');
    res.sendFile(htmlFilePath);
};

//GET: TRAE PAGINA FORM (index.html)
exports.getForm = async (req, res) => {
    const htmlFilePath = path.join(__dirname, '../../front-end/form.html');
    res.sendFile(htmlFilePath);
};

//POST: ENVIA LOS DATOS A MONGODB  (REGISTRO)
exports.sendForm = async (req, res) => {
    const { name, gmail, password } = req.body;

    try {
        // Verificar si el nombre ya existe
        const existingUserByName = await user.findOne({ name });
        if (existingUserByName) {
            return res.status(400).json({ mensaje: 'El nombre ya está en uso' });
        }

        // Verificar si el nombre ya existe
        const existingUserByGmail = await user.findOne({ gmail });
        if (existingUserByGmail) {
            return res.status(400).json({ mensaje: 'El correo ya esta registrado' });
        }

        // Verificar si la contraseña existe
        const existingUserByPassword = await user.findOne({ password });
        if (existingUserByPassword) {
            return res.status(400).json({ mensaje: 'La contraseña ya existe' });
        }

        // Si no hay usuarios con los mismos datos, guardar el nuevo usuario
        const newUser = new user({ name, password });
        await newUser.save();

        res.status(201).json({ mensaje: 'Nuevo Usuario registrado con éxito' });

    } catch (error) {
        console.error('Error al guardar el usuario:', error);
        res.status(500).json({ mensaje: 'Error al guardar el usuario' });
    }
};

//POST: ENVIA LOS DATOS A MONGODB  (LOGIN)
exports.sendFormLo = async (req, res) => {
    const { name, password } = req.body;

    try {
        // Verificar si existe un usuario con el nombre y contraseña proporcionados
        const existingUser = await user.findOne({ name, password });
        if (!existingUser) {
            return res.status(400).json({ mensaje: 'Credenciales incorrectas' });
        }

        res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    } catch (error) {
        console.error('Error al verificar las credenciales:', error);
        res.status(500).json({ mensaje: 'Error al verificar las credenciales' });
    }
};


//GET: MOSTRAR LA PAGINA DE USUARIO
exports.showPage = (req, res) => {
    const htmlFilePath = path.join(__dirname, '../../front-end/form.html');
    res.sendFile(htmlFilePath);
};




// Estrucutura del proyecto:
// - Project-Login_Register_v2
//     - back-end
//         - server.js
//     - front-end
//         - styles
//             - style.css
//             - imagenes
//             - scritp.js
//             - scritp2.js
//         - index.html
//         - main.html