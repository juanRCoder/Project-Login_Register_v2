const express = require('express');
const connectDB = require('./config/db');
const userController = require('./controllers/users');
const path = require('path');

const app = express();
const port = 3002;


// Configura Express para servir archivos estáticos desde el directorio 'styles'
app.use('/styles', express.static(path.join(__dirname, '../front-end/styles')));


// Parsear las URL con contenido JSON
app.use(express.json());

// Usa las rutas para la aplicación Express
app.get('/', userController.getPage);                           // get pageMain
app.get('/form', userController.getForm);                       // get formulario
app.post('/form/register', userController.sendForm);            // post formulario(registro)
app.post('/form/login', userController.sendFormLo);             // post formulario(login)

app.get('/form/register', userController.showPage);               // PAGINA DE USUARIO


app.listen(port, () => {
    console.log(`Aplicacion Express en linea en el puerto ${port}`);
});

// Conectar a MongoDB
connectDB();