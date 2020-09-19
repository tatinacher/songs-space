import * as React from 'react';
import styled from 'styled-components';
import { ChordsType } from 'constants/types';

interface ChordsProps {
  chords?: ChordsType[];
  fontSize: number;
  showSpaces?: boolean;
}

export const Chords: React.FC<ChordsProps> = ({
  chords,
  fontSize,
  showSpaces = true,
}) => {
  if (!chords) return null;

  return (
    <ChordLine fontSize={fontSize}>
      {chords.map((chord, key) => {
        if (!showSpaces) {
          chord.afterSpaces = 10 - chord.name.length;
          chord.beforeSpaces = 0;
        }
        return <Chord key={key} {...chord} />;
      })}
    </ChordLine>
  );
};

export const Chord: React.FC<ChordsType> = ({
  beforeSpaces,
  afterSpaces,
  name,
  color,
}) => {
  let line = name;
  console.log(line);

  if (beforeSpaces > 0) {
    line = ' '.repeat(beforeSpaces) + line;
  }
  console.log(line);

  if (afterSpaces > 0) {
    line = line + ' '.repeat(afterSpaces);
  }
  console.log(line);

  console.log(beforeSpaces, afterSpaces, name);

  return (
    <div data-color="color" style={{ color: color }}>
      {line}
    </div>
  );
};

export const ChordLine = styled.div<{
  fontSize: number;
}>`
  display: flex;
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: bold;
  font-size: ${(props) => props.fontSize}px;
`;
