import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../../App";
import { toast } from "react-toastify";
import { MdDeleteForever, MdRemove } from "react-icons/md";
import "./List.css"

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list", {
        headers: { token },
      });

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (_id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { _id },
        { headers: {token} }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        console.log(response.data.message);

        await fetchList();
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchList();
  }, [token]);

  return (
    <div>
      <p className="product-title">لیست محصولات</p>
      <div className="product-list-container">
        <div className="product-table-title">
          <b>عکس</b>
          <b>اسم</b>
          <b>دسته بندی</b>
          <b>قیمت</b>
          <b className="action-title">عمل</b>
        </div>
        {/* product list */}
        {list.map((item, index) => (
          <div className="product-row" key={index}>
            <img className="product-image" src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {item.price}
              {currency}
            </p>
            {/* <MdRemove className="product-action"/> */}
            <MdDeleteForever onClick={() => removeProduct(item._id)} className="product-action" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
