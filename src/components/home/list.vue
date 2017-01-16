<template>
  <div id="list">
    <el-row :gutter="20">
      <el-col :span="8" v-for="item in list">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.src" class="image">
          <div style="padding: 14px;">
            <span>{{item.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
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
            title: '风景宜'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1f8rUGAcUxxAAgWqhdLNEc998.png',
            title: '风景宜'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1hSSHaAGRskAAchJrFFufw38.jpeg',
            title: '风景宜'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgBZ1h3RNuAZBjgAAYAmFj5raI74.jpeg',
            title: '风景宜'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgBs1hC3LyADV48ABljqKlwjnM30.jpeg',
            title: '风景宜'
          },
          {
            src: 'http://ojnuwcfws.bkt.clouddn.com/wKgB6lRW-YmAJPaZAADmGcPaItw26.jpeg',
            title: '风景宜'
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
    margin-bottom: 20px;
    margin: 0 20px;
  }
  .el-col {
    border-radius: 4px;
    margin-top:4.167rem;
    opacity: 1;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  .image{
    width: 100%;
    height: 200px;
  }
  .image:hover{
    opacity: .8;
    transition: all .5s ease;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(1.1);
  }
</style>