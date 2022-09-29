import axiosClient from "./axiosClient";

const userAPI = {
    CheckMobile: (params) => {
        const url = 'CheckMobile';
        return axiosClient.post(url, { params });
    },
    GetJobs: (params) => {
        const url = 'GetJobs';
        return axiosClient.post(url, { params });
    },
    //Lấy thông tin người dùng
    ProfileGetInfo: (params) => {
        const url = 'ProfileGetInfo';
        return axiosClient.post(url, { params });
    },
    Login: (params) => {
        const url = 'Login';
        return axiosClient.post(url, { params });
    },
    Logout: (params) => {
        const url = 'Logout';
        return axiosClient.post(url, { params });
    },
    //Lấy danh sách thông báo
    MsgGetList: (params) => {
        const url = 'MsgGetList';
        return axiosClient.post(url, { params });
    },
    //lấy số lượng thông báo
    MsgCheckCount: (params) => {
        const url = 'MsgCheckCount';
        return axiosClient.post(url, { params });
    },
    //Lấy thông tin thông báo
    MsgGetDetail: (params) => {
        const url = 'MsgGetDetail';
        return axiosClient.post(url, { params });
    },
    //Gửi mã OTP tới số điện thoại quên mật khẩu
    ProfileForgotPwd: (params) => {
        const url = 'ProfileForgotPwd';
        return axiosClient.post(url, { params });
    },
    //Reset mật khẩu tài khoản - có verify OTP
    ProfileResetPwd: (params) => {
        const url = 'ProfileResetPwd';
        return axiosClient.post(url, { params });
    },
    //Thay đổi mật khẩu của tài khoản, truyền lên mật khẩu hiện tại và mật khẩu mới đã MD5
    ProfileChangePwd: (params) => {
        const url = 'ProfileChangePwd';
        return axiosClient.post(url, { params });
    },
}

export default userAPI;