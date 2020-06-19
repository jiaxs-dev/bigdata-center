import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import index from '@/components/index'
import error from '@/components/error/error'

import activity from "@/pages/analysisPage/activity/activityPage";
import advertising from "@/pages/analysisPage/advertising/advertisingPage";
import plan from "@/pages/analysisPage/plan/plan.vue";

import cmsPage from "@/pages/cms/cmsPage";

import icon from "@/components/base/icon";


Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
      path: '/icon',
      name: 'icon',
      component: icon,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/',
      name: 'index',
      /*redirect: '/analysis/advertising',*/
      component: index,
      meta: {
        requireAuth: true
      },
      children: [{
        path: '/analysis/activity',
        name: 'activity',
        component: activity,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/analysis/advertising',
        name: 'advertising',
        component: advertising,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/analysis/plan',
        name: 'plan',
        component: plan,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/cms/data',
        name: 'cmsPage',
        component: cmsPage,
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
