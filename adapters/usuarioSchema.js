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
}, {
  timestamps: { createdAt: 'fecha_y_hora_de_inicio_de_sesion', updatedAt: 'updatedAt' } 
});

module.exports = mongoose.model('User', userSchema, 'usuarios');
