<template>
  <div class="article" :class="{ 'mobile': mobileLayout }">
    <div class="article-content">
      <p class="title">{{ article.title }}</p>
      <div class="meta">
        <span class="time">{{ article.create_at }} </span>
        <span class="num">字数 {{ article.descript.length }}</span>
        <span class="view">阅读 {{ article.meta.views }}</span>
        <span class="like">喜欢 {{ article.meta.likes }}</span>
        <span class="comments">评论 {{ article.meta.comments }}</span>
      </div>
      <div class="article-thumb">
        <img src="https://static.jkchao.cn/TypeScript.png" style="width: 100%">
      </div>
      <div class="content" v-html="articleContent"></div>
    </div>
    <div class="info">
      <div class="tag">
        <span><i class="iconfont icon-biaoqian"></i></span>
        <span v-for="tag in article.tags" :key="tag">
          <i>{{ tag }}</i>
        </span>
      </div>
      <div class="like-num">
        <span><i class="iconfont icon-xin"></i></span>
        <span>{{ article.meta.likes }}</span>
      </div>
    </div>
    <div class="comment">
      <my-comments></my-comments>
    </div> 
  </div>
</template>

<script>
import markdown from '~/plugins/marked'
import myComments from '~/components/common/comments'

export default {
  components: {
    myComments
  },

  fetch ({ store, params}) {
    return store.dispatch('getArt', params)
  },

  data () {
    return {
    }
  },

  computed: {
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    },

    articleContent () {
      return markdown(this.article.descript, false, true).html
    },

    article () {
      return this.$store.state.article.details
    }
  }
}
</script>

<style lang="less">
.article {

  &-content {

    .title {
      font-size: @font-size-large;
      font-weight: 700;
    }

    .meta {
      margin-top: .3rem;
      font-size: @font-size-tiny;

      span {
        margin-right: .4rem;
        color: #969699;
      }
    }

    .article-thumb {
      margin: 1.2rem 0;
    }

    .content {
      text-indent: 2em;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #24292e;
    }
  }

  .info {
    padding: 1.3rem 0;
    display: flex;
    justify-content: space-between;
    font-size: @font-size-small;

    span {

      i {
        margin-right: .4rem;
      }
    }
  }
}
</style>

