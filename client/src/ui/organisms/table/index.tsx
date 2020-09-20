import * as React from 'react';
import { Row, TableContainer, Thead } from './style';

export type Column<T> = {
  name: React.ReactElement | string;
  key: keyof T;
};

interface TableProps<T, U> {
  columns: Column<T>[];
  data: U[];
}

interface TableBodyProps<T, U> {
  rows: any;
  columns: Column<T>[];
}

export const TableBody: <T, U>(
  props: TableBodyProps<T, U>,
) => React.ReactElement<TableBodyProps<T, U>> = ({ rows, columns }) => {
  return (
    <tr>
      {columns.map((column, key) => (
        <Row key={key}>{rows[column.key]}</Row>
      ))}
    </tr>
  );
};

export const Table: <T, U>(
  props: TableProps<T, U>,
) => React.ReactElement<TableProps<T, U>> | null = ({ columns, data }) => {
  if (data.length === 0) return null;
  console.log(columns, data);

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
