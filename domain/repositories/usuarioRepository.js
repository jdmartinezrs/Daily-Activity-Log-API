const User = require('../models/usuariosModel');


class UserRepository{

    async getAllUsersRepository(){
        try{
            const user = new User();
            return await user.getAllUsersModel();
        
        }catch(error){
            throw new Error(JSON.stringify({status: 400, message: 'Error retrieving users'}))
        }
    }
}

module.exports = UserRepository;