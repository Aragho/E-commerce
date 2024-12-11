import React from 'react';
import background from "../../asset/Rectangle 2 (1).png";
import Cards from '../../reuseables/Cards/Card';
import { useGetProductsQuery } from "../../services/dummyJsonApi";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { data, isLoading, isError, error } = useGetProductsQuery({ limit: 4, skip: 0 });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message || 'Something went wrong'}</div>;

  return (
    <div className="w-full min-h-screen">

      {/* Hero Section with Background */}
      <div className="relative w-full h-[60vh] md:h-screen">
        <img
          src={background}
          alt="Background"
          className="absolute w-full h-full object-cover"
          style={{ objectPosition: "center" }} // Ensures proper alignment
        />
        <div className="relative z-10 py-10 px-4 text-center md:text-left md:w-1/2 md:pl-14  bg-opacity-50">
          <h1 className="text-4xl font-bold text-black">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <h6 className="text-black mt-2">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </h6>
          <button
            className="bg-black text-white py-2 px-6 rounded-lg hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 mt-4"
            aria-label="Shop Now"
          >
            Shop Now
          </button>
          <div className="flex gap-x-8 py-10 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-black">200+</h2>
              <h6 className="text-black">International Brands</h6>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">2,000+</h2>
              <h6 className="text-black">High-Quality Products</h6>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">30,000+</h2>
              <h6 className="text-black">Happy Customers</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="bg-black text-white flex flex-wrap justify-around items-center py-6">
        <h1 className="font-playfair text-xl font-bold uppercase">VerSace</h1>
        <h1 className="font-playfair text-xl font-bold uppercase">ZARA</h1>
        <h1 className="font-playfair text-xl font-bold uppercase">GUCCI</h1>
        <h1 className="font-playfair text-xl font-bold uppercase">PRADA</h1>
        <h1 className="font-playfair text-xl font-bold uppercase">Calvin Klein</h1>
      </div>

      {/* Products Display */}
      <div className="py-10 px-4">
        {data?.products && data.products.length > 0 ? (
          <Cards data={data.products} />
        ) : (
          <div className="text-center text-gray-500 py-10">
            No products available at the moment.
          </div>
        )}

        <div className="text-center mt-11">
          <Link to="/productDetails">
            <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              View All
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}
