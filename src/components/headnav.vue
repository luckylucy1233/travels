<template>
  <div class="head">
    <div class="logo">
      <img src="../assets/logo.png" class="logoimg" />
    </div>
    <ul>
      <li>
        <router-link to='/'>首页</router-link>
      </li>
      <li>
        <router-link to='destination'>目的地</router-link>
      </li>
      <li>
        <router-link to='guides'>攻略</router-link>
      </li>
      <li>
        <router-link to='aboutUs'>关于我们</router-link>
      </li>
      <li></li>
    </ul>
    <img src="../assets/icon.png" class="icon" />
    <div class="sign">
      登陆 | 注册</div>
  </div>
</template>

<script>
export default {
  name: 'head',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head {
    width: 100%;
    height: 5rem;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.8;
  }
  
  .logo {
    float: left;
    background-color: white;
    margin-left: 15rem;
  }
  
  .logoimg {
    height: 4.5rem;
  }
  
  ul {
    float: left;
    list-style: none;
    margin-top: 1.5rem;
    margin-left: 5rem;
  }
  
  li {
    display: inline-block;
    margin: 0 2rem;
  }
  
  .icon {
    margin-left: 8rem;
    float: left;
  }
  
  .sign {
    float: right;
    margin-top: 1.5rem;
    margin-right: 10rem;
    color: #ff9d00;
    background-color: transparent;
  }
</style>