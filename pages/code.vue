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

  fetch ({store}) {
    return store.dispatch('getArtList', { type: 1 })
  },

  data () {
    return {
      hasMoreArt: false,
    }
  },

  computed: {
    list () {      
      return this.$store.state.article.art.list
    }
  },

  components: {
    articleView
  }
}
</script>

<style lang="less">

</style>
