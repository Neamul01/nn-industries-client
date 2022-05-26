import React, { useState } from 'react';
import ProductDeleteModal from './ProductDeleteModal';

const ManageProductCard = ({ index, singleProduct, refetch }) => {
    const { _id, product, price, minimumQuantity, image, description, availableQuantity } = singleProduct;
    const [productDelete, setProductDelete] = useState(null)


    return (
        <tr>
            <th>{index}</th>
            <td>{product}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td>
                <label
                    onClick={() => setProductDelete(singleProduct)}
                    htmlFor="delete-product-modal"
                    className="cursor-pointer font-bold text-white px-4 py-2 text-xs uppercase transition-colors duration-200 transform bg-red-500 rounded dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600">Delete
                </label>
            </td>
            {
                productDelete && <ProductDeleteModal
                    key={singleProduct._id}
                    singleProduct={singleProduct}
                    refetch={refetch}
                    setProductDelete={setProductDelete}
                ></ProductDeleteModal>
            }
        </tr>
    );
};

export default ManageProductCard;