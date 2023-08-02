import TransactionItem from './TransactionItem';
import { Table } from '../styles/TransactionHistoryStyles';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr className="table-row">
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
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    }).isRequired
  ),
};

export default TransactionHistory;
