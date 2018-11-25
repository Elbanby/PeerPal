<template>
    <simple-page>
        <div slot="page-content">
            <div class="jumbotron jumbotron-fluid">
                <h1 class="display-3 text-center">About Us</h1>
                <p class="lead text-center">
                    Check us out below!
                </p>
            </div>
            <div class="row">
                <div class="col-md-4"/>
                <table class="table table-hover text-center col-md-4">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>GitHub Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Omar</td>
                            <td>Elbanby</td>
                            <td><a href="https://github.com/Elbanby">GitHub</a></td>
                        </tr>
                        <tr>
                            <td>Anthony</td>
                            <td>Wong</td>
                            <td><a href="https://github.com/">GitHub</a></td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Philips</td>
                            <td><a href="https://github.com/CoderMP">GitHub</a></td>
                        </tr>
                        <tr>
                            <td>Devon</td>
                            <td>Fazekas</td>
                            <td><a href="https://github.com/DFazekas">GitHub</a></td>
                        </tr>
                    </tbody>
                </table>
                <div class="col-md-4"/>
            </div>
        </div>  
    </simple-page>  
</template>

<script>
import SimplePage from '../components/SimplePage.vue';

export default {
  name: 'about-us-page',
  data() {
    return {

    }
  },
  components: {SimplePage}
}
</script>