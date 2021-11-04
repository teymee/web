import React from "react";
import "./ExploreCategoryCard.css";

const ExploreCategoryCard = (props) => {
  return (
    <div className="explore-cat-card mr-5 mb-5">
      {/* EPLORE CARTIMAGE */}
      <div className="explore-cat-img">
        <img src={props.img} alt="pepsi" />
      </div>
      {/* EXPLoRE CAT PRODUCT NAME */}
      <p className="text-center py-3">noodles</p>
    </div>
  );
};

export default ExploreCategoryCard;
