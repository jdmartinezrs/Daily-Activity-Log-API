const User = require('../models/usuariosModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserRepository {

    async postNewUserRepository(userData) {
        try {
            return await new User().postNewUserModel(userData); // Asegúrate de usar el método de UserModel correctamente
        } catch (error) {
            throw new Error(JSON.stringify({status: 500, message: 'Error saving user'})); // Captura y lanza errores de la base de datos
        }
    }

    async getUserByNombre_user(body) {
        try {
            const user = new User();
            let { nombre_usuario } = body;
            let query = {
                $match: {
                    nombre_usuario
                }
            }
            return await user.logginUserModel(query);
        } catch (error) {
            throw new Error(JSON.stringify({status: 400, message: 'Error logging the user'}))
        }
    }

    async getUserByContrasena_hash(contrasena_hash, user) {
        const isMatch = await bcrypt.compare(contrasena_hash, user.contrasena_hash);
        if (!isMatch) throw new Error(JSON.stringify({status: 401, message: 'No Authorized'}));
        
        // Actualizar timestamp y obtener el usuario actualizado
        const userModel = new User();
        const updatedUser = await userModel.updateLoginTimestamp(user._id);
        
        const token = jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '15m'});
        
        // Retornar objeto con token y timestamps
        return {
            token,
            timestamps: {
                fecha_y_hora_de_inicio_de_sesion: updatedUser.fecha_y_hora_de_inicio_de_sesion,
                updatedAt: updatedUser.updatedAt
            }
        };
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