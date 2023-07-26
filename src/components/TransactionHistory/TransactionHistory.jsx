import TransactionItem from "./TransactionItem";

const TransactionHistory = ({ items }) => {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
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
  </table>
    );
};
export default TransactionHistory