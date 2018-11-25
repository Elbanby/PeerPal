import landingPage from '../pages/HomePage.vue';
import loginPage from '../pages/LoginPage.vue';
import transactionRequestPage from '../pages/TransactionRequestPage.vue';
import aboutUsPage from '../pages/AboutUsPage.vue';
import signUpPage from '../pages/SignUpPage.vue';

export default [
  {path: '/', component: loginPage},
  {path: '/login', component: loginPage},
  {path: '/home', component: landingPage},
  {path: '/transactionrequest', component: transactionRequestPage},
  {path: '/aboutus', component: aboutUsPage},
  {path: '/signup', component: signUpPage}
]
