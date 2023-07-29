import TransactionItem from './TransactionItem';
import styled from 'styled-components';

const Table = styled.table`
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

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr className='table-row'>

          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionItem
          key={id}
          id={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </Table>
  );
};
export default TransactionHistory;
