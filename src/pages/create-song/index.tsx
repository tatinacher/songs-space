import * as React from "react";
import { useStore } from "effector-react";
import { $songTitle, handleChange } from "../../features/song/model";

export const CreateSong: React.FC = () => {
  const title = useStore($songTitle);
  return (
    <>
      <input onChange={handleChange} value={title} />
    </>
  );
};
