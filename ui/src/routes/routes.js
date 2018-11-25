import landingPage from '../pages/HomePage.vue';
import loginPage from '../pages/LoginPage.vue';
import transactionRequestPage from '../pages/TransactionRequestPage.vue';
import aboutUsPage from '../pages/AboutUsPage.vue';

export default [
  {path: '/', component: landingPage},
  {path: '/login', component: loginPage},
  {path: '/transaction-request', component: transactionRequestPage},
  {path: '/about-us', component: aboutUsPage}
]
