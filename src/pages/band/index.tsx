import * as React from "react";
import {
  $authorSongsPending,
  getAuthorSongs,
  $authorSongs
} from "../../features/authors";
import { useStore } from "effector-react";
import { Table } from "../../ui";
import { Column } from "../../ui/organisms/table";
import { useParams } from "react-router";
import { AuthorSongs } from "../../api/authors";
import { Melody } from "../../assets/icons";
import { Title } from "./style";

type Song = {
  title: React.ReactElement;
};

export const Band: React.FC = () => {
  const { id } = useParams();
  React.useEffect(() => {
    if (id) {
      getAuthorSongs(id);
    }
  }, [id]);
  const authorSongs: AuthorSongs | null = useStore($authorSongs);
  const authorSongsPending = useStore($authorSongsPending);

  if (authorSongsPending) return <div>Loading</div>;
  if (!authorSongs) return <div>Песен пока что нет.</div>;

  const column: Column<Song>[] = [{ key: "title", name: authorSongs.author }];
  const songs = authorSongs.songs.map(song => {
    const title = (
      <Title to={"/song/" + song.id}>
        {song.title}
        <Melody />
      </Title>
    );
    return {
      title: title
    };
  });
  return <Table data={songs} columns={column} />;
};
