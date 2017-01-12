<template>
  <div class="map" >
    <img src="../../assets/map.png" />
    <div class="dot circle">
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
  /*img {
    width: 100%;
  }*/
  
  .map {
    /*margin-top: 5rem;*/
    width: 100%;
    position: relative;
  }
  
  h1 {
    text-align: center;
  }
  
  .main {
    position: relative;
  }
  
  .circle {
    top: 205px;
    left: 160px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .Washington {
    top: 215px;
    left: 300px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .Brazil {
    top: 370px;
    left: 360px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .Africa {
    top: 300px;
    left: 620px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .Europe {
    top: 180px;
    left: 550px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .Russia {
    top: 150px;
    left: 650px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .Beijing {
    top: 210px;
    left: 880px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .India {
    top: 295px;
    left: 770px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .Hongkong {
    top: 280px;
    left: 880px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .Taiwan {
    top: 270px;
    left: 899px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .Austrlia {
    top: 470px;
    left: 980px;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
  }
  
  .dot:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3) inset;
    -webkit-animation-name: 'ripple';
    /*动画属性名，也就是我们前面keyframes定义的动画名*/
    -webkit-animation-duration: 1.5s;
    /*动画持续时间*/
    -webkit-animation-timing-function: ease-in-out;
    /*动画频率，和transition-timing-function是一样的*/
    -webkit-animation-delay: 0s;
    /*动画延迟时间*/
    -webkit-animation-iteration-count: infinite;
    /*定义循环资料，infinite为无限次*/
    -webkit-animation-direction: normal;
    /*定义动画方式*/
  }
  
  @keyframes ripple {
    0% {
      left: 5px;
      top: 5px;
      opcity: 75;
      width: 0;
      height: 0;
    }
    100% {
      left: -20px;
      top: -20px;
      opacity: 0;
      width: 50px;
      height: 50px;
    }
  }
  
  .dot1:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 10px;
    height: 10px;
    background-color: #ff9d00;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3) inset;
    -webkit-animation-name: 'ripple';
    /*动画属性名，也就是我们前面keyframes定义的动画名*/
    -webkit-animation-duration: 1.3s;
    /*动画持续时间*/
    -webkit-animation-timing-function: ease-in-out;
    /*动画频率，和transition-timing-function是一样的*/
    -webkit-animation-delay: 0.2s;
    /*动画延迟时间*/
    -webkit-animation-iteration-count: infinite;
    /*定义循环资料，infinite为无限次*/
    -webkit-animation-direction: normal;
    /*定义动画方式*/
  }
  
  @keyframes ripple {
    0% {
      left: 5px;
      top: 5px;
      opcity: 75;
      width: 0;
      height: 0;
    }
    100% {
      left: -20px;
      top: -20px;
      opacity: 0;
      width: 50px;
      height: 50px;
    }
  }
</style>