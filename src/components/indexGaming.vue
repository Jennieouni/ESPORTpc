<template>
  <div>
    <div v-if="gameID == 0" class="match-start-panel">
      <div v-for="item in allMatching" :key="item.id" class="item">
        <div class="match-item-wrapper">
          <div class="header">
            <div @click="jumpLeague(item.eventsid, item.game, item.events)" class="item-league-panel">
              <img :src="item.eventsimg" class="logo" />
              <p class="name">{{item.events}}</p>
            </div>
            <div @click="jump(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </div>
            <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </a>
          </div>
          <div class="item-row-title">
            <div class="tag-1">
              <p class="duration">
                {{item.now}}
              </p>
            </div>
            <div class="tag-2">
              <p>{{item.BO}}</p>
            </div>
            <div v-if="item.pooreconomy !== ''" class="tag-3">
              <img :src="item.pooimg" />
              <p>{{item.pooreconomy}}</p>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team1img" class="logo"/>
              <p>{{item.team1}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team1winnum}}</p>
              <p class="kill">{{item.team1killnum}}</p>
              <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                <img :src="item1" class="icon" />
              </div>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team2img" class="logo"/>
              <p>{{item.team2}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team2winnum}}</p>
              <p class="kill">{{item.team2killnum}}</p>
              <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
              <img :src="item1" class="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="gameID == 1" class="match-start-panel">
      <div v-for="item in dotaMatching" :key="item.id" class="item">
        <div class="match-item-wrapper">
          <div class="header">
            <div class="item-league-panel" @click="jumpLeague(item.eventsid, item.game, item.events)">
              <img :src="item.eventsimg" class="logo" />
              <p class="name">{{item.events}}</p>
            </div>
            <div @click="jump(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </div>
            <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </a>
          </div>
          <div class="item-row-title">
            <div class="tag-1">
              <p class="duration">
                {{item.now}}
              </p>
            </div>
            <div class="tag-2">
              <p>{{item.BO}}</p>
            </div>
            <div v-if="item.pooreconomy !== ''" class="tag-3">
              <img :src="item.pooimg" />
              <p>{{item.pooreconomy}}</p>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team1img" class="logo"/>
              <p>{{item.team1}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team1winnum}}</p>
              <p class="kill">{{item.team1killnum}}</p>
              <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                <img :src="item1" class="icon" />
              </div>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team2img" class="logo"/>
              <p>{{item.team2}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team2winnum}}</p>
              <p class="kill">{{item.team2killnum}}</p>
              <div class="icon-panel">
                <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
                <img :src="item1" class="icon" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="gameID == 2" class="match-start-panel">
      <div v-for="item in csMatching" :key="item.id" class="item">
        <div class="match-item-wrapper">
          <div class="header">
            <div class="item-league-panel" @click="jumpLeague(item.eventsid, item.game, item.events)">
              <img :src="item.eventsimg" class="logo" />
              <p class="name">{{item.events}}</p>
            </div>
            <div @click="jump(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </div>
            <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </a>
          </div>
          <div class="item-row-title">
            <div class="tag-1">
              <p class="duration">
                {{item.now}}
              </p>
            </div>
            <div class="tag-2">
              <p>{{item.BO}}</p>
            </div>
            <div v-if="item.pooreconomy !== ''" class="tag-3">
              <img :src="item.pooimg" />
              <p>{{item.pooreconomy}}</p>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team1img" class="logo"/>
              <p>{{item.team1}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team1winnum}}</p>
              <p class="kill">{{item.team1killnum}}</p>
              <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                <img :src="item1" class="icon" />
              </div>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team2img" class="logo"/>
              <p>{{item.team2}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team2winnum}}</p>
              <p class="kill">{{item.team2killnum}}</p>
              <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
              <img :src="item1" class="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="gameID == 3" class="match-start-panel">
      <div v-for="item in lolMatching" :key="item.id" class="item">
        <div class="match-item-wrapper">
          <div class="header">
            <div class="item-league-panel" @click="jumpLeague(item.eventsid, item.game, item.events)">
              <img :src="item.eventsimg" class="logo" />
              <p class="name">{{item.events}}</p>
            </div>
            <div @click="jump(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </div>
            <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </a>
          </div>
          <div class="item-row-title">
            <div class="tag-1">
              <p class="duration">
                {{item.now}}
                <!-- <span>32</span> -->
              </p>
            </div>
            <div class="tag-2">
              <p>{{item.BO}}</p>
            </div>
            <div v-if="item.pooreconomy !== ''" class="tag-3">
              <img :src="item.pooimg" />
              <p>{{item.pooreconomy}}</p>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team1img" class="logo"/>
              <p>{{item.team1}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team1winnum}}</p>
              <p class="kill">{{item.team1killnum}}</p>
              <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                <img :src="item1" class="icon" />
              </div>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team2img" class="logo"/>
              <p>{{item.team2}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team2winnum}}</p>
              <p class="kill">{{item.team2killnum}}</p>
              <div class="icon-panel">
                <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
                <img :src="item1" class="icon" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="match-start-panel">
      <div v-for="item in kogMatching" :key="item.id" class="item">
        <div class="match-item-wrapper">
          <div class="header">
            <div class="item-league-panel" @click="jumpLeague(item.eventsid, item.game, item.events)">
              <img :src="item.eventsimg" class="logo" />
              <p class="name">{{item.events}}</p>
            </div>
            <div @click="jump(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </div>
            <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel">
              <img src="static/images/video_icon.gif" class="live-text" />
            </a>
          </div>
          <div class="item-row-title">
            <div class="tag-1">
              <p class="duration">
                {{item.now}}
                <!-- <span>32</span> -->
              </p>
            </div>
            <div class="tag-2">
              <p>{{item.BO}}</p>
            </div>
            <div v-if="item.pooreconomy !== ''" class="tag-3">
              <img :src="item.pooimg" />
              <p>{{item.pooreconomy}}</p>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team1img" class="logo"/>
              <p>{{item.team1}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team1winnum}}</p>
              <p class="kill">{{item.team1killnum}}</p>
              <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                <img :src="item1" class="icon"/>
              </div>
            </div>
          </div>
          <div class="item-row-team">
            <div class="tag-1">
              <img :src="item.team2img" class="logo"/>
              <p>{{item.team2}}</p>
            </div>
            <div class="tag-2">
              <p class="score">{{item.team2winnum}}</p>
              <p class="kill">{{item.team2killnum}}</p>
              <div class="icon-panel">
                <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
                <img :src="item1" class="icon" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'indexGame',
  data () {
    return {
      gameID: 0,
      allMatching: [],
      dotaMatching: [],
      csMatching: [],
      lolMatching: [],
      kogMatching: []
    }
  },
  mounted () {
    axios.get('/AppointMatchIng/0').then(response => {
      this.allMatching = response.data
      // console.log(this.allMatching)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatchIng/1').then(response => {
      this.dotaMatching = response.data
      // console.log(this.dotaMatching)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatchIng/2').then(response => {
      this.csMatching = response.data
      // console.log(this.csMatching)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatchIng/3').then(response => {
      this.lolMatching = response.data
      // console.log(this.lolMatching)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatchIng/4').then(response => {
      this.kogMatching = response.data
      // console.log(this.kogMatching)
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
    jump (id) {
      let routeData = this.$router.resolve({
        path: '/living.html',
        query: {
          // type: type,
          livingID: id
        }
      })
      window.open(routeData.href, '_blank')
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
</style>
