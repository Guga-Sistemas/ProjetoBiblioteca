<template>
  <div class="booklist-container">
    <h1>Lista de Livros</h1>
    <ul class="book-list" v-if="books.length">
      <li v-for="book in books" :key="book._id" class="book-item">
        <img :src="book.image ? `http://localhost:4000${book.image}` : ''" alt="Capa do livro" v-if="book.image" />
        <div class="book-info">
          <!-- Título do livro -->
          <span class="book-title">Título: {{ book.title }}</span>
          <!-- Autor do livro -->
          <span class="book-author">Autor: {{ book.author }}</span>
          <!-- Ano de publicação do livro -->
          <span class="book-year">Ano: ({{ book.year }})</span>
        </div>
        <div class="button-group">
          <button @click="editBook(book)" class="edit-button">Editar</button>
          <button @click="deleteBook(book._id)" class="delete-button">Excluir</button>
        </div>
      </li>
    </ul>
    <p v-else>Nenhum livro encontrado.</p>
  </div>
</template>


<script>
import api from '../services/api';

export default {
  data() {
    return {
      books: [], // Lista de livros carregada do backend
    };
  },
  methods: {
    fetchBooks() {
      api.getBooks()
        .then(response => {
          console.log('Livros retornados:', response.data);
          this.books = response.data; // Atualiza a lista de livros com o retorno da API
        })
        .catch(error => {
          console.error('Erro ao buscar livros:', error);
        });
    },
    deleteBook(id) {
      api.deleteBook(id)
        .then(() => {
          this.fetchBooks(); // Atualiza a lista após exclusão
        })
        .catch(error => {
          console.error('Erro ao excluir livro:', error);
        });
    },
    editBook(book) {
      this.$emit('edit-book', book);
    },
  },
  mounted() {
    this.fetchBooks(); // Carrega a lista de livros ao montar o componente
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

h1 {

  justify-content: center;
  display: flex;
  align-items: center;
}

.booklist-container {
  color: white;
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
}
/* Container principal do componente */
.booklist-container {
  font-family: 'Roboto Mono', monospace;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1A1A1A;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilo da lista de livros */
.book-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Cada item da lista */
.book-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Estilo para as imagens das capas */
/* Estilo para as imagens das capas */
.book-item img {
  width: 135px; /* Largura fixa */
  height: 215px; /* Altura fixa, mantendo a proporção 3:4 */
  object-fit: cover; /* Ajusta a imagem para caber dentro do tamanho definido */
  border-radius: 5px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra leve */
  margin-right: 10px; /* Espaçamento entre a imagem e as informações */
}


/* Estilo para o container de informações do livro */
.book-info {
  display: flex;
  flex-direction: column; /* Empilha as informações verticalmente */
  font-size: 25px;
}

/* Grupo de botões (Editar e Excluir) */
.button-group {
  display: flex;
  flex-direction: column; /* Empilha os botões verticalmente */
  gap: 10px; /* Espaçamento entre os botões */
  align-items: flex-start; /* Alinha os botões ao início (opcional) */
}


/* Botão de editar */
.edit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 20px;
}

/* Botão de excluir */
.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 20px;
}

/* Efeito hover nos botões */
.edit-button:hover,
.delete-button:hover {
  opacity: 0.8;
}
</style>