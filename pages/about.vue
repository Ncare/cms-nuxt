<template>
  <div class="about">
    <div class="title">
      <div class="name">关于我</div>
      <div class="line"></div>
    </div>
    <div class="info">
      <img src="~static/Face.png">
      <div class="detail">
        <p><i class="iconfont icon-touxiang"></i><span>Ncare</span></p>
        <p>
          <a><i class="iconfont icon-weibo"></i></a>
          <a><i class="iconfont icon-weixin"></i></a>
          <a><i class="iconfont icon-zhihu"></i></a>
          <a><i class="iconfont icon-github"></i></a>
          <a><i class="iconfont icon-music"></i></a>
          <a><i class="iconfont icon-twitter"></i></a>
        </p>
      </div>
    </div>
    <div class="title">
      <div class="name">More</div>
      <div class="line"></div>
    </div>
  </div>
</template>


<style lang="less">
.about {
  padding: 1rem 0;

  .title {
    position: relative;
    display: flex;
    align-items: center;

    .name {
      z-index: 99;
      background-color: white;
      padding-right: 1rem;
      font-size: @font-size-small;
    }

    .line {
      height: 1px;
      background-color: #eee;
      left: 0;
      right: 0;
      position: absolute;
    }
  }

  .info {
    text-align: center;

    img {
      width: 10rem;
      height: 10rem;
      margin-top: 1rem;
    }

    .detail {
      margin-top: 1rem;

      p {
        padding: .5rem 0;

        span {
          margin-left: .5rem;
        }

        a {
          padding: 0 .5rem;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
