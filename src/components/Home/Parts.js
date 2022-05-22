import React from 'react';

const Parts = () => {
    return (
        <div className='my-6 md:my-12 lg:my-24'>
            <h2 className="text-3xl text-center text-primary mb-3 md:mb-8 font-bold">Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 '>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex w-full">
                            <p className='text-left font-bold'>Min Quantity: </p>
                            <p className='text-left font-bold'>Available:</p>
                        </div>
                        <p className="text-left font-bold w-full ">Price:</p>
                        <button className="btn w-full btn-primary text-left">Order</button>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex w-full">
                            <p className='text-left font-bold'>Min Quantity: </p>
                            <p className='text-left font-bold'>Available:</p>
                        </div>
                        <p className="text-left font-bold w-full ">Price:</p>
                        <button className="btn w-full btn-primary text-left">Order</button>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex w-full">
                            <p className='text-left font-bold'>Min Quantity: </p>
                            <p className='text-left font-bold'>Available:</p>
                        </div>
                        <p className="text-left font-bold w-full ">Price:</p>
                        <button className="btn w-full btn-primary text-left">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parts;