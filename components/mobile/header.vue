<template>
  <div class="mobile-head">
    <div class="search-box" :class="{ 'active': open }">
      <input v-model="keyword" @keyup.enter.stop.prevent="searchKeyword" placeholder="keyword">
      <a href="javascript:;" @click.stop.prevent="closeSearch">
        <i class="iconfont icon-close"></i>
      </a>     
    </div>
    <nav>
      <div>
        <!-- clickoutside 阻止该事件发生 --> 
        <a href="javascript:;" @click.stop.prevent="toggleSidebar(!mobileSidebar)"><i class="iconfont icon-menu"></i></a>
      </div>
      <div class="logo">
        <nuxt-link to="/"><img src="~static/logo.svg"></nuxt-link>
      </div>
      <div class="search">
        <a href="javascript:;" @click.stop.prevent="openSearch"><i class="iconfont icon-search"></i></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'mobile-head',

  data () {
    return {
      open: false,
      keyword: ''
    }
  },

  computed: {
    mobileSidebar () {
      return this.$store.state.options.mobileSidebar
    }
  },

  methods: {
    toggleSidebar (state) {
      this.$store.commit('options/SET_MOBILE_SIDEBAR', state)
    },

    searchKeyword () {
    },

    closeSearch () {
      this.open = false
    },

    openSearch () {
      this.open = true
    }
  }
}
</script>

<style lang="less">
.mobile-head {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 1rem;
  height: 3rem;
  line-height: 3rem;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0,0,0,.05);

  .search-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: white;
    transform: translateY(-100%);
    transition: all .3s ease-in-out;

    input {
      line-height: 2rem;
      height: 2rem;
      border: none;
      outline: none;
      font-size: @font-size-small;
    }

    a {
      text-decoration: none;
      color: @disabled;
    }

    &.active {
      transform: translateY(0);
      transition: all .3s ease-in-out;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: @disabled;
    }

    .logo {
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;

        img {
          height: 2rem;
          width: 2rem;
        }
      }
    }
  }
}
</style>
