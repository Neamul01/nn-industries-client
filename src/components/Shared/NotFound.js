import React from 'react';
import img from '../../images/not-found.webp'

const NotFound = () => {
    return (
        <div className='h-screen w-full' style={{ backgroundImage: `url(${img})` }}>
            <h2 className="text-2xl text-center text-secondary mb-4">404 Not Found</h2>
        </div>
    );
};

export default NotFound;