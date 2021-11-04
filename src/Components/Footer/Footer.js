import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import middlemenlOgo from "../../assets/middlemenlogo.png";
import appstorelogo from "../../assets/Appstorelogo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import IG from "../../assets/IG.png";
import LinkedIn from "../../assets/LinkedIn.png";



const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer className="md:container md:mx-auto p-6">
          {/* <div className=" "> */}
          <img src={middlemenlOgo} alt="Middlemen logo" />
          {/* </div> */}
          <div className="footer-content ">
            <div className="block px-3 text-white">
              <p className="p1"> DONT WANT TO MISS OUR INSANE OFFERS</p>
              <p className="p2">
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
            </div>
            <div className="nav-search">
              <input
                type="text"
                className="p-3 pl-6"
                placeholder={`Enter Email Address`}
              />
            </div>
            <div className="subscribe-div">
              <Link
                href="#"
                className="inline-block text-sm px-4 py-2  leading-none border  text-white  hover:border-transparent hover:text-teal-500 hover:bg-black mt-4 lg:mt-0 subscribe-btn "
              >
                <p>Subscribe</p>
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <div className="secondfooter">
        <footer className="md:container md:mx-auto p-6">
          <div className="block about-salesman">
            <h3 className="py-2 text-white">ABOUT MIDDLEMEN</h3>
            <p className="py-2 text-white">About Us</p>
            <p className="py-2 text-white"> Careers </p>
            <p className="py-2 text-white">Account</p>
            <p className="py-2 text-white"> Privacy Policy</p>
            <p className="py-2 text-white"> Terms and Conditions</p>
          </div>
          <div className="block about-salesman">
            <h3 className="py-2 text-white">MAKE MONEY WITH US</h3>
            <p className="py-2 text-white">Sell on Middlemen </p>
            <p className="py-2 text-white"> Become a Sales Consultant</p>
            <p className="py-2 text-white">Host a Middlemen Hub</p>
            <p className="py-2 text-white">
              {" "}
              Become a Logistics Service Partner
            </p>
            <p className="py-2 text-white"> Advertise Your Product</p>
          </div>
          <div className="block about-salesman">
            <h3 className="py-2 text-white">LET US HELP YOU</h3>
            <p className="py-2 text-white">Help Center</p>
            <p className="py-2 text-white"> How to shop on Middlemen?</p>
            <p className="py-2 text-white">Delivery options and timelines</p>
            <p className="py-2 text-white"> Bulk purchases</p>
            <p className="py-2 text-white"> Report a Product</p>
          </div>
          <div className="block middlemenapp">
            <h3 className="py-2">DOWNLOAD MIDDLEMEN FREE APP</h3>
            <p className="py-2 text-white">
              Get premium access to amazing offers!
            </p>
            <img src={appstorelogo} alt="App store" className="app-img py-2" />
          </div>
        </footer>
        <div className="md:container md:mx-auto p-6 text-center">
          <div className="block  about-salesman" >
            <h3 className="py-2 text-white">FOLLOW US ON</h3>
            <div className="flex justify-center" >
              <img src={facebook} alt="facebook" className="px-3"/>
              <img src={twitter} alt="twitter"  className="px-3"/>
              <img src={IG} alt="Instagram"  className="px-3"/>
              <img src={LinkedIn} alt="LinkedIn"  className="px-3"/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
