import styled from "styled-components";
import { device } from "constants/breakpoints";

const map = (props: { isOpen: boolean }) => ({
  "data-open": props.isOpen
});

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
  position: fixed;
  left: 0;

  @media ${device.tablet} {
    flex-direction: row;
    position: initial;
  }
`;

export const Page = styled.div.attrs(map)<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 20px 0 0 10px;

  &[data-open="true"] {
    margin: 20px 0 0 100px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    margin: 30px;
  }
`;

export const Switches = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Changes = styled.div`
  display: flex;
  display: none;
`;

export const SwitchBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const SwitchText = styled.div`
  padding: 0 10px;
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 20px;
  justify-content: start;
  align-items: flex-start;

  @media ${device.tablet} {
    max-width: 60%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LyricsSwitch = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChordsSwitch = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LyricsSwitchText = styled.div`
  padding: 0 10px;
`;

export const ChordsSwitchText = styled.div`
  padding: 0 10px;
`;

export const Tabs = styled.div`
  min-width: 100%;
`;

export const ChordsWrapper = styled.div`
  width: 100%;
`;

export const MobileTab = styled.div.attrs(map)<{ isOpen: boolean }>`
  display: none;
  &[data-open="true"] {
    display: fixed;
  }

  @media ${device.tablet} {
    display: block;
  }
`;
