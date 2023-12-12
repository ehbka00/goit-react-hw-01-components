export const TransactionHistory = ({items}) => (
<table class="transaction-history">
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>

<tbody>
  {items.map((item, index) => (
        <tr key={item.id} className={(index%2===0) ? 'white' : 'lightgray'}>
        <td>{toUpperCase(item.type)}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    ))}
</tbody>
</table>
);

function toUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}