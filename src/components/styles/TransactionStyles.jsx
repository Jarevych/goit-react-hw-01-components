import styled from 'styled-components';

export const TableRow = styled.tr`
&:nth-child(odd) {
  background-color: #f1f1f1;
}

&:hover {
  background-color: #f7f7f7;
}

  .type {
    text-transform: capitalize;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  color: #6f7474;
  font-family: Segoe, sans-serif;
  font-size: 24px;
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
  .table-row th {
    background-color: #bfd9f6;
  }
`;