import * as React from "react";
import { useStore } from "effector-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { $authors, getAuthors, getSongs, $authorSongs } from "features/authors";
import { Table, SearchField } from "ui";
import { Column } from "ui/organisms/table";
import { device } from "constants/breakpoints";
import { Song } from "constants/types";
import { AudioWaveIcon } from "assets/icons";
import { TableLayout } from "ui/templates";

type AuthorSong = {
  author: React.ReactElement;
  description: string;
};

export const Bands: React.FC = () => {
  const bands = useStore($authors);
  const authorSongs = useStore($authorSongs);
  const column: Column<AuthorSong>[] = [
    { key: "author", name: <THeadAuthor>Author</THeadAuthor> }
  ];
  const columnSongs: Column<Song>[] = [
    { key: "title", name: <THeadSong>Songs</THeadSong> }
  ];

  React.useEffect(() => {
    getAuthors();
  }, []);

  const bandsList = bands.map(band => ({
    author: (
      <Band onClick={() => getSongs(band._id)}>
        <BandIcon>
          <IconImg src={AudioWaveIcon} />
        </BandIcon>
        <BandText>
          <BandName>{band.author}</BandName>
          <BandSongsCount>23 songs</BandSongsCount>
        </BandText>
      </Band>
    )
  }));

  let songss;

  if (!authorSongs) {
    songss = null;
  } else {
    const songsList = authorSongs.songs.map(({ _id, title }) => ({
      title: (
        <SongWrapper>
          <SongLink to={"song/" + _id}>{title}</SongLink>
          <BandSongsCount>23 variations</BandSongsCount>
        </SongWrapper>
      )
    }));
    songss = (
      <SongsBlock>
        <Table data={songsList} columns={columnSongs} />
      </SongsBlock>
    );
  }

  return (
    <TableLayout>
      <SearchWrapper>
        <SearchField placeholder="Name of the band" />
      </SearchWrapper>
      <BandsAndSongs>
        <BandsBlock>
          <Table data={bandsList} columns={column} />
        </BandsBlock>
        {songss}
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

export const SongsBlock = styled.div`
  max-width: 300px;
  width: 50%;
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

export const THeadAuthor = styled.div`
  padding: 20px 0 20px 51px;
  font-weight: 100;
`;

export const THeadSong = styled.div`
  padding: 20px 0 20px 10px;
  font-weight: 100;
`;

export const SongLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
`;

export const SongWrapper = styled.div`
  padding: 10px;
`;
