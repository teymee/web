import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
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

          <div className="subsection-one pt-5 pb-10">
            <span>Conversion Rate</span>
            <div className="flex  w-3/4 justify-between items-center pt-1">
              <h2>20</h2> <i>18%</i>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 section-two">
        {" "}
        <div className="section-container pt-5 pb-5">
          <h4 className="text-center p-5  mb-10">Product Data </h4>
          <Bar
            data={{
              labels: ["20", "21", "22", "23", "24", "25"],
              datasets: [
                {
                  label: "Product Viewed",
                  data: [12, 19, 3, 5, 2, 19],
                  backgroundColor: ["#FF5200"],
                  borderRadius:50, 
                  barThickness:10,
               barPercentage:3.0,
               categoryPercentage:6.0
                  // borderColor: [
                  //   "rgba(255, 99, 132, 1)",
                  //   "rgba(54, 162, 235, 1)",
                  //   "rgba(255, 206, 86, 1)",
                  //   "rgba(75, 192, 192, 1)",
                  //   "rgba(153, 102, 255, 1)",
                  //   "rgba(255, 159, 64, 1)",
                  // ],
                  // borderWidth: 1,
                  
                },
                {
                  label: "Product Sold",
                  data: [1, 9, 30, 15, 22, 3],
                  backgroundColor: ["#42BDA1"],
                  borderRadius:50, 
                  barThickness:10,
                  barPercentage:3.0,
                  categoryPercentage:6.0
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  grid: {
                    offset: false,
                  },
                },

                y: {
                  grid: {
                    offset: false,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="section-three">
        <div className="section-container pt-5 pb-5">
          <h4 className="text-center p-5  mb-1">Transaction Data </h4>
          <h5 className="pt-5">Total Transactions </h5>
          <h1 className=" pt-1  mb-2"> 32</h1>
          <Doughnut
            data={{
              labels: ["Success (30)", "Refund (2)"],
              datasets: [
                {
                  data: [30, 2],
                  backgroundColor: ["#42BDA1", "#F04461"],
                  borderColor: ["#42BDA1", "#F04461"], 
                  
                  // borderWidth: 1,
                },
              ],
            }}
          />

         
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
