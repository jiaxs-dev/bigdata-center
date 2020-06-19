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
          <el-breadcrumb-item>数据分析</el-breadcrumb-item>
          <el-breadcrumb-item>活动分析</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!-- 面包屑导航结束 -->

    <!-- 时间选择开始 -->
    <el-row>
      <el-col :span="24" style="padding-bottom: 0px;padding-top: 0px">
        <el-form :inline="true" label-width="80px" class="top-radius">
          <el-form-item label="时间">
            <el-date-picker
              value-format="yyyy-MM-dd"
              v-model="time.queryTime"
              type="daterange"
              :editable="false"
              @change="query"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
          <el-form-item v-show="time.compare">
            <el-date-picker
              value-format="yyyy-MM-dd"
              v-model="time.compareTime"
              type="daterange"
              :editable="false"
              align="right"
              @change="lineChartQuery"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-checkbox label="对比时间段" v-model="time.compare" @change="compareTimeSelect"></el-checkbox>
          </el-form-item>
          <!-- 筛选条件 -->
          <el-form-item>
            <el-tag
              closable
              @close="closeTag"
              type="info" v-show="filter.tag != ''">
              {{filter.tag}}
            </el-tag>
          </el-form-item>
          <el-form-item>
            <el-popover
              placement="right"
              width="600"
              style="overflow: auto"
              v-model="filter.visible"
              trigger="click">
              <el-form :model="filter.filterForm" ref="filter.filterForm" label-width="0px" class="demo-dynamic"
                       id="filterForm">
                <el-row v-for="(domain, index) in filter.filterForm.domains" :key="'row-'+index">

                  <el-col :span="6" style="padding: 1px">
                    <el-form-item :key="'row-'+index+'-item-1'"
                                  :prop="'domains.' + index + '.dimension'"
                                  :rules="{required: true, message: '条件不能为空', trigger: ['blur', 'change']}">
                      <el-select v-model="domain.dimension" @change="dimensionValueQuery(index,domain.dimension)"
                                 style="width: 100%"
                                 placeholder="请选择">
                        <el-option
                          v-for="dimension in table.DynamicTableColumns"
                          :key="dimension.prop"
                          :label="dimension.label"
                          :value="dimension.prop">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4" style="padding: 1px">
                    <el-form-item :key="'row-'+index+'-item-2'"
                                  :prop="'domains.' + index + '.operator'"
                                  :rules="{required: true, message: '条件不能为空', trigger: ['blur', 'change']}">
                      <el-select v-model="domain.operator" placeholder="请选择" style="width: 100%">
                        <el-option
                          v-for="(ope,operatoeIndex) in filter.operator"
                          :key="ope.value+operatoeIndex"
                          :label="ope.label"
                          :value="ope.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" style="padding: 1px">
                    <el-form-item :key="'row-'+index+'-item-2'"
                                  :prop="'domains.' + index + '.value'"
                                  :rules="{required: true, message: '条件不能为空', trigger: ['blur', 'change']}">
                      <el-select v-model="domain.value" placeholder="请选择" style="width: 100%">
                        <el-option
                          v-for="dimension in domain.values"
                          :key="dimension.value"
                          :label="dimension.name"
                          :value="dimension.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="1" style="padding: 1px">
                    <el-form-item style="margin-left: 10px;">
                      <el-button type="default" icon="el-icon-remove-outline" @click.prevent="removeDomain(domain)"
                                 style="border: none;padding: 0px 0px"></el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-button type="default" icon="el-icon-plus" @click="addDomain"
                               style="width: 100%;border: 1px dashed #899eff">
                      继续添加过滤条件
                    </el-button>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item style="float: right">
                    <el-button type="primary" @click="submitForm('filter.filterForm')">确认</el-button>
                    <el-button @click="cancleFilterForm">取消</el-button>
                  </el-form-item>
                </el-row>
              </el-form>
              <el-link slot="reference" :underline="false" type="primary">筛选条件</el-link>
            </el-popover>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <!-- 时间选择结束 -->

    <!-- 折线图面板开始 -->
    <el-row>
      <el-col :span="24">
        <el-card>
          <div slot="header" class="clearfix">
            <label class="label-text">显示指标：</label>
            <template v-if="this.lineChart.multi==false">
              <el-select v-model="lineChart.dimension" @change="lineChartQuery" placeholder="请选择">
                <el-option
                  v-for="item in lineChart.Dimensions"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
            <el-select
              v-model="lineChart.dimensions" multiple collapse-tags
              @change="multiSelectChange"
              @remove-tag="multiRemove"
              placeholder="请选择"
              v-show="lineChart.multi"
            >
              <el-option
                v-for="dimension in lineChart.Dimensions"
                :key="dimension.value"
                :label="dimension.name"
                :value="dimension.value"
              ></el-option>
            </el-select>
            <el-checkbox label="选择多个指标" v-model="lineChart.multi" @change="multiDimensionSelect"></el-checkbox>
          </div>
          <div id="container" class="echarts-area">

          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 折线图面板结束 -->

    <!-- 表格面板开始 -->
    <el-row>
      <el-col :span="24" style="padding-bottom: 20px">
        <el-card>
          <div slot="header" class="clearfix">
            <el-row>
              <el-col :span="2" style="padding: 0px"><label class="label-text">查看维度：</label></el-col>
              <el-col :span="16" style="padding: 0px">
                <el-checkbox-group v-model="table.SelectedDynamicTableColumns" :min=1>
                  <el-checkbox v-for="dynamicTableColumn in table.DynamicTableColumns"
                               :label="dynamicTableColumn.prop"
                               @change="ShowDynamicTableColumn"
                               :key="dynamicTableColumn.prop"
                  >{{dynamicTableColumn.label}}
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </div>
          <el-table :data="table.tableData" stripe style="width: 100%" @sort-change="tableResort">
            <el-table-column :prop="showSelectedDynamicTableColumns.name" :label="showSelectedDynamicTableColumns.label"
                             :sortable="showSelectedDynamicTableColumns.sortable"
                             v-for="(showSelectedDynamicTableColumns,index) in table.ShowSelectedDynamicTableColumns"
                             :key="'dynamic'+index"></el-table-column>
            <el-table-column :prop="fixedTableColumn.name" :label="fixedTableColumn.label"
                             :sortable="fixedTableColumn.sortable"
                             v-for="(fixedTableColumn,fixedIndex) in table.FixedTableColumns" :key="'fixed'+fixedIndex">

              <template v-if="fixedTableColumn.hasChildren">
                <el-table-column :prop="childrenFixedTableColumn.name" :sortable="childrenFixedTableColumn.sortable"
                                 :label="childrenFixedTableColumn.label"
                                 v-for="(childrenFixedTableColumn,childrenIndex) in fixedTableColumn.childrens"
                                 :key="'children'+childrenIndex"></el-table-column>
              </template>

            </el-table-column>
          </el-table>

          <Pagination v-bind:child-msg="table.pageparm" @callFather="callFather"></Pagination>
        </el-card>
      </el-col>
    </el-row>
    <!-- 表格面板结束 -->

  </el-scrollbar>
</template>

<script>
  import {
    operator,//操作符
    defaultDimension,
    defaultDimensions,
    DefaultSelectedDynamicTableColumns,
    DimensionName,
    DynamicTableColumns,
    DynamicTableColumnsMapping,
    FixedTableColumns,
    LineChartDimensions,
    pickerOptions
  } from "./activity"; //引入广告分析页面常量
  import {getTheMomentFewDaysAgo} from "../../../assets/js/dateFun"; //引入日期处理函数
  import {pageLineChartApi, pageTableApi, advertisingDimensions} from '../../../api/analysis/analysis'; //引入调用后台api接口
  import {Chart} from '@antv/g2'
  import Pagination from "../../../components/base/Pagination";

  let chart;
  export default {
    name: "activity",
    components: {
      Pagination
    },
    data() {
      return {
        pickerOptions: pickerOptions,
        time: {
          queryTime: [],
          compareTime: [],
          compare: false,
          defaultQueryTime: [],
          defaultCompareTime: []
        },
        filter: {
          tag: '',
          visible: false,
          filterForm: {
            domains: [{
              dimension: '',
              operator: '',
              value: '',
              dimensionValues: []
            }]
          },
          /*domains:[{
            dimension: '',
            operator:'',
            value:'',
            values:[],
            multi: false,
            dimensionValues:[]
          }],*/
          filterDimensions: [],
          operator: operator,
          param: []
        },
        lineChart: {
          dimension: defaultDimension,
          dimensions: defaultDimensions,
          multi: false,
          Dimensions: LineChartDimensions,
          selectedDimensions: []
        },
        table: {
          DynamicTableColumns: DynamicTableColumns,
          FixedTableColumns: FixedTableColumns,
          SelectedDynamicTableColumns: ['page_name'],
          ShowSelectedDynamicTableColumns: DefaultSelectedDynamicTableColumns,
          tableData: [],
          tableAllData: [],
          pageparm: {
            currentPage: 1,
            pageSize: 10,
            total: 0
          },
          real: false,
          pageNum: 1,
          pageSize: 10,
          size: 100,
          order: {
            field: '',
            orderType: 'desc'
          }
        }
      }
    },
    mounted() {
      chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 300,
      });
      this.defaultDateInit();//初始化默认时间
      this.lineChartQuery();//绘制折线图
      this.getTableData();//请求表格数据
    },
    methods: {
      /*筛选条件胶囊关闭事件*/
      closeTag() {
        this.filter.tag = '';
        this.filter.param = [];
        this.filter.filterForm.domains = [{
          dimension: '',
          operator: '',
          value: '',
          dimensionValues: []
        }];
        this.resetForm('filter.filterForm');
        this.query();
      },
      //封装获取条件过滤参数
      InitFilterParam() {
        let params = [];
        let tag = '';
        for (let doma in this.filter.filterForm.domains) {
          params.push({
            field: this.filter.filterForm.domains[doma]['dimension'],
            operator: this.filter.filterForm.domains[doma]['operator'],
            values: [this.filter.filterForm.domains[doma]['value']],
          });
          tag += DynamicTableColumnsMapping[this.filter.filterForm.domains[doma]['dimension']]['label'] + '/' + this.filter.filterForm.domains[doma]['operator'] + '/' + [this.filter.filterForm.domains[doma]['value']] + ';'
        }
        this.filter.param = JSON.stringify(params);
        this.filter.tag = tag;
      },
      /*条件筛选表单验证*/
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.filter.visible = false;
            this.InitFilterParam();
            this.query();
          } else {
            return false;
          }
        });
      },
      /*条件过滤-->维度选择(请求api获取维度值)*/
      dimensionValueQuery(index, dimension) {
        let diss = this.filter.filterForm.domains;
        let dis = diss[index],
          filter = dimension === 'url'?'[{"values":["hd"],"field":"page_type","operator":"="}]':"",
          params ={dimension:dimension,filter:filter};

        advertisingDimensions(params).then(res => {
          if (res.code == 0) {
            dis.values = res.obj.dataList;
            dis.value = '';
            diss[index] = dis;
            this.filter.filterForm.domains = diss;
          } else {
            this.$message.error(res.msg)
          }
        }).catch(err => {
          this.$message.error(err)
        })
      },
      cancleFilterForm() {
        this.filter.visible = false;
        this.resetForm('filter.filterForm')
      },
      /*表单值重置*/
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        let index = this.filter.filterForm.domains.indexOf(item)
        if (index !== -1) {
          this.filter.filterForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.filter.filterForm.domains.push({
          value: '',
          key: Date.now(),
          dimension: '',
          operator: '',
          values: []
        });
      },

      query() {
        this.getTableData();
        this.lineChartQuery();
      },
      multiSelectChange(tag) {
        if (this.lineChart.dimensions.length > 0) {
          this.lineChartQuery();
        } else {
          this.$message.error('请至少选择一个维度！');
          this.lineChart.dimensions.push(tag);
        }
      },
      multiRemove(tag) {
        if (this.lineChart.dimensions.length == 0) {
          this.$message.error('请至少选择一个维度！');
          this.lineChart.dimensions.push(tag);
        }
      },
      //表格动态列切换
      ShowDynamicTableColumn() {
        let columns = [];
        for (let column in this.table.SelectedDynamicTableColumns) {
          let key = this.table.SelectedDynamicTableColumns[column];
          columns.push(DynamicTableColumnsMapping[key])
        }
        this.table.ShowSelectedDynamicTableColumns = columns;
        this.getTableData();
      },

      tableResort(item){
        this.table.order.field = item.prop;
        this.table.order.orderType = item.order === 'descending' ? 'desc' : 'asc';
        this.getTableData();
      },
      /*请求api获取表格数据*/
      getTableData() {
        this.table.pageNum = 1;
        this.table.pageparm.currentPage = 1;
        let param = {
          startDate: this.time.queryTime[0],
          endDate: this.time.queryTime[1],
          dimensions: this.table.SelectedDynamicTableColumns.join(','),
          size: this.table.size,
          filter: this.filter.param,
          pageType:'hd'
        };
        if (this.table.order.field != '') {
          param['order'] = JSON.stringify(this.table.order);
        }
        pageTableApi(param).then(res => {
          if (res.code == 0) {
            if (this.table.real) {
              this.RealPage(res.obj.dataList);
            } else {
              this.ImitatePage(res.obj.dataList);
            }
          } else {
            this.$message.error(res.msg);
          }
        }).catch(err => {
          this.$message.error(err);
        })
      },
      callFather(parm) {
        this.table.pageNum = parm.currentPage
        this.table.pageSize = parm.pageSize
        if (this.table.real) {

        } else {
          this.ImitatePage(this.table.tableAllData);
        }
      },
      /*模仿分页*/
      ImitatePage(data) {
        this.table.tableData = [];
        this.table.tableAllData = data;
        let total = data.length;
        let startIndex = (this.table.pageNum - 1) * this.table.pageSize;
        let endIndex = this.table.pageNum * this.table.pageSize;
        this.table.pageparm.total = total;
        this.table.tableData = total >= endIndex ? data.slice(startIndex, endIndex) : data.slice(startIndex, total);
      },
      // 真实分页
      RealPage(data, pageNum, pageSize) {
        this.table.tableData = data;
        this.table.pageparm.currentPage = pageNum;
        this.table.pageparm.pageSize = pageSize;
        this.table.pageparm.total = data.length;
      },
      /**
       * 初始化默认时间函数
       */
      defaultDateInit() {
        let startCompareTime = getTheMomentFewDaysAgo(30).format("yyyy-MM-dd");
        let startTime = getTheMomentFewDaysAgo(7).format("yyyy-MM-dd");
        let endTime = getTheMomentFewDaysAgo(1).format("yyyy-MM-dd");
        this.defaultQueryTime = [startTime, endTime];
        this.defaultCompareTime = [startCompareTime, endTime];
        this.time.queryTime = this.defaultQueryTime;
        this.time.compareTime = this.defaultCompareTime;
      },
      /**
       * 对比时间段checkbox点击事件
       */
      compareTimeSelect() {
        if (this.time.compare) {
          this.lineChart.multi = false;
        }
        this.lineChartQuery();
      },
      /**
       * 多维度选择checkbox点击事件
       */
      multiDimensionSelect() {
        if (this.lineChart.multi) {
          this.time.compare = false;
        }
        this.lineChartQuery();
      },
      /**
       * 请求api接口获取数据
       */
      lineChartQuery() {
        let param = this.getLineChartDataParam();
        pageLineChartApi(param).then(res => {
          if (res.code == 0) {
            let chartData = [];
            if (this.lineChart.multi) {
              for (let dis in this.lineChart.dimensions) {
                let disKey = this.lineChart.dimensions[dis];
                let disResult = res.obj.data[disKey];
                for (let date in disResult) {
                  let json = disResult[date];
                  for (let key in json) {
                    let dataJosn = {};
                    dataJosn['date'] = key;
                    dataJosn['count'] = json[key];
                    dataJosn['dimension'] = DimensionName[disKey];
                    chartData.push(dataJosn);
                  }
                }
              }
            } else {
              if (this.time.compare) {
                let result = res.obj.data[this.lineChart.dimension];
                let compareResult = res.obj.compareData[this.lineChart.dimension];
                let resultdimension = this.time.queryTime[0] + "~" + this.time.queryTime[1];
                let comparedimension = this.time.compareTime[0] + "~" + this.time.compareTime[1];
                let resultLength = result.length;
                let compareLength = compareResult.length;
                let array = compareLength >= resultLength ? result : compareResult;
                for (let i = 0; i < array.length; i++) {
                  let resultJson = result[i];
                  let compareJson = compareResult[i];
                  let chartResultJson = {};
                  let chartCompareJson = {};
                  let dateStr = '';
                  for (let key in resultJson) {
                    dateStr += key;
                    chartResultJson['count'] = resultJson[key];
                    chartResultJson['dimension'] = resultdimension;
                  }
                  for (let key in compareJson) {
                    dateStr += "/" + key;
                    chartCompareJson['count'] = compareJson[key];
                    chartCompareJson['dimension'] = comparedimension;
                  }
                  chartResultJson['date'] = dateStr;
                  chartCompareJson['date'] = dateStr;
                  chartData.push(chartResultJson);
                  chartData.push(chartCompareJson);
                }
                if (resultLength > compareLength) {
                  for (let i = array.length; i < resultLength; i++) {
                    let json = result[i];
                    for (let key in json) {
                      let dataJosn = {};
                      dataJosn['date'] = key;
                      dataJosn['count'] = json[key];
                      dataJosn['dimension'] = resultdimension;
                      chartData.push(dataJosn);
                    }
                  }
                }
                if (resultLength < compareLength) {
                  for (let i = array.length; i < compareLength; i++) {
                    let json = compareResult[i];
                    for (let key in json) {
                      let dataJosn = {};
                      dataJosn['date'] = key;
                      dataJosn['count'] = json[key];
                      dataJosn['dimension'] = comparedimension;
                      chartData.push(dataJosn);
                    }
                  }
                }


              } else {
                let result = res.obj.data[this.lineChart.dimension];
                for (let item in result) {
                  let json = result[item];
                  for (let key in json) {
                    let dataJosn = {};
                    dataJosn['date'] = key;
                    dataJosn['count'] = json[key];
                    dataJosn['dimension'] = DimensionName[this.lineChart.dimension];
                    chartData.push(dataJosn);
                  }
                }
              }
            }
            this.drawLineChart(chartData);
          } else {
            this.$message.error(res.msg)
          }
        })
      },
      /**
       * 封装请求参数
       * @returns {{}}
       */
      getLineChartDataParam() {
        let param = {};
        param['startDate'] = this.time.queryTime[0]
        param['endDate'] = this.time.queryTime[1];
        param['filter'] = this.filter.param;
        param['pageType'] = 'hd';
        if (this.time.compare) {//有对比时间段
          param['compareStartDate'] = this.time.compareTime[0];
          param['compareEndDate'] = this.time.compareTime[1];
          param['measures'] = this.lineChart.dimension;
        } else {//无对比时间段
          if (this.lineChart.multi) {
            param['measures'] = this.lineChart.dimensions.join(',');
          } else {
            param['measures'] = this.lineChart.dimension;
          }
        }
        return param;
      },
      /**
       * 调用G2 绘制折线图
       * @param data
       */
      drawLineChart(data) {
        chart.data(data);
        chart.scale({
          date: {
            range: [0.03, 0.97]
          },
          count: {
            nice: true
          }
        });

        chart.tooltip({
          showCrosshairs: true,
          shared: true,
        });

        chart.axis('count', {
          label: {
            formatter: (val) => {
              return val;
            }
          }
        });

        chart.axis('date', {
          label: {
            formatter: (val) => {
              return val;
            },
            autoHide: true,
            autoRotate: false
          }
        });

        chart.line()
        .position('date*count')
        .color('dimension');

        /*.shape('smooth')*/

        chart
        .point()
        .position('date*count')
        .color('dimension')
        .shape('circle');

        chart.render();
      }
    }
  }
</script>

<style lang="css" scoped>
  @import "../../../assets/css/page.css";

  .el-table >>> td, .el-table >>> th {
    padding: 5px 0 !important;
  }

  /*#filterForm >>> .el-form-item__content {
    margin-left: 0px !important;
  }*/
</style>
