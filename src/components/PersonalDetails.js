import React from "react";
import { useNavigate } from "react-router-dom";


const PersonalDetails = () => {
  const navigate = useNavigate();

  const personalDetailsSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.fname.value;
    const lastName = e.target.lname.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const about = e.target.about.value;
    const email = e.target.email.value;
    console.log(firstName, lastName, age, gender);
    localStorage.setItem('personEmail',email)


    fetch(`http://localhost:5000/info?email=${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        about: about,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          navigate('/businessDetails')
        }
      });
  };
  return (
    <div>
      <h1 className="text-center my-10 text-3xl font-bold">
        Enter your Personal Details
      </h1>
      <div className=" max-w-[600px] mx-auto min-h-[200px] p-10 shadow-xl bg-white rounded-lg">
        <form action="" className="" onSubmit={personalDetailsSubmit}>
          <div>
            <p className="mb-2 font-semibold">First Name:</p>
            <input
              type="text"
              placeholder="Enter First Name"
              name="fname"
              id=""
              required
            />
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">Last Name:</p>
            <input
              type="text"
              name="lname"
              placeholder="Enter Last Name"
              id=""
              required
            />
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">Email:</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              id=""
              required
            />
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">Age:</p>
            <input type="number" placeholder="Enter Age" name="age" id="" />
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
                  value="others"
                  className="radio"
                />
                <span className="ml-1">Other</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 font-semibold">Tell us about yourself:</p>
            <textarea
              name="about"
              id=""
              cols="50"
              className=""
              rows="3"
            ></textarea>
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

export default PersonalDetails;
