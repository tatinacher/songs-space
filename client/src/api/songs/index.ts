import { request } from "lib/request";
import { SongsType, SongVariation, Song } from "constants/types";

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
