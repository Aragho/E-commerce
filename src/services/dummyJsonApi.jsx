import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyJsonApi = createApi({
  reducerPath: 'dummyJsonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (queryParam) => {
        if (queryParam) {
          return `products?${new URLSearchParams(queryParam).toString()}`;
        }
        return 'products';
      },
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = dummyJsonApi;
