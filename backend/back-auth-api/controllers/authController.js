const User = require('../models/user')
const bcrypt = require('bcryptjs'); // Importa bcrypt para hash de senhas
const jwt = require('jsonwebtoken'); // Importa jsonvebtoken para criar tokens JWT
 
// Função para registrar novos usuários

// Função para registrar novos usuários
exports.register = async (req, res) => {
    console.log(req.body); // Verifica os dados recebidos
    const { nome, sobrenome, idade, username, password, confPassword } = req.body; // Pega dados do corpo da requisição
  
    try {
      // Valida se todos os campos obrigatórios foram preenchidos
      if (!nome || !sobrenome || !idade || !username || !password || !confPassword) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
      }
  
      // Valida se as senhas coincidem
      if (password !== confPassword) {
        return res.status(400).json({ message: 'As senhas não coincidem.' });
      }
  
      // Verifica se o username já está em uso
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).json({ message: 'O nome de usuário já está em uso.' });
      }
  
      // Criptografa a senha antes de salvar no banco
      const hashedPassword = await bcrypt.hash(password, 10); // O número 10 representa o "salt rounds" para tornar o hash mais seguro
  
      // Cria um novo usuário com os dados fornecidos e senha criptografada
      const newUser = new User({
        nome,
        sobrenome,
        idade,
        username,
        password: hashedPassword,  // Senha criptografada
      });
  
      // Salva o usuário no banco de dados
      await newUser.save();
  
      // Responde com sucesso ao registrar
      res.status(201).json({ message: 'Usuário registrado com sucesso' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao registrar usuário" }); // Responde com erro ao registrar
    }
};

  // Função para fazer login de usuários
  exports.login = async (req, res) => {
      const { username, password } = req.body; // Pega dados do corpo da requisição
  
      try {
          // Busca o usuário pelo nome de usuário
          const user = await User.findOne({ username });
  
          if (!user) {
              return res.status(400).json({ error: 'Usuário não encontrado' }); // Retorna erro caso o usuário não seja encontrado
          }
  
          // Compara a senha fornecida com a senha armazenada no banco
          const isMatch = await bcrypt.compare(password, user.password);
  
          if (!isMatch) {
              return res.status(400).json({ error: 'Senha incorreta' }); // Retorna erro se a senha não corresponder
          }
  
          // Cria o token JWT para autenticação
          const token = jwt.sign(
              { id: user._id, username: user.username }, // Pode adicionar mais informações no payload, como o nome de usuário
              process.env.JWT_SECRET,  // Certifique-se de definir a variável de ambiente JWT_SECRET
              { expiresIn: '1h' } // Token expira em 1 hora
          );

          // Retorna o token JWT
          res.status(200).json({ token });
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Erro ao fazer login. Tente novamente mais tarde.' }); // Retorna erro genérico em caso de falha no processo
      }
  };
  