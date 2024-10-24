const express = require('express');

const UserController = require('../controllers/usuarioController');
const UserValidator = require("../validator/usuarioValidator");

const router = express.Router()
const userController = new UserController();
const userValidator = new UserValidator();

router.get("/usuarios", userValidator.validateUserDataEmpty(),(req, res) =>userController.getAllUsersController(req, res))
router.post("/usuarios", userValidator.postNewUserValidator(),(req, res) =>userController.postNewUserController(req, res));




module.exports = router;

