import * as React from "react";
import { useStore } from "effector-react";
import { getLyricChrods, $lyricChords } from "../../features/song";
import { useParams } from "react-router";
import { SongVariation } from "../../api/songs";
import { Title, Chords, LyricsText, Switch } from "../../ui";
import { Lyrics, ChordContainer, Mobile, Page, Switches } from "./style";
import Chord from "@tombatossals/react-chords/lib/Chord";
import * as ukuleleChords from "../../lib/chords/ukulele.json";

export const SongChords: React.FC = () => {
  const { id } = useParams();
  const [isChordsOn, setChrodsSwitch] = React.useState(false);
  const [isLyricsOn, setLyricsSwitch] = React.useState(false);
  React.useEffect(() => {
    if (id) {
      getLyricChrods(id);
    }
  }, [id]);
  const lyricChords: SongVariation | null = useStore($lyricChords);
  if (!lyricChords) return null;
  const { title, lyrics, chords } = lyricChords;

  console.log(lyrics);

  return (
    <Page>
      {chords && <Tab chords={chords} />}
      <div>
        <Title>{title}</Title>
        <Switches>
          <Switch
            status={!isLyricsOn}
            onClick={setLyricsSwitch}
            text="Lyrics"
            id="lyrics"
          />
          <Switch
            status={!isChordsOn}
            onClick={setChrodsSwitch}
            text="Chords"
            id="chords"
          />
        </Switches>

        <Lyrics>
          {lyrics.map(({ chords, text }, key) => (
            <div key={key}>
              {!isChordsOn && <Chords data={chords} key={key} />}
              {!isLyricsOn && <LyricsText>{text}</LyricsText>}
            </div>
          ))}
        </Lyrics>
      </div>
    </Page>
  );
};

export const Tab: React.FC<{ chords: string[] }> = ({ chords }) => (
  <Mobile>
    {chords.map((chord, key) => (
      <Display chordToDisplay={chord} key={key} />
    ))}
  </Mobile>
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
