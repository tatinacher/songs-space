import { request } from "../../lib/request";

export type Author = {
  author: string;
  description: string;
  _id: string;
};

export type Song = {
  title: string;
  id: string;
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

export const fetchAuthor = (id: string): Promise<AuthorSongs> =>
  request({
    url: `/author/${id}`,
    method: "get"
  });
