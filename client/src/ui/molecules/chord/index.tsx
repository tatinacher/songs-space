import * as React from "react";
import styled from "styled-components";
import { getTextWidth } from "lib/measurement";
import { ChordsType } from "constants/types";

interface ChordsProps {
  data?: ChordsType[];
  fontSize: number;
  showSpaces?: boolean;
}

export const Chords: React.FC<ChordsProps> = ({
  data,
  fontSize,
  showSpaces
}) => {
  if (!data) return null;
  return (
    <ChordLine fontSize={fontSize}>
      {data.map((chord, key) => {
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
  color
}) => {
  let line = name;
  if (beforeSpaces > 0) {
    line = " ".repeat(beforeSpaces) + line;
  }
  if (afterSpaces > 0) {
    line = line + " ".repeat(afterSpaces);
  }
  return <div style={{ color: color }}>{line}</div>;
};

export const ChordLine = styled.div<{
  fontSize: number;
}>`
  display: flex;
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: bold;
  font-size: ${props => props.fontSize}px;
`;
