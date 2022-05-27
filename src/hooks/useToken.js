import { useEffect, useState } from 'react';
import { request } from '../components/utils/axios-utils'

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }

        if (email) {
            request({ url: `/users/${email}`, mathod: 'put', data: currentUser })
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })
        }
    }, [user])

    return [token];
};

export default useToken;