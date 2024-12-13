<template>
  <!-- Contêiner principal do login -->
  <div class="login-container">
    <!-- Seção de título e logo -->
    <div class="title-section">
      <!-- Imagem do logo da aplicação -->
      <img src="@/assets/logoBrain.png" alt="Brain Books Logo" class="logo" />
      <!-- Título da aplicação -->
      <h1 class="app-title">Brain Books</h1>
    </div>

    <!-- Caixa de Login -->
    <div class="login-box">
      <!-- Título da seção de login -->
      <h1 class="login-title">Login</h1>
      
      <!-- Formulário de login -->
      <form @submit.prevent="loginUser" class="login-form">
        <!-- Campo de email -->
        <div class="form-group">
          <label for="username">Email:</label>
          <!-- Input para o nome de usuário (email) com v-model para bind com a variável 'username' -->
          <input id="username" v-model="username" type="text" placeholder="Insira seu nome" required />
        </div>

        <!-- Campo de senha -->
        <div class="form-group">
          <label for="password">Senha:</label>
          <!-- Input para a senha com v-model para bind com a variável 'password' -->
          <input id="password" v-model="password" type="password" placeholder="Insira sua senha" required />
        </div>
        
        <!-- Botão para submeter o formulário -->
        <button type="submit" class="btn btn-primary">Logar</button>

        <!-- Link para recuperação de senha -->
        <a href="#" class="forgot-password">Esqueceu a senha?</a>
      </form>

      <!-- Seção de login social e link para cadastro -->
      <div class="social-login">
        <p>
          Não tem conta ainda?
          <!-- Link para redirecionar para a página de cadastro -->
          <a class="create-account" @click="gotoCadastro()">Criar conta</a>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "../axios"; // Importa o módulo axios para fazer requisições HTTP

export default {
  // Dados do componente, incluindo o nome de usuário e senha
  data() {
    return {
      username: '', // Inicializa a variável 'username' para capturar o e-mail do usuário
      password: '', // Inicializa a variável 'password' para capturar a senha do usuário
    };
  },

  methods: {
    // Método para autenticar o usuário
    async loginUser() {
      // Verifica se os campos de username e password estão preenchidos
      if (!this.username || !this.password) {
        alert('Por favor, preencha todos os campos.'); // Exibe alerta se algum campo estiver vazio
        return;
      }

      try {
        // Faz uma requisição POST para a API de login passando o email e senha
        const response = await axios.post('/auth/login', {
          username: this.username,
          password: this.password
        });

        // Verifica se a resposta da API é bem-sucedida
        if (response.status === 200) {
          // Armazena o token de autenticação no localStorage para sessões futuras
          localStorage.setItem('token', response.data.token); // Supondo que o token seja enviado na resposta da API

          alert('Logado com sucesso'); // Exibe um alerta de sucesso
          this.gotoDashBoard(); // Redireciona para a página do dashboard após login
        }
      } catch (error) {
        // Caso ocorra um erro durante a requisição
        console.error('Erro no login:', error); // Exibe o erro no console
        alert('Credenciais inválidas. Tente novamente.'); // Alerta de erro
      }
    },

    // Função para redirecionar para a página de cadastro
    gotoCadastro() {
      this.$router.push('/cadastrar'); // Usa o router do Vue para redirecionar para a página de cadastro
    },

    // Função para redirecionar para o dashboard
    gotoDashBoard() {
      this.$router.push('/dashboard'); // Redireciona para a página do dashboard
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rhodium+Libre&display=swap');
/* Container principal */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2d2749;
  /* Fundo roxo */
}

/* Título e logo */
.title-section {
  font-family: 'Rhodium Libre',serif;
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 80px;
  height: auto;
  margin-bottom: 10px;
}

.app-title {
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
}

/* Caixa do login */
.login-box {
  background-color: #1d1d1d;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #ffffff;
  max-width: 420px;
  /* Ligeiramente maior */
  width: 100%;
}

/* Título do login */
.login-title {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Formulário de login */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centraliza os inputs */
}

label {
  margin-bottom: 5px;
  font-size: 14px;
  color: #ffffff;
}

input {
  width: 85%;
  max-width: 320px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #2c2c2c;
  color: #ffffff;
}

input::placeholder {
  color: #bbbbbb;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

/* Botão principal */
.btn-primary {
  width: 85%;
  max-width: 320px;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}

/* Link de esquecimento de senha */
.forgot-password {
  margin-top: 10px;
  font-size: 12px;
  color: #bbbbbb;
  text-decoration: none;
}

.forgot-password:hover {
  color: #ffffff;
}

/* Login social */
.social-login {
  margin-top: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
}

.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
}

/* Criar conta */
.create-account {
  color: #007bff;
  text-decoration: none;
}

.create-account:hover {
  text-decoration: underline;
}
</style>
