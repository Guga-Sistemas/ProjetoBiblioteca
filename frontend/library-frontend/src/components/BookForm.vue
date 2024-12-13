<template>
  <div class="bookform-container">
    <form @submit.prevent="handleSubmit">
      <input class="input-field" v-model="book.title" placeholder="Título" required />
      <input class="input-field" v-model="book.author" placeholder="Autor" required />
      <input class="input-field" v-model="book.year" placeholder="Ano" required />
      <div class="file-input-container">
        <label for="file-upload" class="file-upload-label">Escolha a capa:</label>
        <!-- Input escondido -->
        <input type="file" id="file-upload" @change="handleFileChange" class="file-input-hidden" />
        <!-- Botão estilizado -->
        <label for="file-upload" class="custom-file-upload">
          {{ selectedImage ? selectedImage.name : "Selecione uma imagem do seu diretório" }}
        </label>
      </div>

      <button class="button-submit-form" type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/api'; // Importa o serviço API para fazer requisições

export default {
  props: ['bookToEdit'], // Recebe o livro a ser editado como uma prop
  data() {
    return {
      book: this.bookToEdit || { title: '', author: '', year: null, image: null, _id: null },
      selectedImage: null, // Variável para armazenar a imagem selecionada
      imageChosen: false, // Controle do estado de imagem escolhida
    };
  },
  watch: {
    bookToEdit: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.book = { ...newValue }; // Atualiza os dados do livro para edição
        } else {
          this.resetForm(); // Se não houver livro para editar, reseta o formulário
        }
      },
    },
  },
  methods: {
    handleFileChange(event) {
      this.selectedImage = event.target.files[0]; // Armazena a imagem selecionada
      this.imageChosen = !!this.selectedImage; // Marca a imagem como escolhida se houver
    },
    handleSubmit() {
      const formData = new FormData();
      formData.append('title', this.book.title);
      formData.append('author', this.book.author);
      formData.append('year', this.book.year);

      // Se uma imagem foi selecionada, adiciona ao FormData
      if (this.selectedImage) {
        formData.append('image', this.selectedImage);
      }

      // Verifica se o livro tem um _id (para atualização) ou se é um novo livro
      if (this.book._id) {
        api.updateBook(this.book._id, formData).then(() => {
          this.$emit('book-updated'); // Emite evento após atualização
          this.resetForm(); // Reseta o formulário
        });
      } else {
        api.addBook(formData).then(() => {
          this.$emit('book-added'); // Emite evento após adicionar
          this.resetForm(); // Reseta o formulário
        });
      }
    },
    // Função para resetar os dados do formulário
    resetForm() {
      this.book = {
        title: '',
        author: '',
        year: null,
        image: null,
        _id: null,
      };
      this.selectedImage = null; // Reseta a imagem selecionada
      this.imageChosen = false; // Reseta o estado de imagem escolhida
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
.bookform-container {
  max-width: 400px;
  /* Largura máxima do formulário */
  margin: 20px auto;
  /* Centraliza o formulário na tela */
  padding: 20px;
  /* Espaçamento interno */
  background-color: #1A1A1A;
  /* Cor de fundo do formulário */
  border-radius: 10px;
  /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Sombra suave */
  font-family: 'Roboto Mono';
}

form {
  display: flex;
  /* Flexbox para organizar os elementos */
  flex-direction: column;
  /* Coluna para os campos do formulário */
}

input {
  margin-bottom: 15px;
  /* Espaçamento entre os campos */
  padding: 10px;
  /* Espaçamento interno dos campos */
  border: 1px solid #ccc;
  /* Borda do campo */
  border-radius: 5px;
  /* Bordas arredondadas */
  font-size: 16px;
  /* Tamanho da fonte */
}

input:focus {
  border-color: #4CAF50;
  /* Cor da borda quando o campo está em foco */
  outline: none;
  /* Remove a borda padrão do navegador */
}

button {
  padding: 10px;
  /* Espaçamento interno do botão */
  background-color: #4CAF50;
  /* Cor de fundo do botão */
  color: white;
  /* Cor do texto */
  border: none;
  /* Remove a borda padrão */
  border-radius: 5px;
  /* Bordas arredondadas */
  cursor: pointer;
  /* Cursor de ponteiro */
  font-size: 16px;
  /* Tamanho da fonte */
  transition: background-color 0.3s;
  /* Transição suave */
}

button:hover {
  background-color: #45a049;
  /* Cor do botão ao passar o mouse */
}

.file-upload-label {
  color: white;
}

/* Oculta o input de arquivo padrão */
.file-input-hidden {
  display: none;
}

/* Botão estilizado para o input */
.custom-file-upload {
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  background-color: #4CAF50;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;
  font-size: 14px;
}

/* Efeito hover */
.custom-file-upload:hover {
  background-color: #45a049;
}


#file-upload {
  margin-top: 10px;
}

.button-submit-form{
  margin-top: 30px;
}
</style>
