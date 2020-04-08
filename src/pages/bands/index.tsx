import * as React from "react";
import { $authors, getAuthors } from "../../features/authors";
import { useStore } from "effector-react";
import { Table } from "../../ui";
import { Column } from "../../ui/organisms/table";
import { Link } from "react-router-dom";

type AuthorSong = {
  author: React.ReactElement;
  description: string;
};

export const Bands: React.FC = () => {
  const authors = useStore($authors);
  const column: Column<AuthorSong>[] = [{ key: "author", name: "Автор" }];

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
  return <Table data={data} columns={column} />;
};
