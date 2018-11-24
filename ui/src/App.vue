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
  components: {}
}
</script>

<style>
  @import '../styles/globalStyles.css';
</style>
