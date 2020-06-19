// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Viser from 'viser-vue'
import axios from 'axios';
import store from "./store/store";

import {getCookie} from "./assets/js/commonFun";

import '@/assets/icon/iconfont.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.use(Viser)
Vue.use(ElementUI);

/**
 * axios全局相应处理
 */
axios.interceptors.response.use(res => {
  if (res.data.code == 401) {
    router.push({
      path: '/login',
      redirect: router.currentRoute.fullPath
    });
  } else if (res.data.code == 403) {
    router.push({
      path: '/error/403'
    });
  }
  return res;
}, async error => {
  return Promise.reject(error);
});


let loading;
router.beforeEach((to, form, next) => {
  /*loading = Loading.service({
    // fullscreen: true,
    target: '.content-wrapper',
    text: '跳转中...'
  });*/
  if (!to.matched.length) {
    next({
      path: '/error/404',
      replace: true
    });
  } else {
    if (to.meta.requireAuth) {
      let userName = getCookie('userName');
      if (null != userName && undefined != userName && "" != userName) {
        next();
      } else {
        next({
          path: "/login",
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next();
    }
  }
});

/*router.afterEach((to, from) => {
  // 解决某些情况下loading无法关闭的情况
  setTimeout(() => {
    loading.close();
  }, 0)
});*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
