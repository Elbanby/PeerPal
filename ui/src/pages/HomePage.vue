<template>
  <div>
    <simple-page>
      <div slot="page-content">
        <div>
          <h1>Balance</h1>
          <b-progress :value="'$56.43'" :max="100" show-progress striped variant="success"></b-progress>
          <b-progress class="mt-1" :max="100" show-value>
            <b-progress-bar :value="45*(6/10)" variant="success"></b-progress-bar>
            <b-progress-bar :value="45*(2.5/10)" variant="warning"></b-progress-bar>
            <b-progress-bar :value="45*(1.5/10)" variant="danger"></b-progress-bar>
          </b-progress>

          <b-btn class="mt-4" @click="clicked">Click me</b-btn>
        </div>
      </div>
    </simple-page>
  </div>
</template>

<script>
import SimplePage from '../components/SimplePage.vue';
import io from 'socket.io-client';

export default {
  name: 'home-page',
  data() {
    return {
      message: '',
      socket : io('http://localhost:3000/')
    }
  },
  components: {SimplePage},
  mounted() {
    this.socket.emit('SEND_MESSAGE', {
      user: localStorage.getItem('userName'),
      message: 'I am trying to connect for fuck sake!'
    });
    this.message = '';

    this.socket.on('MESSAGE',(data)=>{
      console.log('Data ');
      console.log(data);
    });
  }
}
</script>
