<template>
  <div id="Domestic">
    <ul>
      <li v-for='item in evenslists' class="myli">
        <div id="box">
          <img :src="item.picLink" width="200px" />
          <router-link :to="{name:'content',query:{id:item.contentId}}">
            <h5>{{limit(item.title)}}</h5>
          </router-link>
          <p class="subtitle">{{sublimit(item.subtitle)}}</p>
        </div>
      </li>
    </ul>
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
      getList() {
        fetch('/api/content')
          .then(resp => resp.json())
          .then(json => {
            this.lists = json
            // console.log(json)
          })
          .catch(function (error) {
            console.log('parsing failed', error)
          })
      },
      limit(title) {
        if (title.length > 16) {
          return title.substring(0, 16) + '...'
        } else {
          return title
        }
      },
      sublimit(subtitle) {
        if (subtitle.length > 10) {
          return subtitle.substring(0, 10) + '...'
        } else {
          return subtitle
        }
      }
    },
    computed: {
      evenslists: function () {
        return this.lists.filter(function (item) {
          return item.classify === 'domestic'
        })
      }
    },
    mounted() {
      this.getList()
    }
  }

</script>
<style scoped>
  .subtitle {
    padding-left: 12px;
    font-size: 10px;
    color: #666;
    line-height: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border-left: 1px solid #ff9d00;
  }
  
  .myli {
    display: inline-block;
    width: 50%;
  }

</style>
