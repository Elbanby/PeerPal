<template>
  <div>
    <nav-header :naveItems="menuItems" />
    <slot name="page-content">
      <div class="jumbotron jumbotron-fluid">
        <h1 class="text-center">Testing Jumbotron</h1>
      </div>
    </slot>
    <page-footer/>
  </div>
</template>

<script>
import NavHeader from './Header.vue';
import PageFooter from './Footer.vue';

export default {
  name: 'simple-page',
  data() {
    return {
      menuItems: [
        {title: 'PeerPal', link: '/', key:'peerpal'},
        {title:'About us', link: '#aboutus', key:'aboutus'},
        {title: 'How it works', link: '#howitworks', key:'howitworks'},
        {title: 'Customer service', link: '#customerservice', key:'customerservice'}
      ]
    }
  },
  components: { NavHeader, PageFooter }
}
</script>
