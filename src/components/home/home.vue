<template>
  <div class="home">
    <carousel></carousel>
    <list></list>
    <mapdot></mapdot>
  </div>
</template>

<script>
import mapdot from './mapdot.vue'
import carousel from './carousel.vue'
import list from './list.vue'
export default {
  name: 'home',
  components: {
    mapdot,
    carousel,
    list
  }
}
</script>

<style scoped>
.home{
  margin-top:5rem;
  width: 100%;
}
</style>