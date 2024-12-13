<template>
    <Navbar/>
    <div id="app">
      <h1>Adicionar Livros</h1>
  <!-- Formulário para adicionar ou editar um livro -->
   <div class="bookform">
    <BookForm :bookToEdit="bookToEdit" @book-added="fetchBooks" @book-updated="fetchBooks" />
   </div>
  
  <!-- Lista de livros -->
  <BookList @edit-book="setBookToEdit" ref="bookList" />
  </div>
</template>

<script>
  import BookList from '../components/BookList.vue';
  import BookForm from '../components/BookForm.vue';
  import Navbar from '@/components/Navbar.vue';

  export default {
    data() {
      return {
          bookToEdit: null, // Inicializa o estado do livro a ser editado
      };
    },

    components: {
      BookList,
      BookForm,
      Navbar,
    },    

    methods: {
      // Função para definir o livro que será editado
      setBookToEdit(book) {
        this.bookToEdit = book;
      },

      // Função para atualizar a lista de livros após adicionar ou editar
      fetchBooks() {
        this.$refs.bookList.fetchBooks();
        this.bookToEdit = null; // Limpa o formulário após a ação
      },
    },
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

h1{
  font-family: 'IBM Plex Mono', monospace;
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 55px;
}

.bookform{
  margin-top: 65px;
}

#app{
  padding-top: 175px;
}
</style>