import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import middlemenlOgo from "../../assets/middlemenlogo.png";

const NavBar = () => {
  return (
    <nav className="md:container md:mx-auto p-6">
      <Link to='/'>
        <div className="flex pt-1 logo-name">
          <img
            src={middlemenlOgo}
            className="inline-block logo-icon"
            alt="Middlemen logo"
          />
          <span>MiddleMen</span>
        </div>
      </Link>

      <div className="  nav-search">
        <input
          type="text"
          className="p-3 pl-6"
          placeholder={`Search groceries`}
        />
        <SearchIcon className="h-5 w-5  search-icon inline-block  " />
      </div>

      <div className="inline-block">
        <Link
          to="/cart"
          className="block mt-6 lg:inline-block lg:mt-0  hover:text-white mr-4 my-cart "
        >
          <div className="my-cart">
            <ShoppingCartIcon className="h-5 w-5  cart-icon inline-block " />
            <span className="pl-1">My cart</span>
          </div>
        </Link>
        <Link
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4  my-cart"
        >
          Sign in
        </Link>
        <Link
          href="#"
          className="inline-block text-sm px-4 py-2 leading-none border  text-white  hover:border-transparent hover:text-teal-500 hover:bg-black mt-4 lg:mt-0 sign-up"
        >
          <p>Sign Up</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
