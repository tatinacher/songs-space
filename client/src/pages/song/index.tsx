import * as React from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { $songVariations, getSongVariations } from 'features/song';
import { Table } from 'ui';
import { Column } from 'ui/organisms/table';
import { Song } from 'constants/types';
import { TableLayout } from 'ui/templates';
import { routesPaths } from 'pages/router';

type Variation = {
  title: React.ReactElement;
};

export const SongVariations: React.FC = () => {
  const { id } = useParams();
  console.log(useParams());

  React.useEffect(() => {
    if (id) {
      getSongVariations(id);
    }
  }, [id]);
  const songVariations: Song[] = useStore($songVariations);
  const data = songVariations.map((variation) => {
    const title = (
      <VariationLink to={routesPaths.songChords + variation.id}>
        {variation.title}
      </VariationLink>
    );
    return {
      title: title,
    };
  });
  const column: Column<Variation>[] = [
    {
      name: <THeadSong>Song variations</THeadSong>,
      key: 'title',
    },
  ];

  return (
    <TableLayout>
      <Table data={data} columns={column} />
    </TableLayout>
  );
};

export const THeadSong = styled.div`
  padding: 20px 0;
  font-weight: 100;
`;

export const VariationLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
`;
