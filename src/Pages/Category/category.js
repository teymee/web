import React from "react";
import "./category.css";
import Pepsi from "../../assets/pepsi.png";
import Milo from "../../assets/5.png";
import Garri from "../../assets/white garri.jpg";

import CategoryDropdown from "./CategoryDropdown";
import CatProductCard from "./CatProductCard";
import CategoryFilter from "./Category-Filter/CategoryFilter";

function category() {
  return (
    <div className="category-wrapper flex ">
     
     <CategoryFilter/>

      <div className="category-list">
        {/* <h4>GRAINS & BEANS</h4> */}
        <div className="cat-list-nav flex justify-between">
          {/* PER PAGE */}
          <CategoryDropdown title="Per page" subtitle="20" />

          {/* SORT BY */}
          <CategoryDropdown title="Sort by" subtitle="Popularity" />
        </div>


        <div className="category-product grid md:grid-cols-4 gap-4 p-5 sm:grid-cols-2 mb-20">
          <CatProductCard img={Pepsi} alt=""/>
          <CatProductCard img={Milo} alt=""/>
          <CatProductCard img={Pepsi} alt=""/>
          <CatProductCard img={Pepsi} alt=""/>
          <CatProductCard img={Milo} alt=""/>
          <CatProductCard img={Garri} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default category;
