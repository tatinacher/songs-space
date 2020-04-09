import { createStore, createEffect, createEvent } from "effector";
import { SongType } from "../../constants/types";

export const createSong = createEffect();
export const handleChange = createEvent<any>();
export const $song = createStore<SongType>({});

$song.on(handleChange, (state, event) => {
  const field = { [event.target.name]: event.target.value };
  return { ...state, field };
});
