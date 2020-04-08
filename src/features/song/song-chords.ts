import { createStore, createEffect } from "effector";
import { fetchLyricChrods, LyricChrods } from "../../api/songs";

export const getLyricChrods = createEffect<string, LyricChrods>();
export const $lyricChords = createStore<LyricChrods | null>(null);

getLyricChrods.use(fetchLyricChrods);

$lyricChords.on(getLyricChrods.done, (_, { result }) => {
  return result;
});

$lyricChords.on(getLyricChrods.fail, (_, { params, error }) => {
  console.log(params, error);
});
