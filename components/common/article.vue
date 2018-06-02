<template>
  <transition-group tag="div" name="fade" class="article-box" :class="{ 'mobile': mobileLayout }">
    <div class="article-item" v-for="item in articleList" :key="item._id" >
      <div class="detail">
        <p class="title"><nuxt-link :to="`/article/${item._id}`">{{ item.title }}</nuxt-link></p>
        <nuxt-link :to="`/article/${item._id}`" v-if="mobileLayout">
          <img src="https://static.jkchao.cn/TypeScript.png" width="100%">
        </nuxt-link>
        <p class="abstract">{{ item.descript | text(200) }}</p>
        <div class="meta">
          <span class="time">
            {{ item.create_at }}
          </span>
          <span class="seq"></span>
          <span class="read">
            {{ item.meta.views }} 次阅读
          </span>
          <span class="seq"></span>
          <span class="comments">
            {{ item.meta.comments }} 次评论
          </span>
          <span class="seq"></span>
          <span class="like">
            {{ item.meta.likes }} 喜欢
          </span>
        </div>
      </div>
    </div>
    <div class="end" v-if="!hasMoreArt" key="-1">
      <i>end</i>
    </div>
    <div class="load-more" v-if="hasMoreArt" key="-2">
      <a href="javascript:;" @click="emit('loadMore')"><i>More</i></a>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'article-box',

  props: ['articleList', 'hasMoreArt'],

  computed: {
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    }
  }
}
</script>

<style lang="less">
.article-box {

  .article-item {
    padding: 1.5rem 0 1rem;
    border-bottom: 1px solid #eee;

    .title {
      margin-bottom: .5rem;
      font-size: @font-size-large;
      font-weight: 700;

      a {
        text-decoration: none;
        color: black;
      }
    }

    .abstract {
      margin: 1.5rem 0;
      min-height: 3rem;
      color: #586069;
      line-height: 1.5rem;
      font-size: @font-size-small;
    }

    .meta {
      margin-top: 1.5rem;
      font-size: @font-size-tiny;
      color: #969699;
    }

    .line {
      height: 1px;
      width: 6rem;
      background-color: #ccc;
    }
  }

  .end {
    padding: .5rem 0;
    margin-top: 1rem;
  }

  .loadMore {
    padding: .5rem 0;
  }
}
</style>
