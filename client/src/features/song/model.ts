import { createStore, createEvent } from 'effector';

const st = [
  ` B        F#        B        F#        E          E7`,
  `Good day sunshine, good day sunshine, good day sunshine`,
];

export const setField = createEvent();
export const $songTitle = createStore('').on(
  setField,
  (_, newTitle) => newTitle,
);

export const $songText = createStore(st).on(setField, (_, newText) => newText);

export const handleChange = setField.prepend((e: any) => e.target.value);
