import {
    SET_DCARD_DETAIL,
    SET_DCARDS_LIST,
    SET_MORE_DCARDS_LIST,
    SET_SEARCH_DCARDS_LIST,
    SET_MORE_SEARCH_DCARDS_LIST,
    BEGIN_DCARDS_REQUEST,
    SUCCESS_DCARDS_REQUEST,
    FAIL_DCARDS_REQUEST,
    BEGIN_MORE_DCARDS_REQUEST,
    SUCCESS_MORE_DCARDS_REQUEST,
    FAIL_MORE_DCARDS_REQUEST,
    BEGIN_DCARD_DETAIL_REQUEST,
    SUCCESS_DCARD_DETAIL_REQUEST,
    FAIL_DCARD_DETAIL_REQUEST,
    BEGIN_SEARCH_DCARDS_REQUEST,
    SUCCESS_SEARCH_DCARDS_REQUEST,
    FAIL_SEARCH_DCARDS_REQUEST,
    BEGIN_MORE_SEARCH_DCARDS_REQUEST,
    SUCCESS_MORE_SEARCH_DCARDS_REQUEST,
    FAIL_MORE_SEARCH_DCARDS_REQUEST,
} from "../../utils/constants";

export const dcardsReducer = (
    state = {
        allDcards: [],
        moreDcards: [],
        dcardDetail: [],
        searchDcard: [],
        searchMoreDcard: [],
        requestDcards: {
            loading: false,
            error: null,
        },
        requestMoreDcards: {
            loading: false,
            error: null,
        },
        requestDcardDetail: {
            loading: false,
            error: null,
        },
        requestSearchDcard: {
            loading: false,
            error: null,
        },
        requestMoreSearchDcard: {
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
        case SET_MORE_DCARDS_LIST:
            return {
                ...state,
                moreDcards: action.payload,
            };
        case SET_SEARCH_DCARDS_LIST:
            return {
                ...state,
                searchDcard: action.payload,
            };
        case SET_MORE_SEARCH_DCARDS_LIST:
            return {
                ...state,
                searchMoreDcard: action.payload,
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
        case BEGIN_MORE_DCARDS_REQUEST:
            return {
                ...state,
                requestMoreDcards: { ...state.requestMoreDcards, loading: true },
            };
        case SUCCESS_MORE_DCARDS_REQUEST:
            return {
                ...state,
                requestMoreDcards: { ...state.requestMoreDcards, loading: false },
            };
        case FAIL_MORE_DCARDS_REQUEST:
            return {
                ...state,
                requestMoreDcards: {
                    ...state.requestMoreDcards,
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
        case BEGIN_SEARCH_DCARDS_REQUEST:
            return {
                ...state,
                requestSearchDcard: { ...state.requestSearchDcard, loading: true },
            };
        case SUCCESS_SEARCH_DCARDS_REQUEST:
            return {
                ...state,
                requestSearchDcard: { ...state.requestSearchDcard, loading: false },
            };
        case FAIL_SEARCH_DCARDS_REQUEST:
            return {
                ...state,
                requestSearchDcard: {
                    ...state.requestSearchDcard,
                    loading: false,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};
