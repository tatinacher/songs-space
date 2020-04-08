import * as React from "react";
import { useStore } from "effector-react";
import { getLyricChrods, $lyricChords } from "../../features/song";
import { useParams } from "react-router";
import { LyricChrods } from "../../api/songs";

export const SongChords: React.FC = () => {
  const { id } = useParams();
  React.useEffect(() => {
    if (id) {
      getLyricChrods(id);
    }
  }, [id]);
  const lyricChords: LyricChrods | null = useStore($lyricChords);

  if (!lyricChords) return null;
  console.log(lyricChords);

  return <div></div>;
};
