import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

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

/**
 * 地址的新增和修改
 * @param data
 * @returns {*}
 */
export function address(data) {
  return request({
    url: `${apiPrefix}/api/addresses`,
    method: 'post',
    data
  })
}

/**
 * 删除地址
 * @param data
 * @returns {*}
 */
export function delAddress() {
  return request({
    url: `${apiPrefix}/api/addresses`,
    method: 'delete',
  })
}
