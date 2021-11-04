import React from "react";
import "./NewProducts.css";
import PopularProductsCards from "./NewProductCard/NewProductsCard";
import yellowGarri from "../../assets/yellowgarri.png";
import rightArrow from "../../assets/rightarrow.png";

const NewProducts = () => {
  return (
    <div className="pt-12">
      <div className="md:container md:mx-auto popular-productsss  flex ">
        <p>NEWLY ADDED PRODUCTS</p>
        <div className="see-all">
          <span>See all</span>

          <span>
            <img className="inline-block ml-2" src={rightArrow} alt="see more arrow" />
          </span>
        </div>
      </div>
      <div className="md:container md:mx-auto py-8  grid md:grid-cols-5 popular-products">
        <PopularProductsCards img={yellowGarri} alt="" />
        <PopularProductsCards img={yellowGarri} alt="" />
        <PopularProductsCards img={yellowGarri} alt="" />
        <PopularProductsCards img={yellowGarri} alt="" />
        <PopularProductsCards img={yellowGarri} alt="" />
        <PopularProductsCards img={yellowGarri} alt="" />
        <PopularProductsCards img={yellowGarri} alt="" />
        <PopularProductsCards img={yellowGarri} alt="" />
        <PopularProductsCards img={yellowGarri} alt="" />
        <PopularProductsCards img={yellowGarri} alt="" />
      </div>
    </div>
  );
};

export default NewProducts;
