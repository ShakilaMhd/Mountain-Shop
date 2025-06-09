import { createContext, useState, useEffect } from "react";
import { product } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
const currency = "$"

  const [products, setProducts] = useState(product);

  const value = {products, currency};

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
