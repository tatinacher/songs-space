import { createStore } from "effector";
import { SongType } from "../../../constants/types";

export const $song = createStore<SongType | null>(null);
