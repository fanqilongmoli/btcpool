import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 收益列表
 * @returns {*}
 */
export function getChart(start,end) {
  return request({
    url: `${apiPrefix}/api/gain-chart?start=${start}&end=${end}`,
    method: 'get'
  })
}

/**
 * 状态总览
 * @returns {*}
 */
export function getState() {
  return request({
    url: `${apiPrefix}/api/state`,
    method: 'get',
  })
}


