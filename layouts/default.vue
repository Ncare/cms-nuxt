<template>
  <div class="app">
    <div class="app-aside" v-if="mobileLayout" :class="{ open: mobileSidebar }" v-click-outside="hideSide">
      <mobile-side></mobile-side>
    </div>
    <div class="app-main" :class="{ open: mobileSidebar }">
      <transition name="fade">
        <mobile-head v-if="mobileLayout"></mobile-head>
        <my-header v-else></my-header>
      </transition>
      <nuxt/>
    </div>
    
  </div>
</template>

<script>
import mobileSide from '~/components/mobile/aside'
import mobileHead from '~/components/mobile/header'

import myHeader from '~/components/layouts/header'

export default {
  head () {
    console.log(this.mobileLayout)
    return !this.mobileLayout ? {} : {
      bodyAttrs: {
        class: 'mobile'
      }
    }
  },

  components: {
    mobileSide,
    mobileHead,
    myHeader
  },

  computed: {
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    },

    mobileSidebar () {
      return this.$store.state.options.mobileSidebar
    }
  },

  methods: {
    hideSide () {
      this.$store.commit('options/SET_MOBILE_SIDEBAR', false)
    }
  }
}
</script>

<style lang="less" scoped>
.app {

  &-aside {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 60%;
    z-index: 999;
    background-color: white;
    transform: translateX(-100%);
    transition: all .3s ease-in-out;
    box-shadow: 0 1px 2px rgba(0,0,0,.05);

    .mobile-aside {
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    &.open {
      transform: translateX(0);
      
      .mobile-aside {
        opacity: 1;
      }
    }
  }

  &-main {

    &.open {
      transform: translateX(60%);
      transition: all .3s ease-in-out;
    }
  }
}
</style>
