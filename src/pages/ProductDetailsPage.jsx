import React from 'react'
import {useGetProductsQuery} from "../services/dummyJsonApi"
import Cards from '../reuseables/Cards/Card'

export default function ProductDetailsPage() {
    const { data, isLoading, isError, error } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error?.message || 'Something went wrong'}</div>;
    console.log(data)
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Product Details</h1>
        {data?.products ? (
          <Cards data={data.products} />
        ) : (
          <div>No products available</div>
        )}
      </div>
    );
}

