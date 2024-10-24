const user = require("../../adapters/usuarioSchema");

class User{

    async getAllUsersModel(){
        return await user.find({}).exec();
    }

}

module.exports = User;