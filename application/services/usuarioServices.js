const UserRepository = require('../../domain/repositories/usuarioRepository')

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async getAllUsersService(){
        const user = await this.userRepository.getAllUsersRepository()
        if(!user){
            throw new Error(JSON.stringify({status: 404, message: 'Users were not found'}))
        }
        return user
    }


}

module.exports = UserService;