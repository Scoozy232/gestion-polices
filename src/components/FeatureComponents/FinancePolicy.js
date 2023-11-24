import React from 'react';

const FinancePolicy = ({ policies }) => {
  return (
    <div>
      <h2>Politiques Financières</h2>
      <ul>
        {policies.map((policy) => (
          <li key={policy.id}>{policy.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FinancePolicy;