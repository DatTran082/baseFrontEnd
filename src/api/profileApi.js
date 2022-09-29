import axiosClient from "./axiosClient";

const profileAPI = {
    UpdateProfile_Step1: (params) => {
        const url = 'UpdateProfile_Step1';
        return axiosClient.post(url, { params });
    },
    UpdateProfile_Step2: (params) => {
        const url = 'UpdateProfile_Step2';
        return axiosClient.post(url, { params });
    },
    UpdateProfile_Step3: (params) => {
        const url = 'UpdateProfile_Step3';
        return axiosClient.post(url, { params });
    },
    UpdateVideoPath: (params) => {
        const url = 'UpdateVideoPath';
        return axiosClient.post(url, { params });
    },
}

export default profileAPI;