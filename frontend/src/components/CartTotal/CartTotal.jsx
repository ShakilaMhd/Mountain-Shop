import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./CartTotal.css"
const CartTotal = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);

  return <div>
    <div className="cart-total-container">
      <div className="cart-title">
        <h2>جمع هزینه ها</h2>
      </div>
      <div className="cart-total-details">
        <div className="cart-row">
          <p>جمع جزء</p>
          <p>{getCartAmount()} {currency}</p>
        </div>
        <hr className="cart-divider" />
        <div className="cart-row">
          <p>هزینه حمل و نقل</p>
          <p>{delivery_fee}{currency}</p>
        </div>
        <div className="cart-row cart-total">
          <b>جمع کل</b>
          <b>{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee} {currency}</b>
        </div>
      </div>
    </div>
  </div>;
};

export default CartTotal;
