import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { $songTitle, handleChange } from "../../features/song/model";
import { DragDropContext } from "react-beautiful-dnd";

// const reorder = () => {};

export const CreateSong: React.FC = () => {
  const title = useStore($songTitle);
  const onDragEnd = React.useCallback(result => {
    if (!result.destination) {
      return;
    }
    //const items = reorder;
  }, []);
  return (
    <>
      <input onChange={handleChange} value={title} />
      <Text>
        <DragDropContext onDragEnd={onDragEnd}></DragDropContext>
      </Text>
    </>
  );
};

export const Text = styled.div``;
