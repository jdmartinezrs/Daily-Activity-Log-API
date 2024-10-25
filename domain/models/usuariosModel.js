const user = require("../../adapters/usuarioSchema");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class User{

    async postNewUserModel(userData) {
        const newUser = new user(userData); // Creas un nuevo usuario con los datos que recibes
        return await newUser.save(); // Guardas el usuario en la base de datos
    }

    async logginUserModel(body) { 
        return await user.aggregate([body]);
            }

    async getAllUsersModel(){
        return await user.find({}).exec();
    }
 
 
}

module.exports = User;