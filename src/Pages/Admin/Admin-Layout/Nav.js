import React from "react";
import { Link } from "react-router-dom";

import middlemenlOgo from "../../../assets/middlemenlogo.png";
import { SearchIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/outline";

function Nav() {
  return (
    <div className="admin-nav">
      <nav className="flex  justify-between">
        <Link to="/" className=" ">
          <div className="flex logo-name">
            <img
              src={middlemenlOgo}
              className="inline-block logo-icon"
              alt="Middlemen logo"
            />
            <span className="text-xl pt-1 ">MiddleMen</span>
          </div>
        </Link>

        <div className="flex admin-nav-mid">
          <h4 className="pt-1">Dashboard</h4>
          <div className="admin-search flex justify-between">
            <input placeholder="Search" />
            <SearchIcon className="h-4 w-4  search-icon inline-block admin-icon  " />
          </div>
        </div>

        <div className="flex justify-between admin-nav-last">
          <BellIcon className="h-5 w-5  search-icon inline-block admin-icon  " />
          <div  >
            <span className="admin-initials">MU</span>
          </div>
          <h4> Myrahboh Uche</h4>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
