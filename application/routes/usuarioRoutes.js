const express = require('express');

const UserController = require('../controllers/usuarioController');
const UserValidator = require("../validator/usuarioValidator");

const router = express.Router()
const userController = new UserController();
const userValidator = new UserValidator();


router.post("/usuarios", userValidator.postNewUserValidator(),(req, res) =>userController.postNewUserController(req, res));
router.post("/usuarios/iniciarSesion", userValidator.logginValidator(),(req, res) =>userController.logginController(req, res));
router.post(
    "/usuarios/validarSesion", 
    userValidator.validarSesionValidator(),
    (req, res) => userController.validateSessionController(req, res)
);
router.get("/usuarios", userValidator.validateUserDataEmpty(),(req, res) =>userController.getAllUsersController(req, res))





module.exports = router;

