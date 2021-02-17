import { createStore, createEffect } from 'effector';
import { fetchLastRecords } from 'api/songs';
import { LastRecordsType } from 'constants/types';

export const getLastRecords = createEffect<number, LastRecordsType[]>();

export const $lastSongs = createStore<LastRecordsType[] | null>(null);
export const $showPreloader = createStore<boolean>(true);

$showPreloader.on(getLastRecords.done, () => false);
$lastSongs.on(getLastRecords.done, (_, payload) => payload.result);

getLastRecords.use(fetchLastRecords);
