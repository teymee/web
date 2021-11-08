import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../Admin-Layout/Layout";

import "./BeforeActivation.css";

function BeforeActivation() {
  return (
    <AdminLayout>
      <div className="activation-banner text-center">
        <div className="pl-10 pr-10 pt-20 pb-20">
          <p>Dear Myrabhor,</p>
          <p>
            Thank you for your interest in becoming our Logistics Partner. We
            are evaluating your application and shall get back to you at the
            earliest. 
          </p>
          <p>Thank you!</p>
        </div>
        <Link className="pb-10"> Check out Popular Products {">"}</Link>
      </div>
    </AdminLayout>
  );
}

export default BeforeActivation;
