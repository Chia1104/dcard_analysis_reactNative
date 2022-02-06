import {
    BEGIN_LOGIN_REQUEST,
    SUCCESS_LOGIN_REQUEST,
    FAIL_LOGIN_REQUEST,
    BEGIN_REGISTER_REQUEST,
    SUCCESS_REGISTER_REQUEST,
    FAIL_REGISTER_REQUEST,
    BEGIN_UPDATE_USERINFO,
    SUCCESS_UPDATE_USERINFO,
    FAIL_UPDATE_USERINFO,
    LOGOUT_REQUEST,
    REMEMBER_LOGIN, UNEXPAND_BOTTOM_SHEET,
} from "../../utils/constants";
import {
    login,
    register,
} from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginAction = (email, password) => async (dispatch) => {
    dispatch({ type: BEGIN_LOGIN_REQUEST });
    try {
        const res = await login(email, password);
        console.log("after login ...");
        console.log(res);
        if (res.message === "success") {
            dispatch({
                type: SUCCESS_LOGIN_REQUEST,
                payload: res,
            });
            AsyncStorage.setItem('userInfo', JSON.stringify(res));
            return res;
        } else {
            dispatch({
                type: FAIL_LOGIN_REQUEST,
                payload: `${res.message} error!`,
            });
            return null;
        }

    } catch (e) {
        console.log(e);
        dispatch({
            type: FAIL_LOGIN_REQUEST,
            payload: e,
        });
        console.log(e);
        return null;
    }
};

export const logout = (dispatch) => {
    dispatch({
        type: FAIL_LOGIN_REQUEST,
        payload: 'Unauthorised'
    });
    AsyncStorage.clear();
};
