import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Fill } from "react-icons/ri";
import Order from "../pages/Order"; 

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-lg mb-4">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="text-blue-600 hover:underline">Start Shopping</Link>
      </div>
    );
  }

  const totalAmount = cart.reduce((total, item) => total + item.finalPrice, 0).toFixed(2);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 border border-gray-300 rounded-lg p-4">
          <div>
            {cart.map((item, index) => (
              <div key={index} className="flex mb-4 border-b pb-4">
                <img
                  src={item.product?.thumbnail}
                  alt={item.product?.title}
                  className="w-24 h-24 object-cover"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-bold">{item.product?.title}</h2>
                  <p>Color: {item.selectedColor}</p>
                  <p>Size: {item.selectedSize}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="text-black font-bold">${item.finalPrice.toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 mt-2"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </div>
              </div>
            ))}
          </div>

          
        </div>
        <div className=  "  border rounded-lg">
        <div className="w-full lg:w-80  p-4 mt-6 lg:mt-0">
          <Order totalAmount={totalAmount} cart={cart} />
        </div>
        <div className="text-right mt-6">
            <Link to="/home">
              <button className="bg-black text-white px-6 py-2 rounded mt-4">Proceed to Checkout</button>
            </Link>
          </div>

        </div>
       
      </div>
    </div>
  );
}
