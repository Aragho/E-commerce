import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductDetailsPage() {
  // Retrieve the passed product object from the location state
  const { state: product } = useLocation();

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [finalPrice, setFinalPrice] = useState(product.price);

  // Update final price based on color or size selection
  useEffect(() => {
    if (selectedColor || selectedSize) {
      let priceAdjustment = product.price;

      // Example price adjustments for different color or size selections
      if (selectedColor === 'Red') {
        priceAdjustment += 10;
      }
      if (selectedSize === 'X-Large') {
        priceAdjustment += 20;
      }

      setFinalPrice(priceAdjustment);
    } else {
      setFinalPrice(product.price);
    }
  }, [selectedColor, selectedSize, product.price]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select a color and size!');
      return;
    }

    const cartItem = {
      product,
      selectedColor,
      selectedSize,
      quantity,
      finalPrice,
    };

    console.log('Item added to cart:', cartItem);
    alert('Item added to cart!');
  };

  if (!product) {
    return <div>No product selected. Please go back and select a product.</div>;
  }

  // Calculate discount price
  const discountedPrice = product.discountPercentage
    ? product.price - (product.price * product.discountPercentage / 100)
    : product.price;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Flex container to place image and details side by side */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Product Image */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:ml-8">
          {/* Product Title */}
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          {/* Product Rating */}
          <p className="text-sm text-gray-500 mb-4">Rating: {product.rating} / 5</p>

          {/* Product Price with Discount */}
          <div className="flex items-baseline mb-4">
            <p className="text-xl text-black font-bold">${finalPrice.toFixed(2)}</p>
            {product.discountPercentage && (
              <p className="text-sm line-through text-gray-500 ml-2">
                ${product.price.toFixed(2)}
              </p>
            )}
            {product.discountPercentage && (
              <p className="text-sm text-red-500 ml-2">-{product.discountPercentage}%</p>
            )}
          </div>

          {/* Product Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Select Color */}
          <div className="mt-4">
            <h2 className="font-bold text-sm">Select Colors</h2>
            <div className="flex space-x-2 mt-2">
              {['Black', 'White', 'Gray'].map((color) => (
                <button
                  key={color}
                  className={`px-4 py-2 border rounded ${
                    selectedColor === color ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Select Size */}
          <div className="mt-4">
            <h2 className="font-bold text-sm">Choose Size</h2>
            <div className="flex space-x-2 mt-2">
              {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mt-4">
            <h2 className="font-bold text-sm">Quantity</h2>
            <div className="flex items-center space-x-2 mt-2">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-4 py-2 border rounded"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-8 bg-black h-14 w-full text-white py-2 rounded"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Details, Reviews, and FAQs Links */}
      <div className="flex justify-between p-6 w-full mt-8">
        <h2 className="text-lg cursor-pointer">Product Details</h2>
        <h2 className="text-lg cursor-pointer">Rating & Reviews</h2>
        <h2 className="text-lg cursor-pointer">FAQs</h2>
      </div>
    </div>
  );
}
