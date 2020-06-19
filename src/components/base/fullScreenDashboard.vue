<template>
  <el-scrollbar style="height:100%;overflow-y: -moz-hidden-unscrollable;overflow-y: auto" ref="myScrollbar">
    <el-container style="height: 100%">
      <el-main>
        <el-row :gutter="24" style="padding-top: 60px">
          <el-col :span="24">
            <div class="title">
              <h2>大数据可视化中心</h2>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="dashboard" id="chart1"></div>
          </el-col>
          <el-col :span="8">
            <div class="dashboard" id="chart2"></div>
            <!--<div class="resume">
              <div class="resume-hd">
                <ul>
                  <li>
                    <countTo :startVal='startVal' :endVal='490' :duration='6000' separator=""></countTo>
                  </li>
                  <li>
                    <countTo :startVal='startVal' :endVal='75' :duration='6000' separator=""></countTo>
                  </li>
                  <li>
                    <countTo :startVal='startVal' :endVal='3000' :duration='6000' separator=""></countTo>
                  </li>
                </ul>
              </div>
            </div>-->
          </el-col>
          <el-col :span="8">
            <div class="dashboard" id="chart3"></div>
          </el-col>

        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="dashboard" id="chart4"></div>
          </el-col>
          <el-col :span="8">
            <div class="dashboard" id="chart5"></div>
          </el-col>
          <el-col :span="8">
            <div class="dashboard" id="chart6"></div>
          </el-col>

        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="dashboard" id="chart7"></div>
          </el-col>
          <el-col :span="16">
            <div class="dashboard" id="chart8"></div>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="dashboard" id="chart9"></div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-scrollbar>
</template>

<script>
  import echarts from "echarts";
  import 'echarts-liquidfill/src/liquidFill.js'; //在这里引入
  import countTo from "vue-count-to"
  import data from "../../../static/data";

  export default {
    name: "fullScreenDashboard",
    data() {
      return {
        echart: null,
        option: null,
        dataMap: {},
        startVal: 0,
        endVal: 2017,
        number: 0, // 播放所在下标
        timer: null,
        xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        data: [54, 86, 46, 77, 96, 89, 88, 23, 38, 3, 66, 98]
      }
    },
    components: {
      countTo
    },
    methods: {
      getWaterChart(id) {
        let myChart = echarts.init(document.getElementById(id));
        this.option = {
          series: [{
            type: 'liquidFill',
            data: [0.45],
            radius: '70%',
            color: ['#00b9f5'],
            backgroundStyle: {
              color: 'rgba(0, 0, 0, 0.5)',
              borderColor: '#007bff',
              borderWidth: 3,
              shadowColor: 'rgba(0, 123, 225, 0.4)',
              shadowBlur: 20
            },
            outline: {
              show: false,
            },
          }]
        }

        myChart.setOption(this.option, true);

        window.addEventListener('resize', () => {
          myChart.resize();
        });
      },
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
      getEchartRight2(id) {
        let myChart = echarts.init(document.getElementById(id));
        let option = {
          color: ['#EAEA26', '#906BF9', '#FE5656', '#01E17E', '#3DD1F9', '#FFAD05', '#4465fc'],
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
          },
          polar: {},
          angleAxis: {
            interval: 1,
            type: 'category',
            data: [],
            z: 10,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#0B4A6B',
                width: 5,
                type: 'solid'
              },
            },
            axisLabel: {
              interval: 0,
              show: true,
              color: '#0B4A6B',
              margin: 8,
              fontSize: 16
            },
          },
          radiusAxis: {
            min: 40,
            max: 120,
            interval: 20,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#0B3E5E',
                width: 1,
                type: 'solid'
              },
            },
            axisLabel: {
              formatter: '{value} %',
              show: false,
              padding: [0, 0, 20, 0],
              color: '#0B3E5E',
              fontSize: 16
            },
            splitLine: {
              lineStyle: {
                color: '#0B3E5E',
                width: 2,
                type: "solid"
              }
            }
          },
          calculable: true,
          series: [{
            type: 'pie',
            radius: ['6%', '10%'],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 50
              },
              emphasis: {
                show: false
              }
            },
            tooltip: {
              show: false
            },
            data: [{
              name: '',
              value: 0,
              itemStyle: {
                normal: {
                  color: '#0B4A6B'
                }
              }
            }]
          }, {
            type: 'pie',
            radius: ['90%', '95%'],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 50
              },
              emphasis: {
                show: false
              }
            },
            tooltip: {
              show: false
            },
            data: [{
              name: '',
              value: 0,
              itemStyle: {
                normal: {
                  color: '#0B4A6B'
                }
              }
            }]
          }, {
            stack: 'a',
            type: 'pie',
            radius: ['20%', '80%'],
            roseType: 'area',
            zlevel: 10,
            label: {
              normal: {
                show: true,
                formatter: '{b}',
                textStyle: {
                  fontSize: 12,
                },
                position: 'outside'
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 15,
                length2: 50,
                lineStyle: {
                  type: 'dotted'
                }
              },
              emphasis: {
                show: true
              }
            },
            data: [{
              value: 35,
              name: '湖南'
            }, {
              value: 28,
              name: '河北'
            }, {
              value: 23,
              name: '广东'
            }, {
              value: 18,
              name: '四川'
            }, {
              value: 13,
              name: '浙江'
            }, {
              value: 8,
              name: '江苏'
            }, {
              value: 5,
              name: '湖北'
            }]
          }]
        }

        myChart.setOption(option, true);
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      },
      getEchartLeft1(id) {
        // 实例化对象
        let myChart = echarts.init(document.getElementById(id));
        let charts = { // 按顺序排列从大到小
          cityList: ['金融行业', '电子政务', '文创版权', '教育行业', '智慧停车', '医疗互联', '物流行业'],
          cityData: [1500, 1200, 900, 600, 400, 300, 100]
        }

        let top10CityList = charts.cityList;
        let top10CityData = charts.cityData;
        let color = ['rgba(14,109,236', 'rgba(255,91,6', 'rgba(100,255,249', 'rgba(248,195,248', 'rgba(110,234,19', 'rgba(255,168,17', 'rgba(218,111,227'];

        let lineY = [];
        for (let i = 0; i < charts.cityList.length; i++) {
          let x = i
          if (x > color.length - 1) {
            x = color.length - 1
          }
          let data = {
            name: charts.cityList[i],
            color: color[x] + ')',
            value: top10CityData[i],
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: color[x] + ', 0.3)'
                }, {
                  offset: 1,
                  color: color[x] + ', 1)'
                }], false),
                barBorderRadius: 10
              },
              emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
              }
            }
          }
          lineY.push(data)
        }

        // 指定配置和数据
        let option = {
          color: color,
          tooltip: {
            trigger: 'item',
          },
          grid: {
            borderWidth: 0,
            top: '5%',
            left: '2%',
            right: '2%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: [{
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            inverse: true,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              inside: false,
              textStyle: {
                color: '#b3ccf8',
                fontSize: 13
              },
            },
            data: top10CityList
          }, {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              inside: false,
              textStyle: {
                color: '#b3ccf8',
                fontSize: 13
              },
              formatter: (val) => {
                return `${val}`
              }
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: top10CityData.reverse()
          }],
          series: [{
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '10px',
            data: lineY,
            animationDuration: 1500,
            label: {
              normal: {
                color: '#b3ccf8',
                show: false,
                position: [0, '-15px'],
                textStyle: {
                  fontSize: 13
                },
                formatter: (a, b) => {
                  return a.name;
                }
              }
            }
          }]
        };

        // 把配置给实例对象
        myChart.setOption(option, true);
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      },
      getEchartLeft3(id) {
        let myChart = echarts.init(document.getElementById(id));
        let data = {
          city: ['2015', '2016', '2017', '2018', '2019', '2020'],
          num: ['555', '896', '1935', '2922', '4508', '5000']
        }

        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(255,255,255,0)' // 0% 处的颜色
                  }, {
                    offset: 0.5,
                    color: 'rgba(255,255,255,1)' // 100% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(255,255,255,0)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
            },
            formatter: (value) => {
              return value[0].name + '年营业收入：<br>' + value[0].value + '万元';
            }
          },
          grid: {
            top: '5%',
            left: '2%',
            right: '2%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: false,
              lineStyle: {
                color: '#092b5d'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#24c4ff',
                margin: 15,
              },
              formatter: (data) => {
                return data.substr(2) + '年';
              }
            },
            axisTick: {
              show: false,
            },
            data: data.city
          }],
          yAxis: [{
            min: 0,
            max: 6000,
            splitLine: {
              show: false,
              lineStyle: {
                color: '#092b5d'
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#092b5d"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#24c4ff',
              }
            },
            axisTick: {
              show: false,
            },
          }],
          series: [{
            name: '',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: '#7c80f4', // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
              color: "rgba(14,30,73,1)",
              borderColor: "#646ace",
              borderWidth: 2
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: [
                  ' {a|{c}}',
                ].join(','),
                rich: {
                  a: {
                    color: '#fff',
                    align: 'center',
                  },
                }
              }
            },
            smooth: true,
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(124, 128, 244,.3)"
                }, {
                  offset: 1,
                  color: "rgba(124, 128, 244, 0)"
                }], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: data.num
          }]
        }

        myChart.setOption(option, true);
        window.addEventListener('resize', () => {
          myChart.resize();
        })
      },
      getEchartLeft2(id) {
        let myChart = echarts.init(document.getElementById(id));
        let scaleData = [{
          name: '博士',
          value: 5
        }, {
          name: '硕士',
          value: 10
        }, {
          name: '本科',
          value: 10
        }, {
          name: '专科',
          value: 10
        }, {
          name: '国防科大',
          value: 5
        }, {
          name: '大厂专家',
          value: 5
        }];
        let rich = {
          white: {
            color: '#ddd',
            align: 'center',
            padding: [3, 0]
          }
        };
        let placeHolderStyle = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
          }
        };
        let data = [];
        let color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
        for (let i = 0; i < scaleData.length; i++) {
          data.push({
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 6,
                shadowBlur: 10,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          }, {
            value: 2,
            name: '',
            itemStyle: placeHolderStyle
          });
        }

        let option = {
          series: [{
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['66%', '68%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'outside',
                  color: '#ddd',
                  formatter: (params) => {
                    let percent = 0;
                    let total = 0;
                    for (let i = 0; i < scaleData.length; i++) {
                      total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                      return params.name + '\n{white|' + '占比' + percent + '%}';
                    } else {
                      return '';
                    }
                  },
                  rich: rich
                },
                labelLine: {
                  length: 10,
                  length2: 30,
                  show: true,
                  color: '#00ffff'
                }
              }
            },
            data: data
          }]
        }

        myChart.setOption(option, true);
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      },
      dataFormatter(obj) {
        let pList = ['金融类', '政务类', '医疗类', '互联网类'];
        let temp;
        for (let y = 2016; y <= 2020; y++) {
          let max = 0;
          let sum = 0;
          temp = obj[y];
          for (let i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[y][i] = {
              name: pList[i],
              value: temp[i]
            };
          }
          obj[y + 'max'] = Math.floor(max / 100) * 100;
          obj[y + 'sum'] = sum;
        }
        return obj;
      },
      drawChart1() {
        let myChart = echarts.init(document.getElementById('chart1'));
        let itemStyleJR = {
          color: '#d6d638'
        }
        let itemStyleZW = {
          color: '#00c86c'
        }
        let itemStyleYL = {
          color: '#07d8ff'
        }
        let itemStyleIT = {
          color: '#0c71cf'
        }

        this.dataMap.dataJR = this.dataFormatter({
          //max : 4000,
          2020: [136, 159, 905, 305],
          2019: [124, 145, 562, 285],
          2018: [118, 128, 207, 265],
          2017: [112, 122, 234, 245],
          2016: [101, 110, 804, 225]
        });

        this.dataMap.dataZW = this.dataFormatter({
          //max : 26600,
          2020: [752, 928, 126, 210],
          2019: [388, 840, 707, 208],
          2018: [855, 987, 959, 207],
          2017: [626, 709, 701, 206],
          2016: [509, 892, 201, 205]
        });

        this.dataMap.dataYL = this.dataFormatter({
          //max : 25000,
          2020: [363, 219, 483, 505],
          2019: [600, 438, 123, 405],
          2018: [179, 405, 668, 305],
          2017: [375, 2886, 276, 205],
          2016: [236, 250, 408, 105]
        });

        this.dataMap.dataIT = this.dataFormatter({
          //max : 26600,
          2020: [752, 928, 126, 255],
          2019: [388, 840, 707, 245],
          2018: [855, 987, 959, 235],
          2017: [626, 709, 701, 225],
          2016: [509, 892, 201, 215]
        });

        this.option = {
          baseOption: {
            timeline: {
              axisType: 'category',
              autoPlay: true,
              playInterval: 2000,
              data: ['2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01'],
              lineStyle: {
                color: '#179bf1'
              },
              left: 30,
              right: 30,
              label: {
                color: '#2867a8',
                formatter(s) {
                  return (new Date(s)).getFullYear();
                }
              },
              checkpointStyle: {
                color: '#01d8ff',
                symbolSize: 10,
                borderColor: 'rgba(1, 216, 255, 0.5)',
                borderWidth: 5,
              },
              controlStyle: {
                showPlayBtn: false,
                borderColor: '#01bde6',
                itemGap: 20
              },
              itemStyle: {
                // color: '#004b85',
                borderColor: '#004b85',
                borderWidth: 1,
                shadowColor: 'rgba(1, 216, 225, 0.5)',
                shadowBlur: 5
              },
              emphasis: {
                label: {
                  color: '#01d8ff',
                  show: false
                },
                checkpointStyle: {
                  color: '#01d8ff',
                  borderColor: 'rgba(1, 216, 255, 0.5)',
                  borderWidth: 5,
                },
                controlStyle: {
                  borderColor: 'rgba(1, 216, 255, 0.5)'
                },
                itemStyle: {
                  color: '#01d8ff',
                  borderColor: 'rgba(1, 216, 225, 0.5)',
                  borderWidth: 5
                }
              }
            },
            // tooltip: {
            //   trigger: 'item'
            // },
            grid: {
              bottom: '20%',
              right: "42%"
            },
            calculable: true,
            xAxis: [{
              type: 'category',
              data: ['金融类', '政务类', '医疗类', '互联网类'],
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8',
                }
              },
            }],
            yAxis: [{
              type: 'value',
              name: '区块链应用（个）',
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8'
                }
              },
            }],
            series: [{
              name: '联盟链',
              type: 'bar',
              barMaxWidth: 15,
              center: ['20%', '65%'],
              seriesLayoutBy: 'row',
              markPoint: {
                symbol: 'pin',
                itemStyle: {
                  normal: {
                    color: '#eb9b44',
                    shadowColor: '#eb9b44',
                    shadowBlur: 15
                  }
                },
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              }
              // label: {
              //   show: true,
              //   position: 'top'
              // },
            }, {
              name: '应用占比',
              type: 'pie',
              center: ['76%', '20%'],
              radius: '28%',
              z: 100
            }]
          },
          options: [{
            series: [
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2016sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2016sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2016sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2016sum'],
                  itemStyle: itemStyleIT
                }],
              },
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2016sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2016sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2016sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2016sum'],
                  itemStyle: itemStyleIT
                }]
              }
            ]
          }, {
            series: [
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2017sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2017sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2017sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2017sum'],
                  itemStyle: itemStyleIT
                }],
              },
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2017sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2017sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2017sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2017sum'],
                  itemStyle: itemStyleIT
                }]
              }
            ]
          }, {
            series: [
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2018sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2018sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2018sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2018sum'],
                  itemStyle: itemStyleIT
                }]
              },
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2018sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2018sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2018sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2018sum'],
                  itemStyle: itemStyleIT
                }]
              }
            ]
          }, {
            series: [
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2019sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2019sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2019sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2019sum'],
                  itemStyle: itemStyleIT
                }]
              },
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2019sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2019sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2019sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2019sum'],
                  itemStyle: itemStyleIT
                }]
              }
            ]
          }, {
            series: [
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2020sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2020sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2020sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2020sum'],
                  itemStyle: itemStyleIT
                }]
              },
              {
                data: [{
                  name: '金融类',
                  value: this.dataMap.dataJR['2020sum'],
                  itemStyle: itemStyleJR
                }, {
                  name: '政务类',
                  value: this.dataMap.dataZW['2020sum'],
                  itemStyle: itemStyleZW
                }, {
                  name: '医疗类',
                  value: this.dataMap.dataYL['2020sum'],
                  itemStyle: itemStyleYL
                }, {
                  name: '互联网类',
                  value: this.dataMap.dataIT['2020sum'],
                  itemStyle: itemStyleIT
                }]
              }
            ]
          }]
        }

        myChart.setOption(this.option, true);
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      },
      drawbar(id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          title: {
            text: "柱状图样例",
            textStyle: {
              color: '#7ef0ff',
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
            top: 10,
            iconStyle: {
              normal: {
                color: '#7ef0ff',//设置颜色
              }
            }
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
              data: data.gotobed.time,
              splitLine: {show: false},//去除网格线
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8',
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '人数',
              max: 35,
              splitLine: {show: false},//去除网格线
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8'
                }
              }
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
      drawLine(id) {
        this.chart = echarts.init(document.getElementById(id));
        let colors = ['#5793f3', '#d14a61', '#675bba'];
        let option = {
          title: {
            text: "折线图样例",
            textStyle: {
              color: '#7ef0ff',
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
            top: 10,
            textStyle: {
              color: '#7ef0ff'
            }

          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              splitLine: {show: false},//去除网格线
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
              type: 'value',
              splitLine: {show: false},//去除网格线
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8'
                }
              }
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
    },
    mounted() {
      this.getWaterChart("chart9");
      this.getEchart("chart8");
      this.getEchartRight2("chart7");
      this.getEchartLeft1("chart6");
      this.getEchartLeft3("chart5");
      this.getEchartLeft2("chart4");
      this.drawChart1();
      this.drawbar('chart2');
      this.drawLine("chart3");
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>

<style scoped lang="scss">

  .el-scrollbar > > > .el-scrollbar__view {
    height: 100% !important;
  }

  .el-scrollbar > > > .el-scrollbar__wrap {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    height: 100% !important;
  }

  .el-main {
    padding: 0px;
    min-height: 100%;
    background-image: url("../../assets/bj.ba638b19.jpg");
    /* background-color: #112346; */
    background-repeat: no-repeat;
    background-position: center right;

    background-size: 100% 100%;
    background-attachment: fixed;
    z-index: 1;
  }

  .el-scrollbar > > > .el-scrollbar__wrap {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    height: 100% !important;
  }

  .el-row {
    margin: 0px !important;
    padding-left: 50px !important;
    padding-right: 50px !important;
  }

  .el-col {
    padding: 12px !important;
  }

  .dashboard {
    min-height: 350px;
    border: 1px solid rgba(92, 255, 255, .1);
    background: rgba(10, 106, 255, .1) url("../../assets/wg.4bf50aaf.png") repeat 50% 50% !important;
    background-blend-mode: screen;
    border-radius: 2px;
  }

  .center-dashboard {
    /*background: rgba(10, 106, 255, .1) url("../../assets/wg.4bf50aaf.png") repeat 50% 50% !important;
    background-blend-mode: screen;*/
    min-height: 300px;
  }

  .title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    /*background-color: transparent;*/
    background: rgba(0, 0, 0, 0) url('../../assets/img/screen/head_bg.png') no-repeat 50% 0;
    /*background-position: 65% 0;*/
    border: none;
    overflow: hidden;

    h2 {
      color: #7ef0ff;
      font-size: 24px;
      text-align: center;
      line-height: 50px;
      letter-spacing: 1px;
    }
  }

  .h1 {
    text-align: center !important;
  }

  .resume {
    background: rgba(101, 132, 226, 0.1);
    padding: 0.1875rem;

    .resume-hd {
      position: relative;
      border: 1px solid rgba(25, 186, 139, 0.17);

      ul {
        display: flex;

        %li-line {
          content: "";
          position: absolute;
          height: 50%;
          width: 1px;
          background: rgba(255, 255, 255, 0.2);
          top: 25%;
        }

        li {
          position: relative;
          flex: 1;
          text-align: center;
          height: 1.2rem;
          line-height: 1.2rem;
          font-size: 0.65rem;
          color: #ffeb7b;
          padding: 0.05rem 0;
          font-family: 'DIGITALDREAMFAT';
          font-weight: bold;

          &:nth-child(2) {
            &:after {
              @extend %li-line;
              right: 0;
            }

            &:before {
              @extend %li-line;
              left: 0;
            }
          }
        }
      }

      &:before {
        content: "";
        position: absolute;
        width: 30px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
        top: 0;
        left: 0;
      }

      &:after {
        content: "";
        position: absolute;
        width: 30px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
        right: 0;
        bottom: 0;
      }
    }

    .resume-bd {
      ul {
        display: flex;

        li {
          flex: 1;
          height: 0.5rem;
          line-height: 0.5rem;
          text-align: center;
          font-size: 0.225rem;
          color: rgba(255, 255, 255, 0.7);
          padding-top: 0.125rem;
        }
      }
    }
  }
</style>
