const fs = require("fs");

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }
  async save(producto) {
    try {
      if (!this.verificarExistencia(this.archivo)) {
        console.log(
          `No existe el archivo ${this.archivo} crearemos uno nuevo.`
        );
        let arrayProductos = [];
        producto["id"] = 1;
        arrayProductos.push(producto);
        await this.escribirArchivo(this.archivo, arrayProductos);
        console.log(`Nuevo producto con ID ${producto["id"]}`);
        return producto["id"];
      } else {
        if (this.leerArchivo(this.archivo)) {
          const data = await this.leerArchivo(this.archivo);
          if (data.length == 0) {
            producto["id"] = 1;
          } else {
            let lastId = data[data.length - 1].id;
            producto["id"] = lastId + 1;
          }
          data.push(producto);
          this.escribirArchivo(this.archivo, data);
          console.log(`Nuevo producto con ID ${producto["id"]}`);
          return producto["id"];
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async getById(id) {
    try {
      if (this.verificarExistencia(this.archivo)) {
        const data = await this.leerArchivo(this.archivo);
        const dataId = data.filter((item) => item.id === id);
        if (dataId.length == 0) {
          throw new Error("No se encuentra");
        } else {
          console.log(`El producto con la id ${id}:`);
          console.log(dataId);

          return dataId;
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async getAll() {
    try {
      if (this.verificarExistencia(this.archivo)) {
        const data = await this.leerArchivo(this.archivo);
        if (data.length != 0) {
          console.log(`El contenido de ${this.archivo} :\n`);
          console.log(data);
        } else {
          throw new Error(
            `el archivo ${this.archivo} esta vacio`
          );
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteById(id) {
    try {
      if (this.verificarExistencia(this.archivo)) {
        const data = await this.leerArchivo(this.archivo);
        if (data.some((item) => item.id === id)) {
          const data = await this.leerArchivo(this.archivo);
          const datos = data.filter((item) => item.id !== id);
          this.escribirArchivo(this.archivo, datos);
          console.log(`Se borro el producto con la ID ${id}`);
        } else {
          throw new Error(`No se encontro producto con ID ${id}`);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteAll() {
    try {
      if (this.verificarExistencia(this.archivo)) {
        let nuevo = [];
        await this.escribirArchivo(this.archivo, nuevo);
        console.log(
          `Todos los productos de ${this.archivo} fueron borrados`
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async escribirArchivo(archivo, contenido) {
    try {
      await fs.writeFileSync(
        archivo,
        JSON.stringify(contenido, null, 2),
        "utf-8"
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  async leerArchivo(archivo) {
    try {
      const data = await fs.readFileSync(archivo, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  verificarExistencia(archivo) {
    try {
      if (!fs.existsSync(archivo)) {
        throw new Error("El archivo no existe");
      } else {
        return true;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = Contenedor;