<template>
  <div>
    <headerNav></headerNav>
    <div class="home-wapper default-continer">
      <div class="container">
        <!-- 左侧栏 -->
        <div class="left-side-wapper">
          <!-- 快捷导航 -->
          <!-- <div class="league-panel">
            <div class="league-panel-title">
              <p class="line"></p>快捷导航
            </div>
            <div v-for="item in scoreNav.slice(1)" :key="item.id" class="league-panel-item" @click="jump(item.game, item.id)">
              <img :src="item.gameimg" class="tag-icon" />
              <p>{{item.game}} 比分</p>
            </div>
            ,on:{click:function(e){alert(e.date)}}
          </div> -->
          <!-- 左侧广告 -->
          <!-- <div class="left-banner" onclick="hrefClicked('https://500dj1.com',true)">
            <div stype="width: 200px; height: 150px;" class="banner-warpper banner-panel">
              <img src="https://500bf.com/upload/fdf8bde49f611972/756e6ba14c1262d1.jpg" />
            </div>
          </div> -->
          <!-- 左侧赛事导航 -->
          <div v-for="item in gameNav.slice(1)" :key="item.id" class="league-panel">
            <div class="league-panel-title">
              <p class="line"></p>{{item.type}} 赛事
            </div>
            <div v-for="item1 in item.item" :key="item1.id" :title="item1.match" @click="jump(item1.id, item.type, item1.match)" class="league-panel-item">
              <img :src="item1.matchimg" class="tag-icon" />
              <p>{{item1.match}}</p>
            </div>
          </div>
        </div>
        <!-- 主体栏 -->
        <div class="home-container">
          <!-- banner -->
          <div class="banner-panel">
            <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
              <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                <div class="swiper-slide swiper-slide-active">
                  <a><img src="static/images/banner.png" /></a>
                </div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span
                  class="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabindex="0"
                  role="button"
                  aria-label="Go to slide 1"
                >1</span>
              </div>
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
          </div>
          <!-- 二级导航栏 -->
          <div class="match-type-panel-wrapper">
            <indexGameNav></indexGameNav>
            <a class="time-panel" href="/schedule.html">
              <img src="static/images/time_icon.png" class="clock" />
              <p class="date">{{this.date}}</p>
              <img src="static/images/down_right_icon.png" class="next-tag" />
            </a>
          </div>
          <!--进行中的比赛-->
          <indexGaming></indexGaming>
          <!--未开始的比赛-->
          <indexGame></indexGame>
        </div>
        <!-- 右侧栏 -->
        <div class="right-side-warpper">
          <div class="match-panel">
            <div class="match-panel-title">
              <p class="line"></p>
              <p class="title">最新资讯</p>
              <div class="right-panel" onclick="hrefClicked(&quot;/info.html&quot;)">
                <p class="more">查看全部 ></p>
              </div>
            </div>
            <template v-for="(item, index) in newsList">
              <div :key="index" v-if="index < 5" :title="item.title" class="info-panel-item">
                <p class="index">{{index + 1}}</p>
                <a href="" @click="jumpConten(item.id, item.title)">
                  <p class="title" style="max-width:230px">{{item.title}}</p>
                </a>
              </div>
            </template>
          </div>
          <div class="match-panel">
            <div class="match-panel-title">
              <p class="line"></p>
              <p class="title">刚刚结束</p>
              <div class="right-panel" onclick="hrefClicked(&quot;/score.html&quot;)">
                <p class="more">查看全部 ></p>
              </div>
            </div>
            <div v-for="item in finishMatch" :key="item.id" class="match-panel-item">
              <img :src="item.gameimg" class="item-type-icon"/>
              <div class="item-team item-team-home">
                <p class="item-team-name">{{item.team1}}</p>
              </div>
              <p class="item-score">{{item.score}}</p>
              <div class="item-team item-team-away">
                <p class="item-team-name">{{item.team2}}</p>
              </div>
              <p class="item-match-time">{{item.time}}</p>
            </div>
          </div>
          <!-- 右侧广告栏 -->
          <!-- <div class="right-banner" onclick="hrefClicked(&quot;https://500dj1.com&quot;,true)">
            <div stype="width: 270px; height: 150px;" class="banner-warpper">
              <img src="https://500bf.com/upload/72d7b94ae8f4d539/6c51f86b66c585f2.jpg" />
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <footerBottom></footerBottom>
  </div>
</template>
<script>
import indexGameNav from './indexGameNav'
import headerNav from './header'
import footerBottom from './footer'
import indexGame from './indexGame'
import indexGaming from './indexGaming'
import axios from 'axios'
// import const_ from '@const.vue'
// const gameID = 0
export default {
  name: 'app',
  components: {
    headerNav: headerNav,
    footerBottom: footerBottom,
    indexGameNav: indexGameNav,
    indexGame: indexGame,
    indexGaming: indexGaming
  },
  data () {
    return {
      // gameID: 0,
      date: '',
      scoreNav: [], // 左侧快速导航
      gameNav: [], // 左侧赛季导航
      finishMatch: [], // 右侧结束赛事
      newsList: [] // 右侧最新资讯
    }
  },
  mounted () {
    axios.get('/NowDate').then(response => {
      this.date = response.data[0]
      // console.log(this.date)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/FastNavigation').then(response => {
      this.scoreNav = response.data
      // console.log(this.scoreNav)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/GameNavigation').then(response => {
      this.gameNav = response.data
      // console.log(this.gameNav)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/JustOver').then(response => {
      this.finishMatch = response.data
      // console.log(this.finishMatch)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointInformation/0').then(response => {
      this.newsList = response.data.data
      // console.log(this.newsList)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  },
  methods: {
    jump (id, type, name) {
      this.$router.push({
        path: '/league.html',
        query: {
          gameID: id,
          type: type,
          name: name
        }
      })
    },
    jumpConten (id, type) {
      this.$router.push({
        path: '/info_detail.html',
        query: {
          infoID: id,
          type: type
        }
      })
    }
  }
}
</script>
<style scoped>
@import "../assets/css/index.css";
@import "../assets/css/index_match.css";
</style>
