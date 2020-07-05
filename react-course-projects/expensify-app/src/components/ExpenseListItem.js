import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({
  id, description, amount, createdAt,
}) => (
  <div>
    <Link to={`/edit/${id}`}>{id}</Link>
    <h3>{description}</h3>
    <p>
      {amount}
      {' '}
      -
      {' '}
      {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
