import axiosClient from "./axiosClient";
import { zmp, useStore } from 'zmp-framework/react';



const filter = {
    CheckResponse: (response) => {
        if (response && response.data) {
            const code = response.data.Code;
            if (code == -404 || code == -102 || code == -103) {
                // -102 Tài khoản của bạn đã bị đăng nhập ở một nơi khác!
                console.log(`error: ${code}: ${response.data.Message}`);

                zmp.views.main.router.navigate('/login', {
                    animate: false
                });

            } else if (code == -66 || code == -99 || code == -999) {
                console.log(`error: ${code}: ${response.data.Message}`);
                zmp.views.main.router.navigate('/message', {
                    animate: false
                });
            } else {
                return response.data;
            }
        }
        return response;
    },
    RederectByStatus: (userProfile, currentLoan) => {

        if (currentLoan.status_id == -701) {
            zmp.views.main.router.navigate('/loan_registration', {
                animate: true,
                transition: 'zmp-dive',
            });
        } else {


            const navigate = {
                code: parseInt(userProfile.status_id),
                message: undefined,
                url: undefined,
            }

            switch (navigate.code) {
                case 6:
                    navigate.url = '/message'
                    navigate.message = 'Hồ sơ của bạn đã bị từ chối!';
                    break;
                case 7:
                    navigate.url = '/message'
                    navigate.message = 'Hồ sơ của bạn đã bị từ chối!';
                    break;
                case 2:
                    navigate.url = '/profile1'
                    break;
                case 31:
                    navigate.url = '/profile2'
                    break;
                case 32:
                    navigate.url = '/profile3'
                    break;
                case 33:
                    navigate.url = '/ekyc'
                    break;
                default:
                    navigate.url = '';
                    break;
            }

            if (navigate.url) {
                zmp.views.main.router.navigate(navigate.url, {
                    animate: true,
                    transition: 'zmp-dive',
                    props: navigate,
                });
            } else {
                navigate.code = currentLoan.status_id
                switch (navigate.code) {
                    case 7:
                        if (userProfile.status_id == 4 || userProfile.status_id == 5 || userProfile.status_id == 8 || userProfile.status_id == 20)
                            navigate.url = '/ekyc'
                        break;
                    case 9:
                        navigate.url = '/term_and_policies'
                        break;
                    case 10:
                        navigate.url = '/message'
                        navigate.message = 'Hồ sơ vay đang được xử lý!';
                        break;
                    case 11:
                        navigate.url = '/message'
                        navigate.message = 'Hồ sơ vay của bạn đã bị từ chối!';
                        break;
                    case 12:
                        navigate.url = '/message'
                        navigate.message = 'Hồ sơ vay đang được xử lý!';
                        break;
                    case 13:
                        navigate.url = '/loan_details'
                        navigate.message = 'Đã giải ngân!';
                        break;
                    case 14:
                        navigate.url = '/loan_details'
                        navigate.message = 'Nợ quá hạn';
                        break;
                    case 15:
                        navigate.url = '/message'
                        navigate.message = 'Đề nghị giải ngân đã bị từ chối!';
                        break;
                    case 16:
                        navigate.url = '/message'
                        navigate.message = 'Đề nghị giải ngân đã bị từ chối!';
                        break;
                    case 17:
                        navigate.message = 'Đề nghị giải ngân đã bị từ chối!';
                        break;
                    case 88:
                        navigate.message = 'đã tất toán';
                        break;
                    default:
                        navigate.url = '/message'
                        navigate.message = 'Trạng thái khoản vay không xác định';
                        break;
                }

                zmp.views.main.router.navigate(navigate.url, {
                    animate: true,
                    transition: 'zmp-dive',
                    props: navigate,
                });

            }
        }

    },
}

export default filter;


