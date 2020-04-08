import { createEffect, createStore } from "effector";

import {
  Author,
  AuthorSongs,
  fetchAuthors,
  fetchAuthor
} from "../../api/authors";

export const getAuthors = createEffect<void, Author[]>();
export const getAuthorSongs = createEffect<string, AuthorSongs>();

getAuthors.use(fetchAuthors);
getAuthorSongs.use(fetchAuthor);

export const $authors = createStore<Author[]>([]);
export const $authorSongs = createStore<AuthorSongs | null>(null);

$authors.on(getAuthors.done, (_, { result }) => {
  return result;
});

$authors.on(getAuthors.fail, (_, { params, error }) => {
  console.log(params, error);
});

export const $authorSongsPending = getAuthorSongs.pending;

$authorSongs.on(getAuthorSongs.done, (_, { result }) => {
  return result;
});

$authorSongs.on(getAuthorSongs.fail, (_, { params, error }) => {
  console.log(params, error);
});
