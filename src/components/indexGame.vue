<template>
  <div>
    <div v-if="gameID == 0" class="match-wrapper">
      <div class="match-panel-wrapper">
        <div v-if="allMatch.length !== 0" class="match-panel-container">
          <img src="static/images/match_panel_left.png.svg" />
          <p>未开始的比赛</p>
          <img src="static/images/match_panel_right.png.svg" />
        </div>
        <div class="container">
          <div v-for="item in allMatch" :key="item.id" class="match-item">
            <img class="match-item-logo" :src="item.gameimg" />
            <p class="match-item-time">{{item.time}}</p>
            <p class="match-item-bo">{{item.BO}}</p>
            <div v-if="item.team1.length !== 0" class="home-team">
              <p class="match-item-home-name">{{item.team1}}</p>
              <img class="match-item-home-logo" :src="item.team1img" />
            </div>
            <div v-if="item.team1.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <p class="match-item-tag">—</p>
            <div v-if="item.team2.length !== 0" class="away-team">
              <img class="match-item-away-logo" :src="item.team2img" />
              <p class="match-item-away-name">{{item.team2}}</p>
            </div>
            <div v-if="item.team2.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <div class="league" @click="jumpLeague(item.eventsid, item.game, item.events)">
              <img class="match-item-league-logo" :src="item.eventsimg" />
              <p class="match-item-league-name">{{item.events}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="gameID == 1" class="match-wrapper">
      <div class="match-panel-wrapper">
        <div v-if="dotaMatch.length !== 0" class="match-panel-container">
          <img src="static/images/match_panel_left.png.svg" />
          <p>未开始的比赛</p>
          <img src="static/images/match_panel_right.png.svg" />
        </div>
        <div class="container">
          <div v-for="item in dotaMatch" :key="item.id" class="match-item">
            <img class="match-item-logo" :src="item.gameimg" />
            <p class="match-item-time">{{item.time}}</p>
            <p class="match-item-bo">{{item.BO}}</p>
            <div v-if="item.team1.length !== 0" class="home-team">
              <p class="match-item-home-name">{{item.team1}}</p>
              <img class="match-item-home-logo" :src="item.team1img" />
            </div>
            <div v-if="item.team1.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <p class="match-item-tag">—</p>
            <div v-if="item.team2.length !== 0" class="away-team">
              <img class="match-item-away-logo" :src="item.team2img" />
              <p class="match-item-away-name">{{item.team2}}</p>
            </div>
            <div v-if="item.team2.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <div class="league" @click="jumpLeague(item.eventsid, item.game, item.events)">
              <img class="match-item-league-logo" :src="item.eventsimg" />
              <p class="match-item-league-name">{{item.events}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="gameID == 2" class="match-wrapper">
      <div class="match-panel-wrapper">
        <div v-if="csMatch.length !== 0" class="match-panel-container">
          <img src="static/images/match_panel_left.png.svg" />
          <p>未开始的比赛</p>
          <img src="static/images/match_panel_right.png.svg" />
        </div>
        <div class="container">
          <div v-for="item in csMatch" :key="item.id" class="match-item">
            <img class="match-item-logo" :src="item.gameimg" />
            <p class="match-item-time">{{item.time}}</p>
            <p class="match-item-bo">{{item.BO}}</p>
            <div v-if="item.team1.length !== 0" class="home-team">
              <p class="match-item-home-name">{{item.team1}}</p>
              <img class="match-item-home-logo" :src="item.team1img" />
            </div>
            <div v-if="item.team1.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <p class="match-item-tag">—</p>
            <div v-if="item.team2.length !== 0" class="away-team">
              <img class="match-item-away-logo" :src="item.team2img" />
              <p class="match-item-away-name">{{item.team2}}</p>
            </div>
            <div v-if="item.team2.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <div class="league" @click="jumpLeague(item.eventsid, item.game, item.events)">
              <img class="match-item-league-logo" :src="item.eventsimg" />
              <p class="match-item-league-name">{{item.events}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="gameID == 3" class="match-wrapper">
      <div class="match-panel-wrapper">
        <div v-if="lolMatch.length !== 0" class="match-panel-container">
          <img src="static/images/match_panel_left.png.svg" />
          <p>未开始的比赛</p>
          <img src="static/images/match_panel_right.png.svg" />
        </div>
        <div class="container">
          <div v-for="item in lolMatch" :key="item.id" class="match-item">
            <img class="match-item-logo" :src="item.gameimg" />
            <p class="match-item-time">{{item.time}}</p>
            <p class="match-item-bo">{{item.BO}}</p>
            <div v-if="item.team1.length !== 0" class="home-team">
              <p class="match-item-home-name">{{item.team1}}</p>
              <img class="match-item-home-logo" :src="item.team1img" />
            </div>
            <div v-if="item.team1.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <p class="match-item-tag">—</p>
            <div v-if="item.team2.length !== 0" class="away-team">
              <img class="match-item-away-logo" :src="item.team2img" />
              <p class="match-item-away-name">{{item.team2}}</p>
            </div>
            <div v-if="item.team2.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <div class="league" @click="jumpLeague(item.eventsid, item.game, item.events)">
              <img class="match-item-league-logo" :src="item.eventsimg" />
              <p class="match-item-league-name">{{item.events}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="match-wrapper">
      <div class="match-panel-wrapper">
        <div v-if="kogMatch.length !== 0" class="match-panel-container">
          <img src="static/images/match_panel_left.png.svg" />
          <p>未开始的比赛</p>
          <img src="static/images/match_panel_right.png.svg" />
        </div>
        <div class="container">
          <div v-for="item in kogMatch" :key="item.id" class="match-item">
            <img class="match-item-logo" :src="item.gameimg" />
            <p class="match-item-time">{{item.time}}</p>
            <p class="match-item-bo">{{item.BO}}</p>
            <div v-if="item.team1.length !== 0" class="home-team">
              <p class="match-item-home-name">{{item.team1}}</p>
              <img class="match-item-home-logo" :src="item.team1img" />
            </div>
            <div v-if="item.team1.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <p class="match-item-tag">—</p>
            <div v-if="item.team2.length !== 0" class="away-team">
              <img class="match-item-away-logo" :src="item.team2img" />
              <p class="match-item-away-name">{{item.team2}}</p>
            </div>
            <div v-if="item.team2.length == 0" class="home-team">
              <p class="match-item-home-name"></p>
              <img class="match-item-home-logo" />
            </div>
            <div class="league" @click="jumpLeague(item.eventsid, item.game, item.events)">
              <img class="match-item-league-logo" :src="item.eventsimg" />
              <p class="match-item-league-name">{{item.events}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// const gameID = 1
import axios from 'axios'
export default {
  name: 'indexGame',
  data () {
    return {
      gameID: 0,
      allMatch: [],
      scoreNav: [],
      dotaMatch: [],
      csMatch: [],
      lolMatch: [],
      kogMatch: []
    }
  },
  mounted () {
    axios.get('/AppointMatch/0').then(response => {
      this.allMatch = response.data
      // console.log(this.allMatch)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatch/1').then(response => {
      this.dotaMatch = response.data
      // console.log(this.match)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatch/2').then(response => {
      this.csMatch = response.data
      // console.log(this.csMatch)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatch/3').then(response => {
      this.lolMatch = response.data
      // console.log(this.match)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatch/4').then(response => {
      this.kogMatch = response.data
      // console.log(this.match)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  },
  created () {
    this.bbtn()
  },
  methods: {
    bbtn: function () {
      this.bus.$on('sendID', (index) => {
        this.gameID = index
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
@import "../assets/css/index.css";
@import "../assets/css/index_match.css";
</style>>
