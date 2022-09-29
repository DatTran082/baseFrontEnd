import axiosClient from "./axiosClient";
import axiosOCRClient from "./axiosOCRClient";
import constantConfig from '../constant/constantconfig';
import axios from "axios";


const commonApi = {
    GetTerritories: (params) => {
        const url = 'GetTerritories';
        return axiosClient.get(url, { params });
    },
    getBanks: (params) => {
        const url = 'GetBanks';
        return axiosClient.get(url, { params });
    },
    UpLoadImageOcr: (params) => {
        const url = 'UpLoadImageOcr';
        return axiosClient.post(url, { params });
    },
    getOCRBack: (formData) => {
        const url = 'back';
        return axiosOCRClient.post(url, formData);
    },
    getTermAndPolicy: () => {
        const url = constantConfig.PolicyUrl;
        return axios.get(url);
    },
    getAddressInformation: async (territories_id, params = { parent: -1 }) => {

        let provinceId = undefined;
        let provinceName = undefined;
        let districtName = undefined;
        let districtId = undefined;
        let wardName = undefined;

        const response = await axiosClient.get('GetTerritories', { params });

        if (response.Code == 0) {
            const territoriesdata = response.Data;

            const item1 = territoriesdata.find(item => territories_id == item.territories_id);
            districtId = item1.parent;
            wardName = item1.name


            if (districtId) {
                const item2 = territoriesdata.find(item => districtId == item.territories_id);
                provinceId = item2.parent;
                districtName = item2.name;

                if (provinceId) {
                    const item3 = territoriesdata.find(item => provinceId == item.territories_id);
                    provinceName = item3.name
                }
            }

        }


        return { provinceName, districtName, wardName }
    }

}


export default commonApi;