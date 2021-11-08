import React from 'react'

import './FirstSection.css'

import { CreditCardIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/outline";
import { ChatIcon } from "@heroicons/react/outline";
function DashboardFirstSection() {
      return (
            <div className="grid grid-cols-4 gap-4">
            <div className="dashboard-card card-one">
              <div className="card-details">
                <div>
                  {" "}
                  <CreditCardIcon className="h-6 w-6  " />
                </div>
                <div className="card-detail flex justify-between ">
                  <span className="detail-first">Total income</span>
                  <span className="amount">N300k</span>
                </div>
              </div>
            </div>
  
            <div className="dashboard-card card-two">
              <div className="card-details">
                <ShoppingCartIcon className="h-6 w-6  " />
                <div className="card-detail flex justify-between ">
                  <span className="detail-first">Total Orders</span>
                  <span className="amount">60</span>
                </div>
              </div>
            </div>
  
            <div className="dashboard-card card-three">
              <div className="card-details">
                <ChatIcon className="h-6 w-6  " />
                <div className="card-detail flex justify-between ">
                  <span className="detail-first">Total income</span>
                  <span className="amount">N300k</span>
                </div>
              </div>
            </div>
  
            <div className="dashboard-card card-four">
              <div className="card-details">
                <CalendarIcon className="h-6 w-6 " />
                <div className="card-detail flex justify-between ">
                  <span className="detail-first">Total income</span>
                  <span className="amount">N300k</span>
                </div>
              </div>
            </div>
          </div>
      )
}

export default DashboardFirstSection
