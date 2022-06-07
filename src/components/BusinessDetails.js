import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BusinessDetails = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem('personEmail');
  const businessDetailsSubmit = (e) => {
    e.preventDefault();
    const businessName = e.target.businessName.value;
    const gstNumber = e.target.gstNumber.value;
    const businessType = e.target.businessType.value;
    const address = e.target.address.value;

    console.log(businessName, gstNumber, businessName, address)
    
    fetch(`http://localhost:5000/business?email=${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        businessName: businessName,
        gstNumber: gstNumber,
        businessType: businessType,
        address: address
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          navigate('/loanDetails')
        }
      });
  };

  return (
    <div>
      <h1 className="text-center my-10 text-3xl font-bold">
        Enter your Business Details
      </h1>
      <div className="max-w-[600px] mx-auto min-h-[200px] p-10 shadow-xl bg-white rounded-lg">
        <form action="" className="" onSubmit={businessDetailsSubmit}>
          <div>
            <p className="mb-2 font-semibold">Business Name:</p>
            <input
              type="text"
              placeholder="Enter Business Name"
              name="businessName"
              id=""
              required
            />
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">GST no:</p>
            <input
              type="text"
              name="gstNumber"
              placeholder="Enter GST Number"
              id=""
              required
            />
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">Business Type:</p>
            <input type="text" placeholder="Enter Business Type" name="businessType" id="" required/>
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">Address:</p>
            <textarea name="address" id="" cols="50" className="" rows="3" required></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-700 text-white text-lg px-8 py-2 mt-4"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessDetails;
