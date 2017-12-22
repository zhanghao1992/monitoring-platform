import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Panel from '@/views/Panel'// 监控看板
import Projects from '@/views/Projects'// 项目列表
import Notifiers from '@/views/Notifiers'// 通知人
import AlarmItem from '@/views/AlarmItem'// 报警项
import Jurisdiction from '@/views/Jurisdiction'// 权限
import Macro from '@/views/Macro'// 宏
import NotFound from '@/views/NotFound'
import store from '../store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '*', component: NotFound},
    {
      path: '/',
      component: Login
    },
    {
      path: '/index',
      // meta: {
      //   requireAuth: true
      // },
      component: Index,
      children: [
        {
          path: '',
          redirect: 'panel'
        },
        {
          path: 'panel',
          component: Panel
        },
        {
          path: 'projects',
          component: Projects
        },
        {
          path: 'nbaotifiers',
          component: Notifiers
        },
        {
          path: 'alerm-item',
          component: AlarmItem
        },
        {
          path: 'jhonhurisdiction',
          component: Jurisdiction
        },
        {
          path: 'macro',
          component: Macro
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // const WL = window.localStorage
  // const userInfo = JSON.parse(WL.getItem('userInfo'))
  // store.state.user = userInfo
  if (to.meta && to.meta.requireAuth) {
    // 获取session
    if (store.state.user) {
      next()
    } else {
      axios.get('/node_common/getSession').then((json) => {
        console.log(json.data)
        store.state.user = json.data.response.session.user
        if (!store.state.user || store.state.user === null) {
          next({path: '/login', component: Login})
        } else {
          next()
        }
      })
    }
  } else {
    next()
  }
})
export default router
