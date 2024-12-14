import React from 'react';
import { useGetProductsQuery } from "../services/dummyJsonApi";
import Cards from '../reuseables/Cards/Card';
import { Link } from 'react-router-dom';  // For individual product links

export default function ProductDetailsPage() {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading products...</div>;

  if (isError) return <div>Error: {error?.message || 'Something went wrong'}</div>;

  // If no products are available
  if (!data?.products || data.products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      
      {/* Render product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <div key={product.id} className="card-container">
            <Link to={`/product-details/${product.id}`} state={product}> {/* Link to individual product page */}
              <Cards data={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
