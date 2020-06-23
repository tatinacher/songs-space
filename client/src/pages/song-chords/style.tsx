import styled from "styled-components";
import { device } from "constants/breakpoints";

export const Lyrics = styled.div`
  margin: 0 15px;
`;

export const ChordContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  display: flex;
  padding-bottom: 50px;
`;

export const ChordsScheme = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 100%;
  min-width: 100px;
  overflow-y: scroll;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const Switches = styled.div`
  display: flex;
`;

export const Changes = styled.div`
  display: flex;
  display: none;
`;

export const SwitchBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0 20px;
`;
