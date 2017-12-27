import Vue from 'vue'
import Router from 'vue-router'
import axios from '../axios/index'

const _import = require('./_import_' + process.env.NODE_ENV)
const Login = _import('Login')
const Index = _import('Index')
const Panel = _import('Panel')// 监控看板
const Projects = _import('Projects/Projects')// 项目列表
const ProjectDetail = _import('Projects/ProjectDetail')// 项目详情
const Notifiers = _import('Notifiers')// 通知人
const AlarmItem = _import('AlarmItem/AlarmItem')// 报警项
const Jurisdiction = _import('Jurisdiction')// 权限
const Macro = _import('Macro')// 宏
const NotFound = _import('NotFound')
import store from '../store/store'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '*', component: NotFound
    },
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      redirect: '/'
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '',
          redirect: 'panel'
        },
        {
          path: 'panel',
          component: Panel
          // meta: {
          //   requireAuth: true
          // }
        },
        {
          path: 'projects',
          component: Projects
        },
        {
          path: 'notifiers',
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
        },
        {
          path: 'projects/:id',
          component: ProjectDetail
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
    if (store.getters.user) {
      next()
    } else {
      axios.get('/node_common/getSession').then((json) => {
        console.log('00000')
        console.log(json.data)
        store.state.user = json.data.response.session.user
        if (!store.state.user || store.state.user === null) {
          next({
            path: '/', component: Login
          })
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
