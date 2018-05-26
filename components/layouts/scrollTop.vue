<template>
  <transition name="fade" >
    <div class="scroll" :class="{ mobile: mobileLayout }">
      <a class="scroll-btn" @click="scrollTop" v-if="showScroll">
        <i class="iconfont icon-fold"></i>
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'scrollTop',

  data () {
    return {
      showScroll: false
    }
  },

  mounted () {
    function getWindowHeight () {
      return window.innerHeight
    }

    function getScrollTop () {
      let scrollTop = 0
      let bodyScrollTop = 0
      let documentScrollTop = 0

      if (document.body) {
        bodyScrollTop = document.body.scrollTop
      }

      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
      }

      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
      return scrollTop
    }

    window.addEventListener('scroll', () => {
      if (getScrollTop() * 2 > getWindowHeight() ) {
        this.showScroll = true
      } else {
        this.showScroll = false
      }
    })
  },

  computed: {
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    }
  },

  methods: {
    scrollTop () {
      let timer = null
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn() {
        let top = document.body.scrollTop || document.documentElement.scrollTop
        if (top > 0) {
          document.body.scrollTop = document.documentElement.scrollTop = top - 150
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
        }
      })
    }
  }
}
</script>

<style lang="less">
.scroll {
  position: fixed;
  bottom: 5rem;
  right: 0;

  &-btn {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.14);
    color: #5ab95c;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }

  &.mobile {
    bottom: 2.5rem;
    right: 1rem;

    .scroll-btn {
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
    }
  }
}
</style>
