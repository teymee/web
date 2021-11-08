import React from "react";
import "./SecondSection.css";

function SecondSection() {
  return (
    <div className="second-section  grid grid-cols-5 gap-4">
      <div className="section-one">
        <div className="section-container pt-5 pb-5">
          <h4 className="text-center p-5">Seller Performance </h4>
          <div className="subsection-one pt-5 pb-3">
            <span>Product Viewed</span>
            <div className="flex  w-3/4 justify-between items-center pt-1">
              <h2>200</h2> <i>30%</i>
            </div>
          </div>

          <div className="subsection-one pt-5 pb-3">
            <span> Sold Product </span>
            <div className="flex  w-3/4 justify-between items-center pt-1">
              <h2>200000</h2> <i>3%</i>
            </div>
          </div>

          <div className="subsection-one pt-5 pb-20">
            <span>Conversion Rate</span>
            <div className="flex  w-3/4 justify-between items-center pt-1">
              <h2>20</h2> <i>18%</i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 section-two">dflkflf</div>
      <div className="section-three">lfjfkjfd</div>
    </div>
  );
}

export default SecondSection;
