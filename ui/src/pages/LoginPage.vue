<template>
<div class="ignore">
  <div class="jumbotron jumbotron-fluid">
    <h1 class="display-3 text-center">PeerPal Login</h1>
    <p class="lead text-center">Welcome to PeerPal! Please login below</p>
  </div>
  <div class="row text-center" v-if="errors">
    <div class="col-md-4"/>
    <div class="text-danger col-md-4">Testing Error Log</div>
    <div class="col-md-4"/>
  </div><br/>
  <div class="row">
    <div class="col-md-4"/>
    <form class="form-group col-md-4" v-on:submit.prevent="onSubmit">
      <input class="form-control mb-2 mr-sm-2" type="txt" id="userName" name="userName" placeholder="Username" v-model="userName"/>
      <input class="form-control mb-2 mr-sm-2" type="password" id="password" name="password" placeholder="Password" v-model="password"/>
      <div class="row">
        <div class="col-md-4"/>
        <button class="btn btn-primary mb-2 col-md-4" type="submit" name="submitBtn" value="submit">Login</button>
        <div class="col-md-4"/>
      </div>
    </form>
  </div>
  <div class="row">
      <div class="col-md-4"/>
      <button class="btn btn-primary mb-2 col-md-4" type="submit" name="signUpBtn" value="signup">Sign Up</button>
      <div class="col-md-4"/>
    </div>
</div>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: 'login-page',
  data() {
    return {
      test: 'test',
      userName: '',
      password: '',
      errors: false
    }
  },
  methods: {
    onSubmit() {
      let userName = this.userName;
      let password = this.password;

      if (userName && password) {
        let token = ((Math.random(10000) + 1) + 'user' + userName).split('.');
        localStorage.setItem('userName',userName);
        localStorage.setItem('token', (token[0] + token[1]));
        this.userName = '';
        this.password = '';
        this.$router.push('/home');
      } else {
        //add error message
        this.errors = true;
      }
    }
  }
}
</script>
