import axios from "axios";

const client = axios.create({ baseURL: "https://nn-industries-assignment-12.herokuapp.com" });

export const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    const onSuccess = response => response.data
    const onError = error => {
        //optinally catch error and added additonal logs here
        //here i can catch status codes and take action
        return error;
    }
    return client(options).then(onSuccess).catch(onError)
}