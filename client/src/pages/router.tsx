import {
  Bands,
  CreateSong,
  CreateSongVariation,
  Login,
  Main,
  SongChords,
  Songss,
  SongVariations,
} from './';

export const routesPaths = {
  song: '/song/',
  songChords: '/song-chords/',
};

export const routes = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
  {
    path: `${routesPaths.song}:id`,
    component: SongVariations,
  },
  {
    path: '/create-song',
    component: CreateSong,
  },
  {
    path: '/bands',
    component: Bands,
    exact: true,
  },
  {
    path: '/songs/:id',
    component: Songss,
  },
  {
    path: `${routesPaths.songChords}:id`,
    component: SongChords,
  },
  {
    path: '/create-song-variation',
    component: CreateSongVariation,
  },
  {
    path: '/login',
    component: Login,
  },
];
