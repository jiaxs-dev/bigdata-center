<template>
  <el-scrollbar style="height:100%;overflow-x: hidden;overflow-y: auto" ref="myScrollbar" class="demo">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>基础样式</el-breadcrumb-item>
          <el-breadcrumb-item>地图样例</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="padding: 0px 10px">
        <el-form ref="form" :inline="true" :model="form" label-width="80px" class="top-radius">
          <el-form-item label="活动时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="24" style="padding: 0px 10px">
        <el-form ref="form" :inline="true" :model="form" label-width="80px" class="bottom-radius">
          <el-form-item label="活动时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-card>
          <div slot="header">地图样例</div>
          <div id="map" class="map" style="height: 600px"></div>
        </el-card>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script>
  import echarts from 'echarts';
  import data from '../../../static/data';
  import 'echarts/dist/extension/bmap.min.js';
  import Icon from "./icon";

  export default {
    name: "echarts",
    components: {Icon},
    data() {
      return {
        chart: null,
        form: {
          date1: '',
          date2: '',
          region: ''
        }
      }
    },
    mounted() {
      this.drawMap('map');
    },
    methods: {
      convertData(oldData) {
        let res = [];
        for (let i = 0; i < oldData.length; i++) {
          let geoCoord = data.canteen.geoCoordMap[oldData[i].name];
          if (geoCoord) {
            res.push({
              name: oldData[i].name,
              value: geoCoord.concat(oldData[i].value)
            });
          }
        }
        return res;
      },
      drawMap(id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          tooltip: {
            trigger: 'item'
          },
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 15,
            top: 10
          },
          bmap: {
            center: [114.427461, 30.51729],
            zoom: 15,
            roam: true,
            mapStyle: {
              style: 'normal'
            }
          },
          series: [
            {
              name: '最喜爱食堂',
              type: 'scatter',
              coordinateSystem: 'bmap',
              data: this.convertData(data.canteen.canteenContent),
              symbolSize: function (val) {
                return (val[2] + 3) * 2;
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: 'purple'
                }
              }
            },
            {
              name: 'Top 3',
              type: 'effectScatter',
              coordinateSystem: 'bmap',
              data: this.convertData(data.canteen.canteenContent.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 4)),
              symbolSize: function (val) {
                return (val[2] + 3) * 2;
              },
              showEffectOn: 'render',
              rippleEffect: {
                scale: 2,
                brushType: 'fill'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: 'purple',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            }
          ]
        });
      }
    }
  }
</script>

<style scoped>
  .el-scrollbar >>> .el-scrollbar__wrap {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    height: 100% !important;
  }
  .el-form {
    background-color: #FFFFFF;
    padding: 0px 10px;
  }

  .el-form-item {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }

  .top-radius {
    border-top-left-radius: 5px;
    border-top-right-radius-radius: 5px;
  }

  .bottom-radius {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .echarts-area {
    min-height: 300px;
  }

  .el-col {
    padding: 10px;
  }

  .el-table {
    border-radius: 5px;
  }
</style>
