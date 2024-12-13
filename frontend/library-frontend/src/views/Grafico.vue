<template>
  <div class="grafico">
    <!-- Navbar fixa no topo -->
    <Navbar />

    <!-- Cabeçalho do dashboard -->
    <div class="header">
      <h1 class="title">Dashboard de Livros</h1>
    </div>

    <!-- Seção de gráficos -->
    <div class="charts-container">
      <div class="chart" id="chart1">
        <h2 class="chart-title">Avaliação Média por Livro</h2>
        <canvas id="avgRatingChart"></canvas>
      </div>

      <div class="chart" id="chart2">
        <h2 class="chart-title">Distribuição de Livros por Autor</h2>
        <canvas id="booksByAuthorChart"></canvas>
      </div>

      <div class="chart" id="chart3">
        <h2 class="chart-title">Livros Recomendados vs. Todos os Livros</h2>
        <canvas id="recommendedBooksChart"></canvas>
      </div>
    </div>

    <!-- Botão para imprimir gráficos em PDF -->
    <button @click="printPDF" class="print-btn">Imprimir Gráficos em PDF</button>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Navbar from '@/components/Navbar.vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      books: [
        { title: 'O Príncipe', author: 'Maquiavel', rating: 4 },
        { title: '48 Leis do Poder', author: 'Robert Greene', rating: 5 },
        { title: 'O Poder do Hábito', author: 'Charles Duhigg', rating: 3 },
        { title: 'O Palhaço e o Psicanalista', author: 'Christian Dunker', rating: 4 },
      ],
      allBooks: [
        { title: 'O Alquimista', author: 'Paulo Coelho', rating: 5 },
        { title: 'A Revolução dos Bichos', author: 'George Orwell', rating: 4 },
        { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', rating: 5 },
        { title: '1984', author: 'George Orwell', rating: 4 },
      ],
    };
  },
  methods: {
    renderCharts() {
      // Gráfico 1: Avaliação Média por Livro
      const avgRatingChartCtx = document.getElementById('avgRatingChart').getContext('2d');
      new Chart(avgRatingChartCtx, {
        type: 'bar',
        data: {
          labels: this.books.map(book => book.title),
          datasets: [{
            label: 'Avaliação Média',
            data: this.books.map(book => book.rating),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
        },
      });

      // Gráfico 2: Distribuição de Livros por Autor
      const booksByAuthorChartCtx = document.getElementById('booksByAuthorChart').getContext('2d');
      const authorCounts = this.allBooks.reduce((acc, book) => {
        acc[book.author] = (acc[book.author] || 0) + 1;
        return acc;
      }, {});
      new Chart(booksByAuthorChartCtx, {
        type: 'pie',
        data: {
          labels: Object.keys(authorCounts),
          datasets: [{
            data: Object.values(authorCounts),
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
          }],
        },
        options: {
          responsive: true,
        },
      });

      // Gráfico 3: Livros Recomendados vs. Todos os Livros
      const recommendedBooksChartCtx = document.getElementById('recommendedBooksChart').getContext('2d');
      new Chart(recommendedBooksChartCtx, {
        type: 'doughnut',
        data: {
          labels: ['Livros Recomendados', 'Todos os Livros'],
          datasets: [{
            data: [this.books.length, this.allBooks.length],
            backgroundColor: ['rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
          }],
        },
        options: {
          responsive: true,
        },
      });
    },
    printPDF() {
      const pdf = new jsPDF();
      const charts = document.querySelectorAll('.chart');
      let y = 10;

      charts.forEach(async (chart, index) => {
        const canvas = await html2canvas(chart);
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, y, 180, 90);
        y += 100;

        if (index < charts.length - 1) {
          pdf.addPage();
        }
      });

      pdf.save('dashboard-graficos.pdf');
    },
  },
  mounted() {
    this.renderCharts();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');

.grafico {
  display: flex;
  flex-direction: column;
  padding-top: 140px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-family: "Tiny5", serif;
  font-size: 52px;
  font-weight: bold;
  color: #ffffff;
}

.charts-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.chart {
  background-color: #1A1A1A;
  border-radius: 20px;
  padding: 20px;
  width: 30%;
  min-width: 300px;
  text-align: center;
}

.chart-title {
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
}

.print-btn {
  margin: 20px auto;
  display: block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.print-btn:hover {
  background-color: #0056b3;
}
</style>
