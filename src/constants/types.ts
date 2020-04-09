export type SongType = {
  title?: string;
  lyrics?: LineType[];
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
