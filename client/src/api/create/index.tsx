import { request } from 'lib/request';

export type GetAuthorSongs = {
  author: string;
  songs: { id: string; title: string; author: string }[];
};

export const getBandSongs = (id: string): Promise<GetAuthorSongs> =>
  request({
    url: `/get-author/${id}`,
    method: 'get',
  });
