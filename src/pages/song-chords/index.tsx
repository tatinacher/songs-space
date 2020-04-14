import * as React from "react";
import { useStore } from "effector-react";
import { getLyricChrods, $lyricChords } from "../../features/song";
import { useParams } from "react-router";
import { LyricChrods } from "../../api/songs";
import { Title, Chords, LyricsText } from "../../ui";
import { Lyrics } from "./style";

export const SongChords: React.FC = () => {
  const { id } = useParams();
  React.useEffect(() => {
    if (id) {
      getLyricChrods(id);
    }
  }, [id]);
  const lyricChords: LyricChrods | null = useStore($lyricChords);

  if (!lyricChords) return null;
  const { title, lyrics } = lyricChords;

  return (
    <div>
      <Title>{title}</Title>
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
