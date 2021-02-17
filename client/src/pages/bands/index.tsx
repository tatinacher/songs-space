import * as React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';

import { AudioWaveIcon } from 'assets/icons';
import { $authors, getAuthors, getSongs } from 'features/authors';
import { Table, SearchField, TableLayout } from 'ui';
import { device } from 'constants/breakpoints';
import { Songs } from './songs';
import { authorColumn } from 'constants/table';

export const Bands: React.FC = () => {
  const bands = useStore($authors);

  React.useEffect(() => {
    getAuthors();
  }, []);

  const onBandClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const id = event.currentTarget.getAttribute('data-band');
      if (id) {
        getSongs(id);
      }
    },
    [],
  );

  const bandsList = bands.map(({ id, author }) => ({
    author: (
      <Band data-band={id} onClick={onBandClick}>
        <BandIcon>
          <IconImg src={AudioWaveIcon} />
        </BandIcon>
        <BandText>
          <BandName>{author}</BandName>
          <BandSongsCount>23 songs</BandSongsCount>
        </BandText>
      </Band>
    ),
  }));

  //create layout?
  return (
    <TableLayout>
      <SearchWrapper>
        {/* <SearchField placeholder="Name of the band" /> */}
      </SearchWrapper>
      <BandsAndSongs>
        <BandsBlock>
          <Table data={bandsList} columns={authorColumn} />
        </BandsBlock>
        <Songs />
      </BandsAndSongs>
    </TableLayout>
  );
};

export const BandsBlock = styled.div`
  max-width: 300px;
  width: 50%;
`;

export const SearchWrapper = styled.div`
  padding: 20px 0;
  display: none;
`;

export const BandsAndSongs = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;

export const Band = styled.div`
  display: flex;
  align-items: center;
  color: #101028;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background: #f0edee;
  }
`;

export const BandName = styled.div``;

export const BandSongsCount = styled.div`
  font-size: 10px;
  color: #5f5f5f;
  display: none;
`;

export const BandIcon = styled.div``;
export const BandText = styled.div`
  padding-left: 10px;
`;

export const IconImg = styled.img`
  width: 30px;
  height: 30px;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;
