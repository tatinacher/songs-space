import * as React from "react";
import {
  $authorSongsPending,
  getAuthorSongs,
  $authorSongs
} from "features/authors";
import { useStore } from "effector-react";
import { Table } from "ui";
import { Column } from "ui/organisms/table";
import { useParams } from "react-router";
import { AuthorSongs } from "api/authors";
import { Title, THeadAuthor } from "./style";

type Song = {
  title: React.ReactElement;
};

export const Songss: React.FC = () => {
  const { _id } = useParams();
  console.log(useParams(), _id);

  React.useEffect(() => {
    if (_id) {
      getAuthorSongs(_id);
    }
  }, [_id]);
  const authorSongs: AuthorSongs | null = useStore($authorSongs);
  const authorSongsPending = useStore($authorSongsPending);

  if (authorSongsPending) return <div>Loading</div>;
  if (!authorSongs) return <div>Песен пока что нет.</div>;

  const column: Column<Song>[] = [
    { key: "title", name: <THeadAuthor>{authorSongs.author}</THeadAuthor> }
  ];
  const songs = authorSongs.songs.map(song => {
    const title = <Title to={"/song/" + song._id}>{song.title}</Title>;
    return {
      title: title
    };
  });
  return <Table data={songs} columns={column} />;
};
