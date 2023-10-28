class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(productData) {
    const { Title, Description, Price, Thumbnail, Code, Stock } = productData;

    // Validar campos obligatorios
    if (!Title || !Description || !Price || !Thumbnail || !Code || !Stock) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    // Validar que no se repita el campo "code"
    const codeExists = this.products.some((product) => product.Code === Code);
    if (codeExists) {
      console.error("Ya existe un producto con ese código.");
      return;
    }

    const newProduct = {
      id: this.nextId,
      Title,
      Description,
      Price,
      Thumbnail,
      Code,
      Stock,
    };

    this.products.push(newProduct);
    this.nextId++;
    console.log("Producto agregado:", newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      console.error("Producto no encontrado");
    } else {
      return product;
    }
  }
}

// Ejemplo de uso:
const manager = new ProductManager();

manager.addProduct({
  Title: "Producto 1",
  Description: "Descripción del producto 1",
  Price: 10000,
  Thumbnail: "images/producto1.jpg",
  Code: "PROD001",
  Stock: 50,
});

manager.addProduct({
  Title: "Producto 2",
  Description: "Descripción del producto 2",
  Price: 5000,
  Thumbnail: "images/producto2.jpg",
  Code: "PROD002",
  Stock: 70,
});

const allProducts = manager.getProducts();
console.log("Todos los productos:", allProducts);

const productById = manager.getProductById(1); // Cambiar el ID para probar distintos escenarios
console.log("Producto por ID:", productById);

const productNotFound = manager.getProductById(10); // Ejemplo de ID no encontrado
console.log(productNotFound);
