<template>
  <div id="list">
    <el-row :gutter="20">
      <el-col :span="8" v-for="item in list">
        <figure class="test1">
          <img :src="item.src" />
          <figcaption>
            <p>{{item.title}}</p>
            <!--<p>图片注解</p>-->
             <div class="line"></div>
          </figcaption>
         
        </figure>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
        list: [
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1fvDHOABdeeAA0LbpCeePY41.jpeg',
            title: '中国'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1f8rUGAcUxxAAgWqhdLNEc998.png',
            title: '马尔代夫'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1hSSHaAGRskAAchJrFFufw38.jpeg',
            title: '新西兰'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgBZ1h3RNuAZBjgAAYAmFj5raI74.jpeg',
            title: '欧洲'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1hC3LyADV48ABljqKlwjnM30.jpeg',
            title: '欧洲'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgB6lRW-YmAJPaZAADmGcPaItw26.jpeg',
            title: '法国'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #list{
    padding:0 6.617rem;
  }
  .el-row {
    margin-bottom: 1.667rem;
    margin: 0 1.667rem;
  }
  .el-col {
    border-radius: 0.333rem;
    margin-top:4.167rem;
    opacity: 1;
  }

  .time {
    font-size: 1.083rem;
    color: #999;
  }
  figure,figcaption,h2,p,img{
    margin: 0;
    padding: 0;
  }
  figure{
    position: relative;
    overflow: hidden;
  }
  figcaption p{
    position: absolute;
    top:50%;
    left:44%;
    font-size: 1.667rem;
    /*right: 44%;*/
    color:#fff;
  }
  .test{
    background: #2f0000;
  }
  figure img{
    opacity: 0.8;
    width: 100%;
    height: 16.667rem;
    opacity: 1;
    -webkit-transition: all .75s;
    -moz-transition: all .75s;
    transition: all .75s;
  }
  .test1 figcaption p:nth-of-type(1){
    -webkit-transition-delay: 0.05s;
    -moz-transition-delay: 0.05s;
    transition-delay: 0.05s;
  }
   .test1 figcaption p:nth-of-type(2){
    -webkit-transition-delay: 0.15s;
    -moz-transition-delay: 0.15s;
    transition-delay: 0.15s;
  }
  figure img:hover{
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 0.7;
  }
  figure .line{
    position: absolute;
    top:10%;
    left:5%;
    width: 90%;
    height: 80%;
    border: 1px solid #fff;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 1s 0.3s;
    -moz-transition: all 1s 0.3s;
    transition: all 1s 0.3s;
  }
  figure:hover .line{
    -webkit-transform: translate(0,0);
    -moz-transform: translate(0,0);
    transform: translate(0,0);
    -moz-transform: scale(0.9999);
    -webkit-transform: scale(0.9999);
    transform: scale(0.9999);
  }
</style>