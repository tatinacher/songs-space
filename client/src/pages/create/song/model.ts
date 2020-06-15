import { createStore, createEvent, createEffect, sample } from "effector";
import { SongsType } from "constants/types";
import { addSong } from "api/songs";

const emptySong = {
  _id: "",
  title: ""
};

export const submitForm = createEvent<React.FormEvent<HTMLFormElement>>();

export const $song = createStore<SongsType>(emptySong);
export const saveSong = createEffect<SongsType, void>();
export const handleChange = createEvent<any>();
$song.on(handleChange, (state, event) => {
  return { ...state, [event.target.name]: event.target.value };
});

saveSong.use(addSong);

sample({
  source: $song,
  clock: submitForm,
  target: saveSong
});
