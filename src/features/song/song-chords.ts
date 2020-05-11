import { createStore, createEffect } from "effector";
import { fetchLyricChrods, SongVariation } from "api/songs";

export const getLyricChrods = createEffect<string, SongVariation>();
export const $lyricChords = createStore<SongVariation | null>(null);

getLyricChrods.use(fetchLyricChrods);

$lyricChords.on(getLyricChrods.done, (_, { result }) => {
  return result;
});

$lyricChords.on(getLyricChrods.fail, (_, { params, error }) => {
  console.log(params, error);
});
