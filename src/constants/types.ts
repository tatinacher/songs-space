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
  width: number;
  color: string;
};
