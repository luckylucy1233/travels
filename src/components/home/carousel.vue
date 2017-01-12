"<template>
  <div id="carousel">
    <div v-for="(item,index) in pics" class="carimg">
      <img :src="item" width="33.33%" height="200" alt="item.alt"/>
    </div>
    <!--<img :src="item.src" width="200" height="200" alt="item.alt" />-->
    <a  id="pre" @click="pre()">pre</a>
    <a  id="next" @click='next()'>next</a>
  </div>
</template>

<script>
  // import img1 from '../../assets/bc1(1).jpeg'
  // import img2 from '../../assets/bc1(2).jpeg'
  // import img3 from '../../assets/bc1(3).jpeg'
  export default {
    data() {
      return {
        // pics: [
        // { src: require('../../assets/logo.png'), alt: 1 }, 
        // { src: require('../../assets/bc1(1).jpeg'), alt: 2 },
        // { src: require(  '../../assets/bc1(1).jpeg'), alt: 3 }
        // ]
        // index:0,
        pics: [
        require('../../assets/logo.png'), 
        require('../../assets/bc1(1).jpeg'),
        require('../../assets/bc1(2).jpeg')
        ]
      }
    },
    methods: {
      pre: function () {
        let myindex = 0
        if (myindex == 0) {
          myindex = this.pics.index
        }
        myindex--
        this.img = this.pics[myindex]
        return false
      },
      next: function () {
        let myindex = 0
        myindex ++
        if (myindex == this.pics.length) {
          myindex = 0;
        }
        this.img =this.pics[myindex]
        return false
      }
    }
  }
</script>
<style scoped>
.carimg{
  display: inline;
}
</style>