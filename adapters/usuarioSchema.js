const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre_usuario: {
    type: String,
    required: true,
    unique: true,
    trim: true,
},
email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
},
contrasena_hash: {
    type: String,
    required: true,
}
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema,'usuarios');


