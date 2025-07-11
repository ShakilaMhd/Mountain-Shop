import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductFilter = () => {
  const { products } = useContext(ShopContext);
  return (
    <>
      <div className="filter-and-products-container">
        {/* filter option */}
        <div className="filter-container">
          {/* category filter */}
          <div className="filter-section">
            <p className="filter-title">جنسیت</p>
            <div className="filter-category">
              <p className="filter-item">
                <input type="checkbox" />
                مردانه
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                زنانه
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                بچگانه
              </p>
            </div>
          </div>
          {/* size category */}
          <div className="filter-section">
            <p className="filter-title">براساس سایز</p>
            <div className="filter-category">
              <p className="filter-item">
                <input type="checkbox" />
                نوجوانان
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                ریز اندام
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                سایز بزرگ
              </p>
            </div>
          </div>
          {/* material filter */}
          <div className="filter-section">
            <p className="filter-title">مواد اولیه</p>
            <div className="filter-category">
              <p className="filter-item">
                <input type="checkbox" />
                پنبه
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                چرم
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                ابریشم
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                چرم جیر
              </p>
            </div>
          </div>
        </div>
        {/* productCotainer */}
        <div className="product-container">
          <div className="product-header">
            <h2>همه محصولات</h2>
            <select name="" className="sort-dropdown" id="">
              <option value="وابسته">مرتب سازی براساس وابستگی</option>
              <option value="پایین-بالا">پایین-بالا</option>
              <option value="بالا-پایین">بالا-پایین</option>
            </select>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <div className="filter-and-products-container">
    //     {/* filter option */}
    //     <div className="filter-container">
    //       {/* category filter */}
    //       <div className="filter-section">
    //         <p className="filter-title">جنسیت</p>
    //         <div className="filter-category">
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             مردانه
    //           </p>
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             زنانه
    //           </p>
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             بچگانه
    //           </p>
    //         </div>
    //       </div>
    //       {/* size category */}
    //       <div className="filter-section">
    //         <p className="filter-title">براساس سایز</p>
    //         <div className="filter-category">
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             نوجوانان
    //           </p>
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             ریز اندام
    //           </p>
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             سایز بزرگ
    //           </p>
    //         </div>
    //       </div>
    //       {/* material filter */}
    //       <div className="filter-section">
    //         <p className="filter-title">مواد اولیه</p>
    //         <div className="filter-category">
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             پنبه
    //           </p>
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             چرم
    //           </p>
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             ابریشم
    //           </p>
    //           <p className="filter-item">
    //             <input type="checkbox" />
    //             چرم جیر
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     {/* productCotainer */}
    //     <div className="product-container">
    //       <div className="product-header">
    //         <h2>همه محصولات</h2>
    //         <select name="" className="sort-dropdown" id="">
    //           <option value="وابسته">مرتب سازی براساس وابستگی</option>
    //           <option value="پایین-بالا">پایین-بالا</option>
    //           <option value="بالا-پایین">بالا-پایین</option>
    //         </select>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductFilter;
