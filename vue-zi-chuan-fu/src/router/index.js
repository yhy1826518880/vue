import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    }
  ]
})
