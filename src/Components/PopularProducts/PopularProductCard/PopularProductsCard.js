import React from "react";
import "./PopularProductsCard.css";
import star from "../../../assets/Star 2.svg";
import Emoji from "../../../assets/Emoji.svg"

const PopularProductsCard = (props) => {
  return (
    <div className="popular-prod-card mr-5 mb-5">
      {/* EPLORE CARTIMAGE */}
      <div className="pop-product-img ">
        <img src={props.img} alt="pepsi" />
      </div>
      {/* EXPLoRE CAT PRODUCT NAME */}
      <p className=" ">Yellow garri, 1painter</p>
      <div className="flex img-container ">
        <img src={star} alt='star'/>
        <img src={star} alt='star'/>
        <img src={star} alt='star'/>
      </div>
      <div className="flex seller-price pt-9">
        <img src={Emoji} alt="emoji"/>
        
        <h4>Seller7643</h4>
        <h3 className="ml-6">N1000</h3>
      </div>
    </div>
  );
};

export default PopularProductsCard;
