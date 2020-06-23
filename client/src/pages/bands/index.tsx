import * as React from "react";
import { $authors, getAuthors } from "features/authors";
import { useStore } from "effector-react";
import { Table, SearchField } from "ui";
import { Column } from "ui/organisms/table";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "constants/breakpoints";

type AuthorSong = {
  author: React.ReactElement;
  description: string;
};

export const Bands: React.FC = () => {
  const authors = useStore($authors);
  const column: Column<AuthorSong>[] = [{ key: "author", name: "Author" }];

  React.useEffect(() => {
    getAuthors();
  }, []);
  const data = authors.map(author => {
    const link = <Link to={"bands/" + author._id}>{author.author}</Link>;
    return {
      author: link,
      description: author.description
    };
  });
  return (
    <Content>
      <SearchWrapper>
        <SearchField placeholder="Name of the band" />
      </SearchWrapper>
      <BandsBlock>
        <Table data={data} columns={column} />
      </BandsBlock>
    </Content>
  );
};

export const BandsBlock = styled.div`
  max-width: 300px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    width: 700px;
  }
  @media ${device.desktop} {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SearchWrapper = styled.div`
  padding: 20px 0;
  display: none;
`;
