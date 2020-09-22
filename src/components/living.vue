<template>
  <div>
    <headerNav></headerNav>
    <div class="living-panel default-continer">
      <div v-for="item in videoInfo" :key="item.id" class="living-panel-content">
        <div class="living-league">
          <img :src="item.eventsimg"/>
          <span>{{item.events}}</span>
          <span>{{item.BO}}</span>
        </div>
        <div class="living-team">
          <div class="living-team-home">
            <div class="team-name">{{item.team1}}</div>
            <img :src="item.team1img" class="living-team-logo"/>
          </div>
          <div class="living-team-center">
            <div class="vs">
              <span>{{item.team1winnum}}</span>
              <span>:</span>
              <span>{{item.team2winnum}}</span>
            </div>
            <p class="time">
              <span class="match-date">{{item.time}}</span>
              <span class="match-status match-ongoing">
                <span class="match-duration">{{item.now}}</span>
              </span>
            </p>
          </div>
          <div class="living-team-away">
            <img :src="item.team2img" class="living-team-logo"/>
            <div class="team-name">{{item.team2}}</div>
          </div>
        </div>
        <!-- <div class="living-items">
          <span v-for="(item1, index) in item.tv" :key="index" class="living-item">
            <a href="" @click="jump(item1.name, index)">{{item1.name}}</a>
          </span>
        </div> -->
        <div class="live-iframe">
          <iframe
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="yes"
            :src="item.tv[0].link"
          ></iframe>
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
      livingID: 0,
      videoInfo: [],
      typeID: 0,
      current: 0
    }
  },
  mounted () {
    this.livingID = this.$route.query.livingID
    // console.log(this.livingID)
    axios.get('/Video/' + this.livingID).then(response => {
      this.videoInfo = response.data
      console.log(this.videoInfo)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  },
  methods: {
    // jump (id, index) {
    //   this.current = index
    //   console.log(this.current)
    //   this.$router.push({
    //     path: '/living.html',
    //     query: {
    //       typeID: id,
    //     }
    //   })
    // }
  }
}
</script>
<style scoped>
  .living-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    /* height: 100%; */
    width: 100%;
    padding-top: 30px;
    /* background-attachment: fixed; */
    /* background-size: 100% auto; */
    /* background-color: #0f121e; */
    /* padding-bottom: 20px; */
  }

  .living-panel-content {
    display: flex;
    width: 1200px;
    min-height: 63.5vh;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    text-align: center;
    padding-bottom: 20px;
    margin: 0 auto;
    background-color: #232323;
  }

  .living-league {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 35px;
    justify-content: center;
  }

  .living-league img {
    width: 18px;
    height: 18px;
  }

  .living-league span {
    color: #ccc;
    margin-left: 8px;
  }

  .time {
    padding-bottom: 20px;
  }

  .living-team {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }

  .living-team-home {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
    align-items: center;
  }

  .team-name {
    max-width: 200px;
    height: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 20px;
    line-height: 70px;
    font-family: TradeGothicLT-Bold;
    font-weight: 700;
    color: #ccc;
    margin-right: 8px;
    margin-left: 8px;
  }

  .living-team-center {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    align-items: center;
  }

  .living-team-away {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex: 1;
    align-items: center;
  }

  .living-team-logo {
    width: 80px;
  }

  .living-team-center .vs span {
    height: 70px;
    line-height: 70px;
    font-size: 32px;
    font-family: TradeGothicLT-Bold;
    font-weight: 700;
    color: #ffbf34;
    margin: 5px;
  }

  .match-date {
    font-size: 13px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #ccc;
    margin-right: 10px;
  }

  .match-duration {
    font-size: 13px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
  }

  .match-ongoing span {
    color: #ffbf34;
  }

  .match-complete span {
    color: orangered;
  }

  .live-iframe {
    width: 100%;
    height: 800px;
    margin-top: 10px;
    padding: 8px;
  }

  .match-ongoing .match-duration:after {
    content: "'";
    font-size: 14px;
    margin-left: 2px;
    color: #ffbf34;
    -webkit-animation: ongoing-blink 1s linear infinite;
    animation: ongoing-blink 1s linear infinite
  }

  .living-items{
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 9px;
  }

  .living-item{
    box-sizing: border-box;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    min-width: 66px;
    height: 26px;
    line-height: 26px;
    color: #ccc;
    font-size: 13px;
    border-radius: 16px;
    margin-right: 20px;
    cursor: pointer;
    border: 1px solid;
    border-color: #ccc;
    padding-bottom: 20px;
  }

  .living-item:hover{
    background-color: #ffba5a;
    border-color: #ffbf34;
    color: white;
    opacity: 98%;
  }

  .selected{
    box-sizing: border-box;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    min-width: 66px;
    height: 26px;
    line-height: 26px;
    font-size: 13px;
    border-radius: 16px;
    margin-right: 20px;
    cursor: pointer;
    border: 1px solid;
    border-color: #ffbf34;
    background-color: #ffbf34;
    color: white;
    pointer-events:none;
    padding-bottom: 20px;
  }
</style>
