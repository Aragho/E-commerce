import React, { useState} from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
export default function CartPage() {
  const {
    
    subtotal,
    deliveryFee,
    discountAmount,
    finalTotal,
    setDiscountPercentage,
    discountPercentage
  } = useCart();

  const [promoCode, setPromoCode] = useState('');

  const handleApplyPromoCode = () => {
    if (promoCode === 'DISCOUNT20') {
      setDiscountPercentage(20); // Apply 20% discount
    } else {
      alert('Invalid promo code');
    }
  };

  return (
    <div className="cart-page p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Order Summary</h1>
      
      
     
      {/* Cart Summary Section */}
      <div className="cart-summary mb-6 p-4 border border-gray-300 rounded-lg">
        <div className="mb-4">
          <p className="text-lg">Subtotal: <span className="font-bold">${subtotal.toFixed(2)}</span></p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Delivery Fee: <span className="font-bold">${deliveryFee.toFixed(2)}</span></p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Discount: <span className="font-bold text-red-600">-${discountAmount.toFixed(2)} ({-discountPercentage}% off)</span></p>
        </div>
        <div className="mb-4">
          <p className="text-xl font-bold">Total: <span className="font-bold">${finalTotal.toFixed(2)}</span></p>
        </div>
      </div>

      {/* Promo Code Section */}
      <div className="mb-6">
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter Promo Code"
          className="border border-gray-300 p-2 rounded mr-4"
        />
        <button
          onClick={handleApplyPromoCode}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Apply
        </button>
      </div>

     
    </div>
  );
}
