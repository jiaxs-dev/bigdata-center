<template>
  <el-scrollbar style="height:100%;overflow-x: hidden;overflow-y: auto" ref="myScrollbar" class="demo">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>基础样式</el-breadcrumb-item>
          <el-breadcrumb-item>图表组合样例</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="padding-bottom: 0px;padding-top: 0px">
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
        </el-form>
      </el-col>
      <el-col :span="24" style="padding-top: 0px">
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
      <el-col :span="4">
        <div style="width: 100%;height: 100px;background-color: #FFFFFF;border-radius: 5px">
          <div class="left-area" style="background: rgb(45, 140, 240); width: 36%;">
            <el-icon class="el-icon-user"
                     style="font-size: 36px; color: rgb(255, 255, 255);display: table-cell;
    vertical-align: middle;">
            </el-icon>
          </div>
          <div class="right-area" style="width: 64%;">
            <div>
              <div class="count-to-wrapper">
                <p class="content-outer">
                  <span id="count_to_319" class="count-style">803</span>
                  <i class="count-to-unit-text"></i>
                </p></div>
              <p>新增用户</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div style="width: 100%;height: 100px;background-color: #FFFFFF;border-radius: 5px">
          <div class="left-area" style="background: rgb(240,226,132); width: 36%;">
            <el-icon class="el-icon-view"
                     style="font-size: 36px; color: rgb(255, 255, 255);display: table-cell;
    vertical-align: middle;">
            </el-icon>
          </div>
          <div class="right-area" style="width: 64%;">
            <div>
              <div class="count-to-wrapper">
                <p class="content-outer">
                  <span class="count-style">803</span>
                  <i class="count-to-unit-text"></i>
                </p></div>
              <p>新增用户</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div style="width: 100%;height: 100px;background-color: #FFFFFF;border-radius: 5px">
          <div class="left-area" style="background: rgb(240,50,47); width: 36%;">
            <el-icon class="el-icon-data-analysis"
                     style="font-size: 36px; color: rgb(255, 255, 255);display: table-cell;
    vertical-align: middle;">
            </el-icon>
          </div>
          <div class="right-area" style="width: 64%;">
            <div>
              <div class="count-to-wrapper">
                <p class="content-outer">
                  <span class="count-style">803</span>
                  <i class="count-to-unit-text"></i>
                </p></div>
              <p>新增用户</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div style="width: 100%;height: 100px;background-color: #FFFFFF;border-radius: 5px">
          <div class="left-area" style="background: rgb(94,240,39); width: 36%;">
            <el-icon class="el-icon-wallet"
                     style="font-size: 36px; color: rgb(255, 255, 255);display: table-cell;
    vertical-align: middle;">
            </el-icon>
          </div>
          <div class="right-area" style="width: 64%;">
            <div>
              <div class="count-to-wrapper">
                <p class="content-outer">
                  <span class="count-style">803</span>
                  <i class="count-to-unit-text"></i>
                </p></div>
              <p>新增用户</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div style="width: 100%;height: 100px;background-color: #FFFFFF;border-radius: 5px">
          <div class="left-area" style="background: rgb(240,65,240); width: 36%;">
            <el-icon class="el-icon-shopping-cart-full"
                     style="font-size: 36px; color: rgb(255, 255, 255);display: table-cell;
    vertical-align: middle;">
            </el-icon>
          </div>
          <div class="right-area" style="width: 64%;">
            <div>
              <div class="count-to-wrapper">
                <p class="content-outer">
                  <span class="count-style">803</span>
                  <i class="count-to-unit-text"></i>
                </p></div>
              <p>新增用户</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div style="width: 100%;height: 100px;background-color: #FFFFFF;border-radius: 5px">
          <div class="left-area" style="background: rgb(240,236,20); width: 36%;">
            <el-icon class="el-icon-s-grid"
                     style="font-size: 36px; color: rgb(255, 255, 255);display: table-cell;
    vertical-align: middle;">
            </el-icon>
          </div>
          <div class="right-area" style="width: 64%;">
            <div>
              <div class="count-to-wrapper">
                <p class="content-outer">
                  <span class="count-style">803</span>
                  <i class="count-to-unit-text"></i>
                </p></div>
              <p>新增用户</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-card>
          <div id="gotobedpie" class="echarts-area"></div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <div id="chart8" class="echarts-area"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card>
          <div id="gotobedbar" class="echarts-area"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div id="lineChart" class="echarts-area"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>

    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table
          stripe
          v-loading="loading"
          border
          :highlight-current-row="true"
          :data="list">
          <el-table-column
            type="selection"
            align="center"
            width="55">
          </el-table-column>

          <el-table-column
            prop="name"
            label="图书名称">
          </el-table-column>

          <el-table-column
            label="考种名称"
            width="150"
            prop="exam_name">
          </el-table-column>

          <el-table-column
            label="科目名称"
            width="150"
            prop="subject_name">
          </el-table-column>

          <el-table-column
            prop="s_subject_name"
            label="考季名称">
          </el-table-column>

          <el-table-column
            width="100"
            align="center"
            prop="book_type_name"
            label="图书类型">
          </el-table-column>

          <el-table-column
            prop="status"
            label="状态"
            align="center"
            width="100">
          </el-table-column>

          <el-table-column align="center" label="操作" width="400">
            <template slot-scope="scope">
              <el-button size="small" type="danger" icon="el-icon-delete">删除
              </el-button>
              <el-button size="small" type="warning" icon="el-icon-edit">编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script>
  import Pagination from "./Pagination";
  import {pageBook} from '../../api/book'
  import echarts from 'echarts';
  import data from '../../../static/data';

  export default {
    name: "tableChart",
    data() {
      return {
        number: 0, // 播放所在下标
        timer: null,
        xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        data: [54, 86, 46, 77, 96, 89, 88, 23, 38, 3, 66, 98],
        chart: null,
        list: [],
        loading: false,
        form: {
          date1: '',
          date2: '',
          region: ''
        },
        queryParam: {
          bookName: "",
          pageNum: 1,
          pageSize: 10,
          examIds: [],
          bookType: [],
          subjectIds: [],
          seasonSubjectIds: [],
          year: []
        },
        pageparm: {
          currentPage: 1,
          pageSize: 10,
          total: 10
        }
      }
    },
    components: {
      Pagination
    },
    mounted() {
      this.drawbar('gotobedbar');
      this.drawpie('gotobedpie');
      this.drawLine();
      this.getTable();
      this.getEchart("chart8");
    },
    methods: {
      getEchart(id) {
        let myChart = echarts.init(document.getElementById(id));
        this.option = {
          tooltip: {
            trigger: 'axis',
            showContent: false,
            axisPointer: {
              type: 'shadow',
              shadowStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 1,
                  color: '#5d83ff'
                }, {
                  offset: 0,
                  color: 'rgba(255, 255, 255, 0)'
                }])
              }
            },
          },
          color: ['#5d83ff'],
          grid: {
            top: 30,
            left: 20,
            right: 20,
            bottom: 20,
            containLabel: true //轴上的数值
          },
          xAxis: {
            type: 'category',
            data: this.xData,
            boundaryGap: false,
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: '{value} 月'
            },
            axisLine: {
              lineStyle: {
                color: '#999',
              }
            },
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#999'
              }
            },
          },
          series: [{
            name: '人数',
            type: 'line',
            data: this.data,
            symbolSize: 10,
            itemStyle: {
              opacity: 0,
            },
            emphasis: {
              label: {
                show: true,
                color: '#fff',
                fontSize: 20
              },
              itemStyle: {
                color: '#5d83ff',
                borderColor: '#fff',
                borderWidth: 2,
                opacity: 1
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#5d83ff'
                }, {
                  offset: 1,
                  color: 'rgba(0, 0, 0, 0)'
                }]),
              }
            },
            smooth: true,
          }]
        };
        myChart.setOption(this.option, true);

        window.addEventListener('resize', () => {
          myChart.resize();
        });

        this.timer = setInterval(() => {
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: this.number
          });

          this.number++;

          if (this.number > this.data.length) {
            this.number = 0;
          }
        }, 1000);
      },
      drawbar(id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          title: {
            text: "柱状图样例",
            textStyle: {
              color: '#333',
              fontSize: 14, // 务必记住设置文字大小只能是数字
              fontWeight: 'lighter',
              top: 10,
              left: 10
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            feature: {
              magicType: {
                type: ['line', 'bar']
              },
              saveAsImage: {},
              dataView: {}
            },
            right: 15,
            top: 10
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundrayGap: false,
              data: data.gotobed.time
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '人数',
              max: 35
            }
          ],
          series: [
            {
              name: '睡觉时间',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 20,
                  color: 'purple',
                  shadowColor: 'rgba(0, 0, 0, 0.4)',
                  shadowBlur: 20
                }
              },
              areaStyle: {normal: {}},
              data: data.gotobed.number
            }
          ]
        });
      },
      drawpie(id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          title: {
            text: "饼图样例",
            textStyle: {
              color: '#333',
              fontSize: 14, // 务必记住设置文字大小只能是数字
              fontWeight: 'lighter',
              top: 20,
              left: 10
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            /*orient: 'vertical',
            left: 5,
            top: 15,*/
            data: data.gotobed.time,
            orient: "vertical",
            right: 5,
            top: 10
          },
          series: [
            {
              name: '人数',
              type: 'pie',
              selectedMode: 'single',
              radius: '70%',
              center: ['50%', '60%'],
              data: data.gotobed.numberData,
              itemStyle: {
                normal: {
                  borderWidth: 0.5,
                  borderColor: '#ffffff'
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowOffset: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      },
      drawLine() {
        this.chart = echarts.init(document.getElementById("lineChart"));
        let colors = ['#5793f3', '#d14a61', '#675bba'];
        let option = {
          title: {
            text: "折线图样例",
            textStyle: {
              color: '#333',
              fontSize: 14, // 务必记住设置文字大小只能是数字
              fontWeight: 'lighter',
              top: 10,
              left: 10
            }
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true
          },
          color: colors,
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: ['2015 降水量', '2016 降水量'],
            orient: "horizontal",
            right: 5,
            top: 10

          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[1]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return '降水量  ' + params.value
                      + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                  }
                }
              },
              data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
            },
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[0]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return '降水量  ' + params.value
                      + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                  }
                }
              },
              data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '2015 降水量',
              type: 'line',
              xAxisIndex: 1,
              smooth: true,
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name: '2016 降水量',
              type: 'line',
              smooth: true,
              data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            }
          ]
        };
        this.chart.setOption(option);
      },
      query() {
        this.$message.success("查询完毕");
      },
      getTable() {
        this.loading = true;
        pageBook(this.queryParam).then(res => {
          let result = JSON.parse(JSON.stringify(res));
          if (result.code == 200) {
            this.list = result.result.data;
            this.pageparm.currentPage = this.queryParam.pageNum;
            this.pageparm.pageSize = this.queryParam.pageSize;
            this.pageparm.total = result.result.totalCount;
          } else {
            this.$message.error("图书加载异常，异常信息为" + result.message);
          }
        }).catch(err => {
          this.$message.error("图书加载失败");
        });
        this.loading = false;
      },
      callFather(parm) {
        this.queryParam.pageNum = parm.currentPage
        this.queryParam.pageSize = parm.pageSize
        this.getTable();
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

  .left-area {
    float: left;
    height: 100%;
    display: table;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .right-area {
    float: left;
    height: 100%;
    display: table;
    text-align: center;
    font-size: 14px;
    vertical-align: middle;
  }

  .content-outer {
    display: inline-block;
    margin-top: 5px;
  }

  .count-style {
    font-size: 50px;
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
    border-top-right-radius: 5px;
  }

  .bottom-radius {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .echarts-area {
    min-height: 350px;
  }

  .el-col {
    padding: 10px 10px;
  }

  .el-table {
    border-radius: 5px;
  }

</style>
