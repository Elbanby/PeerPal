<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      appName: 'PeerPal'
    }
  },
  mounted() {
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
