import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PersonalDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handleNextPage = () =>{
        navigate('/businessDetails')
    }
    return (
        <div>
            <h1>Personal Details</h1>
            <button className='btn btn-primary' onClick={handleNextPage}>Next</button>
        </div>
    );
};

export default PersonalDetails;