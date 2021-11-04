import React from "react";
import { Link } from "react-router-dom";
import "./Advertize.css";
const Advertize = () => {
  return (
    <div className="md:container md:mx-auto py-6 pb-14 advertize ">
      <div className="advertize-container ">
        <div className="flex  adv-cont ">
          <div className="advertize-text text-white al">
            <p>Advertise Your Products and Sell Like Crazy!</p>
            <div className="advertize-div py-5">
              <Link
                href="#"
                className="inline-block text-sm px-4 py-2  leading-none border  text-white  hover:border-transparent hover:text-teal-500 hover:bg-black mt-4 lg:mt-0 advertize-btn "
              >
                <p>Start Now</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertize;
