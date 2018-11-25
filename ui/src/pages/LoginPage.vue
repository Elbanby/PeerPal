<template>
<div class="ignore">
  <div class="jumbotron jumbotron-fluid">
    <h1 class="display-3 text-center">PeerPal Login</h1>
    <p class="lead text-center">Welcome to PeerPal! Please login below</p>
  </div>
  <form class="form-inline" v-on:submit.prevent="onSubmit">
    <input class="form-control mb-2 mr-sm-2" type="txt" id="userName" name="userName" placeholder="userName" v-model="userName"/>
    <input class="form-control mb-2 mr-sm-2" type="password" id="password" name="password" placeholder="password" v-model="password"/>
    <button class="btn btn-primary mb-2" type="submit" name="submitBtn" value="submit">Login </button>
  </form>
</div>
</template>

<script>
export default {
  name: 'login-page',
  data() {
    return {
      test: 'test',
      userName: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      let userName = this.userName;
      let password = this.password;
      this.userName = '';
      this.password = '';
    }
  }
}
</script>
