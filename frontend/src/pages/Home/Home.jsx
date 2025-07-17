import React, { useContext, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import BestSeller from "../../components/LastestCollection/BestSeller";
import HomeCollection from "../../components/HomeCollection/HomeCollection";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <Hero />
      <BestSeller />
      <HomeCollection />
      {/* <ProductFilter /> */}
    </div>
  );
};

export default Home;
