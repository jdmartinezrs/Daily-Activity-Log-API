const { validationResult } = require('express-validator');
const UserService = require('../services/usuarioServices')


class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async postNewUserController(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()){ 
                 return res.status(400).json({ errors: errors.array() })
            
            }const user = await this.userService.postNewUserService(req.body)
            res.status(201).json(user);
        }  catch (error) {
            const errorObj = error.message ? JSON.parse(error.message) : { status: 500, message: "Internal Server Error" };
            res.status(errorObj.status).json({ message: errorObj.message });
        }

    }

    async getAllUsersController(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
            const user = await this.userService.getAllUsersService();
            res.status(200).json(user);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}


module.exports = UserController;