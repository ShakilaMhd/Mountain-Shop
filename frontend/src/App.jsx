import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Collection from "./pages/Collection/Collection";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
