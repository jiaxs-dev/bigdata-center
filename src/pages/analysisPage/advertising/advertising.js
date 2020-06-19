/*
广告分析页面常量
 */

import {getDataStartTime, getYesterdayEndTime} from "../../../assets/js/dateFun";

/**
 * maxTime（时间选择框可选的最大时间，默认为昨天）
 * @type {number}
 */
const maxTime = getYesterdayEndTime().getTime();

/**
 * maxTime（时间选择框可选的最小时间，默认为2020-05-01）
 * @type {number}
 */
const minTime = getDataStartTime().getTime();


/**
 * 时间插件快捷选项
 * @type {{disabledDate(*): *, shortcuts: [{onClick(*): void, text: string}, {onClick(*): void, text: string}, {onClick(*): void, text: string}]}}
 */
const pickerOptions = {
  shortcuts: [
    {
      text: "最近一周",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit("pick", [start, end]);
      }
    },
    {
      text: "最近一个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit("pick", [start, end]);
      }
    },
    {
      text: "最近三个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit("pick", [start, end]);
      }
    }
  ],
  disabledDate(time) {
    return time.getTime() < minTime || time.getTime() > maxTime;
  }
}

/**
 * 折线图维度指标
 * @type {({name: string, value: string}|{name: string, value: string}|{name: string, value: string}|{name: string, value: string}|{name: string, value: string})[]}
 */
const LineChartDimensions = [
  {value: 'exposure_pv', name: '曝光次数'},
  {value: 'exposure_uv', name: '曝光人数'},
  {value: 'click_pv', name: '点击次数'},
  {value: 'click_uv', name: '点击人数'},
  {value: 'reg_um', name: '注册用户'},
  {value: 'order_nat_num', name: '订单静默'},
  {value: 'order_sal_num', name: '订单电销'},
  {value: 'goods_book_num', name: '商品数量/图书'},
  {value: 'goods_course_num', name: '商品数量/课程'},
];

/**
 * 折线图维度与显示名称对应关系
 * @type {{order_nat_num: string, order_sal_num: string, goods_book_num: string, exposure_pv: string, click_pv: string, reg_um: string, exposure_uv: string, click_uv: string, goods_course_num: string}}
 */
const DimensionName = {
  exposure_pv: "曝光次数",
  exposure_uv: "曝光人数",
  click_pv: "点击次数",
  click_uv: "点击人数",
  reg_um: "注册用户",
  order_nat_num: "订单静默",
  order_sal_num: "订单电销",
  goods_book_num: "商品数量/图书",
  goods_course_num: "商品数量/课程"
};

/**
 * 折线图默认选择维度
 * @type {string[]}
 */
const defaultDimensions = ['exposure_pv'];
const defaultDimension = 'exposure_pv';

/**
 * 表格动态列
 * @type {({hasChildren: boolean, prop: string, label: string, sortable: boolean}|{hasChildren: boolean, prop: string, label: string, sortable: boolean}|{hasChildren: boolean, prop: string, label: string, sortable: boolean}|{hasChildren: boolean, prop: string, label: string, sortable: boolean}|{hasChildren: boolean, prop: string, label: string, sortable: boolean})[]}
 */
const DynamicTableColumns = [{
  label: "广告名称",
  prop: "poster_name",
  name: 'poster_name',
  hasChildren: false,
  sortable: false
}, {
  label: "投放终端",
  prop: "put_platform_code",
  name: "put_platform_name",
  hasChildren: false,
  sortable: false
}, {
  label: "投放位置",
  prop: "put_location_code",
  name: "put_location_name",
  hasChildren: false,
  sortable: false
}, {
  label: "投放渠道",
  prop: "put_channel_code",
  name: "put_channel_name",
  hasChildren: false,
  sortable: false
}, {
  label: "投放页面",
  prop: "put_exam_code",
  name: "put_exam_name",
  hasChildren: false,
  sortable: false
}, {
  label: "平台",
  prop: "platform",
  name: "platform",
  hasChildren: false,
  sortable: false
}];

const DynamicTableColumnsMapping = {
  platform: {
    label: "平台",
    prop: "platform",
    name: "platform",
    hasChildren: false,
    sortable: false
  },
  poster_name: {
    label: "广告名称",
    prop: "poster_name",
    name: "poster_name",
    hasChildren: false,
    sortable: false
  },
  put_platform_code: {
    label: "投放终端",
    prop: "put_platform_code",
    name: "put_platform_name",
    hasChildren: false,
    sortable: false
  },
  put_location_code: {
    label: "投放位置",
    prop: "put_location_code",
    name: "put_location_name",
    hasChildren: false,
    sortable: false
  },
  put_channel_code: {
    label: "投放渠道",
    prop: "put_channel_code",
    name: "put_channel_name",
    hasChildren: false,
    sortable: false
  },
  put_exam_code: {
    label: "投放页面",
    prop: "put_exam_code",
    name: "put_exam_name",
    hasChildren: false,
    sortable: false
  }
};

/**
 * 默认选中动态列
 * @type {{hasChildren: boolean, prop: string, label: string, sortable: boolean}[]}
 */
const DefaultSelectedDynamicTableColumns = [{
  label: "广告名称",
  prop: "poster_name",
  name: "poster_name",
  hasChildren: false,
  sortable: false
}];

/**
 * 表格固定列
 * @type {({hasChildren: boolean, prop: string, label: string, sortable: boolean}|{hasChildren: boolean, prop: string, label: string}|{hasChildren: boolean, prop: string, label: string, sortable: boolean}|{hasChildren: boolean, prop: string, label: string, sortable: boolean}|{hasChildren: boolean, prop: string, label: string, sortable: boolean})[]}
 */
const FixedTableColumns = [
  {
    label: "曝光人数",
    prop: "exposure_uv",
    name: "exposure_uv",
    hasChildren: false,
    sortable: 'custom'
  },
  {
    label: "曝光次数",
    prop: "exposure_pv",
    name: "exposure_pv",
    hasChildren: true,
    sortable: 'custom'
  },
  {
    label: "点击次数",
    prop: "click_pv",
    name: "click_pv",
    hasChildren: false,
    sortable: 'custom'
  },
  {
    label: "点击人数",
    prop: "click_uv",
    name: "click_uv",
    hasChildren: false,
    sortable: 'custom'
  },
  {
    label: "注册用户",
    prop: "reg_um",
    name: "reg_um",
    hasChildren: false,
    sortable: 'custom'
  },
  {
    label: "订单",
    prop: "",
    hasChildren: true,
    childrens: [{
      label: "静默",
      prop: "order_nat_num",
      name: "order_nat_num",
      hasChildren: false,
      sortable: 'custom'
    }, {
      label: "电销",
      prop: "order_sal_num",
      name: "order_sal_num",
      hasChildren: false,
      sortable: 'custom'
    }]
  },
  {
    label: "商品",
    prop: "",
    hasChildren: true,
    childrens: [{
      label: "图书",
      prop: "goods_book_num",
      name: "goods_book_num",
      hasChildren: false,
      sortable: 'custom'
    }, {
      label: "课程",
      prop: "goods_course_num",
      name: "goods_course_num",
      hasChildren: false,
      sortable: 'custom'
    }]
  }
];


const operator = [{
  label: '等于',
  value: '='
}, {
  label: '不等于',
  value: '!='
}, {
  label: '包含',
  value: 'in'
}, {
  label: '不包含',
  value: 'not in'
}]

export {
  pickerOptions,
  LineChartDimensions,
  defaultDimensions,
  defaultDimension,
  DimensionName,
  DynamicTableColumns,
  FixedTableColumns,
  DynamicTableColumnsMapping,
  DefaultSelectedDynamicTableColumns,
  operator
}
