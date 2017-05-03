<template>
  <div class="home">
    <head-nav></head-nav>
    <carousel></carousel>
    <list></list>
    <mapdot></mapdot>
  </div>
</template>

<script>
import headNav from '../../components/headnav.vue'
  import mapdot from './mapdot.vue'
  import carousel from './carousel.vue'
  import list from './list.vue'
  export default {
    name: 'home',
    components: {
      headNav,
      mapdot,
      carousel,
      list
    }
  }

</script>

<style scoped>
  .home {
    margin-top: 5rem;
    width: 100%;
  }

</style>
