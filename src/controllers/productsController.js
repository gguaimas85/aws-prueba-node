const {
  getAllProductsService,
  getProductByIdService,
  deleteProductService,
  updateProductService,
  createNewProductService,
} = require("../services/productsService");

const { CONTENT_TYPE, TYPE_JSON } = require("../const").constantes;

exports.readProducts = async (req, res) => {
  try {
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(await getAllProductsService());
  } catch (error) {
    console.log("Error en CONTROLLER - getAllFrontendLanguajes - " + error);
    res.status(404).send("Recurso no encontrado");
    throw Error("Error en CONTROLLER - getAllFrontendLanguajes - " + error);
  }
};

exports.readProductById = async (req, res) => {
  try {
    let productId = req.params.id;
    console.log(`Id recibido por param: ${productId}`);

    const filteredProduct = await getProductByIdService(productId);

    if (filteredProduct === 0) {
      return res.status(404).send(`No se encontró producto id:${productId}`);
    }

    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(JSON.stringify(filteredProduct));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al obtener los productos",
    });
    throw Error("Error 500");
  }
};

exports.createProduct = async (req, res) => {
  try {
    let newProduct = req.body;

    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(await createNewProductService(newProduct));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al crear el producto",
    });
    throw Error("Error 500");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const idProduct = req.params.id;
    const product = await deleteProductService(idProduct);

    if (product.length === 0) {
      return res
        .status(404)
        .send(`No se puede eliminar producto con id:${idProduct}`);
    }

    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(JSON.stringify(product));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al borrar el producto",
    });
    throw Error("Error 500");
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = req.body;
    const idProduct = req.params.id;
    const product = await updateProductService(idProduct, updatedProduct);

    if (product.length === 0) {
      return res
        .status(404)
        .send(`No se puede encuentra producto a modificar con id:${idProduct}`);
    }

    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(JSON.stringify(product));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al actualizar el producto",
    });
    throw Error("Error 500");
  }
};
