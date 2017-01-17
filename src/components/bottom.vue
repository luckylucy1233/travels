<template>
  <div class="lrt-wrap">
    <div class="bottom-hr"></div>
    <div class="bottom">
      <h3 class="bottom-title"><b>友情链接</b></h3>
      <ul class="bottom-hrB">
        <li class="bottom-li mr-20" v-for="(item,key) in imgs" :class="{'mr-20':(key+1)%7 !=0}">
          <img class="bottom-img" :src=item.src alt="图片正在加载" />
        </li>
      </ul>
      <div>
        <div class="bottom-dl">
          <dl>
            <dt>帮助中心</dt>
            <dd v-for="item in helpCenter" class="bottom-dd">
              <a class="bottom-dda" href="">{{item.centent}}</a>
            </dd>
          </dl>
        </div>
        <div class="bottom-dl">
          <dl>
            <dt>当地服务</dt>
            <dd v-for="item in localSeverice" class="bottom-dd">
              <a class="bottom-dda" href="">{{item.centent}}</a>
            </dd>
          </dl>
        </div>
        <div class="bottom-dl">
          <dl>
            <dt>吃喝玩乐</dt>
            <dd v-for="item in beerAndSkittles" class="bottom-dd">
              <a class="bottom-dda" href="">{{item.centent}}</a>
            </dd>
          </dl>
        </div>
        <div class="bottom-dl">
          <dl>
            <dt>关于我们</dt>
            <dd v-for="item in aboutUs" class="bottom-dd">
              <a class="bottom-dda" href="">{{item.centent}}</a>
            </dd>
          </dl>
        </div>   
      <div class="bottom-hrC">
        <p class="bottom-p text-center">毕业设计</p>
      </div>
    </div>
  </div>
</template>
<script>
  // import img1 from '../assets/bottom1.jpg';
  // import img2 from '../assets/bottom2.jpg';
  // import img3 from '../assets/bottom3.jpg';
  // import img4 from '../assets/bottom4.jpg';
  // import img5 from '../assets/bottom5.jpg';
  // import img6 from '../assets/bottom6.jpg';
  // import img7 from '../assets/bottom7.jpg';
  // import img8 from '../assets/bottom8.jpg';
  // import img9 from '../assets/bottom9.jpg';
  // import img10 from '../assets/bottom10.jpg';
  // import img11 from '../assets/bottom11.jpg';
  // import img12 from '../assets/bottom12.jpg';
  // import img13 from '../assets/bottom13.jpg';
  // import img14 from '../assets/bottom14.jpg';
  export default {
    data() {
      return {
        imgs: [
          { src: require('../assets/bottom1.jpg') },
          { src: require('../assets/bottom2.jpg') },
          { src: require('../assets/bottom3.jpg') },
          { src: require('../assets/bottom4.jpg') },
          { src: require('../assets/bottom5.jpg') },
          { src: require('../assets/bottom6.jpg') },
          { src: require('../assets/bottom7.jpg') },
          { src: require('../assets/bottom8.jpg') },
          { src: require('../assets/bottom9.jpg') },
          { src: require('../assets/bottom10.jpg') },
          { src: require('../assets/bottom11.jpg') },
          { src: require('../assets/bottom12.jpg') },
          { src: require('../assets/bottom13.jpg') },
          { src: require('../assets/bottom14.jpg') },
        ],
        helpCenter: [
          { href: '', centent: '如何使用' },
          { href: '', centent: '隐私政策' },
          { href: '', centent: '退款说明' },
          { href: '', centent: '成为导游' },
          { href: '', centent: '在线客服' },
        ],
        localSeverice: [
          { href: '', centent: '当地旅行' },
          { href: '', centent: '精品路线' },
          { href: '', centent: '机场接送' },
          { href: '', centent: '包车畅游' },
          { href: '', centent: '出行必备' },
        ],
        beerAndSkittles: [
          { href: '', centent: '住宿推荐' },
          { href: '', centent: '吃货必备' },
          { href: '', centent: '玩乐体验' },
          { href: '', centent: '购物优惠' }
        ],
        aboutUs: [
          { href: '', centent: '了解我们' },
          { href: '', centent: '联系我们' },
          { href: '', centent: '招募合作' },
          { href: '', centent: '加入我们' }
        ]
      }
    }
  }
</script>
<style scoped>
  .lrt-wrap{
    width:100%;
    background-color:#fff;
    padding-bottom: 60px;
  }
  .bottom {
    width: 73.1428571rem;
    position: relative;
    margin: 0 auto;
  }
  .bottom-title {
    margin: 0 0 1.42857143rem 0;
  }
  .bottom-li {
    list-style-type: none;
    /*margin-bottom: 0.85714286rem;*/
    border-bottom: 1px #898989;
    display: inline-block;
  }
  .bottom-p{
    font-size: 12px;
  }
  .bottom-hrB{
    border-bottom: 1px solid #aaa;
    margin-bottom: 2.57142857rem;
  }
  .bottom-hr{
    min-width:73.1428571rem;
    clear: both;
    border-top: 1px solid #aaa;
    border-bottom: 7px solid #eee;
    margin-top: 8.57142857rem;
    /*margin-bottom: 2.85714286rem;*/
  }
  .bottom-img{
    width: 8.57142857rem;
    border:1px solid #ddd;
    margin-bottom: 1.71428571rem;
  }
  .mr-20{
    margin-right: 1.72428571rem;
  }
  
  .bottom-dd{
    margin-top: 0.71428571rem;
    margin-left: 0;
  }
  .bottom-dda{
    color: #999;
  }
  .hrB{
    border: 1px solid #999;
    width: 73.1428571rem;
  }
  .bottom-dl{
    width: 10.2142857rem;
    width: 11.5rem;
    float: left;
    margin-bottom: 2.57142857rem;
  }
  .bottom-dlr{
    width: 27.0857143rem;
    padding-top:2px;
    float: left;
    margin-bottom: 2.57142857rem;
  }
  .bottom-hrC{
    clear:both;
    border-top: 1px solid #aaa;
  }
  .bottom-qrcode{
    float:right;
    width:9.28571429rem ;
    
  }
  .bottom-icon{
    margin-left:1.18571429rem;
  }
</style>