class ProductsService {

    constructor(){
        this.products = [
            {
                "title": "Lapiz",
                "price": 80,
                "thumbnail": "http://www.trabi-carti.com.ar/wp-content/uploads/362-562x600.jpg",
                "id": 1
              },
              {
                "title": "Goma",
                "price": 120,
                "thumbnail": "https://www.papelerabariloche.com.ar/img/p/163214/1.jpeg?quality=95&width=800&height=800&mode=max&upscale=false&format=webp",
                "id": 2
              },
              {
                "title": "Hojas",
                "price": 120,
                "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/156/488/products/america-rayado-48-h1-0b9b683327e29395fe16461475890426-640-0.jpg",
                "id": 3
              }
        ];
        this.generate();
    }

    async generate(req, res) {
          this.products.push({
            id: this.id,
            name: this.name,
            price: parseInt(this.price),
            image: this.image
        });
    };

    async create() {
        const newProduct = {
            id: 1,
            ...data 
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find() {
        return new Promise((resolve, reject) =>{
            setTimeout(()=> {
                resolve(this.products);
            }, 5000);
        });
    };

    async findOne(id) {
        return this.products.find(item => item.id === id);
    }

    async update(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Product not found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id }
} 
};

module.exports = ProductsService;