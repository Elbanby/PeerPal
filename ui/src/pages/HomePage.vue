<template>
  <div>
    <simple-page>
      <div slot="page-content">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              
              <a class="navbar-brand" href="#">PeerPal</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Customer service</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            
          </div>
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
