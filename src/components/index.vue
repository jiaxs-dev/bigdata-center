<template>
  <div class="layout">
    <div class="siderbar-wrapper" :style="{width: this.isCollapsed?'64px':'240px'}">
      <div class="logo-wrapper" v-if="isCollapsed" style="text-align: left">
        <img src="../assets/img/logo_dandu.png">
      </div>
      <div class="logo-wrapper" v-else>
        <img src="../assets/img/logo_dandu.png">
        <h1>{{systemName}}</h1>
      </div>
      <!--:default-active="$route.path"-->
      <el-menu
        background-color="#424f63"
        text-color="#fff"
        active-text-color="#65cea7"
        class="menu-wrapper"
        :collapse-transition=false
        router
        unique-opened
        :collapse="isCollapsed"
        :default-active="menus.defaultActive"
        :default-openeds="menus.defaultOpeneds">
        <template v-for="(item, index) in sider_menu_data">
          <el-menu-item class="menu-item" v-if="!item.children" :index="item.path" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>

            <template v-for="(sub_item, sub_index) in item.children">
              <el-menu-item class="menu-item is-active" :index="sub_item.path"
                            :key="sub_index" v-if="sub_item.path == menus.defaultActive">
                <span slot="title" style="margin-left:12px;">{{sub_item.title}}</span>
              </el-menu-item>
              <el-menu-item class="menu-item" v-else :index="sub_item.path"
                            :key="sub_index">
                <span slot="title" style="margin-left:12px;">{{sub_item.title}}</span>
              </el-menu-item>
            </template>


          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="topbar-wrapper" :style="{left: this.isCollapsed?'64px':'240px'}">
      <div class="menu-collapse-wrapper float-left" @click="toggleMenu">
        <i class="icon el-adm-icon-menu"
           :style="{transform: 'rotateZ(' + (this.isCollapsed ? '90' : '0') + 'deg)'}"></i>
      </div>
      <ul class="menu-list float-left">
        <el-tabs v-model="menus.activeTab" @tab-click="handleClick">
          <template v-for="(tab,index) in menus.menuItems">
            <el-tab-pane :label="tab.title" :name="String(index)"></el-tab-pane>
          </template>

        </el-tabs>
      </ul>
      <ul class="menu-list float-right">
        <li v-if="true" class="menu-item" style="padding: 0;">
          <el-dropdown
            :show-timeout="10"
            :hide-timeout="10"
            @command="handleCommand"
            style="padding: 0 15px;">
            <div class="dropdown-content el-dropdown-link">
              <i class="icon el-adm-icon-usersetup" style="color: blue"></i>
              <span class="text">{{userName}}</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <!--<el-dropdown-item command="a">管理员</el-dropdown-item>-->
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li class="menu-item" @click="exit">
          <i class="icon el-adm-icon-exit" style="color: red"></i>
        </li>
      </ul>
    </div>
    <div class="content-wrapper" ref="content-wrapper" :style="{left: this.isCollapsed?'64px':'240px'}">
      <div class="content">
        <router-view v-bind:isCollapsed="isCollapsed"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters, mapState} from 'vuex'
  import {logoutApi} from "../api/login/login";

  export default {
    created() {

    },
    data() {
      return {
        sider_menu_data: [],
        isCollapsed: false,
        userName: '',
        menus: {
          activeTab: '0',
          menuItems: [],
          defaultActive: '',
          defaultOpeneds: []
        }
      }
    },

    computed: {
      ...mapGetters({
        getUserName: 'login/userName'
      }),
      ...mapState({
        loginInfo: 'login'
      }),
      copyright() {
        return this.$store.state.settings.copyright
      },
      systemName() {
        return this.$store.state.settings.systemName
      },
      indexPage() {
        return this.$store.state.settings.indexPage
      }
    },
    watch: {
      /**
       * 监听路由变化  切换左侧菜单选中项
       * @param to
       * @param from
       */
      $route(to, from) {
        console.log(to.path);
        /*this.sider_menu_data = this.menus.menuItems[Number(this.menus.activeTab) - 1]['children'];
        this.menus.defaultOpeneds = [this.sider_menu_data[0]['path']];
        this.menus.defaultActive = this.sider_menu_data[0]['children'][0]['path'];
        this.menus.defaultActive = to.path;*/

        this.initSelectedMenu();
      }
    },
    mounted() {
      console.log(this.$route.path)
      this.userName = this.getUserName;
      let menuItems = this.initMenuItem();//此处需调用后台api接口返回数据
      this.menus.menuItems = menuItems;
      this.initSelectedMenu();
    },

    methods: {
      /**
       * 调用api返回用户菜单列表
       * @returns {({children: [{path: string, children: [{path: string, title: string}, {path: string, title: string}, {path: string, title: string}], icon: string, title: string}], index: string, title: string}|{children: [{path: string, children: [{path: string, title: string}], icon: string, title: string}, {path: string, children: [{path: string, title: string}, {path: string, title: string}], icon: string, title: string}, {path: string, children: [{path: string, title: string}, {path: string, title: string}, {path: string, title: string}, {path: string, title: string}, {path: string, title: string}], icon: string, title: string}], index: string, title: string})[]}
       */
      initMenuItem() {
        return [
          {
            index: '1',
            title: '数据分析',
            children: [{
              path: '/analysis',
              title: '数据分析',
              icon: 'icon el-adm-icon-statistics',
              children: [
                {path: '/analysis/advertising', title: '广告分析'},
                {path: '/analysis/plan', title: '方案分析'},
                {path: '/analysis/activity', title: '活动分析'}
              ]
            }]
          }, {
            index: '2',
            title: 'DIO',
            children: [{
              path: '/cms',
              title: '页面分析',
              icon: 'icon el-adm-icon-form',
              children: [
                {path: '/cms/data', title: 'CMS'}
              ]
            }, {
              path: '/source',
              title: '来源分析',
              icon: 'icon el-adm-icon-location',
              children: [
                {path: '/source/all', title: '全部来源'},
                {path: '/source/advertising', title: '广告来源'}
              ]
            }, {
              path: '/member',
              title: '用户',
              icon: 'icon el-adm-icon-user',
              children: [
                {path: '/member/predict', title: '考种预测分析'},
                {path: '/member/behavior', title: '行为轨迹分析'},
                {path: '/member/regsource', title: '注册来源分析'},
                {path: '/member/regexam', title: '注册考种分析'},
                {path: '/member/info', title: '用户细查'}
              ]
            }]
          }];
      },
      /**
       * 根据路由初始化主页及默认选中菜单
       */
      initSelectedMenu() {
        let path = this.$route.path;
        if (path == '/') {
          this.menus.activeTab = '0';
          this.sider_menu_data = this.menus.menuItems[0]['children'];
          this.menus.defaultOpeneds = [this.sider_menu_data[0]['path']];
          this.menus.defaultActive = this.sider_menu_data[0]['children'][0]['path'];
          this.$router.replace(this.sider_menu_data[0]['children'][0]['path']);
        } else {
          for (let menuItem in this.menus.menuItems) {
            for (let subMenu in this.menus.menuItems[menuItem]['children']) {
              for (let childMenu in this.menus.menuItems[menuItem]['children'][subMenu]['children']) {
                let spath = this.menus.menuItems[menuItem]['children'][subMenu]['children'][childMenu]['path'];
                if (spath == path) {
                  this.menus.activeTab = menuItem;
                  this.sider_menu_data = this.menus.menuItems[menuItem]['children'];
                  this.menus.defaultOpeneds = [this.menus.menuItems[menuItem]['children'][subMenu]['path']];
                  this.menus.defaultActive = path;
                  break;
                }
              }
            }
          }

        }
      },

      /*menuClick(index, indexPath) {
        this.menus.defaultActive = indexPath;
      },*/
      handleClick(tab, event) {
        let index = tab.index;
        console.log(index)
        this.sider_menu_data = this.menus.menuItems[Number(index)]['children'];
        this.menus.defaultOpeneds = [this.sider_menu_data[0]['path']];
        this.menus.defaultActive = this.sider_menu_data[0]['children'][0]['path'];
        this.$router.replace(this.sider_menu_data[0]['children'][0]['path']);
      },
      ...mapActions({
        logout: 'login/logout'
      }),
      handleCommand(command) {
        console.log(command);
      },
      toggleMenu() {
        this.isCollapsed = !this.isCollapsed;
      },
      exit() {
        this.$confirm('即将退出系统登陆，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          /*this.$store.commit('SET_TOKEN', '');
          this.$store.commit('SET_USER', null);*/
          logoutApi().then(res => {
            if (res.code == 0) {
              this.$message.success('退出成功');
              this.logout(); //actions*/
              this.$router.replace({path: '/login'});
            }
          }).catch(err => {
            this.$message.error('退出失败');
          })
        }).catch(() => {
          return false;
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/style/variable";
  @import "../assets/style/base";
  @import "../assets/style/common";

  .siderbar-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $siderbarWidth;
    z-index: 11;
    background-color: $siderbarBackgroundColor;
    transition: all 0.3s ease-in-out;

    /*.logo-wrapper {
      height: 48px;
      line-height: 48px;
      font-size: 20px;
      text-align: center;
      color: #FFFFFF;
      color: #65CEA7;
    }*/
    .logo-wrapper {
      height: 48px;
      position: relative;
      line-height: 48px;
      padding-left: 16px;
      -webkit-transition: all .3s;
      transition: all .3s;
      overflow: hidden;

      &.light {
        background-color: #fff;

        h1 {
          color: #1890ff;
        }
      }

      &.dark {
        background-color: #002140;

        h1 {
          color: #fff;
        }
      }

      h1 {
        color: #fff;
        font-size: 19px;
        margin: 0 0 0 12px;
        font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
        font-weight: 600;
        display: inline-block;
        height: 26px;
        line-height: 26px;
        vertical-align: middle;
      }

      img {
        width: 26px;
        display: inline-block;
        vertical-align: middle;
      }
    }


    .menu-wrapper {
      position: absolute;
      top: 48px;
      bottom: 0;
      width: 100%;
      border-right: none;
      transition: all 0.3s ease-in-out;

      &:not(.el-menu--collapse) {
        overflow-y: auto;
        overflow-x: hidden;
      }

      i {
        color: #FFFFFF;
      }

      .menu-item {
        &.is-active, &:hover {
          background-color: #353F4F !important;
          color: #65CEA7 !important;

          i {
            color: #65CEA7 !important;
          }
        }

      }

      .el-submenu__title:hover {
        color: #65CEA7 !important;

        i {
          color: #65CEA7 !important;
        }
      }

      .el-submenu, .el-menu-item {
        width: 100%;
      }
    }
  }

  .topbar-wrapper {
    position: fixed;
    left: $siderbarWidth;
    right: 0;
    top: 0;
    heihgt: $topbarHeight;
    line-height: $topbarHeight;
    padding: 0 24px 0 0;
    background-color: $topbarBackgroundColor;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    transition: all 0.3s ease-in-out;
    z-index: 12;

    .menu-collapse-wrapper {
      height: 100%;
      width: 48px;
      text-align: center;
      cursor: pointer;

      i {
        transition: all 0.3s ease-in-out;
      }
    }

    .title {
      height: 100%;
      font-weight: bold;
    }

    .menu-list {
      .menu-item {
        position: relative;
        float: left;
        padding: 0 15px;
        min-width: 45px;
        height: 48px;
        text-align: center;
        font-size: 0px;

        &:hover {
          cursor: pointer;
          background-color: #F5F5F5;
        }

        .icon {
          vertical-align: middle;
          font-size: 24px;
        }

        .text {
          display: inline-block;
          vertical-align: middle;
          margin-left: 4px;
          font-size: 16px;
        }
      }
    }
  }

  .content-wrapper {
    position: fixed;
    left: $siderbarWidth;
    right: 0;
    top: $topbarHeight;
    bottom: 0;
    overflow: auto;
    transition: all 0.3s ease-in-out;

    .content {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  .el-tabs__header {
    margin: 0px !important;
  }

  .el-tabs__item {
    font-size: 16px !important;
  }

  .el-menu-item, .el-submenu__title {
    height: 48px !important;
    line-height: 48px !important;
  }

</style>
