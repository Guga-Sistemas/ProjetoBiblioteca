<template>
    <!-- Sidebar principal para exibição de filtros -->
    <div class="sidebar">
      <!-- Seção de filtros gerais -->
      <div class="filter-section">
        <!-- Cabeçalho indicando que os filtros são para gêneros literários -->
        <div class="filter-title">
          <h2>Gêneros:</h2>
        </div>
        <!-- Lista de gêneros literários, cada item ao ser clicado emite um evento para filtrar -->
        <ul class="filter-list">
          <li @click="$emit('filter', { type: 'genre', value: 'Romance' })">Romance</li>
          <li @click="$emit('filter', { type: 'genre', value: 'Teatro' })">Teatro</li>
          <li @click="$emit('filter', { type: 'genre', value: 'Contos Morais' })">Contos Morais</li>
          <li @click="$emit('filter', { type: 'genre', value: 'Poesia' })">Poesia</li>
          <li @click="$emit('filter', { type: 'genre', value: 'Infantil' })">Infantil</li>
          <li @click="$emit('filter', { type: 'genre', value: 'Ciência' })">Ciência</li>
          <li @click="$emit('filter', { type: 'genre', value: 'Economia' })">Economia</li>
          <li @click="$emit('filter', { type: 'genre', value: 'Filosofia' })">Filosofia</li>
        </ul>
  
        <!-- Seção dedicada aos autores -->
        <div class="filter-section">
          <!-- Título para os filtros de autores -->
          <div class="filter-title">
            <h2>Autores:</h2>
          </div>
          <!-- Lista de autores disponíveis para filtro, cada item emite um evento -->
          <ul class="filter-list">
            <li @click="$emit('filter', { type: 'author', value: 'Maquiavel' })">Maquiavel</li>
            <li @click="$emit('filter', { type: 'author', value: 'J.K. Rowling' })">J.K. Rowling</li>
            <li @click="$emit('filter', { type: 'author', value: 'Stephen King' })">Stephen King</li>
            <li @click="$emit('filter', { type: 'author', value: 'Agatha Christie' })">Agatha Christie</li>
            <li @click="$emit('filter', { type: 'author', value: 'C.S. Lewis' })">C.S. Lewis</li>
            <li @click="$emit('filter', { type: 'author', value: 'Ernest Hemingway' })">Ernest Hemingway</li>
            <li @click="$emit('filter', { type: 'author', value: 'Roald Dahl' })">Roald Dahl</li>
            <li @click="$emit('filter', { type: 'author', value: 'Victor Hugo' })">Victor Hugo</li>
          </ul>
        </div>
  
        <!-- Seção dedicada aos filtros de anos -->
        <div class="filter-section">
          <!-- Título para a seção de anos -->
          <div class="filter-title">
            <h2>Anos:</h2>
          </div>
          <!-- Lista de anos para filtro, abrangendo faixas de tempo -->
          <ul class="filter-list">
            <li @click="$emit('filter', { type: 'year', value: 2020 })">2020+</li>
            <li @click="$emit('filter', { type: 'year-range', value: [1990, 2019] })">1990 - 2019</li>
            <li @click="$emit('filter', { type: 'year-range', value: [1970, 1989] })">1970 - 1989</li>
            <li @click="$emit('filter', { type: 'year-range', value: [1940, 1969] })">1940 - 1969</li>
            <li @click="$emit('filter', { type: 'year-range', value: [1910, 1939] })">1910 - 1939</li>
            <li @click="$emit('filter', { type: 'year-range', value: [1850, 1909] })">1850 - 1909</li>
            <li @click="$emit('filter', { type: 'year-range', value: [1500, 1849] })">1500 - 1849</li>
            <li @click="$emit('filter', { type: 'year-below', value: 1499 })">1499 -</li>
          </ul>
        </div>
  
        <!-- Seção de ícone escondido, usada talvez para algum design específico -->
        <div class="footer-icon-section-hidden">
          <img src="../assets/branco.png" alt="Footer Icon" class="footer-icon" />
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Fonte customizada para toda a sidebar */
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
  
  /* Estilos básicos da sidebar */
  .sidebar {
    font-family: "Roboto Mono", serif; /* Fonte aplicada */
    width: 250px; /* Largura da barra */
    background-color: #28095B; /* Cor de fundo */
    color: white; /* Texto branco */
    height: 100%; /* Altura total da tela */
    position: fixed; /* Fixa a posição */
    top: 70px; /* Margem a partir do topo */
    left: 0; /* Ancorada à esquerda */
    overflow-y: auto; /* Habilita rolagem vertical */
    padding: 20px; /* Espaçamento interno */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  }
  
  /* Seções da lista de filtros */
  .filter-section {
    margin-bottom: 20px;
  }
  
  /* Título das seções */
  .filter-title {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    text-decoration: underline;
  }
  
  /* Estilo para os itens de lista */
  .filter-list li {
    display: flex;
    align-items: center;
    padding: 5px 0;
    cursor: pointer; /* Mouse em formato de link */
  }
  
  .filter-list li::before {
    content: "•"; /* Adiciona um ponto antes do texto */
    color: white;
    margin-right: 10px;
  }
  </style>  