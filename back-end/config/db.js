// Importar la biblioteca Mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

const db_URL = 'mongodb://127.0.0.1:27017/loginRegister';

module.exports = () => {
    async function connect() {
        try {
         await mongoose.connect(db_URL);
         console.log("Database connect!");
        } catch (error) {
            console.log("DB: Error!");
        } 
    }
    connect();
}