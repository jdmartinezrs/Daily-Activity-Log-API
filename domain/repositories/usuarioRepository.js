const User = require('../models/usuariosModel');


class UserRepository {

    async postNewUserRepository(userData) {
        try {
            return await new User().postNewUserModel(userData); // Asegúrate de usar el método de UserModel correctamente
        } catch (error) {
            throw new Error(JSON.stringify({status: 500, message: 'Error saving user'})); // Captura y lanza errores de la base de datos
        }
    }

    async getAllUsersRepository() {
        try {
            const user = new User();
            return await user.getAllUsersModel();

        } catch (error) {
            throw new Error(JSON.stringify({ status: 400, message: 'Error retrieving users' }))
        }
    }
}

module.exports = UserRepository;