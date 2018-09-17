import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 找回密码
 * @param data
 * @returns {*}
 */
export function password(data) {
  return request({
    url: `${apiPrefix}/password`,
    method: 'post',
    data
  })
}
