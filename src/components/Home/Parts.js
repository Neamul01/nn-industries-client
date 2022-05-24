import React from 'react';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { useQuery } from "react-query";
import { request } from "../utils/axios-utils";
import PartsItems from '../Home/PartsItems'

const Parts = () => {
    const { data: products, isLoading, error } = useQuery('products', async () => await request({ url: '/products', method: 'get' }));
    const displayProducts = products?.slice(products.length - 6, products.length);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) {
        console.log(error)
    }
    return (
        <div className='my-6 md:my-12 lg:my-24'>
            <h2 className="text-3xl text-center text-primary mb-3 md:mb-8 font-bold">Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 '>
                {
                    displayProducts?.map(singleProduct => <PartsItems
                        key={singleProduct._id}
                        singleProduct={singleProduct}
                    ></PartsItems>)
                }
            </div>
        </div>
    );
};

export default Parts;