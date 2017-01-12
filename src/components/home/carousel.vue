<template>
  <div id="carousel">
    <!--carousel-->
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in pics">
        <h3>{{item.title}}</h3>
        <el-button type="primary">{{item.lead}}</el-button>
        <img :src="item.url" alt="mypicture" />
      </el-carousel-item>
      <!---->
    </el-carousel>
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
            url: 'http://ojnuwcfws.bkt.clouddn.com/bc1%281%29.jpeg',
            lead: '跟我走'
          },
          {
            title: 2,
            url: require('../../assets/bc1(2).jpeg'),
            lead: '跟我走'
          },
          {
            title: 3,
            url: require('../../assets/bc1(3).jpeg'),
            lead: '跟我走'
          },
        ]
      }
    }
  }
</script>
<style scoped>
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
  border-radius: 5px;
  -webkit-transform:？(-50%,-50%);
  -moz-transform:？(-50%,-50%);
  transform:translate(-50%,-50%);
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>