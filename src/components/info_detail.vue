<template>
  <div>
    <headerNav></headerNav>
    <div class="info-detail-warpper default-continer">
      <div class="article-detail">
        <div class="container">
          <div v-for="item in content" :key="item.id">
            <!-- 主体动态内容 -->
            <p class="title">{{item.title}}</p>
          <div class="desc"><p></p><p class="date-time">{{item.time}} 发布</p></div>
            <div class="main-body" v-html="item.body">{{item.body}}</div>
            <!-- 动态内容 -->
          </div>
        </div>
        <div class="right-panel">
          <div class="right-side-warpper" style="width: 100%">
            <div class="info-panel">
              <div class="info-panel-title">
                <p class="line"></p>最近更新
              </div>
              <template v-for="(item, index) in newsList">
                <div :key="index" v-if="index < 10" :title="item.title" class="info-panel-item">
                  <p class="index">{{index + 1}}</p>
                  <a href @click="jumpConten(item.id, item.title)">
                    <p class="title">{{item.title}}</p>
                  </a>
                </div>
              </template>
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
      content: [],
      infoID: 0,
      newsList: []
    }
  },
  mounted () {
    this.infoID = this.$route.query.infoID
    // console.log(this.infoID)
    axios.get('/GetInformationBody/' + this.infoID).then(response => {
      this.content = response.data
      // console.log(this.content)
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
<style>
@import "../assets/css/info_detail.css";
.info-detail-warpper .container .title {
  padding-top: 32px;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ccc;
  line-height: 33px;
  margin: 0 auto;
  text-align: center;
}
.info-detail-warpper .container .desc {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 24px;
  margin: 0 auto;
}
.info-detail-warpper .container .desc .date-time {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9a9a9a;
  line-height: 20px;
  padding: 0 12px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  text-align: center;
}
.info-detail-warpper .container {
  padding-top: 20px;
}
.info-detail-warpper .container img {
  max-width: 100% !important;
  display: block !important;
  margin: 20px 0;
}
.info-detail-warpper .container p {
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 23px;
  color: #bbb !important;
}
.info-detail-warpper .container {
  font-size: 15px !important;
  color: #bbb !important;
}
.info-detail-warpper .container h1,
.info-detail-warpper .container h2,
.info-detail-warpper .container h3,
.info-detail-warpper .container h4,
.info-detail-warpper .container h5,
.info-detail-warpper .container h6 {
  margin: 20px 0 !important;
}
</style>
