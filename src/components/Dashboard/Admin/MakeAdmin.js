import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import { request } from '../../utils/axios-utils';
import MakeAdminCard from './MakeAdminCard';

const MakeAdmin = () => {
    const { data: users, isLoading, error, refetch } = useQuery('users', async () => await request({ url: `/users`, method: 'get' }));

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) {
        toast.error(error?.message)
    }

    return (
        <div className='w-full'>
            <h2 className="text-2xl text-center text-secondary font-bold mb-4">Make Admin</h2>
            <div className="overflow-x-auto w-full p-2 md:p-6">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length &&
                            users?.map(user => <MakeAdminCard
                                key={user?.key}
                                user={user}
                                refetch={refetch}
                            ></MakeAdminCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;