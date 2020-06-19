/**
 * 统计分析调用后台接口
 */

import {reqget} from '../../assets/js/axiosFun'

/**
 *
 * @param param
 * @returns {*}
 */
export const advertisingLineChartApi = (param) => {
  return reqget("/api/alpha/poster/measure_date", param);
}

export const advertisingTableApi = (param) => {
  return reqget("/api/alpha/poster/measure_dim", param);
}

export const advertisingDimensions = (param) => {
  return reqget('/api/alpha/common/dim', param);
}

export const planApi = (param) => {
  return reqget("", param);
}

export const pageLineChartApi = (param) => {
  return reqget("/api/alpha/page/measure_date", param);
}
export const pageTableApi = (param) => {
  return reqget("/api/alpha/page/measure_dim", param);
}

