import * as React from "react";
import { useStore } from "effector-react";
import { $songTitle } from "../../features/song/model";

export const Song: React.FC = () => {
  const title = useStore($songTitle);
  return (
    <>
      <div>{title}</div>
    </>
  );
};
