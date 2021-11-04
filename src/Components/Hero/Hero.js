import React from "react";
import HeroIllustration from "../../assets/Hero_Illustration.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <header className="md:container md:mx-auto py-8 herocontainer pt-20 ">
      <div className="block textContainer pt-10">
        <h3>
          Your Shopping <span>Buddy</span> is here!
        </h3>
        <p className="pt-8 hero-subtext">
          Why buy groceries the traditional way when you can get them online?
          Start shopping groceries the easy way.
        </p>
        <div className="flex pt-9 category-search">
          <p className="pt-3">EXPLORE CATEGORIES </p>
          <span>
            <input type="text" className=" pl-6 input" />
            <hr className=" pl-6" />
          </span>
        </div>
      </div>
      <div className="imgContainer">
        <img
          src={HeroIllustration}
          alt="Illustration"
          className="imgillustration"
        />
      </div>
    </header>
  );
};

export default Hero;
