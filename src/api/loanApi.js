import axiosClient from "./axiosClient";

const loanAPI = {
    RegisterLoan: (params) => {
        const url = 'RegisterLoan';
        return axiosClient.post(url, { params });
    },
    GetCurrentLoanLong: (params) => {
        const url = 'GetCurrentLoanLong';
        return axiosClient.post(url, { params });
    },
    //api cho phép yêu cầu 1 lệnh thanh toán
    RequestPayBack: (params) => {
        const url = 'RequestPayBack';
        return axiosClient.post(url, { params });
    },
    //Lấy danh sách lịch sử các đợt thanh toán của khoản vay
    GetPaybackInfo: (params) => {
        const url = 'GetPaybackInfo';
        return axiosClient.post(url, { params });
    },
    //Lấy thông tin tất cả khoản vay của tài khoản và lịch sử trả nợ
    GetAllLoan: (params) => {
        const url = 'GetAllLoan';
        return axiosClient.post(url, { params });
    },
}

export default loanAPI;