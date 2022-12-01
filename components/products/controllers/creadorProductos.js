const Contenedor = require("./manejoArchivos.js");
const productos = new Contenedor("./productos.json");
const productos1 = {
  title: "Lapiz",
  price: 80,
  thumbnail:
    "http://www.trabi-carti.com.ar/wp-content/uploads/362-562x600.jpg",
};
const productos2 = {
  title: "Goma",
  price: 120,
  thumbnail:
    "https://www.papelerabariloche.com.ar/img/p/163214/1.jpeg?quality=95&width=800&height=800&mode=max&upscale=false&format=webp",
};
const productos3 = {
  title: "Hojas",
  price: 120,
  thumbnail:
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/156/488/products/america-rayado-48-h1-0b9b683327e29395fe16461475890426-640-0.jpg",
};

const creador = async () => {
    await productos.save(productos1);
    await productos.save(productos2);
    await productos.save(productos3);
  // await productos.getAll();
  // await productos.getById(1);
  // await productos.deleteById(1);
  // await productos.deleteAll();
};
creador();