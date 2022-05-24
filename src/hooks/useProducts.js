import { useQuery } from "react-query";
import { request } from "../components/utils/axios-utils";

const useProducts = () => {
    const { data: products, isLoading, error } = useQuery('products', async () => await request({ url: '/products', method: 'get' }));

    return { products, isLoading, error };
}
export default useProducts;