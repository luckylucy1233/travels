<template>
  <div class="head">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="logo">
          <img src="../assets/logo.png" class="logoimg" />
        </div>
      </el-col>
      <el-col :span="12">
        <ul>
          <li class="myli" v-for="item in links" 
          :class="{'active': $route.name === item.routeName ||$route.name === item.name}">
            <router-link :to="item.routeName ">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="3">
        <img src="../assets/icon.png" class="icon" />
      </el-col>
      <el-col :span="3">
        <div class="sign">
          登陆 | 注册
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'head',
    data() {
      return {
        links: [
          {
            title: '首页',
            // name: 'home',
            routeName: 'home'
          },
          {
            title: '目的地',
            name: '',
            routeName: 'destination',
          },
          {
            title: '攻略',
            // name: 'guides',
            routeName: 'guides'
          },
          {
            title: '关于我们',
            // name: 'aboutUs',
            routeName: 'aboutUs'
          },
          {
            title: '反馈与建议',
            // name: 'contract',
            routeName: 'contract'
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head {
    width: 100%;
    height: 4.167rem;
    position: fixed;
    top: 0;
    left: 0;
    /*opacity: 0.8;*/
    /*background-color: #eee;*/
    z-index: 999;
    padding: 0;
    margin: 0;
  }
  
  .logo {
    float: left;
    background-color: white;
    margin-left: 12.5rem;
    margin-top: 0.6rem;
  }
  
  .logoimg {
    height: 3.750rem;
  }
  
  .myul {
    float: left;
    list-style: none;
    margin-top: 1.25rem;
    margin-left: 4.167rem;
  }
  
  .myli {
    display: inline-block;
    margin: 0 1.667rem;
    height: 2.500rem;
    font-size: 1.333rem;
  }
  .active{
    border-bottom: 0.083rem solid #ff9d00;
  }
  .active a{
    border-bottom-color:#ff9d00;
    color:#ff9d00;
  }
  /*.icon {
    margin-left: 6.667rem;
    float: left;
  }*/
  
  .sign {
    /*float: right;*/
    margin-top: 1.250rem;
    /*margin-right: 8.333rem;*/
    color: #ff9d00;
    background-color: transparent;
  }
</style>