let express = require ('express');
let moment = require ('moment');
let fs = require ('fs');
const PORT = 8080;
let app = express();

// let productos = require('./productos.json');
// app.all("/", (req, res, next)=>{
//     res.send("Estoy en el metodo ALL de express");
// });

// app.post("/", (req, res, next)=>{
//     res.send(`Estoy en el metodo ${req.method}`);
// });

// app.put("/", (req, res, next)=>{
//     res.send(`Estoy en el metodo ${req.method}`);
// });

app.get("/", (req, res, next)=>{
    res.send(`<h1 style="color:blue">Bienvenidos a mi Web con Backend</h1>`);
});

app.get("/products", (req, res, next)=>{
    res.send({productos});
});

app.get("/randomproduct", (req, res, next)=>{
    var prandom = fs.readFileSync(productos);
    var producto2 = JSON.parse(prandom);
  
    var randomNum = Math.round(Math.random() * (1 + 6) - 1);
    var producto = producto2[randomNum];

    res.send({producto});
});

app.get("/fyh", (req, res, next)=>{
    let hora = moment().format('L');
    res.json({hora});
});

app.listen(PORT, ()=> console.log(`Server on http:localhost:${PORT}`));

