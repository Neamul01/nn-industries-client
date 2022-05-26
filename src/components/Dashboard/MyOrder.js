import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { request } from '../utils/axios-utils';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, error, refetch } = useQuery('Orders', async () => await request({ url: `/orders/${user?.email}`, method: 'get' }));

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) {
        toast.error(error?.message)
    }

    let reverseOrder;
    if (orders.length) {
        reverseOrder = [...orders].reverse();
    }


    return (
        <div className='w-full flex flex-col gap-3'>
            <h2 className="text-2xl text-center text-secondary font-bold mb-4">Orders</h2>

            <div className='w-full flex flex-col gap-2 md:gap-6'>
                {
                    reverseOrder?.map(order => <MyOrderCard
                        key={order._id}
                        order={order}
                        refetch={refetch}
                    ></MyOrderCard>)
                }
            </div>

        </div>
    );
};

export default MyOrder;