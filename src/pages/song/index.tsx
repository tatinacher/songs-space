import * as React from "react";
import { useStore } from "effector-react";
import { $songTitle, $songText } from "features/song/model";
import { $fontSize, setSize } from "features/visuals/model";
import styled, { StyledComponent } from "styled-components";

export const Song: React.FC = () => {
  const title = useStore($songTitle);
  const songText = useStore($songText);
  const fontSize = useStore($fontSize);
  return (
    <>
      <button onClick={() => setSize(fontSize + 1)}>+</button>
      <button onClick={() => setSize(fontSize - 1)}>-</button>
      <div>{title}</div>
      <Lyric fontSize={fontSize}>{songText[0]}</Lyric>
      <Lyric fontSize={fontSize}>{songText[1]}</Lyric>
    </>
  );
};

export const Lyric: StyledComponent<any, any, any> = styled.div<{
  fontSize: number;
}>`
  font-size: ${props => props.fontSize}px;
`;
