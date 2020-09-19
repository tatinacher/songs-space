import { request } from 'lib/request';

export const search = (search: string): Promise<any> =>
  request({
    url: `/search/?request=${search}`,
    method: 'get',
  });
