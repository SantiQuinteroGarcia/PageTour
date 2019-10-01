const express = require('express');
const router = express.Router();
const User = require('../models/User');
const database = require('../database');

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.post('/users/signup', async (req, res) => {
    const {name, lastName, email, password, confirmPassword, tipoDocumento, numDocumento, telefono, departamento, ciudad} = req.body;
    const errors = [];
    if(password != confirmPassword){
        errors.push({text: 'Contraseña Incorrecta'});
    }

    if(password.legth < 8){
        errors.push({text: 'La contraseña debe tener al menos 8 caracteres'});
    }
        console.log(errors);


        /* const emailUser = await User.findOne({email: email});
        if(emailUser){
            console.log('El usuario ya existe');
            res.redirect('/');
        } */
        const newUser = new User({name, lastName, email, password, confirmPassword, tipoDocumento, numDocumento, telefono, departamento, ciudad});
        /* newUser.password = await newUser.encryptPassword(password); */
        
        console.log('Usuario Registrado');
        res.redirect('/users/signin'); 
});

module.exports = router;