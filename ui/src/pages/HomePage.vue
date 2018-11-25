<template>
  <div>
    <simple-page>
      <div slot="page-content">
        
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
