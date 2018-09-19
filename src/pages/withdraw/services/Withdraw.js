import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 申请提现
 * @returns {*}
 */
export function withdraw(data) {
  return request({
    url: `${apiPrefix}/api/withdraw-apply`,
    method: 'post',
    data
  })
}
/**
 * 查询自己的地址
 * @param data
 * @returns {*}
 */
export function getAddress() {
  return request({
    url: `${apiPrefix}/api/addresses`,
    method: 'get'
  })
}
