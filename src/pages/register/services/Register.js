import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 用户注册
 * @param data
 * @returns {*}
 */
export function register(data) {
  return request({
    url: `${apiPrefix}/register`,
    method: 'post',
    data
  })
}

export function sms(data) {
  return request({
    url: `${apiPrefix}/sms`,
    method: 'post',
    data
  })
}
