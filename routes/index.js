const emailController = require('../controller/emailController')
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');

router.post('/', 
    [
        //check['from', "Ingrese un correo valido"].isEmail(),

    ],  
    emailController.sendEmail
);

module.exports = router;