import * as React from "react";
import { useStore } from "effector-react";
import { $songVariations, getSongVariations } from "features/song";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Table } from "ui";
import { Column } from "ui/organisms/table";
import { Song } from "api/songs";

type Variation = {
  title: React.ReactElement;
};

export const SongVariations: React.FC = () => {
  const { id } = useParams();
  React.useEffect(() => {
    if (id) {
      getSongVariations(id);
    }
  }, [id]);
  const songVariations: Song[] = useStore($songVariations);
  const data = songVariations.map(variation => {
    const title = (
      <Link to={"/variation/" + variation.id}>{variation.title}</Link>
    );
    return {
      title: title
    };
  });
  const column: Column<Variation>[] = [
    {
      name: "Песни",
      key: "title"
    }
  ];

  return (
    <div>
      <Table data={data} columns={column} />
    </div>
  );
};
