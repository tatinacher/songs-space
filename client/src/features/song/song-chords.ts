import { createStore, createEffect } from 'effector';
import { fetchSongChords } from 'api/songs';
import { SongChordsType } from 'constants/types';

export const getLyricChrods = createEffect<string, SongChordsType>();
export const $lyricChords = createStore<SongChordsType | null>(null);

getLyricChrods.use(fetchSongChords);

$lyricChords.on(getLyricChrods.done, (_, { result }) => {
  return result;
});

$lyricChords.on(getLyricChrods.fail, (_, { params, error }) => {
  console.log(params, error);
});
