import { useEffect, useState } from 'react';
import { request } from '../components/utils/axios-utils';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        request({ url: `/admin/${email}`, method: 'get' })
            .then(data => {
                console.log(data)
                setAdmin(data.admin);
                setAdminLoading(false)
            })
    }, [user])

    return [admin, adminLoading];
};

export default useAdmin;