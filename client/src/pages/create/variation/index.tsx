import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { handleChange, $song, updateSong, submitForm } from "./model";
import { Text, Textarea, Input, Chords, LyricsText } from "ui";
import { MelodyIcon } from "assets/icons";
import { parseLyrics } from "lib/chords";
import {
  $authors,
  $authorSongs,
  getAuthors,
  getAuthorSongs
} from "features/authors";
import { Line } from "constants/types";
import { FONT_SIZE } from "constants/styles";

export const CreateSongVariation: React.FC = () => {
  const { title, fullText, lyrics } = useStore($song);
  const authors = useStore($authors);
  const authorSongs = useStore($authorSongs);
  const [fontSize, changeFontSize] = React.useState(FONT_SIZE);

  const onClickHandler = React.useCallback(() => {
    const data = parseLyrics(fullText);
    updateSong(data);
  }, [fullText]);

  React.useEffect(() => {
    getAuthors();
  }, []);

  let preview = <></>;

  if (lyrics.length !== 0) {
    preview = (
      <>
        {lyrics.map((line: Line, key: number) => (
          <div key={key}>
            <Chords fontSize={fontSize} chords={line.chords} />
            <LyricsText fontSize={fontSize}>{line.text}</LyricsText>
          </div>
        ))}
      </>
    );
  }

  return (
    <Song>
      <button onClick={() => changeFontSize(fontSize + 1)}>+</button>
      <button onClick={() => changeFontSize(fontSize - 1)}>-</button>
      <form onSubmit={submitForm}>
        <button type="submit">Сохранить</button>
        <div>
          <Text>Title:</Text>
          <Input name="title" value={title} onChange={handleChange} />
        </div>
        <div>
          <Text>Band:</Text>
          <select
            onChange={event => {
              getAuthorSongs(event.target.value);
            }}
          >
            <option value="">Select Author</option>
            {authors.map(author => (
              <option key={author._id} value={author._id}>
                {author.author}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Text>Songs:</Text>
          <select name="songId" onChange={handleChange}>
            <option value="">Select Song</option>
            {authorSongs &&
              authorSongs.songs.map(song => (
                <option key={song._id} value={song._id}>
                  {song.title}
                </option>
              ))}
          </select>
        </div>
        <div>
          <Text>Lyrics:</Text>
          <Textarea name="fullText" value={fullText} onChange={handleChange} />
        </div>
        <button type="button" onClick={onClickHandler}>
          Parse
        </button>
        <Text>Result:</Text>
        {preview}
      </form>
    </Song>
  );
};

export const Song = styled.div`
  padding: 20px;
`;
