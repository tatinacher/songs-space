import { createStore, createEffect } from 'effector';
import { fetchSongVariations } from 'api/songs';
import { Song } from 'constants/types';

export const getSongVariations = createEffect<string, Song[]>();
export const $songVariations = createStore<Song[]>([]);

getSongVariations.use(fetchSongVariations);

$songVariations.on(getSongVariations.done, (_, { result }) => result);

$songVariations.on(getSongVariations.fail, (_, { params, error }) => {
  console.log(params, error);
});
