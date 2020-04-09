import { Bands, Band, Main, SongVariations, CreateSong, SongChords } from "./";

export const routes = [
  {
    path: "/",
    component: Main,
    exact: true
  },
  {
    path: "/song/:id",
    component: SongVariations
  },
  {
    path: "/create-song",
    component: CreateSong
  },
  {
    path: "/bands",
    component: Bands,
    exact: true
  },
  {
    path: "/bands/:id",
    component: Band
  },
  {
    path: "/variation/:id",
    component: SongChords
  },
  {
    path: "/create-song",
    component: CreateSong
  }
];
