/**
 * @Author: jiaxiansun@dongao.com
 * @Date: 2020/1/20
 * @Time: 10:54
 * @Description: 路由状态管理
 * @Copyright: www.dongao.com@2020
 */

import vue from "vue"
import vuex from "vuex"
import login from "./modules/login";
import settings from "./modules/settings";

vue.use(vuex);

let store = new vuex.Store({
  modules: {
    login,settings
  }
});

/*
在组件中用this.$store.dispch可以触发store的actions
在组件中用this.$store.commit可以触发store的mutations
*/

export default store;
