<template>
  <div class="config-page">
    <!-- Navbar fixa no topo -->
    <Navbar />

    <!-- Caixa principal de configurações -->
    <div class="config-box">
      <!-- Cabeçalho da seção de configurações -->
      <div class="config-header">
        <!-- Título da página de configurações -->
        <h1 class="config-title">Configurações</h1>
        <!-- Ícone representativo de configurações -->
        <img class="config-icon" src="@/assets/settings.png" alt="Ícone de configurações" />
      </div>
      
      <!-- Caixa de mensagem com informações sobre as políticas -->
      <div class="message-box">
        <!-- Texto explicativo sobre as políticas da biblioteca -->
        <p class="config-message">
          <strong>Políticas da Biblioteca:</strong><br><br>
          A biblioteca tem como política garantir que todos os livros sejam devolvidos dentro de um prazo de 12 dias após a retirada. Caso esse período seja ultrapassado, as seguintes medidas poderão ser tomadas:
          <ul>
            <!-- Lista das regras e consequências -->
            <li>Após 12 dias, será cobrada uma multa de R$ 2,00 por dia de atraso.</li>
            <li>Caso o livro não seja devolvido em até 30 dias, o usuário será bloqueado para novas retiradas de livros até regularizar a pendência.</li>
            <li>O não cumprimento das regras pode resultar em suspensão do acesso à biblioteca por um período determinado.</li>
            <li>A biblioteca se reserva o direito de acionar os órgãos competentes em casos de não devolução prolongada e reincidência de faltas.</li>
          </ul>
          Pedimos que todos os usuários respeitem essas regras para manter a ordem e a continuidade das atividades da nossa biblioteca.
        </p>
      </div>
    </div>
  </div>
</template>

  
<script>
import Navbar from "@/components/Navbar.vue"; // Importa o componente Navbar reutilizável

export default {
  components: {
    Navbar, // Declara o Navbar como um componente filho usado nesta página
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap'); /* Importa fonte Roboto Mono */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap'); /* Importa fonte IBM Plex Mono */

/* Estilização principal da página */
.config-page {
  display: flex;                /* Define layout flexível */
  flex-direction: column;       /* Organiza elementos em coluna */
  min-height: 100vh;            /* Altura mínima de 100% da tela */
  background-color: #44427E;    /* Fundo roxo escuro */
  padding-top: 140px;           /* Espaço reservado para a Navbar */
}

/* Caixa central onde as configurações estão agrupadas */
.config-box {
  background-color: #1A1A1A;    /* Fundo preto para destaque */
  padding: 30px;                /* Espaçamento interno */
  margin: 40px auto;            /* Margem vertical e centralização horizontal */
  width: 80%;                   /* Largura relativa à página */
  border-radius: 20px;          /* Cantos arredondados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra leve para profundidade */
  display: flex;                /* Layout flexível interno */
  flex-direction: column;       /* Elementos organizados em coluna */
  align-items: center;          /* Centraliza horizontalmente */
  justify-content: center;      /* Centraliza verticalmente */
}

/* Cabeçalho da seção de configurações */
.config-header {
  display: flex;                /* Layout flexível */
  align-items: center;          /* Alinha verticalmente no centro */
  margin-bottom: 20px;          /* Espaço inferior */
}

/* Ícone ao lado do título */
.config-icon {
  width: 50px;                  /* Largura do ícone */
  height: 50px;                 /* Altura do ícone */
  margin-left: 25px;            /* Espaço entre título e ícone */
}

/* Título principal */
.config-title {
  font-family: "IBM Plex Mono", monospace; /* Fonte personalizada */
  font-size: 50px;             /* Tamanho grande para destaque */
  font-weight: bold;           /* Negrito */
  color: #ffffff;              /* Cor branca */
}

/* Caixa de mensagem */
.message-box {
  background-color: #333333;   /* Fundo cinza escuro */
  padding: 20px;               /* Espaçamento interno */
  width: 100%;                 /* Ocupa toda a largura da caixa pai */
  border-radius: 10px;         /* Cantos arredondados */
  color: white;                /* Texto branco */
}

/* Texto dentro da mensagem */
.config-message {
  font-family: "Roboto Mono", monospace; /* Fonte personalizada */
  font-size: 20px;             /* Tamanho da fonte */
  color: #ffffff;              /* Cor branca */
  line-height: 1.5;            /* Espaçamento entre linhas */
}

/* Estilização da lista */
ul {
  margin-left: 20px;           /* Indentação da lista */
  color: white;                /* Texto branco */
}

ul li {
  font-size: 18px;             /* Tamanho da fonte dos itens */
}

/* Parágrafos */
p {
  color: white;                /* Texto branco */
}
</style>
