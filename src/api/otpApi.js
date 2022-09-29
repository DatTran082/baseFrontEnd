import axiosClient from "./axiosClient";
const otpAPI = {
    //API Đăng ký tài khoản (theo mobile + mật khẩu) và OTP đã được gửi trước đó
    ConfirmAgree: (params) => {
        const url = 'ConfirmAgree';
        return axiosClient.post(url, { params });
    },
    //API Đăng ký tài khoản (theo mobile + mật khẩu) và OTP đã được gửi trước đó
    RegisterProfileVerifyOTP: (params) => {
        const url = 'RegisterProfileVerifyOTP';
        return axiosClient.post(url, { params });
    },
    //API cho thực hiện khi khách hàng ân nút ký hợp đồng
    SentOtp: (params) => {
        const url = 'SentOtp';
        return axiosClient.post(url, { params });
    },
    //API cho phép xác nhận OTP khi ký hợp đồng Nếu kết quả trả về thành công, coi như khách đã ký hợp đồng
    CheckOtp: (params) => {
        const url = 'CheckOtp';
        return axiosClient.post(url, { params });
    },
}

export default otpAPI;