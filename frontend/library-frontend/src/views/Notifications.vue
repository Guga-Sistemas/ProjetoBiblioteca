<template>
  <!-- Página de notificações -->
  <div class="notifications-page">
    <!-- Componente de Navbar -->
    <Navbar />

    <!-- Caixa de notificação -->
    <div class="notification-box">
      <!-- Cabeçalho da notificação -->
      <div class="notification-header">
        <!-- Título da notificação -->
        <h1 class="notification-title">Notificações!</h1>
        <!-- Ícone de notificação -->
        <img class="notification-icon" src="@/assets/notifications.png" alt="Ícone de notificações" />
      </div>

      <!-- Caixa de mensagem da notificação -->
      <div class="message-box">
        <!-- Texto da notificação -->
        <p class="notification-message">
          Você reservou o livro 'O Príncipe' de 'Maquiavel'. Você tem 12 dias desde a retirada para efetuar a devolução
          à nossa biblioteca. Obrigado! E tenha uma ótima leitura!
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue"; // Importa o componente Navbar para ser utilizado na página de notificações

export default {
  components: {
    Navbar, // Registra o componente Navbar para ser usado no template
  },
};
</script>

<style scoped>
/* Importação de fontes */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap');

/* Estilo para a página de notificações */
.notifications-page {
  display: flex;
  /* Flexbox para layout da página */
  flex-direction: column;
  /* Layout em coluna */
  min-height: 100vh;
  /* Garante que a página ocupe toda a altura da tela */
  background-color: #44427E;
  /* Cor de fundo da página */
  padding-top: 140px;
  /* Espaço para o Navbar */
}

/* Caixa que contém as notificações */
.notification-box {
  background-color: #1A1A1A;
  /* Cor de fundo escura para a caixa de notificação */
  padding: 30px;
  /* Espaçamento interno */
  margin: 40px auto;
  /* Margem vertical e centralização horizontal */
  width: 80%;
  /* Largura de 80% da tela */
  border-radius: 20px;
  /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Sombra suave ao redor da caixa */
  display: flex;
  /* Flexbox para centralizar conteúdo */
  flex-direction: column;
  /* Layout em coluna */
  align-items: center;
  /* Alinha os itens ao centro */
  justify-content: center;
  /* Centraliza o conteúdo dentro da caixa */
}

/* Estilo do cabeçalho da notificação */
.notification-header {
  display: flex;
  /* Layout flexível */
  align-items: center;
  /* Alinha o ícone e título ao centro verticalmente */
  margin-bottom: 20px;
  /* Espaçamento abaixo do cabeçalho */
}

/* Ícone da notificação */
.notification-icon {
  width: 100px;
  /* Largura do ícone */
  height: 100px;
  /* Altura do ícone */
  margin-left: 25px;
  /* Espaçamento à esquerda do ícone */
}

/* Título da notificação */
.notification-title {
  font-family: "IBM Plex Mono", monospace;
  /* Fonte monocromática para o título */
  font-size: 50px;
  /* Tamanho da fonte */
  font-weight: bold;
  /* Fonte em negrito */
  color: #ffffff;
  /* Cor branca */
}

/* Caixa que contém a mensagem da notificação */
.message-box {
  background-color: #333333;
  /* Cor de fundo da caixa de mensagem */
  padding: 20px;
  /* Espaçamento interno */
  width: 100%;
  /* Largura total */
  border-radius: 10px;
  /* Bordas arredondadas */
}

/* Estilo do texto da mensagem de notificação */
.notification-message {
  font-family: "Roboto Mono", monospace;
  /* Fonte monocromática */
  font-size: 20px;
  /* Tamanho da fonte */
  color: #ffffff;
  /* Cor do texto (branca) */
  line-height: 1.5;
  /* Espaçamento entre as linhas do texto */
}
</style>
