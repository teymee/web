import React from "react";
import AdminLayout from "../../Admin-Layout/Layout";

import "./Account.css";

function Account() {
  return (
    <AdminLayout>
      <div className="grid grid-cols-2 gap-6">
        <div className="account-details p-10">
          <div className="account-detail ">
            <div className="flex justify-between heed">
              <h4>Account Details</h4>
              <span>EDIT</span>
            </div>
            <div className="showcase">
              <h5>Myrabhor Uche </h5>
              <h6 className="pt-3">myrabhoruche@gmail.com</h6>
              <p className="pt-3"> ******************* </p>
            </div>

            <div className="account-edit">
              <form className="pt-10">
                <input defaultValue="Myrabhor Uche" />
                <input defaultValue="myrabhoruche@gmail.com" />
                <div className="flex justify-between">
                  <input defaultValue="*******************" type="password" />
                  <input defaultValue="*******************" type="password" />
                </div>
              </form>
            </div>
          </div>

          <div className="account-detail">
            <div className="flex justify-between heed">
              <h4>Delivery Address</h4>
              <span>EDIT</span>
            </div>

            <div className="delivery-address-showcase">
              <h5 className="pt-3">
                No 26 Independence Layout, behind Camp Nou Stadium, University
                Market road, Nsukka.
              </h5>
            </div>

            <div className="delivery-address-edit">
              <form>
                <textarea
                  className="form-textarea mt-5 block w-full"
                  rows="3"
                  defaultValue=" No 26 Independence Layout, behind Camp Nou Stadium, University
    Market road, Nsukka."
                ></textarea>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-red-200"> </div>
      </div>
    </AdminLayout>
  );
}

export default Account;
