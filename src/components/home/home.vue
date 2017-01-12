<template>
  <div class="home">
    <carousel></carousel>
    <mapdot></mapdot>
  </div>
</template>

<script>
import mapdot from './mapdot.vue'
import carousel from './carousel.vue'
export default {
  name: 'home',
  components: {
    mapdot,
    carousel
  }
}
</script>

<style scoped>
.home{
  margin-top:5rem;
}
</style>