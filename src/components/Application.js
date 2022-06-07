import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Application = () => {

  const location = useLocation();

  return (
    <div className="h-screen" data-theme="light">
      <div className="tabs flex justify-center">
        <span className={location.pathname==='/'?'tab tab-lg tab-lifted tab-active':'tab tab-lg tab-lifted'}>Personal Details</span>
        <span className={location.pathname.includes('/businessDetails')?'tab tab-lg tab-lifted tab-active':'tab tab-lg tab-lifted'}>Business Details</span>
        <span className={location.pathname.includes('/loanDetails')?'tab tab-lg tab-lifted tab-active':'tab tab-lg tab-lifted'}>Loan Details</span>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Application;
