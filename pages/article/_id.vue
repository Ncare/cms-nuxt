<template>
  <div class="article" :class="{ 'mobile': mobileLayout }">
    <div class="article-content">
      <p class="title">{{ article.title }}</p>
      <div class="meta">
        <span class="time">{{ article.create_at }} </span>
        <span class="num">字数 {{ article.content.length }}</span>
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

  data () {
    return {
      article: {
        title: '设计模式在 TypeScript 中的应用 - 责任链模式',
        create_at: '2017.12.20',
        content: '欢迎使用 Cmd Markdown 编辑阅读器 ------ 我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人，**Cmd Markdown** 是我们给出的答案 —— 我们为记录思想和分享知识提供更专业的工具。 您可以使用 Cmd Markdown：> * 整理知识，学习笔记> * 发布日记，杂文，所见所想',
        meta: {
          views: '35',
          likes: '11',
          comments: '5'
        },
        tags: ['Vue', 'Javascript']
      }
    }
  },

  computed: {
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    },

    articleContent () {
      return markdown(this.article.content, false, true).html
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

