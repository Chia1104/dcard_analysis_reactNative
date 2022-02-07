import {
    BEGIN_REGISTER_REQUEST,
    SUCCESS_REGISTER_REQUEST,
    FAIL_REGISTER_REQUEST,
    BEGIN_LOGIN_REQUEST,
    SUCCESS_LOGIN_REQUEST,
    FAIL_LOGIN_REQUEST,
    LOGOUT_REQUEST,
    CLOSE_LOGIN_ALERT,
} from "../../utils/constants";

export const authReducer = (
    state = {
        loading: false,
        verified: null,
        userInfo: null,
        error: "",
        status: null,
    },
    action
) => {
    switch (action.type) {
        case BEGIN_REGISTER_REQUEST:
            return { ...state, loading: true };
        case SUCCESS_REGISTER_REQUEST:
            return {
                ...state,
                loading: false,
                verified: true,
                userInfo: action.payload,
                error: "",
                status: 200,
            };
        case FAIL_REGISTER_REQUEST:
            return {
                ...state,
                loading: false,
                verified: false,
                userInfo: null,
                error: action.payload,
                status: 401,
            };
        case BEGIN_LOGIN_REQUEST:
            return { ...state, loading: true };
        case SUCCESS_LOGIN_REQUEST:
            return {
                ...state,
                loading: false,
                verified: true,
                userInfo: action.payload,
                error: "",
                status: 200,
            };
        case FAIL_LOGIN_REQUEST:
            return {
                ...state,
                loading: false,
                verified: false,
                userInfo: null,
                error: action.payload,
                status: 401,
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: false,
                verified: false,
                userInfo: null,
                error: "",
            };
        case CLOSE_LOGIN_ALERT:
            return {
                status: null,
            };
        default:
            return state;
    }
};
