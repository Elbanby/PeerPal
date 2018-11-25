<template>
    <simple-page>
        <div slot="page-content">
            <div class="jumbotron jumbotron-fluid text-center">
                <h1 class="display-3">Sign Up for PeerPal</h1>
                <p class="lead">
                    Please fill in the following information fields to register with PeerPal
                </p>
            </div>
            <div class="row">
                <div class="col-md-3"/>
                <form class="text-center col-md-6">
                    <div class="text-center font-weight-bold">PERSONAL INFORMATION</div><br/>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold px-md-5">First Name</span>
                        </div>
                        <input type="text" class="form-control" id="firstname" placeholder="First Name">
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold px-md-5">Last Name</span>
                        </div>
                        <input type="text" class="form-control" id="lastname" placeholder="Last Name">
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold pr-md-4 pl-md-5">Street Address</span>
                        </div>
                        <input type="text" class="form-control" id="streetaddress" placeholder="Street Address">
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold px-md-5">City</span>
                        </div>
                        <input type="text" class="form-control" id="city" placeholder="E.g. Oakville">
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold px-md-4">Province</span>
                        </div>
                        <select class="custom-select">
                            <option selected>Please Select your home province</option>
                            <option value="1">Alberta</option>
                            <option value="2">British Colombia</option>
                            <option value="3">Manitoba</option>
                            <option value="4">New Brunswick</option>
                            <option value="5">Newfoundland and Labrador</option>
                            <option value="6">Northwest Territories</option>
                            <option value="7">Nova Scotia</option>
                            <option value="8">Nunavut</option>
                            <option value="9">Ontario</option>
                            <option value="10">Prince Edward Island</option>
                            <option value="11">Quebec</option>
                            <option value="12">Saskatchewan</option>
                            <option value="13">Yukon</option>
                        </select>
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold px-md-4">Postal Code</span>
                        </div>
                        <input type="text" class="form-control" id="postalcode" placeholder="Ex. A5B 0Y6">
                    </div><br/>

                    <div class="text-center font-weight-bold">CARD INFORMATION</div><br/>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold px-md-5">Credit Card #</span>
                        </div>
                        <input type="text" class="form-control" id="cardnumber" placeholder="#### #### #### ####">
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold px-md-4">Cardholder Name</span>
                        </div>
                        <input type="text" class="form-control" id="cardholder" placeholder="E.g. John Smith">
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold px-md-5">Expiry Date</span>
                        </div>
                        <input type="text" class="form-control" id="expirydate" placeholder="MM/YY">
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text font-weight-bold px-md-4">CVV #</span>
                        </div>
                        <input type="text" class="form-control" id="cvv" placeholder="###">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success mb-2">Register</button>
                    </div>
                </form>
                <div class="col-md-3"/>
            </div>
        </div>
    </simple-page>
</template>

<script>
import SimplePage from '../components/SimplePage.vue';

export default {
  name: 'sign-up-page',
  data() {
    return {

    }
  },
  components: {SimplePage}
}
</script>