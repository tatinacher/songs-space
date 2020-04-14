import { request } from "../../lib/request";

export type Song = {
  title: string;
  id: string;
};

export type Chord = {
  width: number;
  color: string;
  name: string;
};

export type Line = {
  chords: Chord[];
  text: string;
};

export type LyricChrods = {
  title: string;
  lyrics: Line[];
};

export type SongVariation = {
  title: string;
  fullText: string;
  lyrics: Line[];
  songId: string;
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

export const saveSongVariation = (
  songVariation: SongVariation
): Promise<void> =>
  request({
    url: `/add-song-variation`,
    method: "post",
    params: songVariation
  });
