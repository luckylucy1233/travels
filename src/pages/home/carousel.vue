<template>
  <div id="carousel">
    <!--carousel-->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-carousel :interval="4000" type="card" >
          <el-carousel-item v-for="item in pics">
            <h3>{{item.title}}</h3>
            <!--<el-button type="primary">{{item.lead}}</el-button>-->
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
            url:'https://c3-q.mafengwo.net/s9/M00/80/08/wKgBs1fp1weADbaOAA15PBZKTKE49.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90',
            // lead: '跟我走'
          },
          {
            title: 2,
            url: 'https://c1-q.mafengwo.net/s10/M00/46/BE/wKgBZ1h4Vm2AYDa1ACNzEJyxcYY11.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90',
            // lead: '跟我走'
          },
          {
            title: 3,
            url: 'https://n3-q.mafengwo.net/s10/M00/9B/D3/wKgBZ1iGuuSAdzXIAC97pN3dN2c94.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90',
            // lead: '跟我走'
          },
          {
            title: 3,
            url: 'https://a2-q.mafengwo.net/s10/M00/45/82/wKgBZ1h4Uw2AKbisACjVPMIhrio09.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90',
            // lead: '跟我走'
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