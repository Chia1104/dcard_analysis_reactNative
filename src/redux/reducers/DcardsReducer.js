import {
    SET_DCARD_DETAIL,
    SET_DCARDS_LIST,
    BEGIN_DCARDS_REQUEST,
    SUCCESS_DCARDS_REQUEST,
    FAIL_DCARDS_REQUEST,
    BEGIN_DCARD_DETAIL_REQUEST,
    SUCCESS_DCARD_DETAIL_REQUEST,
    FAIL_DCARD_DETAIL_REQUEST,
} from "../../utils/constants";

export const dcardsReducer = (
    state = {
        allDcards: [],
        dcardDetail: [],
        requestDcards: {
            loading: false,
            error: null,
        },
        requestDcardDetail: {
            loading: false,
            error: null,
        },
    },
    action
) => {
    switch (action.type) {
        case SET_DCARDS_LIST:
            return {
                ...state,
                allDcards: action.payload,
            };
        case SET_DCARD_DETAIL:
            return {
                ...state,
                dcardDetail: action.payload,
            };
        case BEGIN_DCARDS_REQUEST:
            return {
                ...state,
                requestDcards: { ...state.requestDcards, loading: true },
            };
        case SUCCESS_DCARDS_REQUEST:
            return {
                ...state,
                requestDcards: { ...state.requestDcards, loading: false },
            };
        case FAIL_DCARDS_REQUEST:
            return {
                ...state,
                requestDcards: {
                    ...state.requestDcards,
                    loading: false,
                    error: action.payload,
                },
            };
        case BEGIN_DCARD_DETAIL_REQUEST:
            return {
                ...state,
                requestDcardDetail: { ...state.requestDcardDetail, loading: true },
            };
        case SUCCESS_DCARD_DETAIL_REQUEST:
            return {
                ...state,
                requestDcardDetail: { ...state.requestDcardDetail, loading: false },
            };
        case FAIL_DCARD_DETAIL_REQUEST:
            return {
                ...state,
                requestDcardDetail: {
                    ...state.requestDcardDetail,
                    loading: false,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};
