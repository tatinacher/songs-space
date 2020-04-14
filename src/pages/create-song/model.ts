import { createStore, createEffect, createEvent, sample } from "effector";
import { saveSongVariation, SongVariation } from "../../api/songs";
import { FormEvent } from "react";

export const SongVariationEmty = {
  title: "",
  fullText: "",
  lyrics: [],
  songId: ""
};

export const saveSong = createEffect<SongVariation, void>();
export const handleChange = createEvent<any>();
export const $song = createStore<SongVariation>(SongVariationEmty);
export const updateSong = createEvent<any>();
export const submitForm = createEvent<FormEvent<HTMLFormElement>>();
$song.on(handleChange, (state, event) => {
  return { ...state, [event.target.name]: event.target.value };
});

$song.on(updateSong, (state, chords) => {
  return { ...state, lyrics: chords };
});

saveSong.use(saveSongVariation);

sample({
  source: $song,
  clock: submitForm,
  target: saveSong
});
