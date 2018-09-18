import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 用户注册
 * @param data
 * @returns {*}
 */
export function updatePassword(data) {
  return request({
    url: `${apiPrefix}/api/password`,
    method: 'post',
    data
  })
}
