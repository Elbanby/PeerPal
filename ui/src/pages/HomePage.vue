<template>
  <div>
    <simple-page>
      <div slot="page-content">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          <a class="navbar-brand" href="#"></a>
        </nav>
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
  computed: {
    send() {
      this.socket.emit('SEND_MESSAGE', {
        user: 'omar',
        message: 'I am trying to connect for fuck sake!'
      });
      this.message = '';
      return null;
    }
  },
  mounted() { 
    /*this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data];
      console.log('Message' ,this.messages);
      // you can also do this.messages.push(data)
    });*/
  }
}
</script>
