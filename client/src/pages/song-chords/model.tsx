import { createStore, createEvent } from "effector";

export const changeInstrument = createEvent();

export const $isGuitar = createStore<boolean>(false).on(
  changeInstrument,
  state => !state
);
