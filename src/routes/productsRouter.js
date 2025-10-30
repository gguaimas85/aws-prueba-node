const express = require("express");
const {
  readProducts,
  readProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productsController");
const productsRouter = express.Router();

productsRouter.get("/", readProducts);
productsRouter.get("/:id", readProductById);
productsRouter.post("/", createProduct);
productsRouter.delete("/:id", deleteProduct);
productsRouter.put("/:id", updateProduct);

module.exports = productsRouter;
