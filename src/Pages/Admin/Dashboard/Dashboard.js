import React from "react";
import AdminLayout from "../Admin-Layout/Layout";
import "./Dashboard.css";


import DashboardFirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

function Dashboard() {
  return (
    <AdminLayout>
      <div className="admin-dashboard">
       <DashboardFirstSection/>
       <SecondSection/>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
