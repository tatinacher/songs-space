//why two components inside this molecule? fix
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
  //fix this, put in on top
  if (!chords) return null;

  return (
    <ChordLine fontSize={fontSize}>
      {chords.map((chord, key) => {
        //fix this
        if (!showSpaces) {
          chord.afterSpaces = 10 - chord.name.length;
          chord.beforeSpaces = 0;
        }
        return <Chord key={key} {...chord} />;
      })}
    </ChordLine>
  );
};

// show chord with spaces
export const Chord: React.FC<ChordsType> = ({
  afterSpaces,
  beforeSpaces,
  color,
  name,
}) => (
  <div data-color="color" style={{ color: color }}>
    {' '.repeat(beforeSpaces) + name + ' '.repeat(afterSpaces)}
  </div>
);

export const ChordLine = styled.div<{
  fontSize: number;
}>`
  display: flex;
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: bold;
  font-size: ${(props) => props.fontSize}px;
`;
