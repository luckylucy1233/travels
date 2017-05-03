<template>
  <div id="guide">
    <head-nav></head-nav>
    <img src="../../assets/bc1(2).jpeg" width="100%" />
    <div id="box">
      <el-row :gutter="20" style="margin: 0;">
        <el-col :span='4' style="background-color: #ffffff;padding:0;height: 700px;">
          <ul>
            <li v-for='item in des' :class="{'selected': $route.name === item.name}">
              <router-link :to="item.RouterName">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </el-col>
        <el-col :span='20' style="height: 700px">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import headNav from '../../components/headnav.vue'
  export default {
    data() {
      return {
        // isActive: false,
        des: []
      }
    },
    components: {
    headNav,
  },
    methods: {
      getContent() {
        fetch('/api/case')
          .then(resp => resp.json())
          .then(json => {
            this.des = json
            // console.log(json)
          })
          .catch(function (error) {
            console.log('parsing failed', error)
          })
      }
    },
    mounted() {
      console.log(this.$route.name)
      this.getContent()
    }
  }

</script>
<style scoped>
  #box {
    width: 80%;
    margin: 0 auto;
    border: 1px solid #ff9d00;
    border-radius: 5px;
    /*box-shadow: 2px 2px #eee;*/
  }
  /*#right {
    width: 80%;
    height: 500px;
  }
  
  #left {
    width: 20%;
    float: left;
     height: 500px;
     background-color: #eee;
  }
  */
  
  h3 {
    text-align: center;
  }
  
  .content {
    font-size: 14px;
    width: 80%;
    margin: 0 auto;
    background: #ff9d00;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  ul li {
    border-bottom: 1px solid #ff9d00;
    padding: 10px;
    /*background-color: #eee;*/
  }
  
  .selected {
    background-color: #ff9d00;
  }
  
  .content {
    padding: 2px;
  }

</style>
