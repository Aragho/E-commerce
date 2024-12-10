import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="border p-4 rounded shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={() => navigate('/details', { state: product })}
    >
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h1 className="text-lg font-bold">{product.title}</h1>
      <p className="text-sm">Rating: {product.rating}</p>
      <p className="text-sm text-green-500 font-bold">${product.price}</p>
    </div>
  );
}
