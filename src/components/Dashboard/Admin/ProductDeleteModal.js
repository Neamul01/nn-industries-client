import React from 'react';
import { request } from '../../utils/axios-utils';

const ProductDeleteModal = ({ singleProduct, setProductDelete, refetch }) => {
    const { _id, product, price, minimumQuantity, image, description, availableQuantity } = singleProduct;

    const handleDeleteProduct = () => {
        request({ url: `/products/${_id}`, method: 'delete' })
            .then(res => {
                refetch()
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-product-modal" className="modal-toggle" />
            <label htmlFor="delete-product-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="delete-product-modal">
                    <label htmlFor="delete-product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-red-400 font-bold">Are you sure you want to delete "{product}" ?</h3>
                    <p className="py-4">If you delete it once you have to reorder it. So please decide first before press "ok" button.</p>
                    <div className='flex gap-4'>
                        <button
                            onClick={() => setProductDelete(null)}
                            htmlFor="delete-product-modal"
                            className="px-4 py-2 text-xs cursor-pointer font-bold text-white uppercase transition-colors duration-200 transform bg-red-500 rounded dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600">Ok
                        </button>
                        <button
                            onClick={handleDeleteProduct}
                            className="px-4 py-2 text-xs max-h-8 font-bold text-white uppercase transition-colors duration-200 transform bg-accent rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Delete
                        </button>
                    </div >
                </label >
            </label >
        </div >
    );
};

export default ProductDeleteModal;