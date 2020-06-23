import * as React from "react";
import { useStore } from "effector-react";
import { getLyricChrods, $lyricChords } from "features/song";
import { useParams } from "react-router";
import { SongTitle, Chords, LyricsText, Switch } from "ui";
import {
  Changes,
  ChordContainer,
  ChordsScheme,
  Lyrics,
  Page,
  Switches,
  SwitchBlock
} from "./style";
import Chord from "@tombatossals/react-chords/lib/Chord";
import * as ukulele from "lib/chords/ukulele.json";
import * as guitar from "lib/chords/guitar.json";
import { ChordsType, SongVariation } from "constants/types";
import { cutText } from "lib/chords/fitChords";
import { $isGuitar, changeInstrument } from "./model";

interface ChordsAndTextProps {
  chords: ChordsType[];
  fontSize: number;
  isChordsOn: boolean;
  isLyricsOn: boolean;
  maxSize: number;
  text: string;
}

interface DisplayProps {
  chordToDisplay: string;
}

interface TabProps {
  chords: string[];
}

const showChords = (
  chords: any,
  main: any,
  tunings: any,
  chordToDisplay: string
) => {
  const mains: keyof T = chordToDisplay.slice(0, 1);
  const suffix =
    chordToDisplay.slice(1) === "" || chordToDisplay.slice(1) === "m"
      ? "major"
      : chordToDisplay.slice(1);

  const allUkulelechords: T = chords;
  const chordsOfInstrument = {
    ...main,
    tunings
  };

  try {
    const chord = allUkulelechords[mains].find(
      (el: any) => el.suffix === suffix
    );
    if (!chord) return null;

    return (
      <ChordContainer>
        <div>{chordToDisplay}</div>
        <Chord chord={chord.positions[0]} instrument={chordsOfInstrument} />
      </ChordContainer>
    );
  } catch (error) {
    return null;
  }
};

export const SongChords: React.FC = () => {
  const { id } = useParams();
  const [isChordsOn, setChrodsSwitch] = React.useState(true);
  const [isLyricsOn, setLyricsSwitch] = React.useState(true);

  const isGuitar = useStore($isGuitar);
  React.useEffect(() => {
    if (id) {
      getLyricChrods(id);
    }
  }, [id]);
  const lyricChords: SongVariation | null = useStore($lyricChords);
  const [fontSize, changeFontSize] = React.useState(14);

  if (!lyricChords) return null;
  const { title, lyrics, chords } = lyricChords;
  const maxSize = (window.innerWidth - 30) / (fontSize - 5);

  return (
    <Page>
      {chords && <Tab chords={chords} />}
      <div>
        <Changes>
          <button onClick={() => changeFontSize(fontSize + 1)}>+</button>
          <button onClick={() => changeFontSize(fontSize - 1)}>-</button>
        </Changes>
        <SwitchBlock>
          Ukulele
          <Switch
            status={isGuitar}
            onClick={() => changeInstrument()}
            id="instrument"
          />
          Guitar
        </SwitchBlock>
        <SongTitle>{title}</SongTitle>
        <Switches>
          <Switch status={isLyricsOn} onClick={setLyricsSwitch} id="lyrics" />{" "}
          Lyrics
          <Switch status={isChordsOn} onClick={setChrodsSwitch} id="chords" />
          Chords
        </Switches>

        <Lyrics>
          {lyrics.map((lyricLine, key) => (
            <ChordsAndText
              {...lyricLine}
              key={key}
              maxSize={maxSize}
              fontSize={fontSize}
              isChordsOn={isChordsOn}
              isLyricsOn={isLyricsOn}
            />
          ))}
        </Lyrics>
      </div>
    </Page>
  );
};

export const ChordsAndText: React.FC<ChordsAndTextProps> = ({
  chords,
  fontSize,
  isChordsOn,
  isLyricsOn,
  maxSize,
  text
}) => {
  if (text.length > maxSize) {
    const lines = cutText(text, chords, maxSize);
    return (
      <div>
        {lines.map(({ chords, text }) => (
          <div>
            {isChordsOn && (
              <Chords
                showSpaces={isLyricsOn}
                data={chords}
                fontSize={fontSize}
              />
            )}
            {isLyricsOn && <LyricsText fontSize={fontSize}>{text}</LyricsText>}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {isChordsOn && (
          <Chords showSpaces={isLyricsOn} data={chords} fontSize={fontSize} />
        )}
        {isLyricsOn && <LyricsText fontSize={fontSize}>{text}</LyricsText>}
      </div>
    );
  }
};

export const Tab: React.FC<TabProps> = ({ chords }) => (
  <ChordsScheme>
    {chords.map((chord, key) => (
      <Display chordToDisplay={chord} key={key} />
    ))}
  </ChordsScheme>
);

type T = any;

export const Display: React.FC<DisplayProps> = ({ chordToDisplay }) => {
  const isGuitar = useStore($isGuitar);

  if (isGuitar) {
    return showChords(
      guitar.chords,
      guitar.main,
      guitar.tunings,
      chordToDisplay
    );
  } else {
    return showChords(
      ukulele.chords,
      ukulele.main,
      ukulele.tunings,
      chordToDisplay
    );
  }
};
