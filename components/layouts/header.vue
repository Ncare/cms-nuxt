<template>
  <div class="header">
    <nav>
      <li v-for="(item, index) in nav" :key="index">
        <nuxt-link :to="item.path" exact>
          <span>
            {{ item.name }}
          </span>
        </nuxt-link>
      </li>
    </nav>
    <div class="logo">
      <nuxt-link to="/">
        <img src="~static/logo.svg">
      </nuxt-link>
    </div>
    <div class="search" :class="{ 'active': open }" v-click-outside="closeSearch">
      <div class="search-box">
        <input v-model="keyword" placeholder="keyword">
        <a @click="open=false">
          <i class="iconfont icon-check"></i>
        </a>
      </div>
      <a @click="open=true">
        <i class="iconfont icon-search"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myheader',

  data () {
    return {
      nav : [
        { path: '/', name: '开发' },
        { path: '/think', name: '思考' },
        { path: '/travel', name: '旅行' },
      ],

      open: false,

      keyword: ''
    }
  },

  methods: {
    closeSearch () {
      this.open = false;
    }
  }
}
</script>

<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  line-height: 3rem;
  padding: 0 2rem;
  box-shadow: 0 1px 2px rgba(0,0,0,.05);

  nav {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      float: left;
      margin-right: 1.5rem;
      width: 2rem;

      a {
        text-decoration: none;
        color: @disabled;
        font-size: @font-size-small;
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .search {
    width: 10.5rem;
    text-align: right;

    &.active {

      .search-box {
        display: block;
      }

      >a {
        display: none;
      }
    }

    &-box {
      display: none;

      input {
        width: 8rem;
        border: none;
        outline: none;
        font-size: @font-size-small;
      }
    }

    >a {
      display: block;
    }
  }
}
</style>
