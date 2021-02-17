import { request } from 'lib/request';
import {
  SongsType,
  SongVariation,
  Song,
  LastRecordsType,
  SongChordsType,
} from 'constants/types';

export const fetchLastRecords = (count: number): Promise<LastRecordsType[]> =>
  request({
    url: '/last-records',
    method: 'get',
    params: { count },
  });

export const fetchSongChords = (id: string): Promise<SongChordsType> =>
  request({
    url: `/song-chords/${id}`,
    method: 'get',
  });

//old

export const fetchSongVariations = (songId: string): Promise<Song[]> =>
  request({
    url: `/song/${songId}`,
    method: 'get',
  });

export const saveSongVariation = (
  songVariation: SongVariation,
): Promise<void> =>
  request({
    url: `/add-song-variation`,
    method: 'post',
    params: songVariation,
  });

export const addSong = (song: SongsType): Promise<void> =>
  request({
    url: `/add-song`,
    method: 'post',
    params: song,
  });
