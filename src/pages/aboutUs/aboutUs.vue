<template>
  <div id="aboutus"> 
        <head-nav></head-nav>
    <p>designed by lucy yang</p>
    <p>telphone:13203223489</p>
    <p></p>
  </div>
</template>
<script>
import headNav from '../../components/headnav.vue'
  export default {
    name: 'home',
    components: {
      headNav,
    }
  }

</script>
<style scoped>
  #aboutus{
    margin-top: 5rem;
    text-align: center;
  }
</style>