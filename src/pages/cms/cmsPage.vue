<template>
  <el-scrollbar
    style="height:100%;overflow-x: hidden;overflow-y: auto"
    ref="myScrollbar"
    class="demo"
  >
    <!-- 面包屑导航开始 -->
    <el-row>
      <el-col :span="24" style="padding-bottom:10px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>页面分析</el-breadcrumb-item>
          <el-breadcrumb-item>CMS</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script>
  export default {
    name: "cmsPage"
  }
</script>

<style lang="css" scoped>
  @import "../../assets/css/page.css";

  .el-table >>> td, .el-table >>> th {
    padding: 5px 0 !important;
  }

  /*#filterForm >>> .el-form-item__content {
    margin-left: 0px !important;
  }*/
</style>
