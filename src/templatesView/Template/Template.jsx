import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Template.css";
import { Route, Routes } from "react-router-dom";
import DataNotFound from "../../utilcompoents/DataNotFound/DataNotFound";
import { Admin } from "../../pages/Admin/Admin";
import Register from "../../components/RegisterComponents/Register/Register";

export const Template = () => {
  return (
    <div className="template-card">
      <Sidebar>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/addvisitor" element={<DataNotFound />} />
          <Route path="/superadmin" element={<Admin />} />
        </Routes>
      </Sidebar>
    </div>
  );
};
