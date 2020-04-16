import * as React from "react";
import { useStore } from "effector-react";
import { $lastSongs, getLastRecords } from "./model";
import { SongVariation } from "../../api/songs";
import { Link } from "react-router-dom";

export const LastRecords: React.FC<{ count: number }> = ({ count }) => {
  const lastSongs: SongVariation[] | null = useStore($lastSongs);

  React.useEffect(() => {
    getLastRecords(count);
  }, [count]);
  console.log(lastSongs);

  if (!lastSongs) return null;
  return (
    <>
      <div>Last Songs:</div>
      {lastSongs.map(song => (
        <Link to={"/variation/" + song._id}>{song.title}</Link>
      ))}
    </>
  );
};
