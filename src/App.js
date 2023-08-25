import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/Protected';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Home></Home></Protected>,
  },
  {
    path: "/login",
    element:< LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element:< SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element:<Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "/checkout",
    element:<Protected><Checkout></Checkout></Protected>,
  },
  {
    path: '/product-detail/:id',
    element:<Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
