import { request } from "lib/request";

export type Author = {
  author: string;
  description: string;
  _id: string;
};

export type Song = {
  _id: string;
  title: string;
  variations: number;
};

export type AuthorSongs = {
  author: string;
  songs: Song[];
};

export const fetchAuthors = (): Promise<Author[]> =>
  request({
    url: "/authors",
    method: "get"
  });

export const fetchAuthor = (_id: string): Promise<AuthorSongs> =>
  request({
    url: `/author/${_id}`,
    method: "get"
  });
