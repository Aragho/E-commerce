// import React, { useState } from 'react';
// import { useCart } from './CartContext';
// import { Link } from 'react-router-dom';

// export default function PlaceOrderPage() {
//   const {
//     cart,
//     subtotal,
//     deliveryFee,
//     discountAmount,
//     finalTotal,
//   } = useCart();

//   const [orderStatus, setOrderStatus] = useState(null);

//   const handlePlaceOrder = () => {
//     // Simulate placing the order (e.g., API call to process the order)
//     setOrderStatus('Your order has been placed successfully!');
//     // After successful order submission, you can also redirect to a thank-you page or reset the cart.
//   };

//   return (
//     <div className="place-order-page p-4 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Confirm Your Order</h1>

//       {/* Order Summary */}
//       <div className="order-summary p-6 border border-gray-300 rounded-lg mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
//         <ul className="mb-6">
//           {cart.map((item, index) => (
//             <li key={index} className="flex justify-between mb-4 border-b pb-4">
//               <div className="flex-1">
//                 <h3 className="text-lg font-bold">{item.product.title}</h3>
//                 <p>Size: {item.selectedSize}</p>
//                 <p>Color: {item.selectedColor}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p className="text-black font-bold">
//                   ${item.finalPrice.toFixed(2)} x {item.quantity}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Cart Summary Section */}
//         <div className="cart-summary mb-6">
//           <p>Subtotal: <span className="font-bold">${subtotal.toFixed(2)}</span></p>
//           <p>Delivery Fee: <span className="font-bold">${deliveryFee.toFixed(2)}</span></p>
//           <p>Discount: <span className="font-bold">-${discountAmount.toFixed(2)}</span></p>
//           <p className="text-xl font-bold">Total: <span className="font-bold">${finalTotal.toFixed(2)}</span></p>
//         </div>
//       </div>

//       {/* Shipping Information (to be filled from the Checkout Page) */}
//       <div className="shipping-info p-6 border border-gray-300 rounded-lg mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
//         {/* Replace with actual shipping data from context or props */}
//         <p>Name: John Doe</p>
//         <p>Address: 1234 Elm Street</p>
//         <p>City: Springfield</p>
//         <p>Postal Code: 12345</p>
//         <p>Country: USA</p>
//         <p>Email: johndoe@example.com</p>
//       </div>

//       {/* Place Order Button */}
//       <div className="place-order-button text-center mb-8">
//         <button
//           onClick={handlePlaceOrder}
//           className="bg-black text-white px-6 py-2 rounded"
//         >
//           Place Order
//         </button>
//       </div>

//       {/* Order Status Message */}
//       {orderStatus && (
//         <div className="order-status text-center text-green-500">
//           <p>{orderStatus}</p>
//         </div>
//       )}

//       {/* Back to Cart Button */}
//       <div className="back-to-cart text-center">
//         <Link to="/cart">
//           <button className="bg-gray-500 text-white px-6 py-2 rounded">
//             Back to Cart
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
