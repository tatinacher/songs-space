import { chordsKeys, chordColor, chordsSuffixes } from "../../constants/chords";
import { getTextWidth } from "../measurement";
import { ChordsType, LineType } from "../../constants/types";

const removeDuplicates = (array: Array<boolean>) => {
  return array.filter((a, b) => array.indexOf(a) === b);
};

const containsKey: (word: string) => string | undefined = word => {
  let keyChord;
  chordsKeys.forEach(chord => {
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
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");

export const isChordsLine = (line: string) => {
  const arrLine = removeExtraSpaces(line);
  const lines = checkIfChordsLine(arrLine);
  const simpleLine = removeDuplicates(lines);
  return simpleLine.length === 1 && simpleLine[0];
};

export const getAllChords = (lyrics: Array<string>) => {
  const res: Set<string> = new Set();
  lyrics.forEach(el => {
    if (isChordsLine(el)) {
      const chords = removeExtraSpaces(el);
      chords.forEach(chord => res.add(chord));
    }
  });
  return res;
};

export const setColors = (chords: Set<string>) => {
  const res: Set<ChordsType> = new Set();
  let index = 0;
  chords.forEach(chord => {
    res.add({
      name: chord,
      color: chordColor[index],
      width: 0
    });
    index += 1;
  });
  return res;
};

const findColorByName = (name: string, allChords: Set<ChordsType>) => {
  let color = "";
  allChords.forEach(chord => {
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
  previousColor: string
) => {
  const res: Array<ChordsType> = [];
  const maxLendth =
    nextLine.length > line.length ? nextLine.length : line.length;

  if (line.indexOf(chords[0]) !== 0) {
    const position = line.indexOf(chords[0]);
    res.push({
      name: "",
      width: position,
      color: previousColor
    });
  }
  let chordsLine = line;

  for (let i = 0; i < chords.length - 1; i++) {
    const chord = chordsLine.indexOf(chords[i]);
    const name = chords[i];
    const nextcord = chordsLine.indexOf(chords[i + 1]);
    const position = nextcord - chord + 1;
    const chordColor = findColorByName(name, allChords);

    chordsLine =
      chordsLine.slice(0, chord) +
      " ".repeat(chords[i].length) +
      chordsLine.slice(chord + chords[i].length, maxLendth);

    res.push({
      name: name,
      width: position,
      color: chordColor
    });
  }
  const chordposition = chordsLine.indexOf(chords[chords.length - 1]);
  const name = chords[chords.length - 1];
  const chordColor = findColorByName(name, allChords);

  res.push({
    name: name,
    width: maxLendth - chordposition,
    color: chordColor
  });

  return { res, chordColor };
};

export const parseLyrics: (
  lyrics: string
) => { lyrics: LineType[]; chords: string[] } = lyrics => {
  const lines: LineType[] = [];
  const lyricLines = lyrics.split(/\r?\n/);
  const allChords = getAllChords(lyricLines);
  const chordsWithColors = setColors(allChords);
  let previousColor = "";
  for (let i = 0; i < lyricLines.length; i++) {
    const line = lyricLines[i];
    const nextLine = lyricLines[i + 1];
    const containsChords = isChordsLine(line);
    if (containsChords && nextLine !== "") {
      const chords = removeExtraSpaces(line);
      const { res: chordsInfo, chordColor: color } = setChords(
        line,
        chords,
        chordsWithColors,
        nextLine,
        previousColor
      );
      previousColor = color;
      lines.push({ chords: chordsInfo, text: nextLine });
      i += 1;
    } else {
      const res: LineType = { text: line };
      lines.push(res);
      previousColor = "";
    }
  }
  const lyricsChords = Array.from(allChords);
  return { lyrics: lines, chords: lyricsChords };
};
