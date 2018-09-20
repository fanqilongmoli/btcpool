import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 状态总览
 * @param data
 * @returns {*}
 */
export function getState() {
  return request({
    url: `${apiPrefix}/api/state`,
    method: 'get'
  })
}

