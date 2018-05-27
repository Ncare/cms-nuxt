<template>
  <div class="about">
    <div class="title">
      <div class="name">Me</div>
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
    <div class="info">
      <div class="movie">
        <p>You know how everyone's saying seize the moment? I don't know, I'm kind of thinking, it's the other way around, you know, like the moment seizes us. </p>
        <div class="movie-name">少年时代</div>
      </div>
    </div>
    <div class="title">
      <div class="name">Life</div>
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

    .movie {
      padding: 1rem 0;
      width: 80%;
      margin: 0 auto;

      p {
        line-height: 1.5rem;
        text-indent: 2em;
        color: @lightblack;
        text-align: left;
        text-align: justify;
      }

      .movie-name {
        text-align: right;
        color: @lightblack;
        margin: 1rem;
        font-size: @font-size-small;
        font-weight: 700;
      }
    }
  }
}
</style>
