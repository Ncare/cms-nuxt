<template>
  <div class="code">
    <div class="article">
      <article-view :articleList="list" :hasMoreArt="hasMoreArt"></article-view>
    </div>
  </div>
</template>

<script>
import articleView from '~/components/common/article'

export default {
  name: 'codeView',

  data () {
    return {
      hasMoreArt: false,
      list: [
        {
          _id: '231234234234123123',
          title: '处理边界情况',
          create_at: '2017.12.20',
          descript: '这里记录的都是和处理边界情况有关的功能，即一些需要对 Vue 的规则做一些小调整的特殊情况。不过注意这些功能都是有劣势或危险的场景的。我们会在每个案例中注明，所以当你使用每个功能的时候请稍加留意。',
          meta: {
            views: '10',
            comments: '1',
            likes: '0'
          }
        },
        {
          _id: '3424513187293412',
          title: '数据结构与算法',
          create_at: '2017.12.20',
          descript: '时间频度： 一个算法执行所耗费的时间，从理论上是不能算出来的，必须上机运行测试才知道。一个算法花费的时间与算法中语句的执行次数成正比例。',
          meta: {
            views: '12',
            comments: '5',
            likes: '0'
          }
        },
        {
          _id: '1321341243124123124',
          title: '设计模式在 TypeScript 中的应用 - 责任链模式',
          create_at: '2017.12.20',
          descript: '根据控件类型自动选取正确的方法来更新元素。尽管有些神奇, 时间频度： 一个算法执行所耗费的时间，从理论上是不能算出来的，必须上机运行测试才知道。一个算法花费的时间与算法中语句的执行次数成正比例。',
          meta: {
            views: '12',
            comments: '5',
            likes: '6'
          }
        },
        {
          _id: '31321341243124123124',
          title: '表单输入绑定',
          create_at: '2017.12.20',
          descript: '根据控件类型自动选取正确的方法来更新元素。尽管有些神奇, 时间频度： 一个算法执行所耗费的时间，从理论上是不能算出来的，必须上机运行测试才知道。一个算法花费的时间与算法中语句的执行次数成正比例。',
          meta: {
            views: '12',
            comments: '5',
            likes: '6'
          }
        },
        {
          _id: '1321342243124123124',
          title: '表单输入绑定',
          create_at: '2017.12.20',
          descript: '根据控件类型自动选取正确的方法来更新元素。尽管有些神奇, 时间频度： 一个算法执行所耗费的时间，从理论上是不能算出来的，必须上机运行测试才知道。一个算法花费的时间与算法中语句的执行次数成正比例。',
          meta: {
            views: '12',
            comments: '5',
            likes: '6'
          }
        }
      ]
    }
  },

  components: {
    articleView
  }
}
</script>

<style lang="less">

</style>
