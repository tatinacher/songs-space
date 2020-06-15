import { createStore, createEffect } from "effector";
import { fetchLastRecords } from "api/songs";
import { SongVariation } from "constants/types";

export const getLastRecords = createEffect<number, SongVariation[]>();
export const $lastSongs = createStore<SongVariation[] | null>(null);

$lastSongs.on(getLastRecords.done, (_, payload) => payload.result);

getLastRecords.use(fetchLastRecords);
