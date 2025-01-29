import React from 'react';
import './index.css'; // Reuse the same styles as the first page

const SecondPage = () => {
  return (
    <div className="second-page">
      <h1>Welcome to the Second Page</h1>
      <p>This page has the same design and styling as the first page.</p>
      <button onClick={() => window.location.href = '/payment'}>Proceed to Payment</button>
    </div>
  );
};

export default SecondPage;
