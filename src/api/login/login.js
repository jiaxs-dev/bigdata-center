/*
鉴权api接口
 */

import {reqget} from "../../assets/js/axiosFun";


export const loginApi = (param) => {
  return reqget("/api/login", param);
}


export const logoutApi = (param) => {
  return reqget("/api/logout",param)
}
