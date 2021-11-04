import React from "react";
import Hero from "../../Components/Hero/Hero";
import ExploreCategory from "../../Components/HomeCategories/ExploreCategory/ExploreCategory";
import PopularProduct from "../../Components/PopularProducts/PopularProducts";
import Discount from "../../Components/DiscountPicture/Discount";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Advertize from "../../Components/Advertize/Advertize";

const Home = () => {
  return (
    <>
      <Hero />
      <ExploreCategory />
      <PopularProduct />
      <Discount />
      <NewProducts />
      <Advertize />
    </>
  );
};

export default Home;
