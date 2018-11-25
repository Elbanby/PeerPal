<template>
    <simple-page>
        <div slot="page-content">
            <div class="jumbotron jumbotron-fluid text-center">
                <h1 class="display-3">Transaction Request</h1>
                <p class="lead">
                    Please fill out the form below to initiate a new transaction process
                </p>
            </div>
            <div class="row text-center">
                <div class="col-md-4"/>
                <p>Status: </p>
                <div class="col-md-4"/>
            </div>
            <div class="row">
                <div class="col-md-4"/>
                <form class="col-md-4">
                    <div class="form-group"></div>
                </form>
                <div class="input-group col-md-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control" placeholder="0.00">
                </div>
                <div class="col-md-4"/>
            </div>
        </div>
    </simple-page>
</template>

<script>
import SimplePage from '../components/SimplePage.vue';

export default {
  name: 'transaction-request-page',
  data() {
    return {

    }
  },
  components: {SimplePage}
}
</script>