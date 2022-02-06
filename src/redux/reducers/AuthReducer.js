import {
    BEGIN_REGISTER_REQUEST,
    SUCCESS_REGISTER_REQUEST,
    FAIL_REGISTER_REQUEST,
    BEGIN_LOGIN_REQUEST,
    SUCCESS_LOGIN_REQUEST,
    FAIL_LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REMEMBER_LOGIN,
} from "../../utils/constants";

export const authReducer = (
    state = {
        loading: false,
        verified: null,
        userInfo: null,
        error: "",
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
            };
        case FAIL_REGISTER_REQUEST:
            return {
                ...state,
                loading: false,
                verified: false,
                userInfo: null,
                error: action.payload,
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
            };
        case FAIL_LOGIN_REQUEST:
            return {
                ...state,
                loading: false,
                verified: false,
                userInfo: null,
                error: action.payload,
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: false,
                verified: false,
                userInfo: null,
                error: "",
            };
        case REMEMBER_LOGIN:
            return {
                ...state,
                verified: action.payload,
            };
        default:
            return state;
    }
};
