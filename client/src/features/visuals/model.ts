import { createStore, createEvent } from 'effector';

export const setSize = createEvent<number>();
export const $fontSize = createStore(14).on(setSize, (_, newSize) => newSize);
