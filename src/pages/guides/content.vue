<template>
  <div id="content">
    <div id="box">
      <h3>{{lists.title}}</h3>
      <p>{{lists.subtitle}}</p>
    </div>
    <div>
      <p v-html='lists.content' class="essay"></p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lists: []
      }
    },
    methods: {
      getLists() {
        fetch('/api/content')
          .then(resp => resp.json())
          .then(json => {
            this.lists = json[this.$route.query.id]
          }).catch(function (error) {
            console.log(' fetch data faild', error)
          })
      }
    },
    mounted() {
      this.getLists()
    }
  }

</script>

<style scoped>
  #content {
    width: 80%;
    margin: 50px auto 0 auto;
    text-align: center;
  }
  
  .essay {
    text-indent: 30px;
  }

</style>
