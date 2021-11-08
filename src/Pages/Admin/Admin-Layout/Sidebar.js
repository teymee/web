import React from "react";

import { UserCircleIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { CreditCardIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/outline";
import { ChatIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="admin-sidebar">
      <div className="container ">
        <li className="option-active">
          <UserCircleIcon className="h-6 w-6  search-icon inline-block   " />
          My Account
        </li>

        <li>
          {" "}
          <ChartBarIcon className="h-6 w-6  search-icon inline-block   " />
          Dashboard
        </li>

        <li>
          {" "}
          <ShoppingCartIcon className="h-6 w-6  search-icon inline-block   " />
          Orders
        </li>

        <li>
          {" "}
          <CreditCardIcon className="h-6 w-6  search-icon inline-block   " />
          
          Transactions
        </li>

        <li>
          {" "}
          <ShoppingBagIcon className="h-6 w-6  search-icon inline-block   " />
          My Product
        </li>

        <li>
          {" "}
          <CalendarIcon className="h-6 w-6  search-icon inline-block   " />
         Promotions
        </li>

        <li>
          {" "}
          <ChatIcon className="h-6 w-6  search-icon inline-block   " />
          Reviews
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
