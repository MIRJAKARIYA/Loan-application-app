import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Application = () => {

  return (
    <div className="App">
      <div className="tabs">
      <NavLink className={({ isActive }) => isActive ? 'tab tab-lg tab-lifted tab-active' : 'tab tab-lg tab-lifted'} to="personalDetails">Personal Details</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'tab tab-lg tab-lifted tab-active' : 'tab tab-lg tab-lifted'} to="businessDetails">Business Details</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'tab tab-lg tab-lifted tab-active' : 'tab tab-lg tab-lifted'} to="loanDetails">Loan Details</NavLink>

      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Application;
