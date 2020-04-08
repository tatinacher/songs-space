import { request } from "../../lib/request";

export type Song = {
  title: string;
  id: string;
};

export type Chord = {
  position: number;
  color: string;
  name: string;
};

export type Line = {
  chord: Chord[];
  lyric: string;
};

export type LyricChrods = {
  title: string;
  lyrics: Line[];
};

export const fetchSongVariations = (songId: string): Promise<Song[]> =>
  request({
    url: `/song/${songId}`,
    method: "get"
  });

export const fetchLyricChrods = (id: string): Promise<LyricChrods> =>
  request({
    url: `/variation/${id}`,
    method: "get"
  });
