import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationDone from "./ApplicationDone";

const LoanDetails = () => {
  const navigate = useNavigate();
  const [isApplied, setIsApplied] = useState(false);
  const email = localStorage.getItem("personEmail");
  const handlePrev = () => {
    navigate("/businessDetails");
  };

  const submitLoan = (e) => {
    e.preventDefault();
    const loanAmount = e.target.loanAmount.value;
    const interestRate = e.target.interestRate.value;
    const loanTenure = e.target.loanTenure.value;


    fetch(`https://sheltered-sierra-53369.herokuapp.com/loan?email=${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        loanAmount: loanAmount,
        interestRate: interestRate,
        loanTenure: loanTenure,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          localStorage.removeItem("personEmail");
          navigate("/applicationDone");
        }
      });
  };

  return (
    <>
      {isApplied ? (
        <ApplicationDone></ApplicationDone>
      ) : (
        <div>
          <h1 className="text-center my-10 text-3xl font-bold">
            Enter Your Loan Application Details
          </h1>
          <div className="max-w-[600px] mx-auto min-h-[200px]  p-10 shadow-xl bg-white rounded-lg">
            <form action="" className="" onSubmit={submitLoan}>
              <div>
                <p className="mb-2 font-semibold">Loan Amount:</p>
                <input
                  type="number"
                  placeholder="Enter Loan Amount"
                  name="loanAmount"
                  id=""
                  min="100000"
                  step="10000"
                  required
                />
              </div>
              <div className="mt-4">
                <p className="mb-2 font-semibold">Interest Rate:</p>
                <input
                  type="number"
                  name="interestRate"
                  placeholder="Enter Interest Rate"
                  id=""
                  min="5"
                  max="50"
                  required
                />
              </div>
              <div className="mt-4">
                <p className="mb-2 font-semibold">Loan Tenure:</p>
                <input
                  type="number"
                  min="10"
                  max="30"
                  placeholder="Enter Loan Tenure"
                  name="loanTenure"
                  id=""
                  required
                />
              </div>
              <div className="w-full flex justify-between mt-4">
                <button
                  onClick={handlePrev}
                  className="bg-green-700 text-white text-lg px-8 py-2 mt-4"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-red-700 text-white text-lg px-8 py-2 mt-4"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoanDetails;
