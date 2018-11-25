<template>
  <div class="ignore">
    <!-- <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <a class="navbar-brand" href="#">PeerPal</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Loan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Deposit</a>
          </li>
        </ul>
      </div>
    </nav> -->

  <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">PeerPal</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item active href="#">Home</b-nav-item>
      <b-nav-item href="#">Loan</b-nav-item>
      <b-nav-item href="#">Deposit</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

    <!-- <ul class="nav justify-content-center ">
      <li v-for="naveItem in naveItems" class="nav-link" :key="naveItem.key">
        <a :href="naveItem.link">{{naveItem.title}}</a>
      </li>
    </ul> -->
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
