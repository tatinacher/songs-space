import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { handleChange, $song, updateSong, submitForm } from "./model";
import { Text, Textarea, Input, Chords, LyricsText } from "../../ui";
import { Melody } from "../../assets/icons";
import { parseLyrics } from "../../lib/chords";
import {
  getAuthors,
  $authors,
  getAuthorSongs,
  $authorSongs
} from "../../features/authors";

export const CreateSong: React.FC = () => {
  const { title, fullText, lyrics } = useStore($song);
  const authors = useStore($authors);
  const authorSongs = useStore($authorSongs);

  const onClickHandler = React.useCallback(() => {
    const lines = parseLyrics(fullText);
    updateSong(lines);
  }, [fullText]);

  const preview =
    lyrics && lyrics.length !== 0 ? (
      <div>
        {lyrics.map((line, key) => (
          <>
            <Chords data={line.chords} key={key} />
            <LyricsText>{line.text}</LyricsText>
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
  React.useEffect(() => {
    getAuthors();
  }, []);

  return (
    <Song>
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
                <option key={song.id} value={song.id}>
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
