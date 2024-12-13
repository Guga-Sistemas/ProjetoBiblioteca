const mongoose = require('mongoose');

// Define o esquema de usuário

const userSchema = new mongoose.Schema({
nome: {type: String},
sobrenome: {type: String},
idade: {type: Number},
username: { type: String, required: true, unique: true }, // Nome de usuário obrigatório e único
password: { type: String, required: true }, // Senha obrigatória
confPassword:{type: String},
})

// Exporta o modelo de usuário

module.exports = mongoose.model('User', userSchema);
 