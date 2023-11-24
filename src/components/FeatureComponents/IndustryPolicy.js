import React from 'react';

const IndustryPolicy = ({ policies }) => {
  return (
    <div>
      <h2>Politiques Industrielles</h2>
      <ul>
        {policies.map((policy) => (
          <li key={policy.id}>{policy.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndustryPolicy;