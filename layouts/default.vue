<template>
  <div class="app">
    <div class="app-aside" v-if="mobileLayout">
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
    background-color: white;
  }
}
</style>
