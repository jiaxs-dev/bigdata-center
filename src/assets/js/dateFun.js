/*
时间处理js工具类
 */


/**
 * 获取几天前的当前时刻
 * @param n
 */
function getTheMomentFewDaysAgo(n) {
  let now = new Date();
  now.setDate(now.getDate() - n);
  return now;
}

/**
 * 获取昨天的结束时间
 * @returns {Date}
 */
function getYesterdayEndTime() {
  const now = new Date();
  now.setDate(now.getDate() - 1);
  now.setHours(23, 59, 59, 999);
  return now;
}

/**
 * 获取今天的结束时间
 * @returns {Date}
 */
function getTodayEndTime() {
  const now = new Date();
  now.setDate(now.getDate());
  now.setHours(23, 59, 59, 999);
  return now;
}

/**
 * 获取2020-05-01
 * @returns {Date}
 */
function getDataStartTime() {
  const now = new Date();
  now.setFullYear(2020);
  now.setMonth(5 - 1);
  now.setDate(1);
  now.setHours(0, 0, 0, 0);
  return now;
}

/**
 * 获取本月的开始时间
 */
function getStartOfMonth() {
  const now = new Date();
  let year = now.getFullYear();
  year += (year < 2000) ? 1900 : 0; //
  const month = now.getMonth();
  const day = now.getDate();
  const week = now.getDay();
  return new Date(year, month, 1).getTime();
}

/**
 * 获取本年开始时间
 */
function getStartOfYear() {
  const now = new Date();
  let year = now.getFullYear();
  year += (year < 2000) ? 1900 : 0; //
  const month = now.getMonth();
  const day = now.getDate();
  const week = now.getDay();
  return new Date(year, 0, 1).getTime();
}

export {
  getTheMomentFewDaysAgo,
  getStartOfMonth,
  getStartOfYear,
  getYesterdayEndTime,
  getDataStartTime,
  getTodayEndTime
}
