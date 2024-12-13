<template>
  <div class="login-container">
    <!-- Seção do título e logo -->
    <div class="title-section">
      <!-- Logo da aplicação -->
      <img src="@/assets/logoBrain.png" alt="Brain Books Logo" class="logo" />
      <!-- Título principal da aplicação -->
      <h1 class="app-title">Brain Books</h1>
    </div>

    <!-- Caixa de Cadastro -->
    <div class="login-box">
      <!-- Título e subtítulo do formulário -->
      <h1 class="login-title">Cadastro</h1>
      <p class="login-subtitle">Acesse sua conta agora</p>
      
      <!-- Formulário de cadastro -->
      <form @submit.prevent="registerUser" class="login-form">
        <!-- Linha contendo múltiplos campos -->
        <div class="form-row">
          <!-- Campo para o nome -->
          <div class="form-group">
            <input id="firstName" v-model="firstName" type="text" placeholder="Nome" required />
          </div>
          <!-- Campo para o sobrenome -->
          <div class="form-group">
            <input id="lastName" v-model="lastName" type="text" placeholder="Sobrenome" required />
          </div>
          <!-- Campo para o telefone -->
          <div class="form-group">
            <input id="phone" v-model="phone" type="text" placeholder="Telefone" required />
          </div>
          <!-- Campo para a idade -->
          <div class="form-group">
            <input id="year" v-model="year" type="number" placeholder="Idade" required />
          </div>
        </div>
        <!-- Campo para o email -->
        <div class="form-group">
          <input id="email" v-model="email" type="email" placeholder="Email" required />
        </div>
        <!-- Campo para a senha -->
        <div class="form-group">
          <input id="password" v-model="password" type="password" placeholder="Senha" required />
        </div>
        <!-- Campo para a confirmação de senha -->
        <div class="form-group">
          <input id="confirmPassword" v-model="confirmPassword" type="password" placeholder="Confirmação de senha" required />
        </div>
        <!-- Botão de submissão -->
        <button type="submit" class="btn btn-primary">Cadastrar</button>
        <!-- Link para redirecionar à página de login -->
        <p class="login-footer">
          Já possui uma conta? <a href="#" class="create-account" @click="gotoLogin()">Entrar</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../axios"; // Importa o módulo axios configurado para chamadas à API

export default {
  data() {
    return {
      firstName: '',          // Campo para armazenar o nome do usuário
      lastName: '',           // Campo para o sobrenome
      phone: '',              // Campo para o telefone
      year: '',               // Campo para a idade
      email: '',              // Campo para o email
      password: '',           // Campo para a senha
      confirmPassword: '',    // Campo para a confirmação de senha
    };
  },
  methods: {
    // Método para registrar o usuário
    async registerUser() {
      // Valida se todos os campos foram preenchidos
      if (!this.firstName || !this.lastName || !this.phone || !this.year || !this.email || !this.password || !this.confirmPassword) {
        alert('Por favor, preencha todos os campos.'); // Exibe mensagem de erro se faltar algum campo
        return;
      }

      // Verifica se as senhas coincidem
      if (this.password !== this.confirmPassword) {
        alert('As senhas não coincidem.');
        return;
      }

      // Monta o objeto com os dados do usuário para envio ao backend
      const userData = {
        nome: this.firstName,              // Nome do usuário
        sobrenome: this.lastName,          // Sobrenome do usuário
        idade: this.year,                  // Idade
        username: this.email,              // Email tratado como nome de usuário
        password: this.password,           // Senha
        confPassword: this.confirmPassword, // Confirmação de senha
      };

      try {
        // Envia os dados para o endpoint de registro no backend
        const response = await axios.post('/auth/register', userData);

        // Verifica se o registro foi bem-sucedido
        if (response.status === 201) {
          alert('Cadastro realizado com sucesso!'); // Exibe mensagem de sucesso
          this.gotoLogin(); // Redireciona para a página de login
        }
      } catch (error) {
        console.error('Erro ao registrar usuário:', error); // Loga erros no console
        alert('Houve um erro ao tentar registrar o usuário. Tente novamente.'); // Exibe mensagem de erro ao usuário
      }
    },

    // Método para redirecionar à página de login
    gotoLogin() {
      this.$router.push('/login'); // Usa o roteador Vue para navegar para a rota de login
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

/* Caixa do login/cadastro */
.login-box {
  background-color: #1d1d1d;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #ffffff;
  max-width: 500px;
  /* Ajustado para comportar mais campos */
  width: 100%;
}

.login-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.login-subtitle {
  font-size: 14px;
  color: #bbbbbb;
  margin-bottom: 20px;
}

/* Formulário */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-row {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
  flex: 1;
}

input {
  width: 100%;
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
  width: 100%;
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

/* Rodapé do formulário */
.login-footer {
  margin-top: 10px;
  font-size: 14px;
  color: #bbbbbb;
}

.create-account {
  color: #007bff;
  text-decoration: none;
}

.create-account:hover {
  text-decoration: underline;
}
</style>
