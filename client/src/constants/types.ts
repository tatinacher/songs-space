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

export type Song = {
  title: string;
  _id: string;
};

export type Line = {
  chords: ChordsType[];
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
