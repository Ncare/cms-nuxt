<template>
  <div class="comment-box">
    <div class="num">
      <div class="total"><span>{{ commentList.length }} 条评论</span></div>
      <div class="line"></div>
    </div>
    <div class="post-box">
      <div class="user" v-if="!mobileLayout">
        <div class="gravator">
          <img src="~static/Face.png">
        </div>
      </div>
      <div class="editor">
        <div class="editor-user" :class="{ 'mobile': mobileLayout }">
          <div class="name"><input placeholder="昵称(必填)" ></div>
          <div class="email"><input placeholder="邮箱(非必须)"></div>
          <div class="web"><input placeholder="网站(非必填)"></div>
        </div>
        <div class="editor-box">
          <div ref="markdown" contenteditable="true" class="markdown-box" placeholder="输入你的评论..."></div>
          <div class="editor-tools">
            <div class="tool">
              <a href="" class="emoji" @click.stop.prevent="emojiShow = !emojiShow">
                <i class="iconfont icon-emoji" ></i>
                <transition name="fade">
                  <div class="emoji-box " v-show="emojiShow">
                    <ul class="clearfix">
                      <li class="item" @click="insertEmoji('😃')">😃</li>
                      <li class="item" @click="insertEmoji('😂')">😂</li>
                      <li class="item" @click="insertEmoji('😅')">😅</li>
                      <li class="item" @click="insertEmoji('😉')">😉</li>
                      <li class="item" @click="insertEmoji('😌')">😌</li>
                      <li class="item" @click="insertEmoji('😔')">😔</li>
                      <li class="item" @click="insertEmoji('😓')">😓</li>
                      <li class="item" @click="insertEmoji('😘')">😘</li>
                      <li class="item" @click="insertEmoji('😡')">😡</li>
                      <li class="item" @click="insertEmoji('😭')">😭</li>
                      <li class="item" @click="insertEmoji('😱')">😱</li>
                      <li class="item" @click="insertEmoji('😳')">😳</li>
                      <li class="item" @click="insertEmoji('😵')">😵</li>
                      <li class="item" @click="insertEmoji('🌚')">🌚</li>
                      <li class="item" @click="insertEmoji('👍')">👍</li>
                      <li class="item" @click="insertEmoji('👎')">👎</li>
                      <li class="item" @click="insertEmoji('💪')">💪</li>
                      <li class="item" @click="insertEmoji('🌹')">🌹</li>
                      <li class="item" @click="insertEmoji('💊')">💊</li>
                      <li class="item" @click="insertEmoji('🇨🇳')">🇨🇳</li>
                      <li class="item" @click="insertEmoji('🇺🇸')">🇺🇸</li>
                    </ul>
                  </div>
                </transition>
              </a>
              <a href="" @click.stop.prevent="insertContent('img')"><i class="iconfont icon-img"></i></a>
              <a href="" @click.stop.prevent="insertContent('link')"><i class="iconfont icon-link"></i></a>
              <a href="" @click.stop.prevent="insertContent('code')"><i class="iconfont icon-code"></i></a>
            </div>
            <div class="submit">
              <button>提交 <i class="iconfont icon-submit"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-list">
      <ul >
        <li v-for="comment in commentList" :key="comment.name">
          <div>
            <div class="cm-avator">
              <img src="~static/Face.png">
            </div>
            <div class="cm-body">
              <div class="cm-body-info">
                <div class="name">{{ comment.name }}</div>
                <div class="time">{{ comment.time }}</div>
              </div>
              <div class="cm-body-con">{{ comment.content }}</div>
              <div class="cm-body-tool">
                <a class="like">
                  <i class="iconfont icon-zan"></i>
                  <span> 顶</span>
                  <span> ({{ comment.like }})</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',

  data () {
    return {
      commentList: [
        {
          name: 'xNcare',
          content: '有什么跟别人不一样',
          time: '2017.12.20 19:20',
          like: 2
        },
        {
          name: 'xiaomi',
          content: 'the methods is vary good !',
          time: '2017.11.12 08:11',
          like: 0
        }
      ],
      emojiShow: false
    }
  },

  computed: {
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    }
  },

  methods: {
    updateCommentContent ({ start = '', end = '' }) {
      if (!start && !end) return false;
      const selectedText = (window.getSelection || window.getSelection)().toString();
      const currentText = this.$refs.markdown.innerText
      if (!!selectedText) {
        const newText = currentText.replace(selectedText, start + selectedText + end)
        this.$refs.markdown.innerText = newText
      } else {
        this.$refs.markdown.innerText = this.$refs.markdown.innerText += (start + end)
        this.$refs.markdown.scrollTop = this.$refs.markdown.scrollHeight
      }
    },

    insertEmoji (emoji) {
      this.updateCommentContent({ end: emoji })
    },

    insertContent (type) {
      const dict = {
        img: {
          start: `![`,
          end: `]()`
        },
        link: {
          start: `[`,
          end: ']()'
        },
        code: {
          start: '\n```javascript\n',
          end: '\n```'
        }
      }

      this.updateCommentContent(dict[type])
    }
  }
}
</script>

<style lang="less">
.comment-box {
  font-size: @font-size-small;

  .num {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    
    .total {
      background-color: white;
      z-index: 99;
      padding-right: 1rem;
    }

    .line {
      position: absolute;
      height: 1px;
      left: 0;
      right: 0;
      background-color: #eee;
    }
  }

  .post-box {
    display: flex;

    .user {
      margin-right: 1rem;

      .gravator {
        

        img {
          width: 36px;
          height: 36px;
          border-radius: .2rem;
        }
      }
    }

    .editor {
      width: 100%;

      &-user {
        display: flex;
        justify-content: space-between;
        
        &.mobile {
          flex-direction: column;

          >div {
            margin: .3rem 0;

            input {
              width: 12rem;
              line-height: @font-size-large;
            }
          }
        }

        >div {
          
          input {
            border-radius: 4px;
            border: 1px solid #eee;
            outline: none;
            padding: .2rem;

            &:focus {
              border-color: black;
            }
          }
        }
      }

      &-box {
        margin-top: .8rem;

        .markdown-box {
          min-height: 6rem;
          max-height: 12rem;
          border-radius: 4px;
          border: 1px solid #eee;
          outline: none;
          padding: .5rem;
          font-size: @font-size-small;
          line-height: 1.25rem;
          overflow: scroll;

          &:focus {
            border-color: black;
          }
        }

        .editor-tools {
          display: flex;
          justify-content: space-between;
          margin-top: .5rem;

          .tool {
            
            a {
              text-decoration: none;
              margin-right: .5rem;
              line-height: 1.6rem;
              width: 1.6rem;
              height: 1.6rem;
              text-align: center;
              display: inline-block;

              &.emoji {
                position: relative;
                
                .emoji-box {
                  width: 250px;
                  background-color: white;
                  position: absolute;
                }

                .emoji-box>ul {
                  margin: 0;
                  padding: 0;
                  list-style: none;
                  width: 250px;
                  z-index: 999;
                  
                  li {
                    float: left;;
                    padding: 0 .4rem;
                    cursor: pointer;
                    
                    &:hover {
                      background-color: #eee;
                    }
                  }
                }
              }

              &:hover {
                background-color: #eee;
              }
            }
          }

          .submit {

            button {
              border: 1px solid white;
              border-radius: 4px;
              background-color: white;
              outline: none;
              cursor: pointer;
              padding: .2rem .5rem;
              font-size: @font-size-tiny;

              i {
                font-size: @font-size-tiny;
              }

              &:hover {
                background-color: #eee;
              }
            }
            
          }
        }
      }
    }
  }

  .comment-list {
    margin-top: 1rem;

    >ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        padding: 1rem 0;
      }

      li>div {
        display: flex;

        .cm-avator {
          margin-right: 1rem;

          img {
            width: 36px;
            height: 36px;
            border-radius: .2rem;
          }
        }

        .cm-body {
          width: 100%;

          &-info {
            display: flex;
            justify-content: space-between;
            font-size: @font-size-tiny;

            .name {
              color: @lightblack;
              font-weight: 700;
            }

            .time {
              color: @whiteblack;
            }
          }

          &-con {
            margin: .8rem 0;
            font-size: @font-size-small;
          }

          &-tool {
            font-size: @font-size-tiny;
            color: @disabled;

            .like {
              cursor: pointer;

              i {
                font-size: @font-size-tiny;
              }
            }

            
          }
        }
      }
    }
  }
}
</style>

