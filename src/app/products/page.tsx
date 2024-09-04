import React from 'react';

interface Props {
  className?: string;
}

const Products: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <h1>Products</h1>
    <p>many products</p>
  </div>
);

export default Products;
