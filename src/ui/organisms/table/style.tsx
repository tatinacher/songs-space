import styled from "styled-components";

export const TableContainer = styled.table`
  padding: 0px;
  table-layout: fixed;
  width: 100%;
  margin: 30px 0;
`;

export const Thead = styled.thead`
  margin: 0px;
  text-align: center;
  td {
    padding: 10px;
    border-bottom: 1px solid var(--bg);
  }
`;

export const Row = styled.td`
  border-bottom: 1px solid #bebbbb;
  padding: 10px;
  text-align: center;
  a {
    color: black;
    text-decoration: none;
  }
  &:hover {
    background: #bebbbb;
  }
`;
