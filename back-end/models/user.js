// Importa la biblioteca Mongoose para definir el esquema y modelo
const mongoose = require('mongoose');

// Definir esquema del usuario(datos)
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        gmail: {
            type: String,
        },
        password: {
            type: String,
        }
    },
    {
        versionKey: false
    }
);

// Exporta el modelo basado en el esquema definido
module.exports = mongoose.model('User', userSchema, 'users')