import React from "react";
import Nav from "./Nav";
import "./layout.css";
import Sidebar from "./Sidebar";

function AdminLayout(props) {
  return (
    <div className="admin-layout">
      <Nav />
      <Sidebar />
      <div className="admin-content">{props.children}</div>
    </div>
  );
  
}

export default AdminLayout  