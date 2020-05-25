import styled from "styled-components";

export const LyricsText = styled.div<{
  fontSize: number;
}>`
  font-size: ${props => props.fontSize}px;
  white-space: pre;
`;
