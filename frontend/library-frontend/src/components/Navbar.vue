<template>
    <!-- Estrutura principal da barra de navegação -->
    <nav class="navbar">
        <!-- Logo do sistema com link para a página inicial -->
        <div class="logo">
            <!-- Ao clicar na logo, o usuário é redirecionado ao dashboard -->
            <a href="" @click="goToDashboard">
                <img src="../assets/logo.png" alt="Logo" />
            </a>
        </div>

        <!-- Título da biblioteca exibido na navbar -->
        <div class="title">
            <span>Brain Books</span>
        </div>

        <!-- Contêiner da barra de pesquisa -->
        <div class="InputContainer">
            <!-- Campo de texto para pesquisa -->
            <input 
                :placeholder="placeholder" 
                id="input" 
                class="input" 
                name="text" 
                type="text" 
                v-model="searchQuery" 
                @input="handleSearch" 
            />
            <!-- Ícone de pesquisa exibido ao lado do input -->
            <label class="labelforsearch" for="input">
                <svg class="searchIcon" viewBox="0 0 512 512">
                    <!-- Desenho do ícone SVG de lupa -->
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                    </path>
                </svg>
            </label>
        </div>

        <!-- Ícones de navegação -->
        <div class="nav-icons">
            <!-- Botões para acessar o CRUD de usuários e livros, gráficos e outras funcionalidades -->
            <a href="#userCrud" class="icon">
                <!-- Ícone para acessar o CRUD de usuários -->
                <img src="../assets/crud.png" alt="" @click="goToUserCrud" />
            </a>
            <a href="#crud" class="icon">
                <!-- Ícone para acessar o CRUD de livros -->
                <img src="../assets/bookCrud.png" alt="" @click="goToAddBook" />
            </a>
            <a href="#graficos" class="icon">
                <!-- Ícone para acessar os gráficos -->
                <img src="../assets/chart.png" alt="" @click="goToGrafico" />
            </a>
            <a href="#notificacoes" class="icon">
                <!-- Ícone para exibir notificações -->
                <img src="../assets/notification.png" alt="" @click="goToNotifications"/>
            </a>
            <a href="#configuracoes" class="icon">
                <!-- Ícone para acessar configurações -->
                <img src="../assets/config.png" alt="" @click="goToConfig" />
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '', // Armazena o texto da pesquisa inserido pelo usuário
        };
    },
    computed: {
        // Computed para verificar se o usuário é um librarian ou admin
        isLibrarianOrAdmin() {
            return this.role === 'librarian' || this.role === 'admin';
        },
        // Computed para verificar se o usuário é apenas librarian
        isLibrarian() {
            return this.role === 'librarian';
        },
        // Placeholder dinâmico da barra de pesquisa
        placeholder() {
            return this.$route.name === 'UserCrud' 
                ? 'Procure por um usuário' 
                : 'Procure por um livro';
        },
    },
    methods: {
        // Redireciona para o dashboard
        goToDashboard() {
            this.$router.push('/dashboard');
        },
        // Redireciona para a página de adicionar livro
        goToAddBook() {
            this.$router.push('/addBook');
        },
        // Redireciona para a página de gráficos
        goToChart() {
            this.$router.push('/chart');
        },
        // Redireciona para o CRUD de usuários
        goToUserCrud() {
            this.$router.push('/userCrud');
        },
        // Redireciona para configurações
        goToConfig() {
            this.$router.push('/config');
        },
        // Redireciona para notificações
        goToNotifications() {
            this.$router.push('/notifications');
        },
        // Redireciona para Gráficos
        goToGrafico() {
            this.$router.push('/grafico');
        },
        // Lida com o evento de pesquisa
        handleSearch() {
            // Caso esteja na rota UserCrud, emite um evento para buscar usuários
            if (this.$route.name === 'UserCrud') {
                this.$emit('searchUsers', this.searchQuery);
            }
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rhodium+Libre&display=swap');

/* Estilos da Navbar */
.navbar {
    display: flex;
    align-items: center;
    background-color: #1A1A1A; /* Cor de fundo da navbar */
    padding: 20px 10px; /* Margem interna */
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 900; /* Garantindo que a navbar fique por cima de outros elementos */
    box-sizing: border-box;
}

.logo img {
    height: 80px; /* Tamanho da logo */
    margin-left: 10px;
}

.title {
    font-family: 'Rhodium Libre', serif;
    color: white;
    font-size: 35px;
    font-weight: bold;
}

.InputContainer {
    height: 50px; /* Altura da barra de pesquisa */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    padding-left: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075); /* Sombra leve */
}

.input {
    width: 570px;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1em;
    caret-color: rgb(255, 81, 0); /* Cor do cursor */
}

.nav-icons {
    display: flex;
}

.nav-icons .icon {
    margin-left: 25px; /* Espaçamento entre ícones */
}

.nav-icons img {
    width: 60px; /* Tamanho dos ícones */
    height: 60px;
}
</style>
