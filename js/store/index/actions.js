import {
    apiGetRregion,
    apiGetUserData,
    apiSentMessageToSlack,
    apiGetCity,
    apiGetDepartment, apiPayFull, apiGetDataAfterPay, apiGetOffer,
} from "../../services/Api";
import Router from "next/router";

export function setActionData(actionVar, actionData) {
    return {
        type: 'ACTIONS',
        payload: {
            var: actionVar,
            val: actionData
        }
    };
}

// export function itemsAreLoading(bool) {
//     return {
//         type: 'ITEMS_ARE_LOADING',
//         isLoading: bool
//     };
// }

const checkError = (e) => {
    return (dispatch) => {
        if (e.data.status === 404) {
            dispatch(setActionData("userNotFound", "Такой ссылки не существует"));
            Router.push("/notfound");
        }
    }
};

export const getUserData = (contract) => {
    return (dispatch) => {
        const authData = {
            client: contract,
        };
        apiGetUserData(authData)
            .then((r) => {
                    if (r.code === 404 || r.code === 0) {
                        Router.push("/notfound");
                        dispatch(setActionData("userNotFound", "Такой ссылки не существует"));
                    } else {
                        r["userContract"] = contract;
                        dispatch(setActionData("userData", r));
                        dispatch(setActionData("showPreloader", false));
                    }

                }
            )
            .catch((e) => {
                if (e.response) {
                    if (e.response.data.status === 404) {
                        dispatch(setActionData("userNotFound", "Пользователь не найден"));
                        Router.push("/notfound");
                    }
                }
            })
    }
};

export const getRegion = () => {
    return (dispatch) => {
        apiGetRregion()
            .then((r) => {
                    if (r.data) {
                        dispatch(setActionData("region", r.data));
                    }
                }
            )
            .catch((e) => {
                if (e.response) {
                    checkError(e.response);
                }
            })
    }
};


export const getCity = (id) => {
    return (dispatch) => {
        const data = {
            region: id
        };
        apiGetCity(data)
            .then((r) => {
                    if (r.data) {
                        dispatch(setActionData("city", r.data));
                        dispatch(setActionData("departmentAction", "ShowCitySearch"));
                    }
                }
            )
            .catch(() => {
            })
    }
};

export const getDepartment = (id) => {
    return (dispatch) => {
        const data = {
            city_id: id
        };
        apiGetDepartment(data)
            .then((r) => {
                    if (r.data) {
                        dispatch(setActionData("departments", r.data));
                        dispatch(setActionData("departmentAction", "ShowDepartmentSearch"));
                        dispatch(setActionData("selectedCity", r.data[0].name));
                    }
                }
            )
            .catch((e) => {
                if (e.response) {
                    checkError(e.response);
                }
            })
    }
};


export const sendMessage = () => {
    return () => {
        const data = {
            text: "c2offer front"
        };
        apiSentMessageToSlack(data)
            .then((r) => {
                    if (r.data) {
                        console.log(r.data);
                    }
                }
            )
    }
};

export const initFullPay = (sum, isFullPay = false) => {

    return (dispatch, getState) => {
        const {index} = getState();

        const {userData} = index;
        console.log(userData);
        let data = {};
        if (userData.prolongation) {
            if (isFullPay) {
                data = {
                    client: index.userData.userContract,
                    prolongation: 0
                }
            } else {
                data = {
                    client: index.userData.userContract,
                    prolongation: userData.prolongation
                }
            }
        } else {
            data = {
                amount: sum ? sum : index.userData.total,
                client: index.userData.userContract,
                prolongation: userData.prolongation
            };
        }

        apiPayFull(data)
            .then((r) => {
                    if (r) {
                        window.location.href = (r.url);
                    }
                }
            )
    }
};

export const getDataAfterPay = (extid, status, url = null) => {
    return (dispatch) => {
        let data;

        if(url === null) {
            data = {
                extid: extid,
                status: status
            };

        } else {
            data = {
                payrefno: extid,
                status: status,
                url: url
            };
        }
        apiGetDataAfterPay(data)
            .then((r) => {
                    if (r) {
                        dispatch(setActionData("userData", r));
                    }
                }
            )
    }
};

export const getOffer = () => {
    return (dispatch, getState) => {
        const {index} = getState();
        const {userData} = index;
        const data = {
            client: userData.userContract
        };
        apiGetOffer(data)
            .then((response) => {
                    if (response.status === 201) {
                        dispatch(setActionData("showPreloader", false));
                        dispatch(setActionData("userOffer", response.document));
                    }
                }
            )
    }
};
