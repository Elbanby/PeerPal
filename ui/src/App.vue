<template>
  <div id="app">
    <router-view></router-view>
    <!-- <div v-if="renderStrap">

    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

export default {
  name: 'app',
  data() {
    return {
      appName: 'PeerPal',
      //renderStrap: false
    }
  }
}
</script>

<style>
  @import '../styles/globalStyles.css';
</style>
