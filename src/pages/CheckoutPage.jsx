// import React, { useState } from 'react';
// import { useCart } from './CartContext';
// import { Link } from 'react-router-dom';

// export default function CheckoutPage() {
//   const {
//     cart,
//     subtotal,
//     deliveryFee,
//     discountAmount,
//     finalTotal,
//   } = useCart();

//   // State for handling shipping information
//   const [shippingInfo, setShippingInfo] = useState({
//     name: '',
//     address: '',
//     city: '',
//     postalCode: '',
//     country: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setShippingInfo({
//       ...shippingInfo,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission (e.g., make API call to process the order)
//     console.log('Order submitted:', shippingInfo);
//   };

//   return (
//     <div className="checkout-page p-4 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>

//       {/* Shipping Form */}
//       <div className="shipping-info mb-8 p-6 border border-gray-300 rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-lg" htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={shippingInfo.name}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-lg" htmlFor="address">Address</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={shippingInfo.address}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4 flex gap-4">
//             <div className="flex-1">
//               <label className="block text-lg" htmlFor="city">City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={shippingInfo.city}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-lg" htmlFor="postalCode">Postal Code</label>
//               <input
//                 type="text"
//                 id="postalCode"
//                 name="postalCode"
//                 value={shippingInfo.postalCode}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-lg" htmlFor="country">Country</label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={shippingInfo.country}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-lg" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={shippingInfo.email}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="text-right">
//             <button
//               type="submit"
//               className="bg-black text-white px-6 py-2 rounded"
//             >
//               Place Order
//             </button>
//           </div>
//         </form>
//       </div>

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

//       {/* Back to Cart Button */}
//       <div className="text-center">
//         <Link to="/cart">
//           <button className="bg-gray-500 text-white px-6 py-2 rounded">
//             Back to Cart
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
