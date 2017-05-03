<template>
  <div id="destination">
    <head-nav></head-nav>
    <img src="../../assets/bc1(1).jpeg" width='100%' height="300px" />
    <h2>热门目的地</h2>
    <!--<ul>
      <li v-for='(item,index) in des' @click='changeColor(index)' :class="{'active':des[index].selected}">
        <router-link :to='item.Routername'>
          {{item.destination}}
        </router-link>
      </li>
    </ul>
    <div class="tabs">
      <router-view class="view"></router-view>
    </div>-->
    <div id="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="item.title" :name="item.number" v-for='(item,index) in des'>
          <ul>
            <li>
              <router-link :to='item.RouterName'>
              {{item.name}}
              </router-link>
            </li>
            <li>
              <router-link :to='item.RouterName'>
              {{item.name2}}
              </router-link>
            </li>
            <li>
              <router-link :to='item.RouterName'>
              {{item.name3}}
              </router-link>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import headNav from '../../components/headnav.vue'
  export default {
    data() {
      return {
        activeName: 'first',
        des: []
      }
    },
     components: {
      headNav,
      
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
        // console.log(this.des.domestic)
      },
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
        // axios.get('/api/case')
        // .then(function(response){
        //   return response.json()
        // })
        // .then(function(json){
        //   this.des = json
        //   console.log(json)
        // }).catch(error=>{
        //   console.log(error)
        // })
      },
    },
    mounted() {
      this.getContent()
    }

  }

</script>

<style scoped>
  #destination {
    margin-top: 5rem;
  }
  
  #destination h2 {
    text-align: center;
    color: #ff9d00;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    /*text-align: center;*/
  }
  
  li {
    display: inline-block;
    font-size: 1.667rem;
    height: 2.500rem;
    margin-left: 4.167rem;
  }
  
  .activeName a {
    color: #ff9d00;
  }
  
  .activeName {
    border-bottom: 2px solid #ff9d00;
  }
  
  .active {
    color: #ff9d00;
  }
  
  #tabs {
    width: 50%;
    margin: 0 auto;
  }

</style>
