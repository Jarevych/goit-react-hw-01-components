import { TableRow } from './TransactionItemStyles';
import PropTypes from "prop-types";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <td className="type">{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRow>
  );
};
TransactionItem.propTypes = {
  type: PropTypes.string,
  currency: PropTypes.string,
  amount: PropTypes.number,
}
export default TransactionItem;
