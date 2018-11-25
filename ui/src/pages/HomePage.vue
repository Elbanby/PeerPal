<template>
  <div>
    <simple-page>
      <div slot="page-content">
        <b-col class="mt-4">
          <h1>Balance</h1>
          <b-progress class="mt-1" height="4rem" :max="max" show-value>
            <b-progress-bar :value="98.12" variant="success" :label="'$98.12'"></b-progress-bar>
            <b-progress-bar :value="loan" variant="danger" :label="'$'+loan.toFixed(2)" animated></b-progress-bar>
          </b-progress>
          
          <div class="float-right">Requested: $200.00</div>

          <b-btn class="mt-5 col-md-12" @click="clicked">Cancel</b-btn>
        </b-col>
        
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
      socket : io('http://localhost:3000/'),
      max: 200,
      loan: 76.34
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
      console.log('Data');
      console.log(data);
    });

    let interval = setInterval(() => {
      
      this.loan = this.loan + 0.01;
      //console.log(this.loan);
    }, 900);

    setTimeout(() => {
      clearInterval(interval);
    }, 20000);
  }
}
</script>
