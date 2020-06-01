import request from '../utils/request';

export function query() {
  return request('/api/users');
}
export function getList() {
  return request('/api/list');
}