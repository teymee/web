import React from "react";
import ExploreCategoryCard from "../ExploreCategoryCard";
import noodles from "../../../assets/noodles.png";
import chicken from "../../../assets/chicken.png";
import detergent from "../../../assets/detergent.png";
import doodles from "../../../assets/doodles.png";
import fish from "../../../assets/fish.png";

import "./ExploreCategory.css";

const ExploreCategory = () => {
  return (
    <div>
    
      <div className="md:container md:mx-auto py-8  pt-20 grid md:grid-cols-7  explore-cats">
        <ExploreCategoryCard img={noodles} alt="" />
        <ExploreCategoryCard img={chicken} alt=""/>
        <ExploreCategoryCard img={detergent} alt=""/>
        <ExploreCategoryCard img={doodles} alt="" />
        <ExploreCategoryCard img={fish} alt="" />
        <ExploreCategoryCard img={chicken} alt="" />
        <ExploreCategoryCard img={detergent} alt="" />
        <ExploreCategoryCard img={doodles} alt="" />
        <ExploreCategoryCard img={fish} alt="" />
        <ExploreCategoryCard img={noodles} alt="" />
        <ExploreCategoryCard img={chicken} alt="" />
        <ExploreCategoryCard img={detergent} alt="" />
        <ExploreCategoryCard img={doodles} alt="" />
        <ExploreCategoryCard img={fish} alt="" />
      </div>
    </div>
  );
};

export default ExploreCategory;
