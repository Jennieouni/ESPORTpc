<template>
  <div class="select-panel">
    <!-- <a class="activeType type-item" href="javascript:;">
      <p>全部游戏</p>
    </a> -->
    <a v-for="(item, index) in scoreNav" :key="index" @click="clickGame(index)" v-bind:class="{activeType:current==index}" class="type-item" href="JavaScript:;">
      <img :src="item.img" alt="">
      <p>{{item.game}}</p>
    </a>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  data () {
    return {
      current: 0,
      scoreNav: [
        {game: '全部游戏', img: ''},
        {game: 'DOTA2', img: '/static/images/dota_sel_icon.png'},
        {game: 'CS:GO', img: '/static/images/csgo_sel_icon.png'},
        {game: '英雄联盟', img: '/static/images/lol_sel_icon.png'},
        {game: '王者荣耀', img: '/static/images/kog_sel_icon.png'}
      ]
    }
  },
  methods: {
    clickGame (index) {
      this.bus.$emit('sendID', index)
      this.current = index
      // this.gameID = id + 1
      // console.log(this.gameID)
    }
  }
}
</script>
<style scoped>
@import "../assets/css/index.css";
@import "../assets/css/index_match.css";
</style>
