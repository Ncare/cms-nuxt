<template>
  <div class="archive">
    <div class="title">
      <div class="name">标签</div>
      <div class="line"></div>
    </div>
    <div class="info">
      <div class="tags clearfix">
        <div v-for="tag in tags" :key="tag.name" class="tags-item">
          <span>{{tag.name}}</span>
          <span> ({{tag.count}}) </span>
        </div>
      </div>
    </div>
    <div class="title">
      <div class="name">时间</div>
      <div class="line"></div>
    </div>
    <div class="info">
      <div class="time">
        <div v-for="years in archives" :key="years.year">
          <div class="year">{{ years.year }}</div>
          <div v-for="months in years.months" :key="months.month" class="year-month">
            <div class="month">{{ months.month }}</div>
            <div v-for="article in months.articles" :key="article.month" class="article">
                <div>
                  <span class="art-date">{{ article.date }}</span>
                  <span class="art-title"><a href="">{{ article.title }}</a></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'archive',

  data () {
    return {
      tags: [
        {'name': '数据结构与算法', count: 1},
        {'name': 'Vue', count: 5},
        {'name': '架空世界', count: 10},
        {'name': '前端', count: 2},
        {'name': 'Javascript', count: 8},
        {'name': 'Node', count: 1},
        {'name': '时间怀想', count: 4},
        {'name': 'Nuxt', count: 6},
        {'name': '生活', count: 1},
        {'name': 'Music', count: 2},
      ],
      archives: [
        {
          year: 2018,
          months: [
            {
              month: 'May',
              articles: [
                {
                  title: '数据结构与算法（更新中）',
                  date: '05.20',
                },
                {
                  title: '开放的世界',
                  date: '05.13'
                },
                {
                  title: '技术文档的规范',
                  date: '05.04'
                }
              ]
            },
            {
              month: 'April',
              articles: [
                {
                  title: '数据结构与算法（更新中）',
                  date: '04.21',
                },
                {
                  title: '开放的世界',
                  date: '04.13'
                },
                {
                  title: '技术文档的规范',
                  date: '04.03'
                }
              ]
            },
            
          ]
        },
        {
          year: 2017,
          months: [
            {
              month: 'May',
              articles: [
                {
                  title: '数据结构与算法（更新中）',
                  date: '05.20',
                },
                {
                  title: '开放的世界',
                  date: '05.13'
                },
                {
                  title: '技术文档的规范',
                  date: '05.04'
                }
              ]
            },
            {
              month: 'April',
              articles: [
                {
                  title: '数据结构与算法（更新中）',
                  date: '04.21',
                },
                {
                  title: '开放的世界',
                  date: '04.13'
                },
                {
                  title: '技术文档的规范',
                  date: '04.03'
                }
              ]
            },
            {
              month: 'March',
              articles: [
                {
                  title: '数据结构与算法（更新中）',
                  date: '03.21',
                },
                {
                  title: '开放的世界',
                  date: '03.13'
                },
                {
                  title: '技术文档的规范',
                  date: '03.03'
                }
              ]
            },
            
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
.archive {
  padding: 1rem 0;

  .title {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 1rem;

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
    

    .tags {
      padding: 1rem 2rem;

      .tags-item {
        font-size: @font-size-small;
        float: left;
        margin-top: 1rem;
        margin-right: 1rem;
        color: @lightblack;
      }
    }

    .time {
      text-align: left;
      padding: 1rem 2rem;

      .year {
        font-size: 1.4rem;

        &-month {
          padding: 1rem 2rem;

          .article {
            padding: 1rem 2rem;
            padding-bottom: 0;
            padding-right: 0;

            >div {
              font-size: @font-size-small;
              color: @lightblack;

              span {
                margin-right: .5rem;
                position: relative;

                &.art-title {
                  color: black;

                  a {
                    
                    color: black;
                  }
                }

                &.art-date {

                  &:before {
                    content: '';
                    width: 4px;
                    height: 4px;
                    background-color: @disabled;
                    position: absolute;
                    top: 7px;
                    left: -10px;
                    border-radius: 2px;
                  }
                }
              }
            }
          }
        }
      }

    }
  }
}
</style>

