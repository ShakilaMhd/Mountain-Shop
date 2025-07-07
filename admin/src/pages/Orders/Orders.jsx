import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../../App";
import { toast } from "react-toastify";
import "./Orders.css"

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      console.log(response.data);

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId,
          status: event.target.value
        },
        { headers: { token } }
      );

      if (response.data.succes) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  };

  useEffect(
    () => {
      fetchAllOrders();
    },
    { token }
  );
  return (
    <div>
      <h3 className="order-title">همه سفارشات</h3>
      <div className="order-container">
        {orders.map((order, index) => (
          <div className="order-card">
            <div className="order-details">
              <div className="user-order-details">
                <p className="order-customer">
                  <span>مشتری</span>
                  {order.address.firstName} {order.address.lastName}
                </p>
                <p>
                  <span>تلفن</span>
                  {order.address.phone}
                </p>
                <div className="order-address">
                  <span>آدرس حمل و نقل:</span>
                  {order.address.address}
                </div>
              </div>

              <div className="order-items">
                {order.items.map((item, index) => (
                  <div className="order-item" key={index}>
                    <p>
                      <span>محصول:</span>
                      {item.name}
                    </p>
                    <p>
                      <span>تعداد:</span>
                      {item.quantity}
                    </p>
                    <p>
                      <span>سایز:</span>
                      {item.size}
                    </p>
                  </div>
                ))}
              </div>
              <div className="payment-method">
                <p>
                  <span>آیتم ها:</span>
                  {order.items.length}
                </p>
                <p>
                  <span>نحوه پرداخت:</span>
                  {order.paymentMethod}
                </p>
                <p>
                  <span>پرداخت:</span>
                  {order.payment ? "انجام شده" : "در حال انجام"}
                </p>
                <p>
                  <span>تاریح:</span>
                  {new Date(order.date).toLocaleString()}
                </p>
              </div>
              <h2 className="order-amount">
                {order.amount}
                {currency}
              </h2>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="order-status" name="" id="">
                <option value="Order Placed">سفارش قرار داده شده</option>
                <option value="Packing">بسته بندی</option>
                <option value="Shipped">فرستاده شده</option>
                <option value="Out of Delivery">خارج از تحویل</option>
                <option value="Delivered">تحویل داده شده</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
