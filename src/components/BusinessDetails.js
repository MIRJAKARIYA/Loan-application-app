import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BusinessDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handleNextPageLoan = () =>{
        navigate('/loanDetails')
    }
    return (
        <div>
            <h1>Business Details</h1>
            <button className='btn btn-primary' onClick={handleNextPageLoan}>Next</button>
        </div>
    );
};

export default BusinessDetails;