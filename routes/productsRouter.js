const express = require('express');

const router = express.Router();

let addId = (req,res,next)=>{
    req.body.id = "1";
    next();
}

router.get('/', (req, res) => {
    let products = [
        {
            nombre: "Lapiz",
            precio: 50,
            img: "lapiz.jpg",
            id: 1
        }
    ];

    router.post("/",addId,(req,res)=>{
        let obj = req.body;
        products.push(obj)
        res.json(products)
    });

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Filtro de productos');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(product)
});

module.exports = router;



// let {Router} = require('express');
// let router = new Router();
// let multer = require('multer');
// const path = require('path');

// let storage = multer.diskStorage({
//     destination: path.join(__dirname, "../../uploads"),
//     filename: (req, file, cb)=>{
//         console.log(file);
//         cb(null, `${file.originalname}`);
//     }
// });

// let midMulter = multer({
//     storage,
//     dest: path.join(__dirname, "../uploads"),
//     limits:{fileSize: 10000000}
// })
// let addId = (req,res,next)=>{
//     req.body.id = "0";
//     next();
// }

// module.exports = app =>{
//     let __arr = [
//         {
//             nombre: "Lapiz",
//             precio: 50,
//             img: "lapiz.jpg",
//             id: 1
//         }
//     ];

//     app.use("/products", router);
//     router.use(midMulter.single("file"))
//     router.get("/",(req,res,next)=>{
//         res.json(__arr);
//     });

//     router.post("/",addId,(req,res,next)=>{
//         let obj = req.body;
//         __arr.push(obj)
//         res.json({productos:__arr})
//     });

//     router.post("/archivo",(req,res,next)=>{
//         let obj = req.body;
//         __arr.push(obj)
//         res.json({hola: 'Hola'})
//     });
// };