import * as React from "react";
import styled from "styled-components";
import { getTextWidth } from "../../../lib/measurement";
import { ChordsType } from "../../../constants/types";

export const Chords: React.FC<{ data?: ChordsType[] }> = ({ data }) => {
  if (!data) return null;
  const textWidth = getTextWidth(" ", "14px Roboto Mono") || 1;
  return (
    <ChordLine>
      {data.map(({ width, name, color }, key) => (
        <Chord key={key} width={width * textWidth} color={color}>
          {name}
        </Chord>
      ))}
    </ChordLine>
  );
};

export const Chord = styled.div<{ width: number; color: string }>`
  width: ${props => props.width}px;
  /*background: ${props => props.color};*/
  font-size: 14px;
`;

export const ChordLine = styled.div`
  display: flex;
`;
