export default {
  namespaced: true,
  state: {
    systemName: '大数据中台',
    copyright: 'copyright @ 东奥教育集团-大数据组',
    indexPage: '/'
  },
  actions: {
    initIndexPage(context, indexPage) {
      context.commit('initIndexPage', indexPage);
    }
  },
  mutations: {
    initIndexPage(state, indexPage) {
      state.indexPage = indexPage;
    }
  }
}
