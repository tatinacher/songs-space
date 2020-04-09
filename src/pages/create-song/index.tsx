import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { handleChange, $song } from "./model";
import { LineType, ChordsType } from "../../constants/types";
import { Text, Textarea, Input } from "../../ui";
import { Melody } from "../../assets/icons";

export const CreateSong: React.FC = () => {
  const song = useStore($song);
  let [lyrics, setLyrics] = React.useState("");
  const result: LineType[] = [];

  const change = React.useCallback(event => {
    setLyrics(event.target.value);
  }, []);

  const preview =
    result.length !== 0 ? (
      <div>
        {result.map(line => (
          <>
            <Chords data={line.chords} />
            {line.text}
          </>
        ))}
      </div>
    ) : (
      <div>
        <Melody />
        <Melody />
        <Melody />
      </div>
    );

  return (
    <Song>
      <div>
        <Text>Title:</Text>
        <Input name="title" value={song.title} onChange={handleChange} />
      </div>
      <div>
        <Text>Lyrics:</Text>
        <Textarea name="lyrics" value={lyrics} onChange={change} />
      </div>
      <Text>Result:</Text>
      {preview}
    </Song>
  );
};

export const Chords: React.FC<{ data?: ChordsType[] }> = ({ data }) => {
  if (!data) return null;
  return (
    <ChordLine>
      {data.map(({ width, name }) => (
        <Chord width={width}>{name}</Chord>
      ))}
    </ChordLine>
  );
};

export const Chord = styled.div<{ width: number }>`
  width: ${props => props.width}px;
`;

export const ChordLine = styled.div`
  display: flex;
`;

export const Song = styled.div`
  padding: 20px;
`;
