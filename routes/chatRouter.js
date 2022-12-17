const express = require('express');

const router = express.Router();

router.get('/', inicio);

function inicio (peticion, resultado)
{
   resultado.sendFile(__dirname + "/chat.html");
}

 module.exports = router; 