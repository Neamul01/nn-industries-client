import React from 'react';

const ManageProducts = () => {
    return (
        <div className='w-full'>
            <h2 className="text-2xl text-center text-secondary font-bold mb-4">Manage All Products</h2>

            <div class="overflow-x-auto p-2 md:p-6">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Products</th>
                            <th>Available</th>
                            <th>Sold</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>
                                <button className="btn btn-xs btn-accent">Cancel</button>
                            </td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            <td>
                                <button className="btn btn-xs btn-accent">Cancel</button>
                            </td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <td>
                                <button className="btn btn-xs btn-accent">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;