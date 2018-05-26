<template>
  <div class="footer">
    <div class="footer-content">
      <nuxt-link to="/about">关于我</nuxt-link>
      <span class="seq"></span>
      <nuxt-link to="/archive">归档</nuxt-link>
      <span class="seq"></span>
      <nuxt-link to="/music">音乐</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myfooter'
}
</script>

<style lang="less">
.footer {
  padding: 1rem 0;
  border-top: 1px solid #eee;
  margin-top: 1rem;

  &-content {
    margin: 0 auto;
    text-align: center;

    a {
      text-decoration: none;
      color: @disabled;
      font-size: @font-size-small;
      line-height: 1.5rem;
    }
  }
}
</style>


