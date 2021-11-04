import React from "react";
import appstorelogo from "../../assets/Appstorelogo.png";
import "./Discount.css";
const Discount = () => {
  return (
    <div className="md:container md:mx-auto py-6 discount ">
      <div className="dicount-container ">
        <div className="flex justify-evenly ">
          <div className="discount-text text-white">
            <p>
              Get Incredible Discounts, Mouthwatering Offers and Amazing Deals
              Daily
            </p>
          </div>

          <div className="inline-block app-download">
            <p className="">DOWNLOAD MIDDLEMEN FREE APP</p>
            <img className="mt-5" src={appstorelogo} alt="app" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
