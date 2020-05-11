import { createStore, createEffect } from "effector";
import { Song, fetchSongVariations } from "api/songs";

export const getSongVariations = createEffect<string, Song[]>();
export const $songVariations = createStore<Song[]>([]);

getSongVariations.use(fetchSongVariations);

$songVariations.on(getSongVariations.done, (_, { result }) => {
  return result;
});

$songVariations.on(getSongVariations.fail, (_, { params, error }) => {
  console.log(params, error);
});
