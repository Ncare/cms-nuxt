<template>
  <div class="article" :class="{ 'mobile': mobileLayout }">
    <div class="article-content">
      <p class="title">{{ article.title }}</p>
      <div class="meta">
        <span class="time">{{ article.create_at }}</span>
        <span class="num">{{ article.content.length }}</span>
        <span class="view">{{ article.meta.views }}</span>
        <span class="like">{{ article.meta.likes }}</span>
        <span class="comments">{{ article.meta.comments }}</span>
      </div>
      <div class="article-thumb">
        <img src="https://static.jkchao.cn/TypeScript.png">
      </div>
      <div class="content" v-html="articleContent"></div>
    </div>
    <div class="info"></div>
    <div class="comment">
      <my-comments></my-comments>
    </div> 
  </div>
</template>

<script>
import myComments from '~/components/common/comments'

export default {
  components: {
    myComments
  },

  data () {
    return {
      article: {}
    }
  }
}
</script>

<style lang="less">

</style>

