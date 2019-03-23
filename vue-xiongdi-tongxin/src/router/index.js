import Vue from 'vue'
import Router from 'vue-router'

import Fu from '@/components/fu.vue'
import Zi from '@/components/zi.vue'
import Zizi from '@/components/zi-zi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fu',
      name: 'fu',
      component: Fu
    },
    {
      path: '/zi',
      name: 'zi',
      component: Zi
    },
    {
      path: '/zi-zi',
      name: 'zi-zi',
      component: Zizi
    }
  ]
})
