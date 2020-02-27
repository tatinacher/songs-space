import { createStore, createEvent } from "effector";

export const setField = createEvent();
export const $songTitle = createStore("").on(
  setField,
  (_, newTitle) => newTitle
);

export const handleChange = setField.prepend((e: any) => e.target.value);
