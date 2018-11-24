<template>
  <div class="ignore">
    <ul class="nav justify-content-center">
      <li v-for="naveItem in naveItems" class="nav-link" :key="naveItem.key">
        <a :href="naveItem.link">{{naveItem.title}}</a>
      </li>
    </ul>
    <!-- <nav class="nav navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">PeerPal</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav mr-auto">
          <li v-for="naveItem in naveItems" class="nav-item" :key="naveItem.key">
            <a :href="naveItem.link">{{naveItem.title}}</a>
          </li>
        </ul>
      </div>
    </nav> -->
    <!-- <div v-for="naveItem in naveItems" class="nav-item" :key="naveItem.key"><a :href="naveItem.link">{{naveItem.title}}</a></div> -->
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
