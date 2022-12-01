const express = require('express');

const router = express.Router();

router.get('/', inicio);

function inicio (peticion, resultado)
{
   resultado.sendFile(__dirname + "/uploadProducts.html");
}

 module.exports = router; 