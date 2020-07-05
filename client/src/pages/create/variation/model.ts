import { createStore, createEffect, createEvent, sample } from "effector";
import { saveSongVariation } from "api/songs";
import { SongVariation } from "constants/types";

export const SongVariationEmpty = {
  title: "",
  fullText: "",
  lyrics: [],
  songId: "",
  chords: []
};

export const saveSong = createEffect<SongVariation, void>();
export const handleChange = createEvent<any>();
export const $song = createStore<SongVariation>(SongVariationEmpty);
export const updateSong = createEvent<any>();
export const submitForm = createEvent<React.FormEvent<HTMLFormElement>>();

$song.on(handleChange, (state, event) => {
  return { ...state, [event.target.name]: event.target.value };
});

$song.on(updateSong, (state, { lyrics, chords }) => {
  return { ...state, lyrics, chords };
});

saveSong.use(saveSongVariation);

sample({
  source: $song,
  clock: submitForm,
  target: saveSong
});
