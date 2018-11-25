<template>
  <div>
    <simple-page>
      <div slot="page-content">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
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
