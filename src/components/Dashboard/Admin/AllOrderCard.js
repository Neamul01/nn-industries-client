import React from 'react';
import { toast } from 'react-toastify';
import { request } from '../../utils/axios-utils';

const AllOrderCard = ({ order, index, refetch }) => {
    const { _id, name, address, quantity, price, image, paid, transactionId, status } = order;

    const handleStatus = () => {
        request({ url: `/orders/status/${_id}`, method: 'patch' })
            .then(res => {
                toast.success('Order Shipped Successfully...')
                refetch()
            })
    }

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{address}</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">transactionId: {transactionId}</span>
            </td>
            <td>{quantity}</td>
            <td>{
                paid
                    ? <span>Paid</span>
                    : <span>Unpaid</span>
            }</td>
            <th>
                {
                    status
                        ?
                        <button className="btn btn-success btn-xs">Shiped</button>
                        :
                        <button
                            onClick={handleStatus}
                            className="btn btn-secondary btn-xs">Pending</button>
                }
            </th>
        </tr>
    );
};

export default AllOrderCard;