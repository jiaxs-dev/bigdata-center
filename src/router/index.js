import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import index from '@/components/index'
import icon from '@/components/base/icon'
import ele from '@/components/base/ele'
import echarts from '@/components/base/echarts'
import map from '@/components/base/map'
import error from '@/components/error/error'

import tableChart from '@/components/base/table&Chart'

import welcome from '@/components/welcome/welcome'
import screenDashboard from '@/components/base/fullScreenDashboard'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/fullScreenDashboard',
      name: 'fullScreenDashboard',
      component: screenDashboard,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '',
      name: 'index',
      component: index,
      meta: {
        requireAuth: true
      },
      children: [{
        path: '/screenDashboard',
        name: 'screenDashboard',
        component: screenDashboard,
        meta: {
          requireAuth: false
        }
      }, {
        path: '/',
        name: 'welcome',
        component: welcome,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/base/icon',
        name: 'icon',
        component: icon,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/base/ele',
        name: 'ele',
        component: ele,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/base/echarts',
        name: 'echarts',
        component: echarts,
        meta: {
          requireAuth: true
        }
      },{
        path: '/base/map',
        name: 'map',
        component: map,
        meta: {
          requireAuth: true
        }
      },{
        path: '/base/table-chart',
        name: 'tableChart',
        component: tableChart,
        meta: {
          requireAuth: true
        }
      }]
    },
    {
      path: '/error/:code',
      name: 'error',
      meta: {
        title: 'error',
        requireAuth: false
      },
      component: error
    }
  ]
})
