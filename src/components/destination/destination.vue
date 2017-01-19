<template>
  <div id="destination">
    <img src="../../assets/bc1(1).jpeg" width='100%' height="300px" />
    <h2>热门目的地</h2>
    <ul>
      <li v-for='item in des' :class="{'activeName':$route.name===item.Routername}">
        <router-link :to='item.Routername'>
          {{item.destination}}
        </router-link>
      </li>
    </ul>
    <div class="tabs">
    <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        des:[
          {
            Routername:'domestic',
            destination:'国内',
            // Routername1:'destination'
          },
          {
            Routername:'hmt',
            destination:'港澳台'
          },
          {
            Routername:'japanK',
            destination:'日韩'
          },
          {
            Routername:'southAsia',
            destination:'东南亚'
          },
          {
            Routername:'eurA',
            destination:'欧美'
          },
          {
            Routername:'ausAfri',
            destination:'澳非'
          },
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  #destination{
    margin-top: 5rem;
  }
  #destination h2{
    text-align: center;
    color: #ff9d00;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  li{
    display: inline-block;
    /* width: 8.333rem; */
    font-size: 1.667rem;
    height: 2.500rem;
    margin-left: 4.167rem;
  }
  .activeName a{
    color: #ff9d00;
    /*display: block;*/
  }
  .activeName{
    border-bottom:2px solid #ff9d00;
  }
  /*.view{
    width: 100px;
  }*/
  .tabs{
    width: 50%;
    margin: 0 auto;

  }
</style>