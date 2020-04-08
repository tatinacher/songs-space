import * as React from "react";
import { Row, TableContainer, Thead } from "./style";

export type Column<T> = {
  name: string;
  key: keyof T;
};

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

interface TableBodyProps<T> {
  rows: T;
  columns: Column<T>[];
}

export const TableBody: <T>(
  props: TableBodyProps<T>
) => React.ReactElement<TableBodyProps<T>> = ({ rows, columns }) => (
  <tr>
    {columns.map((column, key) => (
      <Row key={key}>{rows[column.key]}</Row>
    ))}
  </tr>
);

export const Table: <T>(
  props: TableProps<T>
) => React.ReactElement<TableProps<T>> = ({ columns, data }) => {
  if (data.length === 0) return <div>No data</div>;
  return (
    <TableContainer>
      <Thead>
        <tr>
          {columns.map((thead, key) => (
            <td key={key}>{thead.name}</td>
          ))}
        </tr>
      </Thead>
      <tbody>
        {data.map((rows, key) => (
          <TableBody rows={rows} columns={columns} key={key} />
        ))}
      </tbody>
    </TableContainer>
  );
};
