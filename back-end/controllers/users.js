const path = require('path');
const user = require('../models/user');

exports.getForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'index.html'));
}

exports.postForm = (req, res) => {
    const {name, gmail, password} = req.body;

    //new model
    const  newUser = new user({name, gmail, password});
    newUser.save();

    res.redirect('/register');
};

exports.getRegister = (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'index.html'));
}