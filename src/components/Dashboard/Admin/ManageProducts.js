import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import { request } from '../../utils/axios-utils';
import ManageProductCard from './ManageProductCard';

const ManageProducts = () => {
    const { data: allProducts, isLoading, error, refetch } = useQuery('allProducts', async () => await request({ url: `/products`, method: 'get' }));

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) {
        toast.error(error?.message)
    }


    return (
        <div className='w-full'>
            <h2 className="text-2xl text-center text-secondary font-bold mb-4">Manage All Products</h2>

            <div className="overflow-x-auto p-2 md:p-6">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Products</th>
                            <th>Available</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            allProducts?.map((singleProduct, index) => <ManageProductCard
                                key={singleProduct._id}
                                index={index}
                                singleProduct={singleProduct}
                                refetch={refetch}
                            ></ManageProductCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;