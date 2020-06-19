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
      <el-col :span="8">
        <el-card>
          <!--<div slot="header">柱状图样例</div>-->
          <div id="gotobedbar" class="echarts-area"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div id="gotobedpie" class="echarts-area"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div id="lineChart" class="echarts-area"></div>
        </el-card>
      </el-col>

    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card>
          <div class="echarts-area" id="interestpie" style="height: 400px"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div class="echarts-area" id="interestbar" style="height: 400px"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card>
          <div class="echarts-area" id="eat" style="height: 400px"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div id="ld" class="echarts-area" style="height: 400px"></div>
        </el-card>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script>
  import echarts from 'echarts';
  import data from '../../../static/data';

  export default {
    name: "echarts",
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
      this.drawbar('gotobedbar');
      this.drawpie('gotobedpie');
      this.drawpieInterest('interestpie', 40, 160, '40%');
      this.drawbarInterest('interestbar', 20, 40);
      this.drawEatBar("eat");
      this.drawLine();
      this.drawLd();
    },
    methods: {
      drawLd() {
        this.chart = echarts.init(document.getElementById("ld"));
        let option = {
          title: {
            text: "漏斗图样例",
            textStyle: {
              color: '#333',
              fontSize: 14, // 务必记住设置文字大小只能是数字
              fontWeight: 'lighter',
              top: 10,
              left: 10
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data: ['展现', '点击', '访问', '咨询', '订单']
          },

          series: [
            {
              name: '漏斗图',
              type: 'funnel',
              left: '10%',
              top: 60,
              //x2: 80,
              bottom: 60,
              width: '80%',
              // height: {totalHeight} - y - y2,
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
              label: {
                show: true,
                position: 'inside'
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              emphasis: {
                label: {
                  fontSize: 20
                }
              },
              data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
              ]
            }
          ]
        };
        this.chart.setOption(option);
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
      drawpieInterest(id, small, big, centery) {
        this.chart = echarts.init(document.getElementById(id), 'infographic');
        this.chart.setOption({
          title: {
            text: "饼图样例",
            textStyle: {
              color: '#333',
              fontSize: 14, // 务必记住设置文字大小只能是数字
              fontWeight: 'lighter',
              top: 10,
              left: 10
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 15,
            top: 10
          },
          legend: {
            orient: 'vertical',
            left: 5,
            top: 20,
            data: data.interest.course,
          },
          calculable: true,
          series: [
            {
              name: '人数',
              type: 'pie',
              radius: [small, big],
              /*radius: [small, big],
              center: ['55%', centery],*/
              roseType: 'radius',
              data: data.interest.courseInter,
              itemStyle: {
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
      drawbarInterest(id, gap, barwidth) {
        this.chart = echarts.init(document.getElementById(id), 'infographic');
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
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
          },
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 15,
            top: 10
          },
          xAxis: {
            data: data.interest.course,
            axisLabel: {
              textStyle: {
                color: '#000000',
              }
            },
            splitLine: {
              show: false
            }
          },
          yAxis: {
            name: '人数',
            /*nameLocation: 'top',*/
            nameGap: gap,
            nameTextStyle: {
              fontWeight: 200,
              fontSize: 12
            },
            max: 20,
            top: 20,
            axisLine: {
              show: true
            }
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true
          },
          series: [
            {
              name: '人数',
              type: 'bar',
              data: data.interest.courseData,
              barWidth: barwidth,
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
                  color: '#7b3df7',
                  shadowColor: 'rgba(0, 0, 0, 0.4)',
                  shadowBlur: 20
                }
              }
            }
          ]
        });
      },
      drawEatBar(id) {
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
              magicType: {show: true, type: ['line', 'bar']},
              saveAsImage: {show: true},
              dataView: {show: true, readOnly: false}
            },
            top: 10,
            right: 15
          },
          calculable: true,
          grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: data.eat.money
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
              name: '起床时间',
              type: 'bar',
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 20,
                  color: '#726dd1',
                  shadowColor: 'rgba(0, 0, 0, 0.4)',
                  shadowBlur: 20
                }
              },
              data: data.eat.number
            }
          ]
        })
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
      }
    }
  }
</script>

<style scoped>

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

  .el-table{
    border-radius: 5px;
  }
  .el-scrollbar >>> .el-scrollbar__wrap {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    height: 100% !important;
  }
</style>
