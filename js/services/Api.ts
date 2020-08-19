import axios from "axios";

const BASIC_AUTH = "Bearer 772f583d-a2ea-4458-a5b0-3556fdd5bb94";
let DS_WEBSERVICES;
switch (process.env.NODE_ENV) {
    case "development":
        DS_WEBSERVICES = "";
        break;
    case "production" :
        DS_WEBSERVICES = "";
        break;
}

export function apiGetUserData(data) {
    return api("client", 'post', {"Authorization": BASIC_AUTH, "Content-Type":"application/json"}, data, "json");
}

export function apiPayFull(data) {
    return api("payment", 'post', {"Authorization": BASIC_AUTH, "Content-Type":"application/json"}, data, "json");
}

export function apiGetDataAfterPay(data) {
    return api("payment/status", 'post', {"Authorization": BASIC_AUTH, "Content-Type":"application/json"}, data, "json");
}

export function apiGetProlongationData(data) {
    return api("/client/prolongation", 'post', {"Authorization": BASIC_AUTH, "Content-Type":"application/json"}, data, "json");
}

export function apiGetOffer(data) {
    return api("/client/offer", 'post', {"Authorization": BASIC_AUTH, "Content-Type":"application/json"}, data, "json");
}
export function apiDownloadOffer(data) {
    return api("/client/download-offer", 'post', {"Authorization": BASIC_AUTH, "Content-Type":"application/json"}, data, "blob");
}

export function apiSetStat(data) {
    return api("client/stat", 'post', {"Authorization": BASIC_AUTH, "Content-Type":"application/json"}, data, "json");
}

export function apiGetRregion() {
    return axios.post(DS_WEBSERVICES + "click2offer/region/search");
}

export function apiGetCity(data) {
    return axios.post(DS_WEBSERVICES + "click2offer/city/search", data);
}

export function apiGetDepartment(data) {
    return axios.post(DS_WEBSERVICES + "click2offer/department/search", data);
}


export function apiSentMessageToSlack(data) {
    return axios.post("",  JSON.stringify(data));
}

function api(url, method, headers = {},data = {},responseType) {

    let BASE_URL;
    switch (process.env.NODE_ENV) {
        case "development":
            BASE_URL = "";
            break;
        case "production" :
            BASE_URL = "";
            break;
    }

    return axios.request({
        url: BASE_URL + url,
        method: method,
        headers: headers,
        responseType: responseType,
        data: data

    }).then(response => {
        if (response.status === 200) {
            return response.data;
        } else {
            return;
        }
    });
}
