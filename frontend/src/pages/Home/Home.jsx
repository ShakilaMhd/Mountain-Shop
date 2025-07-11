import React from "react";
import Hero from "../../components/Hero/Hero";
import BestSeller from "../../components/LastestCollection/BestSeller";
import HomeCollection from "../../components/HomeCollection/HomeCollection";
import ProductFilter from "../../components/ProductFilter/ProductFilter";

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
