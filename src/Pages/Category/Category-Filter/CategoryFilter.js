import React from "react";
import "./CatFilter.css";

import Star1 from "../../../assets/1star.svg";
import Star2 from "../../../assets/2stars.svg";
import Star3 from "../../../assets/3stars.svg";
import Star4 from "../../../assets/4stars.svg";
import Star5 from "../../../assets/5stars.svg";

function CategoryFilter() {
  return (
    <div className="category-filter-wrapper pt-7  mr-2 ">
      <h5>Fliter</h5>
      <div className="category-filter  px-8 pt-6 pb-8 mb-4">
        <div className="price-input  ">
          <h5 className="pb-5 text-base font-semibold">Price (N)</h5>
          <form className=" bg-white  pb-8 mb-1">
            <div className="mb-6 flex justify-between">
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="MIN"
              />

              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="MAX"
              />
            </div>
          </form>
        </div>

        <div className="category-product-rating pb-5">
          <h5 className="pb-5 text-base font-semibold"> Seller Rating</h5>

          <form>
            <label class="container1">
              <img src={Star5} alt="rating" />
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>

            <label class="container1">
              <img src={Star4} alt="rating" />
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>

            <label class="container1">
              <img src={Star3} alt="rating" />
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>

            <label class="container1">
              <img src={Star2} alt="rating" />
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>

            <label class="container1">
              <img src={Star1} alt="rating" className="inline" />
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
          </form>
        </div>

        <div className="category-product-rating pb-5">
          <h5 className="pb-5 text-base font-semibold"> Sort By</h5>

          <form>
            <label class="container1">
              High - Low
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container1">
              Low - High
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container1">
              Three
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container1">
              Four
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </form>
        </div>

        <div className="category-product-rating pb-5">
          <h5 className="pb-5 text-base font-semibold"> Product Rating</h5>

          <form>
            <label class="container1">
              One
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container1">
              Two
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container1">
              Three
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container1">
              Four
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
