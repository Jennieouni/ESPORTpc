<template>
  <div>
    <headerNav></headerNav>
    <div class="schedule-wrapper default-continer">
      <div class="schedule-nav">
        <div class="nav-date">
          <!-- <div class="cal-panel">
            <img src="https://www.500bf.com/static/index/img/cal_icon.png" />
            <p>日历</p>
            <img src="https://www.500bf.com/static/index/img/cal_drop_icon.png" class="drop-btn" />
            <Calendar class="calendar-panel"
              ref="Calendar"
              :MondayStart="true">
            </Calendar>
          </div> -->
          <div class="cale-panel">
            <a v-for="(item, index) in Week" :key="index" class="date-item"
            @click="clickDate(index, item.date2, item.id)"
            v-bind:class="{dateActive:dateCurrent==index || dateCurrent==index}"
            href="">
              <!-- v-bind:class="{dateActive:item.date3==isToday || dateCurrent==index}" -->
              <div class="date-panel">
                <p class="date-item-cale">{{item.date}}</p>
                <p class="date-item-week">{{item.week}}</p>
              </div>
            </a>
          </div>
        </div>
        <div class="game-panel">
          <div class="game-type-panel">
            <a v-for="(item, index) in gameNav" :key="index"
              @click="jump(index, item.game, item.id)"
              v-bind:class="{activeType:gameCurrent==index}"
              class="type-item" href="javascript:;">
              <img :src="item.img" alt="">
              <p>{{item.game}}</p>
            </a>
          </div>
        </div>
      </div>
      <div v-if="this.gameCurrent == 0" class="match-panel">
        <div class="match-item-panel">
          <div v-if="schedule.length == 0" class="live_container_tips">
            <img src="static/images/data_empty_icon.png" alt="">
            <p>当前暂无赛事安排哦！</p>
            <p class="desc">欢迎观看其他游戏赛事哦~</p>
          </div>
          <div v-if="schedule.length !== 0" class="container">
            <div v-for="item in schedule" :key="item.id" class="match-item">
              <img :src="item.gameimg" class="match-item-logo" />
              <p class="match-item-time">{{item.matchtime}}</p>
              <p class="match-item-bo">{{item.BO}}</p>
              <div class="home-team">
                <p class="name">{{item.team1}}</p>
                <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="logo"/></div>
                <div v-if="item.team1img == 'http://45.157.91.154/static/'"></div>
              </div>
              <p class="match-item-score">{{item.score}}</p>
              <div class="away-team">
                <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team2img" class="logo"/></div>
                <div v-if="item.team2img == 'http://45.157.91.154/static/'"></div>
                <p class="name">{{item.team2}}</p>
              </div>
              <div class="leagues">
                <div v-if="item.eventsmg !== 'http://45.157.91.154/static/'"><img :src="item.eventsimg" class="logo"/></div>
                <div v-if="item.eventsmg == 'http://45.157.91.154/static/'"></div>
                <p @click="jumpLeague(item.eventsid, item.gametype, item.events)" class="name">{{item.events}}</p>
              </div>
              <!-- <div class="odd" style="display:none;">
                <p class="home-odd">1</p>
                <p class="tag">/</p>
                <p class="away-odd">2</p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="this.gameCurrent == 1" class="match-panel">
        <div class="match-item-panel">
          <div v-if="dotaSchedule.length == 0" class="live_container_tips">
            <img src="static/images/data_empty_icon.png" alt="">
            <p>当前暂无赛事安排哦！</p>
            <p class="desc">欢迎观看其他游戏赛事哦~</p>
          </div>
          <div v-if="dotaSchedule.length !== 0" class="container">
            <div v-for="item in dotaSchedule" :key="item.id" class="match-item">
              <img :src="item.gameimg" class="match-item-logo"/>
              <p class="match-item-time">{{item.matchtime}}</p>
              <p class="match-item-bo">{{item.BO}}</p>
              <div class="home-team">
                <p class="name">{{item.team1}}</p>
                <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="logo"/></div>
                <div v-if="item.team1img == 'http://45.157.91.154/static/'"></div>
              </div>
              <p class="match-item-score">{{item.score}}</p>
              <div class="away-team">
                <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team2img" class="logo"/></div>
                <div v-if="item.team2img == 'http://45.157.91.154/static/'"></div>
                <p class="name">{{item.team2}}</p>
              </div>
              <div class="leagues">
                <div v-if="item.eventsmg !== 'http://45.157.91.154/static/'"><img :src="item.eventsimg" class="logo"/></div>
                <div v-if="item.eventsmg == 'http://45.157.91.154/static/'"></div>
                <p @click="jumpLeague(item.eventsid, item.gametype, item.events)" class="name">{{item.events}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="this.gameCurrent == 2" class="match-panel">
        <div class="match-item-panel">
          <div v-if="csSchedule.length == 0" class="live_container_tips">
            <img src="static/images/data_empty_icon.png" alt="">
            <p>当前暂无赛事安排哦！</p>
            <p class="desc">欢迎观看其他游戏赛事哦~</p>
          </div>
          <div v-if="csSchedule.length !== 0" class="container">
            <div v-for="item in csSchedule" :key="item.id" class="match-item">
              <img :src="item.gameimg" class="match-item-logo" />
              <p class="match-item-time">{{item.matchtime}}</p>
              <p class="match-item-bo">{{item.BO}}</p>
              <div class="home-team">
                <p class="name">{{item.team1}}</p>
                <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="logo"/></div>
                <div v-if="item.team1img == 'http://45.157.91.154/static/'"></div>
              </div>
              <p class="match-item-score">{{item.score}}</p>
              <div class="away-team">
                <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team2img" class="logo"/></div>
                <div v-if="item.team2img == 'http://45.157.91.154/static/'"></div>
                <p class="name">{{item.team2}}</p>
              </div>
              <div class="leagues">
                <div v-if="item.eventsmg !== 'http://45.157.91.154/static/'"><img :src="item.eventsimg" class="logo"/></div>
                <div v-if="item.eventsmg == 'http://45.157.91.154/static/'"></div>
                <p @click="jumpLeague(item.eventsid, item.gametype, item.events)" class="name">{{item.events}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="this.gameCurrent == 3" class="match-panel">
        <div class="match-item-panel">
          <div v-if="lolSchedule.length == 0" class="live_container_tips">
            <img src="static/images/data_empty_icon.png" alt="">
            <p>当前暂无赛事安排哦！</p>
            <p class="desc">欢迎观看其他游戏赛事哦~</p>
          </div>
          <div v-if="lolSchedule.length !== 0" class="container">
            <div v-for="item in lolSchedule" :key="item.id" class="match-item">
              <img :src="item.gameimg" class="match-item-logo" />
              <p class="match-item-time">{{item.matchtime}}</p>
              <p class="match-item-bo">{{item.BO}}</p>
              <div class="home-team">
                <p class="name">{{item.team1}}</p>
                <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="logo"/></div>
                <div v-if="item.team1img == 'http://45.157.91.154/static/'"></div>
              </div>
              <p class="match-item-score">{{item.score}}</p>
              <div class="away-team">
                <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team2img" class="logo"/></div>
                <div v-if="item.team2img == 'http://45.157.91.154/static/'"></div>
                <p class="name">{{item.team2}}</p>
              </div>
              <div class="leagues">
                <div v-if="item.eventsmg !== 'http://45.157.91.154/static/'"><img :src="item.eventsimg" class="logo"/></div>
                <div v-if="item.eventsmg == 'http://45.157.91.154/static/'"></div>
                <p @click="jumpLeague(item.eventsid, item.gametype, item.events)" class="name">{{item.events}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="this.gameCurrent == 4" class="match-panel">
        <div class="match-item-panel">
          <div v-if="kogSchedule.length == 0" class="live_container_tips">
            <img src="static/images/data_empty_icon.png" alt="">
            <p>当前暂无赛事安排哦！</p>
            <p class="desc">欢迎观看其他游戏赛事哦~</p>
          </div>
          <div v-if="kogSchedule.length !== 0" class="container">
            <div v-for="item in kogSchedule" :key="item.id" class="match-item">
              <img :src="item.gameimg" class="match-item-logo" />
              <p class="match-item-time">{{item.matchtime}}</p>
              <p class="match-item-bo">{{item.BO}}</p>
              <div class="home-team">
                <p class="name">{{item.team1}}</p>
                <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="logo"/></div>
                <div v-if="item.team1img == 'http://45.157.91.154/static/'"></div>
              </div>
              <p class="match-item-score">{{item.score}}</p>
              <div class="away-team">
                <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team2img" class="logo"/></div>
                <div v-if="item.team2img == 'http://45.157.91.154/static/'"></div>
                <p class="name">{{item.team2}}</p>
              </div>
              <div class="leagues">
                <div v-if="item.eventsmg !== 'http://45.157.91.154/static/'"><img :src="item.eventsimg" class="logo"/></div>
                <div v-if="item.eventsmg == 'http://45.157.91.154/static/'"></div>
                <p @click="jumpLeague(item.eventsid, item.gametype, item.events)" class="name">{{item.events}}</p>
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
      isToday: '',
      dateCurrent: 10,
      gameCurrent: 0,
      gameId: 0,
      date: '',
      Week: [],
      gameNav: [
        {id: '0', game: '全部游戏', img: ''},
        {id: '1', game: 'DOTA2', img: '/static/images/dota_sel_icon.png'},
        {id: '2', game: 'CS:GO', img: '/static/images/csgo_sel_icon.png'},
        {id: '3', game: '英雄联盟', img: '/static/images/lol_sel_icon.png'},
        {id: '4', game: '王者荣耀', img: '/static/images/kog_sel_icon.png'}
      ],
      schedule: [],
      dotaSchedule: [],
      csSchedule: [],
      lolSchedule: [],
      kogSchedule: []

    }
  },
  mounted () {
    this.date = ''
    this.date = this.$route.query.date
    axios.get('/NowDate').then(response => {
      if (this.date === undefined) {
        this.isToday = response.data[1]
        axios.get('/CourseAppoint/' + this.isToday + '/0').then(response => {
          this.schedule = response.data
          this.date = undefined
          // console.log(this.schedule)
        }).catch(error => {
          // alert('网络错误，请稍后刷新重试！')
          console.log(error)
        })
      }
      // console.log(this.isToday)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/GetWeek').then(response => {
      this.Week = response.data
      // console.log(this.Week)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/CourseAppoint/' + this.date + '/0').then(response => {
      this.schedule = response.data
      // console.log(this.schedule)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/CourseAppoint/' + this.date + '/1').then(response => {
      this.dotaSchedule = response.data
      // console.log(this.dotaSchedule)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/CourseAppoint/' + this.date + '/2').then(response => {
      this.csSchedule = response.data
      // console.log(this.csSchedule)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/CourseAppoint/' + this.date + '/3').then(response => {
      this.lolSchedule = response.data
      // console.log(this.lolSchedule)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/CourseAppoint/' + this.date + '/4').then(response => {
      this.kogSchedule = response.data
      // console.log(this.kogSchedule)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  },
  methods: {
    clickDate (index, date, id) {
      this.dateCurrent = index
      this.$router.push({
        path: '/schedule.html',
        query: {
          id: id,
          date: date
        }
      })
      axios.get('/CourseAppoint/' + this.date + '/0').then(response => {
        this.schedule = response.data
        // console.log(this.schedule)
      }).catch(error => {
        // alert('网络错误，请稍后刷新重试！')
        console.log(error)
      })
    },
    jump (index, type, id) {
      this.gameCurrent = index
      this.$router.push({
        path: '/schedule.html',
        query: {
          type: type,
          id: id
        }
      })
    },
    jumpLeague (id, type, name) {
      this.$router.push({
        path: '/league.html',
        query: {
          gameID: id,
          type: type,
          name: name
        }
      })
    }
  }
}
</script>
<style scoped>
@import '../assets/css/schedule.css';
@import '../assets/css/datepicker.css';
</style>
