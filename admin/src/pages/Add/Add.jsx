import React, { useState } from "react";
import upload_img from "../../assets/upload_image.png";
import "./Add.css";
import axios from "axios";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [bestSeller, setBestSeller] = useState(false);
  const [size, setSize] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("bestseller", bestSeller);
      formData.append("size", JSON.stringify(size));

      image1 && formData.append("image1", image1 ? image1 : null);
      image2 && formData.append("image2", image2 ? image2 : null);
      image3 && formData.append("image3", image3 ? image3 : null);
      image4 && formData.append("image4", image4 ? image4 : null);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      console.log(response.data);
      // console.log(formData.si);

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="form-container">
      <div>
        <p className="form-label">آپلود عکس</p>
        <div className="image-upload-container">
          <label htmlFor="image1">
            <img
              src={!image1 ? upload_img : URL.createObjectURL(image1)}
              alt=""
              className="upload-preview"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              src={!image2 ? upload_img : URL.createObjectURL(image2)}
              alt=""
              className="upload-preview"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              src={!image3 ? upload_img : URL.createObjectURL(image3)}
              alt=""
              className="upload-preview"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              src={!image4 ? upload_img : URL.createObjectURL(image4)}
              alt=""
              className="upload-preview"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="form-group">
        <div className="form-label">اسم محصول</div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form-input"
          placeholder="اسم محصول خود را وارد کنید"
          required
        />
      </div>

      <div className="form-group">
        <div className="form-label">توضیحات محصول</div>
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="form-input"
          placeholder="توضیحات محصول خود را وارد کنید"
          required
        />
      </div>
      <div className="form-group-horizantal">
        <div>
          <p className="form-label">دسته بندی محصول</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="form-select"
          >
            <option value="Men">مردانه</option>
            <option value="Women">زنانه</option>
            <option value="Kids">بچگانه</option>
          </select>
        </div>
        <div>
          <p className="form-label">قیمت محصول</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="form-input price-input"
            placeholder="30"
          />
        </div>
      </div>
      <div>
        <p className="form-label">سایز محصول</p>
        <div className="size-options">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSize((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`size-option ${size.includes(size) ? "selected" : ""}`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="checkbox-group">
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestSeller}
          type="checkbox"
          id="bestseller"
          className=""
        />
        <label htmlFor="bestseller">اضافه به بهترین ها</label>
      </div>
      <button type="submit" className="submit-button">
        اضافه کردن محصول
      </button>
    </form>
  );
};

export default Add;
