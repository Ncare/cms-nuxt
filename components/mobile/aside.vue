<template>
  <div class="mobile-aside">
    <div class="avator">
      <img src="~static/Face.png">
    </div>
    <nav>
      <li v-for="(item, index) in nav" :key="index">
        <nuxt-link :to="item.path" exact>
          <span>
            {{ item.name }}
          </span>
        </nuxt-link>
      </li>
    </nav>

    <div class="mobile-aside-footer">
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
  data () {
    return {
      nav : [
        { path: '/', name: '开发' },
        { path: '/think', name: '思考' },
        { path: '/travel', name: '旅行' },
      ]
    }
  }
}
</script>

<style lang="less">
.mobile-aside {
  height: 100%;
  position: relative;

  .avator {
    text-align: center;
    padding: 3rem 1rem 1rem 1rem;

    img {
      width: 6rem;
      border-radius: 50%;
    }
  }

  nav {
    list-style: none;
    margin: 0;
    padding: 1rem;

    li {
      text-align: center;
      padding: .5rem;

      a {
        text-decoration: none;
        color: @disabled;
        display: block;
        padding: .5rem 0;

        &.nuxt-link-active {
          color: black;
        }
      }
    }
  }

  &-footer {
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;

    a {
      text-decoration: none;
      color: @disabled;
      margin-right: 4px;
      font-size: @font-size-small;
    }
  }
}
</style>

