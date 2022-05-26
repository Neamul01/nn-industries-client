import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import { request } from '../../utils/axios-utils';
import AllOrderCard from './AllOrderCard';

const AllOrders = () => {
    const { data: orders, isLoading, error, refetch } = useQuery('allOrders', async () => await request({ url: `/orders`, method: 'get' }));

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) {
        toast.error(error?.message)
    }

    return (
        <div className='w-full'>
            <h2 className="text-2xl text-center text-secondary font-bold mb-4">All Orders</h2>
            <div className="overflow-x-auto w-full m-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.length &&
                            orders?.map((order, index) => <AllOrderCard
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></AllOrderCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllOrders;