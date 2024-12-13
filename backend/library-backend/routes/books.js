const express = require('express');
const Book = require('../models/Book');
const router = express.Router();
const multer = require('multer'); // Importa o Multer
const path = require('path'); // Para lidar com extensões de arquivos
const fs = require('fs'); // Para verificar e criar diretórios

// Verificar e criar o diretório 'uploads' se não existir
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
 
// Configuração do Multer para upload de imagens
const upload = multer({
  dest: uploadsDir, // Diretório onde as imagens serão salvas localmente
  limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5MB
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      cb(null, true); // Aceita o arquivo
    } else {
      cb(new Error('Apenas arquivos JPG, JPEG ou PNG são permitidos!'), false);
    }
  },
}).single('image'); // 'image' é o campo que usaremos para a imagem
 
// Configurar o Express para servir arquivos estáticos do diretório uploads
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// *** CRIAÇÃO (POST) ***
router.post('/', upload, async (req, res) => {
    const { title, author, year} = req.body; // Adicionando o campo quantity
    const image = req.file ? `/uploads/${req.file.filename}` : ''; // Caminho acessível pela URL
   
    try {
      const newBook = new Book({
        title,
        author,
        year,
        image, // Salva o caminho da imagem como URL
      });
   
      await newBook.save();
      res.status(201).json(newBook); // Retorna o livro criado
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar livro', error });
    }
  });
   


router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    }   catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error});
    }
});

// *** ATUALIZAÇÃO (PUT) ***
router.put('/:id', upload, async (req, res) => {
    const { title, author, year} = req.body; // Extraímos os novos dados
    const image = req.file ? `/uploads/${req.file.filename}` : undefined; // Atualiza apenas se houver nova imagem
   
    const updatedData = {
      title,
      author,
      year,
    };
   
    if (image) updatedData.image = image; // Se houver uma nova imagem, ela é atualizada
   
    try {
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        updatedData,
        { new: true } // Retorna o livro atualizado
      );
   
      if (!updatedBook) {
        return res.status(404).json({ message: 'Livro não encontrado' }); // Se o livro não for encontrado
      }
   
      res.status(200).json(updatedBook); // Retornamos o livro atualizado
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar livro', error });
    }
  });

// *** EXCLUSÃO (DELETE) ***
router.delete('/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id); // Deletamos o livro pelo ID
      if (!deletedBook) {
        return res.status(404).json({ message: 'Livro não encontrado' }); // Se o livro não for encontrado
      }
      res.status(200).json({ message: 'Livro deletado com sucesso' }); // Retornamos mensagem de sucesso
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar livro', error });
    }
  });

module.exports = router;
