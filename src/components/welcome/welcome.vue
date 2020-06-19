<template>
  <el-scrollbar style="height:100%;overflow-x: hidden;overflow-y: auto" ref="myScrollbar" class="demo">
    <el-row>
      <el-col :span="4">
        <div style="width: 100%;height: 100px;background-color: #FFFFFF;border-radius: 5px">
          <div class="left-area" style="background: #2d8cf0; width: 36%;">
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
          <div class="left-area" style="background: #19be6b; width: 36%;">
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
          <div class="left-area" style="background: #ff9900; width: 36%;">
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
          <div class="left-area" style="background: #ed3f14; width: 36%;">
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
          <div class="left-area" style="background: #E46CBB; width: 36%;">
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
          <div class="left-area" style="background: #9A66E4; width: 36%;">
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
      <el-col :span="6">
        <el-card>
          <div id="gotobedpie" class="echarts-area"></div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card>
          <div id="chart8" class="echarts-area"></div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card>
          <div id="lineChart" class="echarts-area"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-card>
          <div id="gotobedpie1" class="echarts-area"></div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card>
          <div id="chart81" class="echarts-area"></div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card>
          <div id="lineChart1" class="echarts-area"></div>
        </el-card>
      </el-col>
    </el-row>
    <!--<el-row>
      <el-col :span="12">
        <el-card>
          <div id="gotobedbar" class="echarts-area"></div>
        </el-card>
      </el-col>
    </el-row>-->
    <el-row>

    </el-row>
  </el-scrollbar>
</template>

<script>
  import '../../assets/js/data-set.min'
  import '../../assets/js/jquery-3.2.1'
  import echarts from 'echarts';
  import * as G2 from '@antv/g2';
  import data from '../../../static/data';

  export default {
    name: "tableChart",
    data() {
      return {
        number: 0, // 播放所在下标
        timer: null,
        xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        data: [54, 86, 46, 77, 96, 89, 88, 23, 38, 3, 66, 98],
        barChart: null,
        pieChart: null,
        lineChart: null,
        eChart: null,
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
    props: ["isCollapsed"],
    components: {},
    mounted() {
      this.drawChart();
      this.resize();
    },
    watch: {
      /*isCollapsed(val) {
        document.getElementById("gotobedbar").innerHTML = "";
        this.eChart.dispose();
        this.getEchart("chart8");
      }*/
    },
    methods: {
      resize() {
        window.addEventListener('resize', () => {
          this.resizeChart();
        });
      },
      drawChart() {
        //this.drawbar('gotobedbar');
        this.drawpie('gotobedpie');
        this.drawLine();
        this.getEchart("chart8");
        this.drawG2_1();
        this.drawG2_2();
        this.drawG2_3()
      },
      resizeChart() {
        this.eChart.resize();
        //this.barChart.resize();
        this.lineChart.resize();
        this.pieChart.resize();
      },
      getEchart(id) {
        this.eChart = echarts.init(document.getElementById(id));
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
        this.eChart.setOption(this.option, true);
        this.timer = setInterval(() => {
          this.eChart.dispatchAction({
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
        this.barChart = echarts.init(document.getElementById(id));
        this.barChart.setOption({
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
        this.pieChart = echarts.init(document.getElementById(id));
        this.pieChart.setOption({
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
          "color": [
            "#2d8cf0",
            "#19be6b",
            "#ff9900",
            "#E46CBB",
            "#9A66E4",
            "#ed3f14"
          ],
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
              radius: '55%',
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
        this.lineChart = echarts.init(document.getElementById("lineChart"));
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
        this.lineChart.setOption(option);
      },
      query() {
        this.$message.success("查询完毕");
      },
      callFather(parm) {
        this.queryParam.pageNum = parm.currentPage
        this.queryParam.pageSize = parm.pageSize
        this.getTable();
      },
      drawG2_1() {
        var data = [{
          item: '事例一',
          count: 40,
          percent: 0.4
        }, {
          item: '事例二',
          count: 21,
          percent: 0.21
        }, {
          item: '事例三',
          count: 17,
          percent: 0.17
        }, {
          item: '事例四',
          count: 13,
          percent: 0.13
        }, {
          item: '事例五',
          count: 9,
          percent: 0.09
        }];
        var chart = new G2.Chart({
          container: 'gotobedpie1',
          forceFit: true,
          animate: true,
          height: 300,
          padding: 'auto'
        });
        chart.source(data, {
          percent: {
            formatter: function formatter(val) {
              val = val * 100 + '%';
              return val;
            }
          }
        });
        chart.coord('theta', {
          radius: 0.75,
          innerRadius: 0.6
        });
        chart.tooltip({
          showTitle: false,
          itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        });
        // 辅助文本
        chart.guide().html({
          position: ['50%', '50%'],
          html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
          alignX: 'middle',
          alignY: 'middle'
        });
        var interval = chart.intervalStack().position('percent').color('item').label('percent', {
          formatter: function formatter(val, item) {
            return item.point.item + ': ' + val;
          }
        }).tooltip('item*percent', function(item, percent) {
          percent = percent * 100 + '%';
          return {
            name: item,
            value: percent
          };
        }).style({
          lineWidth: 1,
          stroke: '#fff'
        });
        chart.render();
        interval.setSelected(data[0]);
      },
      drawG2_2(){
        var data = [{
          company: 'Apple',
          type: '整体',
          value: 30
        }, {
          company: 'Facebook',
          type: '整体',
          value: 35
        }, {
          company: 'Google',
          type: '整体',
          value: 28
        }, {
          company: 'Apple',
          type: '非技术岗',
          value: 40
        }, {
          company: 'Facebook',
          type: '非技术岗',
          value: 65
        }, {
          company: 'Google',
          type: '非技术岗',
          value: 47
        }, {
          company: 'Apple',
          type: '技术岗',
          value: 23
        }, {
          company: 'Facebook',
          type: '技术岗',
          value: 18
        }, {
          company: 'Google',
          type: '技术岗',
          value: 20
        }, {
          company: 'Apple',
          type: '技术岗',
          value: 35
        }, {
          company: 'Facebook',
          type: '技术岗',
          value: 30
        }, {
          company: 'Google',
          type: '技术岗',
          value: 25
        }];

        var chart = new G2.Chart({
          container: 'chart81',
          forceFit: true,
          height: 300,
          padding: 'auto'
        });
        chart.source(data);
        chart.scale('value', {
          alias: '占比（%）',
          max: 75,
          min: 0,
          tickCount: 4
        });
        chart.axis('type', {
          label: {
            textStyle: {
              fill: '#aaaaaa'
            }
          },
          tickLine: {
            alignWithLabel: false,
            length: 0
          }
        });

        chart.axis('value', {
          label: {
            textStyle: {
              fill: '#aaaaaa'
            }
          },
          title: {
            offset: 50
          }
        });
        chart.legend({
          position: 'top-center'
        });
        chart.interval().position('type*value').color('company').opacity(1).adjust([{
          type: 'dodge',
          marginRatio: 1 / 32
        }]);
        chart.render();
      },
      drawG2_3(){
        let data = [{
          month: 'Jan',
          Tokyo: 7.0,
          London: 3.9
        }, {
          month: 'Feb',
          Tokyo: 6.9,
          London: 4.2
        }, {
          month: 'Mar',
          Tokyo: 9.5,
          London: 5.7
        }, {
          month: 'Apr',
          Tokyo: 14.5,
          London: 8.5
        }, {
          month: 'May',
          Tokyo: 18.4,
          London: 11.9
        }, {
          month: 'Jun',
          Tokyo: 21.5,
          London: 15.2
        }, {
          month: 'Jul',
          Tokyo: 25.2,
          London: 17.0
        }, {
          month: 'Aug',
          Tokyo: 26.5,
          London: 16.6
        }, {
          month: 'Sep',
          Tokyo: 23.3,
          London: 14.2
        }, {
          month: 'Oct',
          Tokyo: 18.3,
          London: 10.3
        }, {
          month: 'Nov',
          Tokyo: 13.9,
          London: 6.6
        }, {
          month: 'Dec',
          Tokyo: 9.6,
          London: 4.8
        }];
        var ds = new DataSet();
        var dv = ds.createView().source(data);
        // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
        dv.transform({
          type: 'fold',
          fields: ['Tokyo', 'London'], // 展开字段集
          key: 'city', // key字段
          value: 'temperature' // value字段
        });
        var chart = new G2.Chart({
          container: 'lineChart1',
          forceFit: true,
          height: 300,
          padding: 'auto'
        });
        chart.source(dv, {
          month: {
            range: [0, 1]
          }
        });
        chart.tooltip({
          crosshairs: {
            type: 'line'
          }
        });
        chart.axis('temperature', {
          label: {
            formatter: function formatter(val) {
              return val + '°C';
            }
          }
        });
        chart.line().position('month*temperature').color('city').shape('smooth');
        chart.point().position('month*temperature').color('city').size(4).shape('circle').style({
          stroke: '#fff',
          lineWidth: 1
        });
        chart.render();
      }
    }
  }
</script>

<style scoped>

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
    padding: 10px 10px;
  }

  .el-table {
    border-radius: 5px;
  }

  .el-scrollbar >>> .el-scrollbar__wrap {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    height: 100% !important;
  }
</style>
