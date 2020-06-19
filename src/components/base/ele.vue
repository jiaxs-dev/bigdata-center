<template>
  <el-scrollbar style="height:100%;overflow-x: hidden;overflow-y: auto" ref="myScrollbar" class="demo">
    <el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-link href="https://element.eleme.cn/#/zh-CN/component/installation">
          element-ui组件库地址(https://element.eleme.cn/#/zh-CN/component/installation)
        </el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </el-row>

      <el-row style="background-color: #FFFFFF;">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>

      </el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-col :span="4">
          <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-col>
        <el-col :span="4">
          <el-select
            v-model="value2"
            multiple
            clearable
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="value1" filterable
                     clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-col :span="4">
          <el-switch
            v-model="s2"
            active-text="按月付费"
            inactive-text="按年付费">
          </el-switch>
        </el-col>
        <el-col :span="4">
          <el-switch
            style="display: block"
            v-model="s1"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费">
          </el-switch>
        </el-col>
      </el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-col :span="6">
          <span class="demonstration">自定义初始值</span>
          <el-slider v-model="slider"></el-slider>
        </el-col>
      </el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-col>
          <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="3" class="item">
            <el-button size="small">回复</el-button>
          </el-badge>
          <el-badge :value="1" class="item" type="primary">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="2" class="item" type="warning">
            <el-button size="small">回复</el-button>
          </el-badge>
        </el-col>
      </el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-col>
          <el-button :plain="true" @click="open2">成功</el-button>
          <el-button :plain="true" @click="open3">警告</el-button>
          <el-button :plain="true" @click="open1">消息</el-button>
          <el-button :plain="true" @click="open4">错误</el-button>
        </el-col>
      </el-row>
      <el-row style="background-color: #FFFFFF;">
        <el-col :span="6">
          <el-form label-width="80px">
            <el-form-item label="活动名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group>
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-row>
  </el-scrollbar>

</template>

<script>
  export default {
    name: "ele",
    data() {
      return {
        radio: '',
        checked1: '',
        checkList: [],
        input: '',
        num: '',
        slider: 50,
        value2: [],
        value1: '',
        s1: '按月付费',
        s2: '按月付费',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
      }
    },
    methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      }
    }
  }
</script>

<style scoped>
  .el-badge {
    margin-right: 20px;
  }

  .el-row{
    padding: 15px;
  }
  .el-scrollbar >>> .el-scrollbar__wrap {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    height: 100% !important;
  }
</style>
