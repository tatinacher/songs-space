import {
  Bands,
  Songss,
  Login,
  Main,
  SongVariations,
  CreateSong,
  SongChords,
} from './';
import { CreateSongVariation } from './create/variation';

export const routes = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
  {
    path: '/song/:_id',
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
    path: '/songs/:_id',
    component: Songss,
  },
  {
    path: '/variation/:_id',
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
