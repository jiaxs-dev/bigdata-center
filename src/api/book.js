/**
 * @Author: jiaxiansun@dongao.com
 * @Date: 2020/1/20
 * @Time: 14:31
 * @Description: 图书后台接口
 * @Copyright: www.dongao.com@2020
 */

import {reqpost} from "../assets/js/axiosFun";

export const pageBook = (params) => {
  return reqpost("/vue-admin/fe/book/page", params);
}
