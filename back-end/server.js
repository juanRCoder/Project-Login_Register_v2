const express = require('express');
const routers = require('./routers');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
const port = 3002;

app.use(express.json());

// Configura Express para servir archivos estáticos desde el directorio raíz del proyecto
// app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, '../')));


// Usa las rutas para la aplicación Express
app.use(routers);

app.listen(port, () => {
    console.log(`Aplicacion Express en linea en el puerto ${port}`);
});

// Conectar a MongoDB
connectDB();


// -Project-Login_Register_v2
//     - back-end
//         -config
//             - db.js
//         -controllers
//             - user.js
//         -models
//             - user.js
//         -routers.js
//         -server.js
//     - images
//         - registro.ico
//         - google.png
//         - gorjeo.png
//         - instagram.png
//     - index.html
//     - script.js
//     - style.css