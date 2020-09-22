<template>
  <div>
    <headerNav></headerNav>
    <div class="detail-wrapper default-continer">
      <div v-for="item in league.title" :key="item.id" class="detail-header">
        <div class="league-logo">
          <img :src="item.matchimg"/>
        </div>
        <div class="league-content">
          <div class="title">
            <h3>{{item.match}}</h3>
          </div>
          <div class="league-info">
            <div class="item match-time">
              <img src="static/images/detail_time_icon.png" />
              <div class="text-panel">
                <p>比赛时间</p>
                <p>{{item.matchtime}}</p>
              </div>
            </div>
            <div class="item teamIds">
              <img src="static/images/duiwu_icon.png" />
              <div class="text-panel">
                <p>参赛队伍</p>
                <p>{{item.teams}}</p>
              </div>
            </div>
            <div class="item prize">
              <img src="static/images/jiangjin_icon.png" />
              <div class="text-panel">
                <p>赛事奖金</p>
                <p>{{item.money}}</p>
              </div>
            </div>
            <div class="item address">
              <img src="static/images/address_icon.png" />
              <div class="text-panel">
                <p>举办地点</p>
                <p>{{item.venue}}</p>
              </div>
            </div>
            <div class="item organizer">
              <img src="static/images/jubanfang_icon.png" />
              <div class="text-panel">
                <p>举办方</p>
                <p>{{item.organizers}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-container">
        <div class="match-panel-wrapper">
          <div title="赛事安排" class="match-panel-wrapper">
            <div class="match-panel-container-title">
              <img src="static/images/match_panel_left.png.svg"/>
              <p>赛事安排</p>
              <img src="static/images/match_panel_right.png.svg"/>
            </div>
          </div>
          <div class="match-panel-container">
            <div class="match-table-header">
              <p>时间</p>
              <p>战队</p>
              <p>比分</p>
              <p>战队</p>
              <p>赛制</p>
            </div>
            <div v-for="item in league.body" :key="item.id" class="match-panel-item match-table-item">
              <p>{{item.time[0]}} {{item.time[1]}}</p>
              <div class="team">
                <img :src="item.team1img"/>
                <p>{{item.team1}}</p>
              </div>
              <p class="score">{{item.score}}</p>
              <div class="team">
                <img :src="item.team2img">
                <p>{{item.team2}}</p>
              </div>
              <p>{{item.BO}}</p>
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
      footerBottom,
      headerNav,
      league: [],
      gameID: 0
    }
  },
  mounted () {
    this.gameID = this.$route.query.gameID
    // console.log(this.gameID)
    axios.get('/Match/' + this.gameID).then(response => {
      this.league = response.data
      // console.log(this.league)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  }
}
</script>
<style scoped>
@import '../assets/css/detail.css';
</style>
