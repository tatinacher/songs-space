import * as React from "react";
import { useStore } from "effector-react";
import { getLyricChrods, $lyricChords } from "../../features/song";
import { useParams } from "react-router";
import { SongVariation } from "../../api/songs";
import { Title, Chords, LyricsText } from "../../ui";
import { Lyrics } from "./style";
import Chord from "@tombatossals/react-chords/lib/Chord";
import * as ukuleleChords from "../../lib/chords/ukulele.json";
import styled from "styled-components";

export const SongChords: React.FC = () => {
  const { id } = useParams();
  React.useEffect(() => {
    if (id) {
      getLyricChrods(id);
    }
  }, [id]);
  const lyricChords: SongVariation | null = useStore($lyricChords);
  if (!lyricChords) return null;

  const { title, lyrics, chords } = lyricChords;
  console.log(chords);

  return (
    <div>
      <Title>{title}</Title>
      {chords && <Tab chords={chords} />}
      <Lyrics>
        {lyrics.map(({ chords, text }, key) => (
          <div key={key}>
            <Chords data={chords} key={key} />
            <LyricsText>{text}</LyricsText>
          </div>
        ))}
      </Lyrics>
    </div>
  );
};

export const Tab: React.FC<{ chords: string[] }> = ({ chords }) => (
  <Top>
    {chords.map((chord, key) => (
      <Display chordToDisplay={chord} key={key} />
    ))}
  </Top>
);

type T = any;

export const Display: React.FC<{ chordToDisplay: string }> = ({
  chordToDisplay
}) => {
  const allUkulelechords: T = ukuleleChords.chords;

  const main: keyof T = chordToDisplay.slice(0, 1);
  const suffix =
    chordToDisplay.slice(1) === "" ? "major" : chordToDisplay.slice(1);

  const instrument = { ...ukuleleChords.main, tunings: ukuleleChords.tunings };
  const chord = allUkulelechords[main].find((el: any) => el.suffix === suffix);
  if (!chord) return null;
  console.log(suffix, allUkulelechords[main], chord, allUkulelechords);

  return (
    <ChordContainer>
      <div>{chordToDisplay}</div>
      <Chord chord={chord.positions[0]} instrument={instrument} />
    </ChordContainer>
  );
};

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
