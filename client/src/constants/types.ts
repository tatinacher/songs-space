export type SongType = {
  title?: string;
  lyrics?: LineType[];
  lyricsText?: string;
};

export type LineType = {
  text?: string;
  chords?: ChordsType[];
};

export type SongsType = {
  title: string;
  author?: string;
  album?: string;
  id: string;
};

export type Song = {
  title: string;
  id: string;
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
  id?: string;
  title: string;
  fullText: string;
  lyrics: Line[];
  songId: string;
  chords: string[];
};

// new edition

export type LastRecordsType = {
  id: string;
  title: string;
};

export type SongChordsType = {
  id: string;
  title: string;
  chords: Array<string>;
  lyrics: Array<LyricsType>;
  song: string;
};

export type LyricsType = {
  text: string;
  chords: Array<ChordsType>;
};

export type ChordsType = {
  name: string;
  beforeSpaces: number;
  afterSpaces: number;
  color: string;
};
