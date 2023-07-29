import styled from 'styled-components';

const TableRow = styled.tr`
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

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <td className='type'>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRow>
  );
};
export default TransactionItem;
