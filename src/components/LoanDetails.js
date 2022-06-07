import React from 'react';
import { useLocation } from 'react-router-dom';

const LoanDetails = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>Loan Details</h1>
        </div>
    );
};

export default LoanDetails;