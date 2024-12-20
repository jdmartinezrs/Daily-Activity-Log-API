const UserRepository = require('../../domain/repositories/usuarioRepository')

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    
    async postNewUserService(data) {
        return await this.userRepository.postNewUserRepository(data)
    }

    async getUserByNameAndPasswordService(body) {
        const user = await this.userRepository.getUserByNombre_user(body);
        if (!user) throw new Error(JSON.stringify({status: 404, message: 'User not found'}));
        
        const loginData = await this.userRepository.getUserByContrasena_hash(body.contrasena_hash, user);
        if (!loginData.token) throw new Error(JSON.stringify({status: 404, message: 'Incorrect Contrasena_hash'}));
        
        return loginData;
    }

    async validateSessionService(token) {
        const sessionInfo = await this.userRepository.validateSession(token);
        return sessionInfo;
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