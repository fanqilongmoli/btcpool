import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * /api/hashrates 所有算力产品
 * @returns {*}
 */
export function getHashrates() {
  return request({
    url: `${apiPrefix}/api/hashrates`,
    method: 'get'
  })
}

/**
 * 获取参数列表
 * @returns {*}
 */
export function parameters() {
  return request({
    url: `${apiPrefix}/api/parameters`,
    method: 'get'
  })
}
