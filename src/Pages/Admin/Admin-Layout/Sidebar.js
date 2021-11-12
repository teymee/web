import React from "react";

import { UserCircleIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { CreditCardIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/outline";
import { ChatIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="admin-sidebar">
      <div className="container ">
        <li className="">
          <NavLink to="/account" activeClassName="option-active">
            <UserCircleIcon className="h-6 w-6  search-icon inline-block   " />
            My Account
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard" exact activeClassName="option-active">
            {" "}
            <ChartBarIcon className="h-6 w-6  search-icon inline-block   " />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboar" exact activeClassName="option-active">
            {" "}
            <ShoppingCartIcon className="h-6 w-6  search-icon inline-block   " />
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboa" exact activeClassName="option-active">
            {" "}
            <CreditCardIcon className="h-6 w-6  search-icon inline-block   " />
            Transactions
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashb" exact activeClassName="option-active">
            {" "}
            <ShoppingBagIcon className="h-6 w-6  search-icon inline-block   " />
            My Product
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboar" exact activeClassName="option-active">
            {" "}
            <CalendarIcon className="h-6 w-6  search-icon inline-block   " />
            Promotions
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboarhd" exact activeClassName="option-active">
            {" "}
            <ChatIcon className="h-6 w-6  search-icon inline-block   " />
            Reviews
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
