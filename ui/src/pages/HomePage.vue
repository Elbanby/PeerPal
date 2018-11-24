<template>
  <div>
    <simple-page>
      <h1 slot="page-content">TEST</h1>
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
