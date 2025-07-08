import React from "react";
import "./Checkout.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useState } from "react";
import razorpay from "../../assets/men-wear.png";
import stripe from "../../assets/men-wear.png";
import axios from "axios";
import { backendUrl } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const [method, setMethod] = useState("cod");

  const navigate = useNavigate();

  const {
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
    currency,
    token,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async () => {
    event.preventDefault();

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          console.log(response.data);
          console.log(orderData);

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );

          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form className="form-container" onSubmit={onSubmitHandler}>
      {/* delivery info section */}
      <div className="form-left">
        <fieldset className="payment-method">
          <legend>انواع پرداخت</legend>
          <div className="payment-options">
            <div
              onClick={() => setMethod("stripe")}
              className="payment-option selected"
            >
              <img src={stripe} alt="" className="payment-logo" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="payment-option selected"
            >
              <img src={razorpay} alt="" className="payment-logo" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="payment-option selected"
            >
              <span className="payment-text">پرداخت حضوری</span>
            </div>
          </div>
        </fieldset>

        <div className="form-title">
          <h2>آدرس</h2>
        </div>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            className="form-row"
            placeholder="نام"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            className="form-row"
            placeholder="فامیلی"
            onChange={onChangeHandler}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            className="form-row"
            placeholder="ایمیل"
            onChange={onChangeHandler}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            className="form-row"
            placeholder="شماره تلفن"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            className="form-row"
            placeholder="آدرس"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-checkout">
          <div className="cart-title">
            <h2>جمع هزینه ها</h2>
            <div className="cart-total-details">
              <div className="cart-row">
                <p>جمع جزء</p>
                <p>
                  {getCartAmount()} {currency}
                </p>
              </div>
              <hr className="cart-divider" />
              <div className="cart-row">
                <p>هزینه حمل و نقل</p>
                <p>
                  {delivery_fee}
                  {currency}
                </p>
              </div>
              <div className="cart-row cart-total">
                <b>جمع کل</b>
                <b>
                  {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}{" "}
                  {currency}
                </b>
              </div>
            </div>
          </div>
          <button type="submit">پرداخت</button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
