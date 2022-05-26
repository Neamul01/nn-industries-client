import React from 'react';
import { request } from '../../utils/axios-utils';

const MakeAdminCard = ({ user }) => {
    const { _id, email } = user;

    const handleMakeAdmin = () => {
        request({ url: `/users/${_id}`, method: 'patch' })
            .then(res => {
                console.log(res)
            })
    }

    return (
        <tr>
            <th>
                1
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{email}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <th>
                <button
                    onClick={handleMakeAdmin}
                    className="btn btn-accent btn-sm">Make Admin</button>
            </th>
        </tr>
    );
};

export default MakeAdminCard;