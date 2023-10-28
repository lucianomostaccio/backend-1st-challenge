class ProductManager {
  constructor() {
    this.products = [];
    this.autoIncrementId = 1;
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log("Todos los campos son obligatorios.");
      return;
    }

    if (this.products.some((p) => p.code === product.code)) {
      console.log("El código de producto ya existe.");
      return;
    }

    product.id = this.autoIncrementId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log("Producto no encontrado.");
    }
  }
}

// Ejemplo de uso:

const productManager = new ProductManager();

productManager.addProduct({
  title: "Producto 1",
  description: "Descripción del producto 1",
  price: 10.99,
  thumbnail: "imagen1.jpg",
  code: "P1",
  stock: 100,
});

productManager.addProduct({
  title: "Producto 2",
  description: "Descripción del producto 2",
  price: 19.99,
  thumbnail: "imagen2.jpg",
  code: "P2",
  stock: 50,
});

const products = productManager.getProducts();
console.log(products);

const productById = productManager.getProductById(1);
console.log(productById);
