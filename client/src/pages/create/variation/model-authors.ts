import { createEffect, createStore, createEvent, forward } from "effector";

import { Author, fetchAuthors, getAuthor, GetAuthorSongs } from "api/authors";

export const getAuthors = createEffect<void, Author[]>();
export const getAuthorSongs = createEffect<string, GetAuthorSongs>();

export const getSongs = createEvent<string>();

getAuthors.use(fetchAuthors);
getAuthorSongs.use(getAuthor);

export const $authors = createStore<Author[]>([]);
export const $authorSongs = createStore<GetAuthorSongs | null>(null);

$authors.on(getAuthors.done, (_, { result }) => {
  return result;
});

$authors.on(getAuthors.fail, (_, { params, error }) => {
  console.log(params, error);
});

export const $authorSongsPending = getAuthorSongs.pending;

$authorSongs.on(getAuthorSongs.done, (_, { result }) => {
  console.log(result);

  return result;
});

$authorSongs.on(getAuthorSongs.fail, (_, { params, error }) => {
  console.log(params, error);
});

forward({ from: getSongs, to: getAuthorSongs });
