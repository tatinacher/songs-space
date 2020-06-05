export type SongType = {
  title?: string;
  lyrics?: LineType[];
  lyricsText?: string;
};

export type LineType = {
  text?: string;
  chords?: ChordsType[];
};

export type ChordsType = {
  name: string;
  beforeSpaces: number;
  afterSpaces: number;
  color: string;
};

export type SongsType = {
  title: string;
  author?: string;
  album?: string;
  _id: string;
};
