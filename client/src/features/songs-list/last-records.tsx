import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStore } from 'effector-react';

import { $lastSongs, $showPreloader, getLastRecords } from './model';
import { LastRecordsType } from 'constants/types';
import { device } from 'constants/breakpoints';
import { routesPaths } from 'pages/router';

export const LastRecords: React.FC<{ count: number }> = ({ count }) => {
  const lastSongs: LastRecordsType[] | null = useStore($lastSongs);
  const showPreloader: boolean = useStore($showPreloader);

  React.useEffect(() => {
    getLastRecords(count);
    console.log(1);
  }, [count]);

  if (showPreloader || !lastSongs || lastSongs.length === 0) {
    return null;
  }

  return (
    <Container>
      <Block>
        <Big>Last</Big>
        <Small>Songs</Small>
      </Block>
      <LastSongs>
        {lastSongs.map((song, key) => (
          <SongLink key={key} to={routesPaths.songChords + song.id}>
            {song.title}
          </SongLink>
        ))}
      </LastSongs>
    </Container>
  );
};

export const LastSongs = styled.div`
  display: flex;
  /* max-width: 300px; */
  flex-direction: column;
  @media ${device.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const Big = styled.div`
  font-weight: 700;
`;

export const Small = styled.div`
  font-weight: 100;
`;

export const Block = styled.div`
  display: flex;
  padding: 5px 0;
  font-weight: 200;
  font-size: 21px;
  text-decoration: underline;
  padding-bottom: 30px;
`;

export const SongLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  padding-bottom: 20px;
  position: relative;
  @media ${device.tablet} {
    flex: 1 0 50%;
  }
  ::after {
    /*content: "•";*/
    bottom: 0;
    position: absolute;
    left: 120px;
    color: var(--accent);
  }
`;

export const Container = styled.div`
  padding: 10px 15px;
  flex: 50%;
`;
