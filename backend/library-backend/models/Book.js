const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number },
    image: { type: String }, // URL da imagem da capa
});

module.exports = mongoose.model('Book', BookSchema);