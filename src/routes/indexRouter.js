const express = require("express");
const productsRouter = require("./productsRouter");
const router = express();

router.use(express.json());

router.use("/products", productsRouter);
//router.use("/employes");

module.exports = router;
