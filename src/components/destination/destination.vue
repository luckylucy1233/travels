<template>
  <div id="destination">
    <img src="../../assets/bc1(1).jpeg" width='100%' height="300px" />
    <h2>热门目的地</h2>
    <ul>
      <li href='#li1'>国内</li>
      <li href='#li2'>港澳台</li>
      <li href='#li3'>日韩</li>
      <li href='#li4'>东南亚</li>
      <li href='#li5'>欧美</li>
      <li href='#li6'>澳非</li>
    </ul>
        <div id="li1">{{li1}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        li1:'北京 上海 重庆 天津',

      }
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
    width:8.333rem;
    font-size: 1.667rem;
  }
</style>