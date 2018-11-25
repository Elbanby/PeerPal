<template>
  <div class="ignore">

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
