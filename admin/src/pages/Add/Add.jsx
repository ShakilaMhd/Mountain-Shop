import React, { useState } from "react";
import upload_img from "../../assets/upload_image.png";
import "./Add.css"


const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmintHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1 ? image1 : null)
      image2 && formData.append("image2", image2 ? image2 : null)
      image3 && formData.append("image3", image3 ? image3 : null)
      image4 && formData.append("image4", image4 ? image4 : null)

    } catch (error) {}
  };

  return (
    <form action="" onSubmit={onSubmintHandler} className="form-container">
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
        <p className="form-label">اسم محصول</p>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="اسم محصول خودرا وارد کنید"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <p className="form-label">توضیخات محصول</p>
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="توضیحات محصول را وارد کنید"
          className="form-input"
          required
        />
      </div>
      <div className="form-group-horizontal">
        <div>
          <p className="form-label"> دسته بندی محصولات</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="form-select"
          >
            <option value="Men">مردانه</option>
            <option value="Woman">زنانه</option>
            <option value="kids">بچگانه</option>
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
        <p className="form-label">سایز محصولات</p>
        <div className="size-options">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`size-option ${
                sizes.includes(size) ? "selected" : ""
              }`}
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
          className="check"
        />
        <label htmlFor="bestseller">اضافه به بهترین ها</label>
      </div>
      <button type="submit" className="submit-button">اضافه کردن محصول</button>
    </form>
  );
};

export default Add;
