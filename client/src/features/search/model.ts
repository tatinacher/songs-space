import { createEffect, createStore, createEvent, sample } from "effector";
import { search } from "api/search";
import { Song } from "constants/types";

export const searchEffect = createEffect<string, any>();

searchEffect.use(search);

export const $searchRequest = createStore<string>("");
export const $searchResponse = createStore<Song[]>([]);

export const submitForm = createEvent<React.FormEvent<HTMLFormElement>>();
export const handleChange = createEvent<any>();

$searchRequest.on(handleChange, (state, event) => {
  return event.target.value;
});

sample({
  source: $searchRequest,
  clock: submitForm,
  target: searchEffect
});

$searchResponse.on(searchEffect.done, (_, payload) => payload.result);
