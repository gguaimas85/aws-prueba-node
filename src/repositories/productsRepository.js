const products = require("../../utils").dataInfo.products;

exports.getAllProductsRepository = async () => {
  try {
    console.log("REPOSITORY - getAllProductsRepository");
    return await JSON.stringify(products);
  } catch (error) {
    console.log("Error en REPOSITORY - getAllProductsRepository - " + error);
    throw Error("Error en REPOSITORY - getAllProductsRepository - " + error);
  }
};

exports.getProductByIdRepository = async (id) => {
  try {
    console.log(`REPOSITORY - getProductByIdRepository id:${id}`);
    const filteredProduct = await products.filter((p) => p.id == id);
    return filteredProduct;
  } catch (error) {
    console.log("Error en REPOSITORY - getProductByIdRepository - " + error);
    throw Error("Error en REPOSITORY - getProductByIdRepository - " + error);
  }
};

exports.createNewProductRepository = async (product) => {
  try {
    console.log(
      `REPOSITORY - createNewProductRepository - producto: ${product}`
    );

    products.push(product);
    const productsUpdated = await JSON.stringify(products);
    return productsUpdated;
  } catch (error) {
    console.log("Error en REPOSITORY - createNewProductRepository - " + error);
    throw Error("Error en REPOSITORY - createNewProductRepository - " + error);
  }
};

exports.deleteProductRepository = async (id) => {
  try {
    console.log(`REPOSITORY - deleteProductRepository - id: ${id}`);
    const indexId = await products.findIndex((el) => el.id == id);

    if (indexId >= 0) {
      products.splice(indexId, 1);
      return products;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Error en REPOSITORY - deleteProductRepository - " + error);
    throw Error("Error en REPOSITORY - deleteProductRepository - " + error);
  }
};

exports.updateProductRepository = async (id, productUpdated) => {
  try {
    console.log(`REPOSITORY - updateProductRepository - id: ${id}`);
    const indexId = await products.findIndex((el) => el.id == id);

    if (indexId >= 0) {
      products[indexId] = productUpdated;
      return products;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Error en REPOSITORY - updateProductRepository - " + error);
    throw Error("Error en REPOSITORY - updateProductRepository - " + error);
  }
};
