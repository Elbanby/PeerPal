<template>
  <div>
    <simple-page>
      <div slot="page-content">
        <div class="jumbotron jumbotron-fluid">
        <h1 class="display-3 text-center">Greetings Ya Plebian!</h1>
        </div>
        <h4 class="text-center">Your Account Information: </h4>
        <div class="row">
          <div class="col-md-4"/>
          <table class="table table-borderless col-md-5">
            <thead>
              <tr>
                <th>Account Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account Number</td>
                <td>1234 45678903 45</td>
              </tr>
              <tr>
                <td>Account Transaction Status</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Transaction Date</td>
                <td>December 1st, 2018</td>
              </tr>
            </tbody>
          </table>
        <div class="col-md-5"/>
        </div>
      </div>
    </simple-page>
  </div>
</template>

<script>
import SimplePage from '../components/SimplePage.vue';

export default {
  name: 'home-page',
  data() {
    return {

    }
  },
  components: {SimplePage}
}
</script>
