import React from 'react';
import { Link } from 'react-router-dom';

const PartsItems = ({ singleProduct }) => {
    const { _id, product, description, minimumQuantity, image, availableQuantity, price } = singleProduct;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product}</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="flex w-full">
                    <p className='text-left font-bold'>Min Quantity: {minimumQuantity} </p>
                    <p className='text-left font-bold'>Available: {availableQuantity} </p>
                </div>
                <p className="text-left font-bold w-full ">Price: {price} </p>
                <Link to={`/purchase/${_id}`} className="btn w-full btn-primary text-left">Purchase</Link>
            </div>
        </div>
    );
};

export default PartsItems;