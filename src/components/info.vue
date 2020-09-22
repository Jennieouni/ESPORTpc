<template>
  <div>
    <headerNav></headerNav>
    <div class="information-warpper default-continer">
      <div class="information-panel">
        <div class="container">
          <div class="type-panel">
            <a v-for="(item, index) in infoNav" :key="index" @click="infoType(index)">
              <div v-bind:class="{activeType:current==index}" class="type-item">
                <p>{{item.game}}</p>
              </div>
            </a>
          </div>
          <div v-if="this.current == 0" class="info-panel">
            <a v-for="item in newsList" :key="item.id" @click="jumpConten(item.id, item.title)" href="">
              <div class="info-item">
                <div class="cover">
                  <img :src="item.thumbnail"/>
                </div>
                <div class="info-item-panel">
                  <p class="title">{{item.title}}</p>
                  <div class="info-item-desc">
                    <p>{{item.gametype}}</p>
                    <p>{{item.time}}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div v-if="this.current == 1" class="info-panel">
            <a v-for="item in dotaNewsList" :key="item.id" @click="jumpConten(item.id, item.title)" href="">
              <div class="info-item">
                <div class="cover">
                  <img :src="item.thumbnail"/>
                </div>
                <div class="info-item-panel">
                  <p class="title">{{item.title}}</p>
                  <div class="info-item-desc">
                    <p>{{item.gametype}}</p>
                    <p>{{item.time}}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div v-if="this.current == 2" class="info-panel">
            <a v-for="item in csNewsList" :key="item.id" @click="jumpConten(item.id, item.title)" href="">
              <div class="info-item">
                <div class="cover">
                  <img :src="item.thumbnail"/>
                </div>
                <div class="info-item-panel">
                  <p class="title">{{item.title}}</p>
                  <div class="info-item-desc">
                    <p>{{item.gametype}}</p>
                    <p>{{item.time}}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div v-if="this.current == 3" class="info-panel">
            <a v-for="item in lolNewsList" :key="item.id" @click="jumpConten(item.id, item.title)" href="">
              <div class="info-item">
                <div class="cover">
                  <img :src="item.thumbnail"/>
                </div>
                <div class="info-item-panel">
                  <p class="title">{{item.title}}</p>
                  <div class="info-item-desc">
                    <p>{{item.gametype}}</p>
                    <p>{{item.time}}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div v-if="this.current == 4" class="info-panel">
            <a v-for="item in kogNewsList" :key="item.id" @click="jumpConten(item.id, item.title)" href="">
              <div class="info-item">
                <div class="cover">
                  <img :src="item.thumbnail"/>
                </div>
                <div class="info-item-panel">
                  <p class="title">{{item.title}}</p>
                  <div class="info-item-desc">
                    <p>{{item.gametype}}</p>
                    <p>{{item.time}}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="right-panel_content">
          <div class="right-side-warpper">
            <!-- 进行中的比赛 -->
            <div class="match-panel">
              <div class="match-panel-title" onclick="hrefClicked(&quot;/index.html&quot;)" >
                <p class="line"></p>
                <p class="title">进行中</p>
                <div class="right-panel">
                  <p class="more">查看全部 ></p>
                </div>
              </div>
              <div v-for="item in matching" :key="item.id" class="match-panel-item">
                <img :src="item.game" class="item-type-icon" />
                <div class="item-team item-team-home">
                  <p class="item-team-name">{{item.team1}}</p>
                </div>
                <p class="item-score">{{item.team1winnum}}-{{item.team2winnum}}</p>
                <div class="item-team item-team-away">
                  <p class="item-team-name">{{item.team2}}</p>
                </div>
                <p class="item-match-time">{{item.time}}</p>
              </div>
            </div>
            <!-- 未开始的比赛 -->
            <div class="match-panel" style="margin-top: 20px">
              <div class="match-panel-title" onclick="hrefClicked(&quot;/index.html&quot;)" >
                <p class="line"></p>
                <p class="title">即将开始</p>
                <div class="right-panel">
                  <p class="more">查看全部 ></p>
                </div>
              </div>
              <div v-for="item in matchNotStart" :key="item.id" class="match-panel-item">
                <img :src="item.gameimg" class="item-type-icon" />
                <div class="item-team item-team-home">
                  <p class="item-team-name">{{item.team1}}</p>
                </div>
                <p class="item-score">0-0</p>
                <div class="item-team item-team-away">
                  <p class="item-team-name">{{item.team2}}</p>
                </div>
                <p class="item-match-time">{{item.time}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerBottom></footerBottom>
  </div>
</template>
<script>
import axios from 'axios'
import headerNav from './header'
import footerBottom from './footer'
export default {
  name: 'app',
  components: {
    headerNav: headerNav,
    footerBottom: footerBottom
  },
  data () {
    return {
      current: 0,
      infoNav: [
        {game: '全部'},
        {game: 'DOTA2'},
        {game: 'CS:GO'},
        {game: '英雄联盟'},
        {game: '王者荣耀'}
      ],
      newsList: [],
      dotaNewsList: [],
      csNewsList: [],
      lolNewsList: [],
      kogNewsList: [],
      matching: [],
      matchNotStart: []
    }
  },
  mounted () {
    axios.get('/AppointInformation/0').then(response => {
      this.newsList = response.data.data
      // console.log(this.newsList)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointInformation/1').then(response => {
      this.dotaNewsList = response.data.data
      // console.log(this.dotaNewsList)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointInformation/2').then(response => {
      this.csNewsList = response.data.data
      // console.log(this.csNewsList)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointInformation/3').then(response => {
      this.lolNewsList = response.data.data
      // console.log(this.lolNewsList)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointInformation/4').then(response => {
      this.kogNewsList = response.data.data
      // console.log(this.kogNewsList)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })

    axios.get('/SidebarIng').then(response => {
      this.matching = response.data
      // console.log(this.matching)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/SidebarSonn').then(response => {
      this.matchNotStart = response.data
      // console.log(this.matchNotStart)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  },
  methods: {
    infoType (index) {
      this.current = index
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
@import "../assets/css/info.css";
</style>
