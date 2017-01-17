<template>
  <div id="carousel">
    <!--carousel-->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-carousel :interval="4000" type="card" height="30rem">
          <el-carousel-item v-for="item in pics">
            <h3>{{item.title}}</h3>
            <el-button type="primary">{{item.lead}}</el-button>
            <img :src="item.url" alt="mypicture" width="100%" height="100%" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // import img1 from '../../assets/bc1(1).jpeg'
  // import img2 from '../../assets/bc1(2).jpeg'
  // import img3 from '../../assets/bc1(3).jpeg'
  export default {
    data() {
      return {
        pics: [
          {
            title: 1,
            // url: require('../../assets/bc1(1).jpeg')
            url: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1aJXTCAQNwPAA7KEL2-Sk430%20%281%29.jpeg',
            lead: '跟我走'
          },
          {
            title: 2,
            url: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1Zvpk-AHpesAA_e8Hiz31Q92.jpeg',
            lead: '跟我走'
          },
          {
            title: 3,
            url: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1fvDHOABdeeAA0LbpCeePY41.jpeg',
            lead: '跟我走'
          },
          {
            title: 3,
            url: 'http://ojnuwcfws.bkt.clouddn.com/bc1%281%29.jpeg',
            lead: '跟我走'
          },
        ]
      }
    }
  }
</script>
<style>
.carimg{
  display: inline;
}
.el-carousel__item h3 {
  position: absolute;

  }
  .el-carousel__item{
    /*position: relative;*/
  }
  .el-button{
    position: absolute;;
    /*color:#fff;*/
    top:50%;
    left:50%;
    border-radius: 0.417rem;
    -webkit-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%);
  }
  /*.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }*/
  #carousel .el-carousel__indicators--outside button {
    background-color: #ff9d00;
    opacity: .24;
  }
  #carousel .el-carousel__indicator.is-active button{
    opacity:1;
  }
</style>