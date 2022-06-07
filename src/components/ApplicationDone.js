import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationDone = () => {
    const navigate = useNavigate();
    const handleApplyAgain = () =>{
        navigate('/');
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold my-10 text-center text-green-700'>Application submitted successfully!!</h1>
            <button onClick={handleApplyAgain} className='btn btn-primary block mx-auto'>Apply again</button>
        </div>
    );
};

export default ApplicationDone;