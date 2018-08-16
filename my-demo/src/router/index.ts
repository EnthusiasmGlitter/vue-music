import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend/recommend.vue'
import wangyi from '@/components/wangyi/wangyi.vue'
import rank from '@/components/rank/rank.vue'
import singer from '@/components/singer/singer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wangyi',
      redirect: '/wangyi/recommend',
      component: wangyi,
      children: [
        {
          path: '/wangyi/recommend',
          name: 'recommend',
          component: recommend
        }
      ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    }
  ]
})
