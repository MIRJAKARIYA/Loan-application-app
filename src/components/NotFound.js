import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1 className='my-10 text-3xl text-center text-red-700'>404 NOT FOUND ☹</h1>
            <button onClick={()=>navigate('/')} className='btn btn-primary block mx-auto'>Back to Application</button>
        </div>
    );
};

export default NotFound;