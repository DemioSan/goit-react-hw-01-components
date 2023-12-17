import styled from 'styled-components';

const TransactionTable = styled('table')`
  width: 1000px;
  background-color: #f4bf96;

  padding: 5px;
  font-size: 20px;
  border-radius: 0 60px 0 60px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  thead {
    color: #fcf5ed;
    border-radius: 5px;

    th {
      padding: 10px;
      background-color: #ce5a67;
      font-size: 30px;

      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);

      &: last-child {
        border-radius: 0 60px 0 0;
      }
    }
  }

  td {
    padding: 5px;
    text-transform: capitalize;
    text-align: center;
  }

  .even-row {
    background-color: #fcf5ed;
  }
`;

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'even-row' : null}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionTable>
  );
};
