<template>
  <div>
    <simple-page>
      <div slot="page-content">
        <b-col class="mt-4">
          <h1>Balance</h1>
          <div id="requestedStr" class="float-right"><strong>Requested</strong> (~2h): $<span id="requestedAmount">200.00</span></div>
          <br/>
          <b-progress class="mt-1" height="4rem" :max="max" show-value>
            <b-progress-bar id="owned" :value="balance" variant="success" :label="'$'+balance.toFixed(2)"></b-progress-bar>
            <b-progress-bar id="loan" :value="loan" variant="danger" :label="'$'+loan.toFixed(2)" animated></b-progress-bar>
          </b-progress>
          
          <div id="entitledStr" class="float-right"><strong>Entitled</strong>: $<span id="entitledAmount">200.00</span></div>

          <b-btn id="btn-loan" class="mt-5 col-md-12" @click="clicked">Cancel</b-btn>
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
      max: 100,
      balance: 98.12,
      loan: 1.0,
      isLeeching: false,
      owned: 0.0
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

    if (this.isLeeching == true) {
      // Leeching in progress. Stop seeding.
      this.max = 200.00;
      this.loan = 76.34;
      document.getElementById("requestedAmount").innerText = this.max;
      
      let entitledAmount = document.getElementById("entitledAmount");
      entitledAmount.innerHTML = (this.balance + this.loan);
      
      document.getElementById("btn-loan").innerText = "Cancel";
      
      let interval = setInterval(() => {
        this.loan = this.loan + 0.01;
        entitledAmount.innerHTML = (this.balance + this.loan).toFixed(2);
      }, 900);
      
      setTimeout(() => {
        clearInterval(interval);
      }, 30000);
      
    } else if (this.isLeeching == false && this.loan > 0) {
      // Seeding with debt. Stop leeching.
      this.max = 200;
      this.loan = this.max - this.balance;
      this.owned = this.balance;
      
      let owned = document.getElementById("owned");
      owned.classList.add("progress-bar-striped","progress-bar-animated");
      
      // Stop animating loan.
      let loan = document.getElementById("loan");
      loan.classList.remove("progress-bar-striped", "progress-bar-animated");

      // Hide requested text.
      document.getElementById("requestedStr").hidden = true;

      document.getElementById("btn-loan").classList.add("disabled");

      let interval = setInterval(() => {
        this.balance -= 0.01;
        entitledAmount.innerHTML = (this.owned += 0.005).toFixed(2);
      }, 900);
      
      setTimeout(() => {
        clearInterval(interval);
      }, 50000);
      
    } else {
      // Debt-free seeding in progress. Stop leeching.
      // Stop loan animation.
      this.owned = this.balance;
      let loan = document.getElementById("loan");
      loan.classList.remove("progress-bar-animated");
      loan.hidden = true;

      let owned = document.getElementById("owned");
      owned.classList.add("progress-bar-striped","progress-bar-animated");      

      // Hide requested text.
      document.getElementById("requestedStr").hidden = true;

      // Change button text.
      document.getElementById("btn-loan").innerText = "Request loan";

      let interval = setInterval(() => {
        this.balance -= 0.01;
        entitledAmount.innerHTML = (this.owned += 0.005).toFixed(2);
      }, 900);
      
      setTimeout(() => {
        clearInterval(interval);
      }, 50000);
    }
  }
}
</script>
