import { createEffect, createStore, createEvent, forward } from 'effector';

import { Author, Song, getAuthorsList, getBandSongs } from 'api/authors';

export const getAuthors = createEffect<void, Author[]>();
export const getAuthorSongs = createEffect<string, Song[]>();

export const getSongs = createEvent<string>();

getAuthors.use(getAuthorsList);
getAuthorSongs.use(getBandSongs);

export const $authors = createStore<Author[]>([]);
export const $authorSongs = createStore<Song[] | null>(null);

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
