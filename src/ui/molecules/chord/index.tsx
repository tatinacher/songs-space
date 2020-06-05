import * as React from "react";
import styled from "styled-components";
import { getTextWidth } from "lib/measurement";
import { ChordsType } from "constants/types";

export const Chords: React.FC<{ data?: ChordsType[]; fontSize: number }> = ({
  data,
  fontSize
}) => {
  if (!data) return null;
  const textWidth = getTextWidth(" ", "14px Roboto Mono") || 1;
  return (
    <ChordLine fontSize={fontSize}>
      {data.map((chord, key) => (
        <Chord key={key} {...chord} />
      ))}
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
