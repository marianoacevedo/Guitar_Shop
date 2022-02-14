const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require(path.join(__dirname,"../controllers/userController"));

// Middlewares
const uploadFile = require(path.join(__dirname,"../Middlewares/multerUsuario"));
const validarUsuario = require(path.join(__dirname,"../Middlewares/validarUsuario"));
const validarImagenCrear = require(path.join(__dirname,"../Middlewares/validarImagenCrear"));
const validarLogin = require(path.join(__dirname,"../Middlewares/validarLogin"));
const validarRecupero = require(path.join(__dirname,"../Middlewares/validarRecupero"));
const soloVisitas = require("../Middlewares/soloVisitas");
const soloUsuarios = require("../Middlewares/soloUsuarios");
const soloAdmin = require("../Middlewares/soloAdmin");

// Rutas
router.get("/crear", soloVisitas, userController.crearForm);
router.post(
	"/crear",
	soloVisitas,
	uploadFile.single("imagen"),
	validarUsuario,
	validarImagenCrear,
	userController.crearGuardar
);
router.get("/detalle", soloUsuarios, userController.detalle);
router.get("/editar", soloUsuarios, userController.editarForm);
router.put(
	"/editar",
	soloUsuarios,
	uploadFile.single("imagen"),
	validarUsuario,
	validarImagenCrear,
	userController.editarGuardar
);
router.delete("/eliminar", soloUsuarios, userController.eliminar);
router.get("/administrar/:id", soloAdmin, userController.adminForm);
router.put("/administrar", soloAdmin, userController.adminGuardar);
router.get("/login", soloVisitas, userController.loginForm);
router.post("/login", soloVisitas, validarLogin, userController.loginGrabar);
router.get("/logout", soloUsuarios, userController.logout);
router.get("/recupero", userController.recuperoForm);
router.post("/recupero", validarRecupero, userController.recuperoGrabar);

module.exports = router;
