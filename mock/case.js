/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */
var Mock = require('mockjs')
// var Random = Mock.Random

module.exports = {
  api: '/api/case',
  response: function (req, res) {
    res.send([
      {
        title: '中国',
        number: 'first',
        name: 'guides',
        // name2: '张家界',
        // name3: '三亚',
        RouterName: '/guides',

      }, {
        title: '港澳台',
        number: 'second',
        name: 'hmt',
        // name2: '澳门',
        // name3: '台北',
        RouterName: '/guides/hmt'
      }, {
        title: '日韩',
        number: 'three',
        name: 'japanK',
        // name2: '济州岛',
        // name3: '首尔',
        RouterName: '/guides/japanK'
      }, {
        title: '东南亚',
        number: 'four',
        name: 'southAsia',
        // name2: '马来西亚',
        // name3: '新加坡',
        RouterName: '/guides/southAsia'
      }, {
        title: '欧美',
        number: 'five',
        name: 'eurA',
        // name2: '普罗旺斯',
        // name3: '夏威夷',
        RouterName: '/guides/eurA'
      }, {
        title: '澳非',
        number: 'six',
        name: 'ausAfri',
        // name2: '新西兰',
        // name3: '埃及',
        RouterName: '/guides/ausAfri'
      }
    ]);
  }
}