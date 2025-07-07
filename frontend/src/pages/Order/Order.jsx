import React, { useContext, useEffect, useState } from "react";
import "./Order.css";
import { ShopContext } from "../../context/ShopContext";
import { backendUrl } from "../../App";
import axios from "axios";

const Order = () => {
  const { token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        console.log("token nist");
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      console.log(response.data);

      if (response.data.success) {
        let allOdersItem = [];

        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;

            allOdersItem.push(item);
          });
        });

        setOrderData(allOdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div>
      <div className="orders-container">
        <div className="order-title">
          <h1>سفارشات من</h1>
        </div>
      </div>

      {orderData.map((item, index) => (
        <div key={index} className="order-item-container">
          <div className="order-item-details">
            <img src={item.image[0]} className="order-item-image" alt="" />
            <div>
              <p className="order-item-name">{item.name}</p>
              <div className="order-item-info">
                <p>
                  {item.price}
                  {currency}
                </p>
                <p>تعداد:{item.quantity}</p>
                <p>سایز:{item.size}</p>
              </div>
              <p className="order-item-date">
                تاریخ: <span>{new Date(item.date).toLocaleString()}</span>
              </p>
              <p className="order-item-payment">
                نحوه پرداخت: <span>{item.paymentMethod}</span>
              </p>
            </div>
          </div>
          <div className="order-item-status-container">
            <div className="order-item-status">
              <p className="status-indicator"></p>
              <p>{item.status}</p>
            </div>
            <button onClick={loadOrderData} className="track-order-btn">
              پیگیری سفارش
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
