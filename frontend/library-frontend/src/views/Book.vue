<template>
  <!-- Página do livro, que combina a Navbar, Sidebar e informações sobre o livro -->
  <div class="book-page">
    <!-- Componente da barra de navegação no topo -->
    <Navbar />
    <!-- Componente da barra lateral com filtros -->
    <Sidebar />

    <div class="main-box">
      <!-- Seção dedicada à exibição visual do livro -->
      <div class="book-card-box">
        <!-- Imagem da capa do livro -->
        <img class="book-cover" src="@/assets/O_Principe.jpg" alt="Capa do livro O Príncipe" />
      </div>

      <!-- Seção para exibir informações detalhadas sobre o livro -->
      <div class="book-description-box">
        <!-- Título do livro -->
        <h1 class="book-title">O Príncipe</h1>
        <!-- Ano de publicação -->
        <p><strong>Ano:</strong> 1513</p>
        <!-- Informações da editora -->
        <p><strong>Editora:</strong> Clássicos Históricos</p>
        <!-- Descrição do livro (sinopse) -->
        <p><strong>Sinopse:</strong> 
          Escrito por Maquiavel, *O Príncipe* é um guia sobre governança e poder político, abordando como líderes devem agir para conquistar e manter seu domínio. 
          Ao longo da obra, Maquiavel apresenta conceitos fundamentais sobre a natureza do poder, a relação entre moralidade e política, e as virtudes necessárias para um governante ser eficaz. 
          Ele também explora os desafios enfrentados por príncipes, como as intrigas políticas, a manutenção do controle e a adaptação às mudanças nas circunstâncias externas. 
          Este livro se tornou uma referência essencial para quem deseja compreender as dinâmicas de liderança, e suas lições têm sido aplicadas tanto em governos quanto no mundo corporativo, sendo considerado um manual de estratégia e pragmatismo.
        </p>
        <!-- Botão para alugar o livro -->
        <button class="rent-btn" @click="rentBook">Alugar o Livro</button>
      </div>
    </div>
  </div>
</template>

<script>
/* Importação dos componentes necessários */
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Navbar, // Componente da barra de navegação
    Sidebar, // Componente da barra lateral
  },
  methods: {
    // Método para realizar a ação de "alugar" o livro
    rentBook() {
      // Alerta ao usuário que o livro foi reservado
      alert("Você reservou o livro 'O Príncipe' de 'Maquiavel'");
      // Redireciona para a página de notificações
      this.$router.push("/notifications");
    },
  },
};
</script>

<style scoped>
/* Importação de uma fonte personalizada */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');

/* Estilo principal da página */
.book-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ocupa toda a altura da tela */
  background-color: #44427E; /* Cor de fundo */
  padding-top: 140px; /* Espaço reservado para a Navbar */
}

/* Área principal que contém a descrição e a imagem do livro */
.main-box {
  display: flex;
  justify-content: space-between; /* Espaço entre os elementos internos */
  background-color: #1A1A1A; /* Fundo escuro */
  border-radius: 20px; /* Bordas arredondadas */
  padding: 20px; /* Espaçamento interno */
  margin: 40px auto; /* Margem superior/inferior e centralização horizontal */
  width: 80%; /* Largura ocupando 80% da tela */
  margin-left: 17%; /* Ajusta o posicionamento em relação à sidebar */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para destaque */
}

/* Área que exibe a imagem do livro */
.book-card-box {
  background-color: #333333; /* Fundo escuro */
  border-radius: 10px; /* Bordas arredondadas */
  padding: 20px; /* Espaçamento interno */
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex: 1; /* Ocupa proporcionalmente menos espaço que a descrição */
  margin-right: 20px; /* Espaço entre a imagem e a descrição */
  height: 580px; /* Altura fixa */
}

/* Imagem do livro */
.book-cover {
  width: 300px; /* Largura fixa */
  height: 500px; /* Altura fixa */
  object-fit: cover; /* Garante que a imagem não fique distorcida */
  border-radius: 5px; /* Bordas arredondadas */
}

/* Área com a descrição do livro */
.book-description-box {
  background-color: #333333; /* Fundo escuro */
  border-radius: 10px; /* Bordas arredondadas */
  padding: 20px; /* Espaçamento interno */
  flex: 2; /* Ocupa proporcionalmente mais espaço que a área da imagem */
  color: #ffffff; /* Texto branco */
  display: flex;
  flex-direction: column; /* Alinha itens em coluna */
  justify-content: space-between; /* Espaça os itens de forma uniforme */
  height: 580px; /* Altura fixa */
}

/* Título do livro */
.book-title {
  font-size: 24px; /* Tamanho do texto */
  font-weight: bold; /* Texto em negrito */
  margin-bottom: 15px; /* Espaço inferior */
  font-family: "Roboto Mono", monospace; /* Fonte personalizada */
}

/* Parágrafos da descrição */
p {
  font-size: 16px; /* Tamanho do texto */
  line-height: 1.5; /* Altura da linha */
  margin-bottom: 10px; /* Espaço inferior */
  font-family: "Roboto Mono", monospace; /* Fonte personalizada */
}

/* Botão de alugar */
.rent-btn {
  align-self: flex-start; /* Alinha o botão no início */
  padding: 10px 20px; /* Espaçamento interno */
  background-color: #007bff; /* Cor de fundo azul */
  color: white; /* Texto branco */
  border: none; /* Remove bordas */
  border-radius: 5px; /* Bordas arredondadas */
  font-size: 16px; /* Tamanho do texto */
  cursor: pointer; /* Muda o cursor ao passar o mouse */
  transition: background-color 0.3s; /* Animação ao passar o mouse */
  font-family: "Roboto Mono", monospace; /* Fonte personalizada */
}

/* Alteração da cor do botão no hover */
.rent-btn:hover {
  background-color: #0056b3; /* Azul mais escuro */
}
</style>