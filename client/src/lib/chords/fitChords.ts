import { ChordsType } from 'constants/types';

export const cutText = (
  text: string,
  chords: ChordsType[],
  maxSize: number,
) => {
  const textWords = text.split(' ');
  const lines = [];
  let line = '';

  textWords.forEach((word) => {
    if ((line + word).length > maxSize) {
      lines.push(line);
      line = '';
    }
    line += word + ' ';
  });

  lines.push(line);

  let chordIndex = 0;
  const final = [];

  for (let i = 0; i < lines.length; i++) {
    const lineLength = lines[i].length;
    const lineChords = [];
    let chordLength = 0;

    while (chordLength < lineLength) {
      let chord = chords[chordIndex];
      if (chord === undefined) {
        break;
      }
      const fullChordLendth =
        chord.beforeSpaces + chord.name.length + chord.afterSpaces;
      if (
        chord.beforeSpaces > lineLength ||
        chord.beforeSpaces + chord.name.length > lineLength
      ) {
        lineChords.push({
          name: ' ',
          afterSpaces: 0,
          beforeSpaces: lineLength - 1,
          color: chord.color,
        });
        chord = {
          ...chords[chordIndex],
          beforeSpaces: chords[chordIndex].beforeSpaces - lineLength,
        };
        chords[chordIndex] = chord;
        chordLength = lineLength;
      } else if (fullChordLendth > lineLength) {
        const remainSpaces = fullChordLendth - lineLength;
        const afterSpaces = chord.afterSpaces - remainSpaces;

        lineChords.push({
          name: chord.name,
          afterSpaces: afterSpaces,
          beforeSpaces: chord.beforeSpaces,
          color: chord.color,
        });
        chord = {
          name: ' ',
          beforeSpaces: remainSpaces - 1,
          color: chords[chordIndex].color,
          afterSpaces: 0,
        };

        chords[chordIndex] = chord;
        chordLength = lineLength;
      } else {
        lineChords.push({ ...chord });
        chordLength += fullChordLendth;
        chordIndex += 1;
      }
    }
    final.push({ chords: lineChords, text: lines[i] });
  }
  return final;
};
