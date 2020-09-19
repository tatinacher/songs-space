import { chordsKeys, chordColor, chordsSuffixes } from 'constants/chords';
import { ChordsType, LineType } from 'constants/types';

const removeDuplicates = (array: Array<boolean>) => {
  return array.filter((a, b) => array.indexOf(a) === b);
};

const containsKey: (word: string) => string | undefined = (word) => {
  let keyChord;
  chordsKeys.forEach((chord) => {
    if (word.includes(chord)) {
      keyChord = chord;
    }
  });
  return keyChord;
};

const checkIfChordsLine = (arrLine: Array<string>) =>
  arrLine.map((word: string) => {
    let isChord = false;
    const chordKey = containsKey(word);
    if (!chordKey) {
      return isChord;
    }

    const suffix = word.slice(chordKey.length);
    if (suffix.length === 0) {
      isChord = true;
      return isChord;
    }

    const hasSuffix = chordsSuffixes.includes(word.slice(chordKey.length));
    if (chordKey && hasSuffix) {
      isChord = true;
    }
    return isChord;
  });

export const removeExtraSpaces = (line: string) =>
  line
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');

export const isChordsLine = (line: string) => {
  const arrLine = removeExtraSpaces(line);
  const lines = checkIfChordsLine(arrLine);
  const simpleLine = removeDuplicates(lines);
  return simpleLine.length === 1 && simpleLine[0];
};

export const getAllChords = (lyrics: Array<string>) => {
  const res: Set<string> = new Set();
  lyrics.forEach((el) => {
    if (isChordsLine(el)) {
      const chords = removeExtraSpaces(el);
      chords.forEach((chord) => res.add(chord));
    }
  });
  return res;
};

export const setColors = (chords: Set<string>) => {
  const res: Set<ChordsType> = new Set();
  let index = 0;
  chords.forEach((chord) => {
    res.add({
      afterSpaces: 0,
      beforeSpaces: 0,
      color: chordColor[index],
      name: chord,
    });
    index += 1;
  });
  return res;
};

const findColorByName = (name: string, allChords: Set<ChordsType>) => {
  let color = '';

  allChords.forEach((chord) => {
    if (chord.name === name) {
      color = chord.color;
    }
  });
  return color;
};

export const setChords = (
  line: string,
  chords: Array<string>,
  allChords: Set<ChordsType>,
  nextLine: string,
  previousColor: string,
) => {
  const res: Array<ChordsType> = [];

  const maxLendth =
    nextLine.length > line.length ? nextLine.length : line.length;

  let index = 0;
  let chordsLine = line;

  if (line.indexOf(chords[0]) !== 0) {
    const name = chords[0];
    const position = line.indexOf(name);
    chordsLine = chordsLine.replace(name, ' '.repeat(name.length));

    const positionNext = line.indexOf(chords[1]);
    res.push({
      afterSpaces: positionNext - position - 1,
      beforeSpaces: position,
      color: previousColor || findColorByName(name, allChords),
      name: name,
    });
    index = 1;
  }

  for (let i = index; i < chords.length - 1; i++) {
    const chordPosition = chordsLine.indexOf(chords[i]);
    const name = chords[i];
    chordsLine = chordsLine.replace(name, ' '.repeat(name.length));

    const nextChordPosition = chordsLine.indexOf(chords[i + 1]);
    const spases = nextChordPosition - chordPosition - name.length;
    const chordColor = findColorByName(name, allChords);
    res.push({
      name: name,
      beforeSpaces: 0,
      afterSpaces: spases,
      color: chordColor,
    });
  }
  const name = chords[chords.length - 1];
  const chordColor = findColorByName(name, allChords);

  if (chords.length > 1) {
    let sum = 0;
    res.forEach((el) => {
      sum += el.name.length + el.beforeSpaces + el.afterSpaces;
    });

    const afterSpaces = maxLendth - sum;
    res.push({
      name: name,
      beforeSpaces: 0,
      afterSpaces,
      color: chordColor,
    });
  }

  return { res, chordColor };
};

export const parseLyrics: (
  lyrics: string,
) => { lyrics: LineType[]; chords: string[] } = (lyrics) => {
  const lines: LineType[] = [];
  const lyricLines = lyrics.split(/\r?\n/);
  const allChords = getAllChords(lyricLines);
  const chordsWithColors = setColors(allChords);
  let previousColor = '';
  for (let i = 0; i < lyricLines.length; i++) {
    const line = lyricLines[i];
    const nextLine = lyricLines[i + 1];
    const containsChords = isChordsLine(line);
    if (containsChords && nextLine !== '') {
      const chords = removeExtraSpaces(line);
      const { res: chordsInfo, chordColor: color } = setChords(
        line,
        chords,
        chordsWithColors,
        nextLine,
        previousColor,
      );
      previousColor = color;
      lines.push({ chords: chordsInfo, text: nextLine });
      i += 1;
    } else {
      if (line.replace(/\s/g, '') === '') {
        lines.push({ text: '\n' });
      } else {
        lines.push({ text: line });
      }

      previousColor = '';
    }
  }
  console.log(allChords);

  const lyricsChords = Array.from(allChords);
  return { lyrics: lines, chords: lyricsChords };
};
