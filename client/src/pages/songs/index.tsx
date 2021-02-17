import * as React from 'react';
import {
  $authorSongsPending,
  getAuthorSongs,
  $authorSongs,
} from 'features/authors';
import { useStore } from 'effector-react';
import { Table } from 'ui';
import { Column } from 'ui/organisms/table';
import { useParams } from 'react-router';
import { Song } from 'api/authors';
import { Title, THeadAuthor } from './style';

type SongType = {
  title: React.ReactElement;
};

export const Songss: React.FC = () => {
  const { id } = useParams();
  console.log(useParams(), id);

  React.useEffect(() => {
    if (id) {
      getAuthorSongs(id);
    }
  }, [id]);
  const authorSongs: Song[] | null = useStore($authorSongs);
  const authorSongsPending = useStore($authorSongsPending);

  //fix
  const author = 'Author';

  if (authorSongsPending) return <div>Loading</div>;
  if (!authorSongs) return <div>Песен пока что нет.</div>;

  const column: Column<SongType>[] = [
    { key: 'title', name: <THeadAuthor>{author}</THeadAuthor> },
  ];
  const songsList = authorSongs.map((song) => {
    const title = <Title to={'/song/' + song.id}>{song.title}</Title>;
    return {
      title: title,
    };
  });
  return <Table data={songsList} columns={column} />;
};
