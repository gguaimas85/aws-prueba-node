const {
  getAllProductsRepository,
  getProductByIdRepository,
  createNewProductRepository,
  deleteProductRepository,
  updateProductRepository,
} = require("../repositories/productsRepository");

exports.getAllProductsService = async () => {
  try {
    console.log("SERVICE - getAllProductsService");
    return await getAllProductsRepository();
  } catch (error) {
    console.log("Error en SERVICE - getAllProductsService" + error);
    throw Error("Error en SERVICE - getAllProductsService" + error);
  }
};

exports.getProductByIdService = async (id) => {
  try {
    console.log(`SERVICE - getProductByIdService - id: ${id}`);
    return await getProductByIdRepository(id);
  } catch (error) {
    console.log("Error en SERVICE - getProductByIdService" + error);
    throw Error("Error en SERVICE - getProductByIdService" + error);
  }
};

exports.createNewProductService = async (product) => {
  try {
    console.log(`SERVICE - createNewProductService - producto: ${product}`);
    return await createNewProductRepository(product);
  } catch (error) {
    console.log("Error en SERVICE - createNewProductService" + error);
    throw Error("Error en SERVICE - createNewProductService" + error);
  }
};

exports.deleteProductService = async (id) => {
  try {
    console.log(`SERVICE - deleteProductService - id a borrar: ${id}`);
    return await deleteProductRepository(id);
  } catch (error) {
    console.log("Error en SERVICE - deleteProductService" + error);
    throw Error("Error en SERVICE - deleteProductService" + error);
  }
};

exports.updateProductService = async (id, product) => {
  try {
    console.log(
      `SERVICE - updateProductService - producto: ${product} id:${id}`
    );
    return await updateProductRepository(id, product);
  } catch (error) {
    console.log("Error en SERVICE - updateProductService" + error);
    throw Error("Error en SERVICE - updateProductService" + error);
  }
};
