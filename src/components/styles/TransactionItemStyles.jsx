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
