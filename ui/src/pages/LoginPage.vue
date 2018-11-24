<template>
  <div>
    <h1> This is the login page {{test}}</h1>
    <form v-on:submit.prevent="onSubmit">
      <input type="txt" id="userName" name="userName" placeholder="userName" v-model="userName"/>
      <input type="password" id="password" name="password" plaseholder="password" v-model="password"/>
      <button type="submit" name="submitBtn" value="submit">Login </button>
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
