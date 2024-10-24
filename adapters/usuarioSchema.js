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
    validate: {
      validator: (v) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v), 
      message: (props) => `${props.value} no es un correo electrónico válido!`, 
    },
  },
  contrasena_hash: {
    type: String,
    required: true, 
  },
  fecha_de_creacion: {
    type: Date,
    default: Date.now, 
  },
});


module.exports = mongoose.model('User', userSchema,'usuarios');


