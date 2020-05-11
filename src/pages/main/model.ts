import { createStore, createEffect } from "effector";
import { SongVariation, fetchLastRecords } from "api/songs";

export const getLastRecords = createEffect<number, SongVariation[]>();
export const $lastSongs = createStore<SongVariation[] | null>(null);

$lastSongs.on(getLastRecords.done, (_, payload) => payload.result);

getLastRecords.use(fetchLastRecords);
