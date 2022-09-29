import axios from 'axios';
import queryString from 'query-string';


const axiosClient = axios.create({
    baseURL: constantConfig.BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    store.dispatch('setLoading', true);
    // Handle token ...

    return config;
});

axiosClient.interceptors.response.use((response) => {

    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient; 