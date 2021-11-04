import React from "react";
import Star from "../../assets/Star 2.svg";
import Emoji from "../../assets/Emoji.svg";

function CatProductCard({ img }) {
  return (
    <div className="cat-product-card">
      {/* PRODUCT IMG */}
      <div className="cat-product-img ">
        <img src={img} alt="pepsi" />
      </div>

      {/* PRODUCT DETAILS */}
      <div className="cat-product-details mt-10 text-center">
          
        {/* PRODUCT SELLER */}
        <div className="cat-product-details-footer flex justify-center font-medium pb-2 ">
          <p className="pt-2 pr-2 inline-block text-base font-semibold">
            <img
              src={Emoji}
              alt="account"
              className=" pr-1 inline-block"
            />
            <span className="text-xs"> Seller 12332</span>
          </p>

          <div className="cat-product-rating flex justify-center pt-2 ">
            <img src={Star} alt="pepsi" />
            <img src={Star} alt="pepsi" />
            <img src={Star} alt="pepsi" />
          </div>
        </div>

        <p className="cat-product-name font-semibold pb-2">Bannana Brunch</p>

        <h5 className="text-md font-semibold pb-2">N12,903</h5>
      </div>
    </div>
  );
}

export default CatProductCard;
