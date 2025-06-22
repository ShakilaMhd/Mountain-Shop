import { createContext, useState, useEffect } from "react";
import { product } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
const currency = "$"

  const [products, setProducts] = useState(product);
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = (term) => {
    setSearchTerm(term)
  }

  const value = {products, currency, searchTerm, updateSearchTerm};

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
