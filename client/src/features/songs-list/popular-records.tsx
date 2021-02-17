import * as React from 'react';
import { useStore } from 'effector-react';
import { $lastSongs, getLastRecords } from './model';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LastRecordsType } from 'constants/types';

export const PopularRecords: React.FC<{ count: number }> = ({ count }) => {
  const lastSongs: LastRecordsType[] | null = useStore($lastSongs);

  React.useEffect(() => {
    getLastRecords(count);
  }, [count]);

  const songs =
    !lastSongs || lastSongs.length === 0
      ? 'No songs found'
      : lastSongs.map((song, key) => (
          <SongLink key={key} to={'/variation/' + song.id}>
            {song.title}
          </SongLink>
        ));

  return (
    <Container>
      <Block>
        <Big>Popular</Big>
        <Small>Songs</Small>
      </Block>
      <LastSongs>{songs}</LastSongs>
    </Container>
  );
};

export const LastSongs = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
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
