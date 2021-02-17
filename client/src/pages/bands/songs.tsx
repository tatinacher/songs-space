import * as React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';

import { Table } from 'ui';
import { Link } from 'react-router-dom';
import { $authorSongs } from 'features/authors';
import { songColumn } from 'constants/table';

export const Songs: React.FC = () => {
  const authorSongs = useStore($authorSongs);

  if (!authorSongs) {
    return null;
  }

  const songsList = authorSongs.map(({ id, title, variations }) => ({
    title: (
      <SongWrapper>
        <SongLink to={'song/' + id}>{title}</SongLink>
        <VariationsCount>{variations} variations</VariationsCount>
      </SongWrapper>
    ),
  }));
  return (
    <SongsBlock>
      <Table data={songsList} columns={songColumn} />
    </SongsBlock>
  );
};

export const SongsBlock = styled.div`
  max-width: 300px;
  width: 50%;
`;

export const SongLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
`;

export const SongWrapper = styled.div`
  padding: 10px;
`;

export const VariationsCount = styled.div`
  font-size: 10px;
  color: #5f5f5f;
`;
