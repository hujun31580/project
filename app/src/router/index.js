import Vue from 'vue'
import Router from 'vue-router'
import Data from '@/views/Data'
import Home from '@/views/Home'
import Plan from '@/views/Plan'
import Unit from '@/views/Unit'
import Creativity from '@/views/Creativity'
import Tool from '@/views/Tool'
import Login from '@/views/Login'
import store from '@/store/store'
import New  from '@/views/new'
import NewSelect  from '@/views/newSelect'
import NewUnitl from '@/views/newUnitl'
import NewChuang from '@/views/newChuang'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/plan',
      name: 'plan',
      component: Plan
    }, {
      path: '/unitl',
      name: 'unitl',
      component: Unit
    }, {
      path: '/creativity',
      name: 'creativity',
      component: Creativity
    }, {
      path: '/data',
      name: 'data',
      component: Data
    }, {
      path: '/tool',
      name: 'tool',
      component: Tool
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
    , {
      path: '/new',
      name: 'new',
      component: New,
      children:[
        {
          path: 'select',
          name: 'select',
          component: NewSelect
        },
        {
          path: 'chuang',
          name: 'chuang',
          component: NewChuang
        },
        {
          path: 'unitl',
          name: 'unitl',
          component:NewUnitl
        }
      ]

    }
  ]
})

router.beforeEach((to, from, next) => {
  const inLogin = checkLoginState()
  if (to.name !== 'login') {
    if (inLogin) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

function checkLoginState() {
  const isLogin = localStorage.getItem('token')
  const name = localStorage.getItem('name')
    if(isLogin ){
      console.log(isLogin)
       store.commit('getUser',name)
    }
  return isLogin
}
export default router
