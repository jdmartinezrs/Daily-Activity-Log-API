const user = require("../../adapters/usuarioSchema");

class User{

    async postNewUserModel(userData) {
        const newUser = new user(userData); // Creas un nuevo usuario con los datos que recibes
        return await newUser.save(); // Guardas el usuario en la base de datos
    }


    async getAllUsersModel(){
        return await user.find({}).exec();
    }

}

module.exports = User;