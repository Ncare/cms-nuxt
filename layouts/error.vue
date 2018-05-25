<template>
  <div class="error-page">
    <img src="~static/404.svg" />
    <div class="error">
      <div>
        <div class="error-code">404</div>
      <span>
        抱歉，访问的页面不存在！
      </span>
      <div class="error-reback">
        <nuxt-link to="/" v-if="error.statusCode === 404">返回首页</nuxt-link>
      </div>
      
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  transition: "fade"
}
</script>

<style lang="less">
.error-page {
  display: flex;
  justify-content: center;
  margin-top: 150px;

  .error {
    display: flex;
    align-items: center;
    margin-left: 20px;

    &-code {
      font-size: 72px;
    }

    &-reback {
      margin: 16px 0px;
    }

    a {
      text-decoration: none;
      color: white;
      background-color: #1890ff;
      padding: 6px 12px;
      border-radius: 4px;
    }
  }
}
</style>
