<template>
  <div id="app">
    <h1>{{appName}}</h1>
    <nav-header :naveItems="menuItems"/>
  </div>
</template>

<script>
import NavHeader from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {
      appName: 'PeerPal',
      menuItems: [
        {title:'About us', link: '#aboutus', key:'aboutus'},
        {title: 'How it works', link: '#howitworks', key:'howitworks'},
        {title: 'Customer service', link: '#customerservice', key:'customerservice'}
      ]
    }
  },
  components: {NavHeader}
}
</script>

<style>
  @import '../styles/globalStyles.css';
</style>
