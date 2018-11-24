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

export default {
  name: 'app',
  data() {
    return {
      appName: 'PeerPal',
      //renderStrap: false
    }
  },
  mounted() {
      Vue.use(BootstrapVue)
    var peer = new Peer({key: 'lwjd5qra8257b9'});

    console.log(peer);
    peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
    });
 }
}
</script>

<style>
  @import '../styles/globalStyles.css';
</style>
