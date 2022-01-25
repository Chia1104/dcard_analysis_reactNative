import {
    SET_DCARD_DETAIL,
    BEGIN_DCARDS_REQUEST,
    SUCCESS_DCARDS_REQUEST,
    FAIL_DCARDS_REQUEST,
} from "../../utils/constants";

export const dcardsReducer = (
    state = {
        allDcards: [],
        screen: {
            dcards: [],
        },
        dcardDetail: {
            dcard: [],
        },
        requestDcards: {
            loading: false,
            error: null,
        },
    },
    action
) => {
    switch (action.type) {
        case SET_DCARD_DETAIL:
            return {
                ...state,
                dcardDetail: { ...state.dcardDetail, ...action.payload },
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
        default:
            return state;
    }
};
