import * as React from 'react';
import styled from 'styled-components';
import { Column } from 'ui/organisms/table';
import { Song } from 'constants/types';

type AuthorSong = {
  author: React.ReactElement;
  description: string;
};

export const THeadAuthor = styled.div`
  padding: 20px 0 20px 51px;
  font-weight: 100;
`;

export const THeadSong = styled.div`
  padding: 20px 0 20px 10px;
  font-weight: 100;
`;

export const authorColumn: Column<AuthorSong>[] = [
  { key: 'author', name: <THeadAuthor>Author</THeadAuthor> },
];

export const songColumn: Column<Song>[] = [
  { key: 'title', name: <THeadSong>Songs</THeadSong> },
];
