<template>
  <div id="app">
    <!--<headnav></headnav>-->
    <transition :name='transitionName' mode='out-in'>
      <router-view class="child-view"></router-view>
    </transition>
    <!--<bottom></bottom>-->
  </div>
</template>

<script>
  import headnav from './components/headnav'
  import bottom from './components/bottom'
  export default {
    name: 'app',
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    components: {
      headnav,
      bottom
    },
    methods: {

    }
  }

</script>

<style>
  #app {
    font-family: "Microsoft Yahei", Arial, "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", SimSun, "PingFang SC", STHeiti;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100%;
    height: 100%;
  }
  
  html {
    /*设置rem基数为10*/
    font-size: 75%;
    /*12 ÷ 16 × 100% = 75%*/
     width:100%;
    height: 100%;
  }
  
  body {
    /*font-size: 1.167rem;*/
    /*1.2 × 10px = 12px */
    margin: 0;
    padding: 0;
    width:100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }
  /*路由过度效果样式*/
  
  .child-view {
    transition: all .3s cubic-bezier(.55, 0, .1, 1);
  }
  
  .slide-left-enter {
    opacity: 0.5;
    -webkit-transform: translate(1.667rem, 0);
    transform: translate(1.667rem, 0);
  }
  
  .slide-left-leave-active {
    opacity: 0;
    -webkit-transform: translate(-0.250rem, 0);
    transform: translate(-1.667rem, 0);
  }

</style>
