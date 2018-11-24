<template>
  <div class="nav_container">
    <div v-for="naveItem in naveItems" class="nav-item"><a :href="naveItem.link">{{naveItem.title}}</a></div>
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
