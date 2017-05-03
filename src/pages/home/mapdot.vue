<template>
  <div class="map">
    <h1>那些年我们走过的地方</h1>
    <img src="../../assets/map.png" width="100%"/>
    <div class="dot SanFrancisco">
      <p>San Francisco</p>
    </div>
    <div class="dot1 Washington">
      <p>Washington</p>
    </div>
    <div class="dot Brazil">
      <p>Brazil</p>
    </div>
    <div class="dot1 Africa">
      <p>Africa</p>
    </div>
    <div class="dot Europe">
      <p>Europe</p>
    </div>
    <div class="dot1 Russia">
      <p>Russia</p>
    </div>
    <div class="dot Beijing">
      <p>Beijing</p>
    </div>
    <div class="dot1 India">
      <p> India</p>
    </div>
    <div class="dot Hongkong">
      <p>Hongkong</p>
    </div>
    <div class="dot1 Taiwan">
      <p>Taiwan</p>
    </div>
    <div class="dot Austrlia">
      <p>Austrlia</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mapdot',
  }
</script>
<style scoped>
  h1{
    color: #ff9d00;
  }
  .map{
    width: 100%;
    position: relative;
  }
  
  h1 {
    text-align: center;
  }
  
  .main {
    position: relative;
  }
  .dot,.dot1{
    width: 0.833rem;
    height: 0.833rem;
    position: absolute;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  .SanFrancisco {
    top: 17.083rem;
    left: 13.333rem;
  }
  
 .Washington {
      top: 17.917rem;
      left: 25.000rem;
    }
    
    .Brazil {
      top: 30.833rem;
      left: 30.000rem;
    }
    
    .Africa {
      top: 25.000rem;
      left: 51.667rem;
    }
    
    .Europe {
      top: 15.000rem;
      left: 45.833rem;
    }
    
    .Russia {
      top: 12.500rem;
      left: 54.167rem;
    }
    
    .Beijing {
      top: 17.500rem;
      left: 74.333rem;
    }
    
    .India {
      top: 24.583rem;
      left: 64.167rem;
    }
    
    .Hongkong {
      top: 23.333rem;
      left: 73.333rem;
    }
    
    .Taiwan {
      top: 22.500rem;
      left: 74.917rem;
    }
    .Austrlia{
      top: 39.167rem;
      left: 81.667rem;
    }
    .dot:after{
      animation-delay: 0s;
      -webkit-animation-delay: 0s;
      -moz-animation-delay: 0s;
      /*动画延迟时间*/
    }
    /*.dot1:after{
      animation-delay: 0.2s;
      -webkit-animation-delay: 0.2s;
      -moz-animation-delay: 0.2s;
    }*/
    .dot:after ,.dot1:after{
      content: '';
      position: absolute;
      z-index: 1;
      /*width: 10px;
      height: 10px;*/
      background-color: #ff9d00;
      border-radius: 50%;
      box-shadow: 0 0 0.833rem rgba(0, 0, 0, .3) inset;
      /*动画属性名，也就是我们前面keyframes定义的动画名*/
      animation-name: 'ripple';
      -webkit-animation-name: 'ripple';
      -moz-animation-name: 'ripple';
      /*动画持续时间*/
      animation-duration: 1.5s;
      -webkit-animation-duration: 1.5s;
      -moz-animation-duration: 1.5s;
      /*动画频率，和transition-timing-function是一样的*/
      animation-timing-function: ease-in-out;
      -webkit-animation-timing-function: ease-in-out;
      -moz-animation-timing-function: ease-in-out;
      /*定义循环资料，infinite为无限次*/
      animation-iteration-count: infinite;
      -webkit-animation-iteration-count: infinite;
      -moz-animation-iteration-count: infinite;
      /*定义动画方式*/
      animation-direction: normal;
      -webkit-animation-direction: normal;
      -moz-animation-direction: normal;
    }
    
    @keyframes ripple {
      0% {
        left: 0.417rem;
        top: 0.417rem;
        opacity: 0.75;
        width: 0;
        height: 0;
      }
      100% {
        left: -1.667rem;
        top: -1.667rem;
        opacity: 0;
        width: 4.167rem;
        height: 4.167rem;
      }
    }
        
    @-moz-keyframes ripple {
      0% {
        left: 0.417rem;
        top: 0.417rem;
        opacity: 0.75;
        width: 0;
        height: 0;
      }
      100% {
        left: -1.667rem;
        top: -1.667rem;
        opacity: 0;
        width: 4.167rem;
        height: 4.167rem;
      }
    }
</style>
<style scoped>

</style>