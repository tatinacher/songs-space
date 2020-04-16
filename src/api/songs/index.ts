import { request } from "../../lib/request";
import { SongsType } from "../../constants/types";

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
  _id?: string;
  title: string;
  fullText: string;
  lyrics: Line[];
  songId: string;
  chords: string[];
};

export const fetchLastRecords = (count: number): Promise<SongVariation[]> =>
  request({
    url: "/last-records",
    method: "get",
    params: { count: count }
  });

export const fetchSongVariations = (songId: string): Promise<Song[]> =>
  request({
    url: `/song/${songId}`,
    method: "get"
  });

export const fetchLyricChrods = (id: string): Promise<SongVariation> =>
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

export const addSong = (song: SongsType): Promise<void> =>
  request({
    url: `/add-song`,
    method: "post",
    params: song
  });
