import React from "react";
import { useLocation } from "react-router-dom";

const LoanDetails = () => {
  const location = useLocation();
  console.log(location);
  const submitLoan = () => {};
  return (
    <div>
      <h1 className="text-center my-10 text-3xl font-bold">
        Enter your Personal Details
      </h1>
      <div className="border-2 border-red-700 max-w-[600px] mx-auto min-h-[200px] p-10">
        <form action="" className="">
          <div>
            <p className="mb-2 font-semibold">First Name:</p>
            <input
              type="text"
              placeholder="Enter First Name"
              name="fname"
              id=""
            />
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">Last Name:</p>
            <input
              type="text"
              name="lname"
              placeholder="Enter Last Name"
              id=""
            />
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">Age:</p>
            <input type="text" placeholder="Enter Age" name="age" id="" />
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">Gender</p>
            <div className="flex">
              <div className="flex">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="radio"
                />
                <span className="ml-1">Male</span>
              </div>
              <div className="flex ml-3">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="radio"
                />
                <span className="ml-1">Female</span>
              </div>
              <div className="flex ml-3">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="radio"
                />
                <span className="ml-1">Others</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2">Tell us about yourself:</p>
            <textarea name="" id="" cols="50" className="" rows="3"></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-700 text-white text-lg px-8 py-2 mt-4"
            onClick={submitLoan}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanDetails;
