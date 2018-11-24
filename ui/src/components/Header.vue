<template>
  <div class="navbar">
    <div v-for="naveItem in naveItems" class="nav-item" :key="naveItem.key"><a :href="naveItem.link">{{naveItem.title}}</a></div>
  </div>
</template>

<script>
  export default {
    name: 'nav-header',
    data() {
      return {
        name: 'Header'
      }
    },
    props: ['naveItems']
  }
</script>
