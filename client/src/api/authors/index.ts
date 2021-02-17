import { request } from 'lib/request';

export type Author = {
  author: string;
  description: string;
  id: string;
  songs: number;
};

export type Song = {
  id: string;
  title: string;
  variations: number;
};

export const getAuthorsList = (): Promise<Author[]> =>
  request({
    url: '/authors-list',
    method: 'get',
  });

export const getBandSongs = (id: string): Promise<Song[]> =>
  request({
    url: `/author-songs/${id}`,
    method: 'get',
  });
