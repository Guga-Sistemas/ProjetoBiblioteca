<template>
  <div class="dashboard">
    <!-- Navbar fixa no topo -->
    <Navbar />
    <!-- Sidebar para navegação lateral -->
    <Sidebar />

    <!-- Cabeçalho do dashboard -->
    <div class="header">
      <!-- Botão para logout -->
      <button @click="logout" class="logout-btn">Fazer Logout</button>
      <!-- Título principal -->
      <h1 class="title">Livros Recomendados</h1>
    </div>

    <!-- Seção de Livros Recomendados -->
    <div class="books-box">
      <!-- Renderiza cada livro recomendado como um card -->
      <div class="book-card" v-for="(book, index) in books" :key="index">
        <!-- Imagem da capa do livro -->
        <img :src="book.cover" alt="Capa do livro" class="book-cover" />
        <!-- Título do livro -->
        <h3 class="book-title">{{ book.title }}</h3>
        <!-- Autor do livro -->
        <p class="book-author">{{ book.author }}</p>
        <!-- Sistema de avaliação por estrelas -->
        <div class="rating">
          <span v-for="(star, i) in 5" :key="i" class="star" :class="{ 'filled': i < book.rating }">★</span>
        </div>
        <!-- Botão para alugar o livro -->
        <button class="rent-btn" @click="rentBook(book)">Alugar</button>
      </div>
    </div>

    <!-- Título da seção de "Todos os livros" -->
    <h2 class="all-books-title">Todos os livros</h2>

    <!-- Seção de Todos os Livros -->
    <div class="all-books-box">
      <!-- Renderiza cada livro na lista geral -->
      <div class="book-card" v-for="(book, index) in allBooks" :key="'all-' + index">
        <!-- Imagem da capa do livro -->
        <img :src="book.cover" alt="Capa do livro" class="book-cover" />
        <!-- Título do livro -->
        <h3 class="book-title">{{ book.title }}</h3>
        <!-- Autor do livro -->
        <p class="book-author">{{ book.author }}</p>
        <!-- Sistema de avaliação por estrelas -->
        <div class="rating">
          <span v-for="(star, i) in 5" :key="i" class="star" :class="{ 'filled': i < book.rating }">★</span>
        </div>
        <!-- Botão para alugar o livro -->
        <button class="rent-btn" @click="rentBook(book)">Alugar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'; // Componente da barra de navegação
import Sidebar from '@/components/Sidebar.vue'; // Componente da barra lateral

// Importação das imagens das capas dos livros
import OPrincipe from '@/assets/O_Principe.jpg';
import Leis48 from '@/assets/48_Leis.jpg';
import OPoder from '@/assets/O_Poder_do_Habito.jpg';
import OPalhaco from '@/assets/O_Palhaco.jpg';
import OAlquimista from '@/assets/O_Alquimista.jpg';
import ARevolucaoDosBichos from '@/assets/A_Revolucao_dos_Bichos.jpg';
import OSenhorDosAnéis from '@/assets/O_Senhor_dos_Aneis.jpg';
import a1984 from '@/assets/1984.jpg';

export default {
  components: {
    Navbar, // Declara o Navbar como componente filho
    Sidebar, // Declara o Sidebar como componente filho
  },
  data() {
    return {
      // Livros recomendados
      books: [
        {
          title: 'O Príncipe',
          author: 'Maquiavel',
          cover: OPrincipe, // Imagem da capa
          rating: Math.floor(Math.random() * 5) + 1, // Avaliação aleatória de 1 a 5
        },
        {
          title: '48 Leis do Poder',
          author: 'Robert Greene',
          cover: Leis48,
          rating: Math.floor(Math.random() * 5) + 1,
        },
        {
          title: 'O Poder do Hábito',
          author: 'Charles Duhigg',
          cover: OPoder,
          rating: Math.floor(Math.random() * 5) + 1,
        },
        {
          title: 'O Palhaço e o Psicanalista',
          author: 'Christian Dunker',
          cover: OPalhaco,
          rating: Math.floor(Math.random() * 5) + 1,
        },
      ],
      // Lista de todos os livros
      allBooks: [
        {
          title: 'O Alquimista',
          author: 'Paulo Coelho',
          cover: OAlquimista,
          rating: Math.floor(Math.random() * 5) + 1,
        },
        {
          title: 'A Revolução dos Bichos',
          author: 'George Orwell',
          cover: ARevolucaoDosBichos,
          rating: Math.floor(Math.random() * 5) + 1,
        },
        {
          title: 'O Senhor dos Anéis',
          author: 'J.R.R. Tolkien',
          cover: OSenhorDosAnéis,
          rating: Math.floor(Math.random() * 5) + 1,
        },
        {
          title: '1984',
          author: 'George Orwell',
          cover: a1984,
          rating: Math.floor(Math.random() * 5) + 1,
        },
      ],
    };
  },
  methods: {
    // Método para logout do usuário
    logout() {
      localStorage.removeItem('token'); // Remove o token do localStorage
      this.$router.push('/login'); // Redireciona para a página de login
    },
    // Método para alugar um livro (redireciona para a página de detalhes do livro)
    rentBook(book) {
      this.$router.push('/book'); // Pode ser modificado para passar mais dados, como ID do livro
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');

.dashboard {
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  /* Espaçamento para a navbar */
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-left: 175px;
  width: 100%;
}

.title {
  font-family: "Tiny5", serif;
  font-size: 52px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 75px;
  /* Espaço entre o título e o botão */
}

.logout-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #0056b3;
}

.books-box {
  background-color: #1A1A1A;
  border-radius: 20px;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  /* Diminuímos a largura para 80% */
  margin-left: 17%;
  /* Adicionei margem à esquerda para deslocar para a direita */
}

.book-card {
  background-color: #333333;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.book-cover {
  width: 150px;
  height: 220px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.book-title {
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  text-align: right;
}

.book-author {
  font-size: 14px;
  color: #bbbbbb;
  margin-bottom: 10px;
}

.rating {
  margin: 10px 0;
}

.star {
  font-size: 20px;
  color: #555555;
}

.star.filled {
  color: gold;
}

.rent-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.rent-btn:hover {
  background-color: #0056b3;
}

/* Estilo para o título "Todos os livros" */
.all-books-title {
  font-family: "Tiny5", serif;
  font-size: 42px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 40px;
  text-align: center;
  padding-left: 500px;
}

/* Box de "Todos os livros" */
.all-books-box {
  background-color: #1A1A1A;
  border-radius: 20px;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 17%;
}
</style>
