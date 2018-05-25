<template>
  <div class="app">
    <div class="app-aside" v-if="mobileLayout" :class="{ open: mobileSidebar }" v-click-outside="hideSide">
      <mobile-side></mobile-side>
    </div>
    <div class="app-main">

    </div>
    <nuxt/>
  </div>
</template>

<script>
import mobileSide from '~/components/mobile/aside'

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
    mobileSide
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

    .mobile-aside {
      opacity: 0;
      transition: all .3s ease-out;
    }

    &.open {
      transform: translateX(0);
      
      .mobile-aside {
        opacity: 1;
      }
    }
  }
}
</style>
