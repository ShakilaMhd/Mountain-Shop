import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";

const ProductDetails = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div>
      <div className="product-container">
        <div className="product-content">
          <div className="product-images">
            <div className="thumbnail-container">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="thumbnail"
                />
              ))}
            </div>
            <div className="main-image-container">
              <img src={image} alt="" className="main-image" />
            </div>
          </div>
          <div className="product-info">
            <h1 className="product-name">{productData.name}</h1>
            <hr className="product-divider" />
            <p className="product-price">
              {currency}
              {productData.price}
            </p>
            <p className="product-description">{productData.description}</p>
            <div className="size-selector">
              <p>انتخاب سایز</p>
              <div className="size-buttons">
                {productData.size.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`size-button ${
                      item === size ? "active-size" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <hr className="product-divider" />
            <div className="product-policy">
              <p>تحویل رایگان</p>
              <p>پرداخت یکپارچه و ایمن</p>
              <p>چندین گزینه پرداخت موجود است</p>
            </div>
            <button onClick={() => addToCart(productData._id, size)} className="add-to-cart-btn">
              اضافه کردن به کارت
            </button>
          </div>
        </div>
        <div className="description-review-sect">
          <div className="tabs">
            <b className="tab active">توضیحات</b>
            <p className="tab">مرور</p>
          </div>
          <div className="description-content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              beatae error accusamus debitis cum molestias dicta laudantium illo
              tempore nulla. Et eaque aut officia a beatae similique magnam
              possimus accusantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, recusandae. Assumenda sed quas quo, reprehenderit a aut
              sit corporis labore, enim consequuntur perferendis accusamus rem
              quia, dignissimos provident cupiditate modi.
            </p>
          </div>
        </div>
        <RelatedProduct category={productData.category} />
      </div>
    </div>
  ) : (
    <div>محصولی با این آیدی وجود ندارد</div>
  );
};

export default ProductDetails;
