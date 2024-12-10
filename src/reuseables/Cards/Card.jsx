import React from 'react'
import ProductCard from './ProductCard';

export default function Cards({ data }) {
  
  if (!data || data.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
