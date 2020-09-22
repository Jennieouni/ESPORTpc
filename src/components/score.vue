<template>
  <div>
    <headerNav></headerNav>
    <div class="score-warpper default-continer">
      <div class="select-warpper">
        <div class="select-panel">
          <a v-for="(item, index) in scoreNav" :key="index"
          @click="jump(index, item.game, item.id)"
          v-bind:class="{activeType:current==index}"
          class="type-item">
            <!-- v-bind:class="{activeType:current==index}" -->
            <img :src="item.img" alt="">
            <p>{{item.game}}</p>
          </a>
        </div>
        <div class="btn-panel">
          <a v-for="(item, index) in status" :key="index"
          @click="clickStatus(index)"
          v-bind:class="{active:gameStatues==index}"
          class="btn" href="javascript:;">{{item.tag}}</a>
          <!-- v-bind:class="{active:current==index}" -->
        </div>
      </div>
      <!-- 广告栏 -->
      <!-- <div
        stype="width: 100%; height: 80px;"
        class="banner-warpper score-banner"
        style="margin:10px 0 0 0;"
        onclick="hrefClicked(&quot;https://500dj1.com&quot;,true)"
      >
        <img src="https://500bf.com/upload/78cc39aae0cd1850/a7d598c7bde04547.jpg" />
      </div> -->
      <div v-if="this.current == 0">
        <div class="score-list-panel">
          <!-- 进行中的比赛 -->
          <div v-if="this.gameStatues == 0" id="score_living">
            <div class="match-wait-panel-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/images/match_panel_left.png.svg" />
                  <p>进行中的比赛</p>
                  <img src="static/images/match_panel_right.png.svg" />
                </div>
                <div v-if="scoreIng.length == 0" class="live_container_tips">
                  <img src="static/images/data_empty_icon.png" alt="">
                  <p>当前暂无赛事安排哦！</p>
                  <p class="desc">欢迎观看其他游戏赛事哦~</p>
                </div>
                <div v-if="scoreIng.length !== 0" class="live_container">
                  <div v-for="item in scoreIng" :key="item.id" class="match-item-wrapper match-item">
                    <div class="live-item">
                      <div class="header">
                        <img :src="item.gameimg" />
                        <p class="name" @click="jumpLeague(item.eventsid, item.game, item.events)">{{item.events}}</p>
                        <p class="tag">{{item.tag}}</p>
                        <p class="tag">{{item.tag1}}</p>
                        <div class="tag-panel">
                          <p class="tag">{{item.tag2}}</p>
                          <p class="tag">{{item.tag3}}</p>
                          <p class="tag">{{item.tag4}}</p>
                          <p class="tag">{{item.tag5}}</p>
                          <p class="tag">{{item.tag6}}</p>
                        </div>
                        <p class="tag bet">{{item.exponent}}</p>
                        <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </div>
                        <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </a>
                      </div>
                      <div class="content">
                        <div class="match-info">
                          <p>{{item.now}}</p>
                          <p class="duration">{{item.nowtime}}</p>
                        </div>
                        <div class="team-info">
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                              <p>{{item.team1}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team1winnum}}</p>
                            <p class="tag tag-side">{{item.team1lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team1killnum}}</p>
                              <div v-if="item.team1killspecial.length !== 0"><img v-for="item1 in item.team1killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <div v-if="item.tag3 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <p>{{item.team1tag3num}}</p>
                              <div v-if="item.team1tag3special.length !== 0"><img v-for="item1 in item.team1tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag4num}}</p>
                              <div v-if="item.team1tag4special.length !== 0"><img v-for="item1 in item.team1tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag5num}}</p>
                              <div v-if="item.team1tag5special.length !== 0"><img v-for="item1 in item.team1tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <div v-if="item.tag6 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <div v-if="item.tag6 !== '经济差 '">
                                <div v-if="item.team1tag6num.length !== 0"><img v-for="item1 in item.team1indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              </div>
                              <p>{{item.team1tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team1indexnum}}</p>
                            </div>
                          </div>
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                              <p>{{item.team2}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team2winnum}}</p>
                            <p class="tag tag-side">{{item.team2lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team2killnum}}</p>
                              <div v-if="item.team2killspecial.length !== 0"><img v-for="item1 in item.team2killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag3num}}</p>
                              <div v-if="item.team2tag3special.length !== 0"><img v-for="item1 in item.team2tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag4num}}</p>
                              <div v-if="item.team2tag4special.length !== 0"><img v-for="item1 in item.team2tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag5num}}</p>
                              <div v-if="item.team2tag5special.length !== 0"><img v-for="item1 in item.team2tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <div v-if="item.team2tag6num.length !== 0"><img v-for="item1 in item.team2indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              <p>{{item.team2tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team2indexnum}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 未开始的比赛 -->
          <div v-if="this.gameStatues == 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>未开始的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="scoreNotStart.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="scoreNotStart.length !== 0" class="container">
              <div v-for="item in scoreNotStart" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                  <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-tag" style="min-width: 67px">—</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 已结束的比赛 -->
          <div v-if="this.gameStatues !== 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>已结束的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="scoreOver.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="scoreOver.length !== 0" class="container">
              <div v-for="item in scoreOver" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                 <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-score" style="min-width: 67px">{{item.score}}</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.current == 1">
        <div class="score-list-panel">
          <!-- 进行中的比赛 -->
          <div v-if="this.gameStatues == 0" id="score_living">
            <div class="match-wait-panel-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/images/match_panel_left.png.svg" />
                  <p>进行中的比赛</p>
                  <img src="static/images/match_panel_right.png.svg" />
                </div>
                <div v-if="dotaScoreIng.length == 0" class="live_container_tips">
                  <img src="static/images/data_empty_icon.png" alt="">
                  <p>当前暂无赛事安排哦！</p>
                  <p class="desc">欢迎观看其他游戏赛事哦~</p>
                </div>
                <div v-if="dotaScoreIng.length !== 0" class="live_container">
                  <div v-for="item in dotaScoreIng" :key="item.id" class="match-item-wrapper match-item">
                    <div class="live-item">
                      <div class="header">
                        <img :src="item.gameimg" />
                        <p class="name" @click="jumpLeague(item.eventsid, item.game, item.events)">{{item.events}}</p>
                        <p class="tag">{{item.tag}}</p>
                        <p class="tag">{{item.tag1}}</p>
                        <div class="tag-panel">
                          <p class="tag">{{item.tag2}}</p>
                          <p class="tag">{{item.tag3}}</p>
                          <p class="tag">{{item.tag4}}</p>
                          <p class="tag">{{item.tag5}}</p>
                          <p class="tag">{{item.tag6}}</p>
                        </div>
                        <p class="tag bet">{{item.exponent}}</p>
                        <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </div>
                        <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </a>
                      </div>
                      <div class="content">
                        <div class="match-info">
                          <p>{{item.now}}</p>
                          <p class="duration">{{item.nowtime}}</p>
                        </div>
                        <div class="team-info">
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                              <p>{{item.team1}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team1winnum}}</p>
                            <p class="tag tag-side">{{item.team1lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team1killnum}}</p>
                              <div v-if="item.team1killspecial.length !== 0"><img v-for="item1 in item.team1killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <div v-if="item.tag3 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <p>{{item.team1tag3num}}</p>
                              <div v-if="item.team1tag3special.length !== 0"><img v-for="item1 in item.team1tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag4num}}</p>
                              <div v-if="item.team1tag4special.length !== 0"><img v-for="item1 in item.team1tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag5num}}</p>
                              <div v-if="item.team1tag5special.length !== 0"><img v-for="item1 in item.team1tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <div v-if="item.tag6 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <div v-if="item.tag6 !== '经济差 '">
                                <div v-if="item.team1tag6num.length !== 0"><img v-for="item1 in item.team1indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              </div>
                              <p>{{item.team1tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team1indexnum}}</p>
                            </div>
                          </div>
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                              <p>{{item.team2}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team2winnum}}</p>
                            <p class="tag tag-side">{{item.team2lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team2killnum}}</p>
                              <div v-if="item.team2killspecial.length !== 0"><img v-for="item1 in item.team2killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag3num}}</p>
                              <div v-if="item.team2tag3special.length !== 0"><img v-for="item1 in item.team2tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag4num}}</p>
                              <div v-if="item.team2tag4special.length !== 0"><img v-for="item1 in item.team2tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag5num}}</p>
                              <div v-if="item.team2tag5special.length !== 0"><img v-for="item1 in item.team2tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <!-- <img :src="item.pooimg"/> -->
                              <div v-if="item.team2tag6num.length !== 0"><img v-for="item1 in item.team2indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              <p>{{item.team2tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team2indexnum}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 未开始的比赛 -->
          <div v-if="this.gameStatues == 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>未开始的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="dotaScoreNotStart.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="dotaScoreNotStart.length !== 0" class="container">
              <div v-for="item in dotaScoreNotStart" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                 <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-tag" style="min-width: 67px">—</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 已结束的比赛 -->
          <div v-if="this.gameStatues !== 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>已结束的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="dotaScoreOver.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="dotaScoreOver.length !== 0" class="container">
              <div v-for="item in dotaScoreOver" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                 <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-score" style="min-width: 67px">{{item.score}}</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.current == 2">
        <div class="score-list-panel">
          <!-- 进行中的比赛 -->
          <div v-if="this.gameStatues == 0" id="score_living">
            <div class="match-wait-panel-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/images/match_panel_left.png.svg" />
                  <p>进行中的比赛</p>
                  <img src="static/images/match_panel_right.png.svg" />
                </div>
                <div v-if="csScoreIng.length == 0" class="live_container_tips">
                  <img src="static/images/data_empty_icon.png" alt="">
                  <p>当前暂无赛事安排哦！</p>
                  <p class="desc">欢迎观看其他游戏赛事哦~</p>
                </div>
                <div v-if="csScoreIng.length !== 0" class="live_container">
                  <div v-for="item in csScoreIng" :key="item.id" class="match-item-wrapper match-item">
                    <div class="live-item">
                      <div class="header">
                        <img :src="item.gameimg" />
                        <p class="name" @click="jumpLeague(item.eventsid, item.game, item.events)">{{item.events}}</p>
                        <p class="tag">{{item.tag}}</p>
                        <p class="tag">{{item.tag1}}</p>
                        <div class="tag-panel">
                          <p class="tag">{{item.tag2}}</p>
                          <p class="tag">{{item.tag3}}</p>
                          <p class="tag">{{item.tag4}}</p>
                          <p class="tag">{{item.tag5}}</p>
                          <p class="tag">{{item.tag6}}</p>
                        </div>
                        <p class="tag bet">{{item.exponent}}</p>
                        <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </div>
                        <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </a>
                      </div>
                      <div class="content">
                        <div class="match-info">
                          <p>{{item.now}}</p>
                          <p class="duration">{{item.nowtime}}</p>
                        </div>
                        <div class="team-info">
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                              <p>{{item.team1}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team1winnum}}</p>
                            <p class="tag tag-side">{{item.team1lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team1killnum}}</p>
                              <div v-if="item.team1killspecial.length !== 0"><img v-for="item1 in item.team1killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <div v-if="item.tag3 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <p>{{item.team1tag3num}}</p>
                              <div v-if="item.team1tag3special.length !== 0"><img v-for="item1 in item.team1tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag4num}}</p>
                              <div v-if="item.team1tag4special.length !== 0"><img v-for="item1 in item.team1tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag5num}}</p>
                              <div v-if="item.team1tag5special.length !== 0"><img v-for="item1 in item.team1tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <div v-if="item.tag6 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <div v-if="item.tag6 !== '经济差 '">
                                <div v-if="item.team1tag6num.length !== 0"><img v-for="item1 in item.team1indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              </div>
                              <p>{{item.team1tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team1indexnum}}</p>
                            </div>
                          </div>
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                              <p>{{item.team2}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team2winnum}}</p>
                            <p class="tag tag-side">{{item.team2lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team2killnum}}</p>
                              <div v-if="item.team2killspecial.length !== 0"><img v-for="item1 in item.team2killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag3num}}</p>
                              <div v-if="item.team2tag3special.length !== 0"><img v-for="item1 in item.team2tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag4num}}</p>
                              <div v-if="item.team2tag4special.length !== 0"><img v-for="item1 in item.team2tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag5num}}</p>
                              <div v-if="item.team2tag5special.length !== 0"><img v-for="item1 in item.team2tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <!-- <img :src="item.pooimg"/> -->
                              <div v-if="item.team1tag6num.length !== 0"><img v-for="item1 in item.team1indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              <p>{{item.team2tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team2indexnum}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 未开始的比赛 -->
          <div v-if="this.gameStatues == 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>未开始的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="csScoreNotStart.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="csScoreNotStart.length !== 0" class="container">
              <div v-for="item in csScoreNotStart" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                 <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-tag" style="min-width: 67px">—</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 已结束的比赛 -->
          <div v-if="this.gameStatues !== 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>已结束的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="csScoreOver.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="csScoreOver.length !== 0" class="container">
              <div v-for="item in csScoreOver" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                 <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-score" style="min-width: 67px">{{item.score}}</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.current == 3">
        <div class="score-list-panel">
          <!-- 进行中的比赛 -->
          <div v-if="this.gameStatues == 0" id="score_living">
            <div class="match-wait-panel-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/images/match_panel_left.png.svg" />
                  <p>进行中的比赛</p>
                  <img src="static/images/match_panel_right.png.svg" />
                </div>
                <div v-if="lolScoreIng.length == 0" class="live_container_tips">
                  <img src="static/images/data_empty_icon.png" alt="">
                  <p>当前暂无赛事安排哦！</p>
                  <p class="desc">欢迎观看其他游戏赛事哦~</p>
                </div>
                <div v-if="lolScoreIng.length !== 0" class="live_container">
                  <div v-for="item in lolScoreIng" :key="item.id" class="match-item-wrapper match-item">
                    <div class="live-item">
                      <div class="header">
                        <img :src="item.gameimg" />
                        <p class="name" @click="jumpLeague(item.eventsid, item.game, item.events)">{{item.events}}</p>
                        <p class="tag">{{item.tag}}</p>
                        <p class="tag">{{item.tag1}}</p>
                        <div class="tag-panel">
                          <p class="tag">{{item.tag2}}</p>
                          <p class="tag">{{item.tag3}}</p>
                          <p class="tag">{{item.tag4}}</p>
                          <p class="tag">{{item.tag5}}</p>
                          <p class="tag">{{item.tag6}}</p>
                        </div>
                        <p class="tag bet">{{item.exponent}}</p>
                        <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </div>
                        <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </a>
                      </div>
                      <div class="content">
                        <div class="match-info">
                          <p>{{item.now}}</p>
                          <p class="duration">{{item.nowtime}}</p>
                        </div>
                        <div class="team-info">
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                              <p>{{item.team1}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team1winnum}}</p>
                            <p class="tag tag-side">{{item.team1lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team1killnum}}</p>
                              <div v-if="item.team1killspecial.length !== 0"><img v-for="item1 in item.team1killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <div v-if="item.tag3 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <p>{{item.team1tag3num}}</p>
                              <div v-if="item.team1tag3special.length !== 0"><img v-for="item1 in item.team1tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag4num}}</p>
                              <div v-if="item.team1tag4special.length !== 0"><img v-for="item1 in item.team1tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag5num}}</p>
                              <div v-if="item.team1tag5special.length !== 0"><img v-for="item1 in item.team1tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <div v-if="item.tag6 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <div v-if="item.tag6 !== '经济差 '">
                                <div v-if="item.team1tag6num.length !== 0"><img v-for="item1 in item.team1indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              </div>
                              <p>{{item.team1tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team1indexnum}}</p>
                            </div>
                          </div>
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                              <p>{{item.team2}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team2winnum}}</p>
                            <p class="tag tag-side">{{item.team2lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team2killnum}}</p>
                              <div v-if="item.team2killspecial.length !== 0"><img v-for="item1 in item.team2killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag3num}}</p>
                              <div v-if="item.team2tag3special.length !== 0"><img v-for="item1 in item.team2tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag4num}}</p>
                              <div v-if="item.team2tag4special.length !== 0"><img v-for="item1 in item.team2tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag5num}}</p>
                              <div v-if="item.team2tag5special.length !== 0"><img v-for="item1 in item.team2tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <!-- <img :src="item.pooimg"/> -->
                              <div v-if="item.team2tag6num.length !== 0"><img v-for="item1 in item.team1indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              <p>{{item.team2tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team2indexnum}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 未开始的比赛 -->
          <div v-if="this.gameStatues == 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>未开始的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="lolScoreNotStart.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="lolScoreNotStart.length !== 0" class="container">
              <div v-for="item in lolScoreNotStart" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                 <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-tag" style="min-width: 67px">—</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 已结束的比赛 -->
          <div v-if="this.gameStatues !== 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>已结束的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="lolScoreOver.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="lolScoreOver.length !== 0" class="container">
              <div v-for="item in lolScoreOver" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                 <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-score" style="min-width: 67px">{{item.score}}</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.current == 4">
        <div class="score-list-panel">
          <!-- 进行中的比赛 -->
          <div v-if="this.gameStatues == 0" id="score_living">
            <div class="match-wait-panel-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/images/match_panel_left.png.svg" />
                  <p>进行中的比赛</p>
                  <img src="static/images/match_panel_right.png.svg" />
                </div>
                <div v-if="kogScoreIng.length == 0" class="live_container_tips">
                  <img src="static/images/data_empty_icon.png" alt="">
                  <p>当前暂无赛事安排哦！</p>
                  <p class="desc">欢迎观看其他游戏赛事哦~</p>
                </div>
                <div v-if="kogScoreIng.length !== 0" class="live_container">
                  <div v-for="item in kogScoreIng" :key="item.id" class="match-item-wrapper match-item">
                    <div class="live-item">
                      <div class="header">
                        <img :src="item.gameimg" />
                        <p class="name" @click="jumpLeague(item.eventsid, item.game, item.events)">{{item.events}}</p>
                        <p class="tag">{{item.tag}}</p>
                        <p class="tag">{{item.tag1}}</p>
                        <div class="tag-panel">
                          <p class="tag">{{item.tag2}}</p>
                          <p class="tag">{{item.tag3}}</p>
                          <p class="tag">{{item.tag4}}</p>
                          <p class="tag">{{item.tag5}}</p>
                          <p class="tag">{{item.tag6}}</p>
                        </div>
                        <p class="tag bet">{{item.exponent}}</p>
                        <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') === -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </div>
                        <a :href="item.tv[0].link" target="_blank" v-if="item.tv.length !== 0 && item.tv[0].name.indexOf('斗鱼') !== -1"  class="videos-panel video-panel">
                          <img src="static/images/video_icon.gif" class="live-text" />
                        </a>
                      </div>
                      <div class="content">
                        <div class="match-info">
                          <p>{{item.now}}</p>
                          <p class="duration">{{item.nowtime}}</p>
                        </div>
                        <div class="team-info">
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                              <p>{{item.team1}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team1winnum}}</p>
                            <p class="tag tag-side">{{item.team1lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team1killnum}}</p>
                              <div v-if="item.team1killspecial.length !== 0"><img v-for="item1 in item.team1killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <div v-if="item.tag3 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <p>{{item.team1tag3num}}</p>
                              <div v-if="item.team1tag3special.length !== 0"><img v-for="item1 in item.team1tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag4num}}</p>
                              <div v-if="item.team1tag4special.length !== 0"><img v-for="item1 in item.team1tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team1tag5num}}</p>
                              <div v-if="item.team1tag5special.length !== 0"><img v-for="item1 in item.team1tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <div v-if="item.tag6 === '经济差 '"><img :src="item.pooimg" class="icon" /></div>
                              <div v-if="item.tag6 !== '经济差 '">
                                <div v-if="item.team1tag6num.length !== 0"><img v-for="item1 in item.team1indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              </div>
                              <p>{{item.team1tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team1indexnum}}</p>
                            </div>
                          </div>
                          <div class="team-info-item">
                            <div class="team">
                             <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                              <p>{{item.team2}}</p>
                            </div>
                            <p class="tag tag-bo">{{item.team2winnum}}</p>
                            <p class="tag tag-side">{{item.team2lineup}}</p>
                            <div class="tag kill">
                              <p>{{item.team2killnum}}</p>
                              <div v-if="item.team2killspecial.length !== 0"><img v-for="item1 in item.team2killspecial" :key="item1.id" :src="item1" class="icon first-kill" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag3num}}</p>
                              <div v-if="item.team2tag3special.length !== 0"><img v-for="item1 in item.team2tag3special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag4num}}</p>
                              <div v-if="item.team2tag4special.length !== 0"><img v-for="item1 in item.team2tag4special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag pl-8">
                              <p>{{item.team2tag5num}}</p>
                              <div v-if="item.team2tag5special.length !== 0"><img v-for="item1 in item.team2tag5special" :key="item1.id" :src="item1" class="icon" /></div>
                            </div>
                            <div class="tag">
                              <!-- <img :src="item.pooimg"/> -->
                              <div v-if="item.team2tag6num.length !== 0"><img v-for="item1 in item.team1indexnum" :key="item1.id" :src="item1" class="icon" /></div>
                              <p>{{item.team2tag6num}}</p>
                            </div>
                            <div class="tag bet">
                              <p>{{item.team2indexnum}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 未开始的比赛 -->
          <div v-if="this.gameStatues == 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>未开始的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="kogScoreNotStart.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="kogScoreNotStart.length !== 0" class="container">
              <div v-for="item in kogScoreNotStart" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                 <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-tag" style="min-width: 67px">—</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 已结束的比赛 -->
          <div v-if="this.gameStatues !== 0" class="match-wait-panel-wrapper">
            <div class="match-panel-wrapper">
              <div class="match-panel-container">
                <img src="static/images/match_panel_left.png.svg" />
                <p>已结束的比赛</p>
                <img src="static/images/match_panel_right.png.svg" />
              </div>
            </div>
            <div v-if="kogScoreOver.length == 0" class="live_container_tips">
              <img src="static/images/data_empty_icon.png" alt="">
              <p>当前暂无赛事安排哦！</p>
              <p class="desc">欢迎观看其他游戏赛事哦~</p>
            </div>
            <div v-if="kogScoreOver.length !== 0" class="container">
              <div v-for="item in kogScoreOver" :key="item.id" class="match-item">
                <img :src="item.gameimg" class="match-item-log"/>
                <p class="match-item-time">{{item.time}}</p>
                <p class="match-item-bo">{{item.BO}}</p>
                <div class="home-team">
                  <p class="name">{{item.team1}}</p>
                 <img v-if="item.team1img !== 'http://45.157.91.154/static/'" :src="item.team1img" class="logo"/>
                </div>
                <p class="match-item-score" style="min-width: 67px">{{item.score}}</p>
                <div class="away-team">
                 <img v-if="item.team2img !== 'http://45.157.91.154/static/'" :src="item.team2img" class="logo"/>
                  <p class="name">{{item.team2}}</p>
                </div>
                <div class="leagues" @click="jumpLeague(item.eventsid, item.game, item.events)">
                  <img :src="item.eventsimg" class="logo"/>
                  <p class="name">{{item.events}}</p>
                </div>
                <div class="odd">
                  <p class="home-odd">{{item.exponent}}</p>
                </div>
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
      gameStatues: 0,
      status: [
        {tag: '即时'},
        {tag: '完场'}
      ],
      scoreNav: [
        {id: '0', game: '全部游戏', img: ''},
        {id: '1', game: 'DOTA2', img: '/static/images/dota_sel_icon.png'},
        {id: '2', game: 'CS:GO', img: '/static/images/csgo_sel_icon.png'},
        {id: '3', game: '英雄联盟', img: '/static/images/lol_sel_icon.png'},
        {id: '4', game: '王者荣耀', img: '/static/images/kog_sel_icon.png'}
      ],
      scoreIng: [],
      scoreNotStart: [],
      scoreOver: [],

      dotaScoreIng: [],
      dotaScoreNotStart: [],
      dotaScoreOver: [],

      csScoreIng: [],
      csScoreNotStart: [],
      csScoreOver: [],

      lolScoreIng: [],
      lolScoreNotStart: [],
      lolScoreOver: [],

      kogScoreIng: [],
      kogScoreNotStart: [],
      kogScoreOver: []
    }
  },
  mounted () {
    // this.gameID = this.$route.query.gameID
    // console.log(this.gameID)
    axios.get('/ScoreAppointTag/0').then(response => {
      this.scoreIng = response.data[0]
      console.log(this.scoreIng)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/0').then(response => {
      this.scoreNotStart = response.data[1]
      // console.log(this.scoreNotStart)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/0').then(response => {
      this.scoreOver = response.data[2]
      // console.log(this.scoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })

    axios.get('/ScoreAppointTag/1').then(response => {
      this.dotaScoreIng = response.data[0]
      // console.log(this.dotaScoreIng)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/1').then(response => {
      this.dotaScoreNotStart = response.data[1]
      // console.log(this.dotaScoreNotStart)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/1').then(response => {
      this.dotaScoreOver = response.data[2]
      // console.log(this.scoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })

    axios.get('/ScoreAppointTag/2').then(response => {
      this.csScoreIng = response.data[0]
      // console.log(this.scoreIng)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/2').then(response => {
      this.csScoreNotStart = response.data[1]
      // console.log(this.scoreNotStart)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/2').then(response => {
      this.csScoreOver = response.data[2]
      // console.log(this.scoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })

    axios.get('/ScoreAppointTag/3').then(response => {
      this.lolScoreIng = response.data[0]
      // console.log(this.scoreIng)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/3').then(response => {
      this.lolScoreNotStart = response.data[1]
      // console.log(this.scoreNotStart)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/3').then(response => {
      this.lolScoreOver = response.data[2]
      // console.log(this.scoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })

    axios.get('/ScoreAppointTag/4').then(response => {
      this.kogScoreIng = response.data[0]
      // console.log(this.scoreIng)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/4').then(response => {
      this.kogScoreNotStart = response.data[1]
      // console.log(this.scoreNotStart)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/4').then(response => {
      this.kogScoreOver = response.data[2]
      // console.log(this.scoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  },
  methods: {
    jump (index, type, id) {
      this.current = index
      this.$router.push({
        path: '/score.html',
        query: {
          type: type,
          gameID: id
        }
      })
    },
    jumpLiving (id) {
      let routeData = this.$router.resolve({
        path: '/living.html',
        query: {
          // type: type,
          livingID: id
        }
      })
      window.open(routeData.href, '_blank')
    },
    clickStatus (index) {
      this.gameStatues = index
      // console.log(this.gameStatues)
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
@import "../assets/css/score.css";
@import "../assets/css/score_live.css";
</style>
