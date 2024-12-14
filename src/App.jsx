import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './pages/CartContext';  // Import the CartProvider
import ROUTES from './route/router';  // Your route definitions

const routes = createBrowserRouter([...ROUTES]);

function App() {
  return (
    <CartProvider>  {/* Wrap RouterProvider with CartProvider */}
      <RouterProvider router={routes} />
    </CartProvider>
  );
}

export default App;
