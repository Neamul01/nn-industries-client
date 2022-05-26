import React from 'react';

const ManageProductCard = ({ index, singleProduct }) => {
    const { product, price, minimumQuantity, image, description, availableQuantity } = singleProduct;

    return (
        <tr>
            <th>{index}</th>
            <td>{product}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-xs btn-accent">Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductCard;