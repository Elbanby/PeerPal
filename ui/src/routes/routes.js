import landingPage from '../pages/HomePage.vue';
import loginPage from '../pages/LoginPage.vue';

export default [
  {path: '/', component: loginPage},
  {path: '/login', component: loginPage},
  {path: '/home', component: landingPage}
]
