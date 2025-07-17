import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Collection from "./pages/Collection/Collection";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/Checkout/Checkout";
import Order from "./pages/Order/Order";
import { ShopContext } from "./context/ShopContext";

export const backendUrl = "http://localhost:4000";

// const navigate = useNavigate()
const App = () => {
  const { token, setToken } = useContext(ShopContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  
  return (
    <div lang="rtl">
      <ToastContainer />
      <Navbar />
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<Collection />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
