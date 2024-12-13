import { createRouter, createWebHistory } from 'vue-router'; 
import Login from '../views/Login.vue'; 
import Dashboard from '../views/Dashboard.vue'; 
import AddBook from '../views/AddBook.vue'; 
import Cadastrar from '@/views/Cadastrar.vue';
import Book from '../views/Book.vue';
import Notifications from '../views/Notifications.vue';
import Config from '../views/Config.vue';
import Grafico from '@/views/Grafico.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBook,
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: Cadastrar,
  },
  {
    path: '/book',
    name: 'book',
    component: Book,
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
  },
  {
    path: '/config',
    name: 'config',
    component: Config,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/grafico',
    name: 'grafico',
    component: Grafico,
    meta: { requiresAuth: true },
  },
  {
    path: '/:catchAll(.*)', // Usando a nova sintaxe para rotas coringa
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



// Proteção das rotas
router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.name}`);  // Verifique o nome da rota
  const loggedIn = localStorage.getItem('token');

  // Alteração do fundo do body com base na rota
  const routeBackground = {
    Login: '#2d2749',
    Dashboard: '#44427E',
    Cadastrar: '#2d2749',
    AddBook: '#44427E',
    Book: '#44427E',
    Notifications: '#44427E',
  };

  const backgroundColor = routeBackground[to.name];
  if (backgroundColor) {
    console.log(`Changing background to: ${backgroundColor}`); // Verifique se a cor está sendo alterada
    document.body.style.backgroundColor = backgroundColor;
  } else {
    document.body.style.backgroundColor = ''; // Resetar caso não tenha cor definida
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});


export default router;