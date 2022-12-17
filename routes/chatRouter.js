const express = require('express');

const router = express.Router();

router.get('/', inicio);

function inicio (peticion, res)
{
   res.render("index",{response:"Ok!"});
}

 module.exports = router; 