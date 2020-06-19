import {getCookie, isNotBlank, removeCookie, setCookie} from "../../assets/js/commonFun";

const state = {
  loginTime: '',
  userName: '',
  token: '',
  menus: [],
  uris: []
};

const getters = {
  userName: state => {
    return isNotBlank(state.userName) ? state.userName : getCookie("userName");
  },
  token: state => {
    return isNotBlank(state.token) ? state.token : getCookie("token");
  }
};

const mutations = {
  initMenus(state, menus) {

  },
  initUris() {

  },
  login(state, userInfo) {
    console.log("in mutations")
    state.userName = userInfo.userName;
    state.token = userInfo.token;
    setCookie("userName", userInfo.userName, 30);
    setCookie("token", userInfo.token, 30);
  },
  logout(state) {
    console.log("in mutations")
    state.userName = '';
    state.token = '';
    removeCookie("userName");
    removeCookie("token");
  }
};

const actions = {
  login(context, userInfo) {
    console.log('in actions')
    context.commit('login', userInfo);
  },
  logout(context) {
    console.log('in actions')
    context.commit('logout');
  }
};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
