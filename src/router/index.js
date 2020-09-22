import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import score from '@/components/score'
import schedule from '@/components/schedule'
import info from '@/components/info'
import infoDetail from '@/components/info_detail'
import league from '@/components/league'
import living from '@/components/living'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/index.html',
    name: 'index',
    component: index
  },
  {
    path: '/score.html',
    name: 'score',
    component: score
  },
  {
    path: '/schedule.html',
    name: 'schedule',
    component: schedule
  },
  {
    path: '/info.html',
    name: 'info',
    component: info
  },
  {
    path: '/info_detail.html',
    name: 'info_detail',
    component: infoDetail
  },
  {
    path: '/league.html',
    name: 'league',
    component: league
  },
  {
    path: '/living.html',
    name: 'living',
    component: living
  }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
