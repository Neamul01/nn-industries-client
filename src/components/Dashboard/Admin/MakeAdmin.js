import React from 'react';

const MakeAdmin = () => {
    return (
        <div className='w-full'>
            <h2 className="text-2xl text-center text-secondary font-bold mb-4">Make Admin</h2>
            <div class="overflow-x-auto w-full p-2 md:p-6">
                <table class="table w-full">
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
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>
                                1
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <th>
                                <button class="btn btn-accent btn-sm">Make Admin</button>
                            </th>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>
                                1
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Brice Swyre</div>
                                        <div class="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                                <br />
                                <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <th>
                                <button class="btn btn-accent btn-sm">Make Admin</button>
                            </th>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>
                                1
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Marjy Ferencz</div>
                                        <div class="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Rowe-Schoen
                                <br />
                                <span class="badge badge-ghost badge-sm">Office Assistant I</span>
                            </td>
                            <th>
                                <button class="btn btn-accent btn-sm">Make Admin</button>
                            </th>
                        </tr>
                        {/* <!-- row 4 --> */}
                        <tr>
                            <th>
                                1
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Yancy Tear</div>
                                        <div class="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Wyman-Ledner
                                <br />
                                <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                            </td>
                            <th>
                                <button class="btn btn-accent btn-sm">Make Admin</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;