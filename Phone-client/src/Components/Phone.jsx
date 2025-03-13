import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({phone}) => {
    return (
        <div className='border border-2'>
            <h1 className='text-xl'>{phone.name}</h1>
            <h1>{phone.price}</h1>
            <Link to={`/phones/${phone.id}`}>Details</Link>
        </div>
    );
};

export default Phone;