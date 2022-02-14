const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require(path.join(__dirname,"../controllers/productController"));

// Middlewares
const uploadFile = require(path.join(__dirname,"../Middlewares/multerProducto"));
const validarProducto = require(path.join(__dirname,"../Middlewares/validarProducto"));
const validarImagenCrear = require(path.join(__dirname,"../Middlewares/validarImagenCrear"));
const validarImagenEditar = require(path.join(__dirname,"../Middlewares/validarImagenEditar"));
const soloUsuarios = require("../Middlewares/soloUsuarios");

// Rutas
router.get("/crear", soloUsuarios, productController.crearForm);
router.post("/crear", soloUsuarios, uploadFile.single("imagen"), validarProducto, validarImagenCrear, productController.crearGuardar);
router.get("/:id/detalle", productController.detalle);
router.get("/:id/editar", soloUsuarios, productController.editarForm);
router.put("/:id/editar", soloUsuarios, uploadFile.single("imagen"), validarProducto, validarImagenEditar, productController.editarGuardar);
router.delete("/:id/eliminar", soloUsuarios, productController.eliminar);
router.get("/buscar", productController.buscar);

module.exports = router;
