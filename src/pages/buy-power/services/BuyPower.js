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
 * 下订单
 * @returns {*}
 */
export function orders(data) {
  return request({
    url: `${apiPrefix}/api/hash-orders`,
    method: 'post',
    data
  })
}

